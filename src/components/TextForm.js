import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", 'success');
  }

  const handleLowClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("coverted to lowercase", "success");
  }

  const handleClearClick = () =>{
    let newText ="";
    setText(newText);
    props.showAlert("text cleared", 'success');
  }

  const handleItalicClick = () =>{
    let newText = text.italics();
    setText(newText);
  }

  const handleCopy = () =>{
    let text = document.getElementById('textBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied to clipboard", 'success');
  }

  const HandleExtraSpace = () =>{
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("extra spaces removed", 'success');
  }



  const handleOnChange = (event)=>{
    setText(event.target.value);
  }


  const[text, setText] =useState("");
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" id="textBox" value={text} onChange={handleOnChange}  rows="8"></textarea>
    <button className='btn btn-primary mt-4 mx-2' onClick={handleUpClick}>convert to uppercase</button>
    <button className='btn btn-primary mt-4 mx-2'onClick={handleLowClick}>Convert to lowercase</button>
    <button className='btn btn-primary mt-4 mx-2' onClick={handleClearClick}>clear text</button>
    <button className="btn btn-primary mt-4 mx-2" onClick={handleItalicClick}>italic text</button>
    <button className='btn btn-primary mt-4 mx-2' onClick={handleCopy}>copy text</button>
    <button className='btn btn-primary mt-4 mx-2' onClick={HandleExtraSpace}>remove extra spaces</button>

    </div>
    </div>

    <div className="container">
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}minutes read</p>
      <h3>preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}

TextForm.defaultProps = {
  heading: "enter your text here" 
}
