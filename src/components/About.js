import React from 'react';

export default function About(props) {
  return (
    <div className='container'>
      <p style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
        In the React code you provided, text is a state variable, and setText is a function used to update that state. In React, state is typically managed as a pair consisting of a state variable and a corresponding function to update that variable.

        So, in this case:

        text is the state variable. It represents the current value of the text content in the textarea.
        setText is a state updater function. It is used to modify the value of text. When you call setText(newText), it updates the text state with the new value newText.
        Both text and setText together make up the state management for the text variable. So, text holds the current state, and setText is used to change or set the state.
      </p>
    </div>
  );
}
