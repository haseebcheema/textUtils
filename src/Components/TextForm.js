import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    
    // event handlers
    const handleUppercase = () => {
        // console.log("Button clicked.");
        let newText = text.toUpperCase();
        setText(newText);
        if(newText !== ""){
            props.showAlert("Text has been converted into uppercase.","Success");
        }
    }
    const handleLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if(newText !== ""){
            props.showAlert("Text has been converted into lowercase.","Success");
        }
    }
    const handleOnChange = (event) => {
        // console.log("Change is handled.");
        setText(event.target.value);
    }
    const handleClear = () => {
        setText("");
        if(text !== ""){
            props.showAlert("Text has been cleared successfully.","Success");
        }
    }

    // returns length of words
    function wordsLength(){
        if(text.length === 0){
            return 0;
        }
        else{
            return text.split(" ").length;
        }
    }

    return (
        <>
        <div className="container my-3" style={{color: props.mode === "dark"? "white":"black"}}>
            <h1>{props.titleText}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="textBox" onChange={handleOnChange} value={text} placeholder="Type here..." rows="7"></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleUppercase}>Uppercase</button>
            <button type="button" className="btn btn-primary mx-3" onClick={handleLowercase}>Lowercase</button>
            <button type="button" className="btn btn-primary" onClick={handleClear}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === "dark"? "white":"black"}}>
            <h1>Text Summary</h1>
            <p>Your text contains {wordsLength()} words and {text.length} characters.</p>
            <h1>Text Preview</h1>
            <p>{text.length !== 0? text: "Write any text to preview."}</p>
        </div>
        </>
        )
    }
