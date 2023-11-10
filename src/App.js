// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm"; // Correct casing for the component
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode,setmode]=useState("light");
  const [alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#181A1B'
      showalert('dark mode has been enabled succesfully','success')
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white'
      showalert('light mode has been enabled succesfully','success')
    }
  }
  return (
  <>
  <BrowserRouter>
  <Navbar title="textUtils" aboutText="About TextUtils" mode={mode} togglemode={togglemode} />
    <Alert alert={alert} />
    {/* <div className="container">
      <TextForm  heading="Enter the text to analyse"  showalert={showalert} mode={mode} /> 
      
      <About mode={mode}/>
    
    </div>  */}
    <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showalert} mode={mode} />} />
    </Routes>
  </BrowserRouter>
    

  </>
  );
}

export default App;
