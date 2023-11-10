import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showalert('converted to uppercase!','success');
  };
  const handleDownClick = () => {
    setText(text.toLowerCase());
    props.showalert('converted to lowercase!','success');
  };
  const handleClearClick = () => {
    setText("");
    props.showalert('cleared','success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopyClick = () => {
    const textArea = document.getElementById('myBox');
    textArea.select();
    document.execCommand('copy');
    navigator.clipboard.writeText(text)
    props.showalert('copied to clipboard','success');
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea className='form-control' value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#181A1B',color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" cols="30" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length}</p>
        <p>{text.length>0? text:"enter something to preview "}</p>
      </div>
    </>
  );
}
