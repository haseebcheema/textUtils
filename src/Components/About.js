import React, { useState } from 'react'

export default function About(props) {
    const [myStyle, setStyle] = useState({
        color: "rgb(0, 0, 20)",
        backgroundColor: "white"
    });

    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const toggleMode = () => {
        if(myStyle.backgroundColor === 'white'){
            setStyle({
                color: "white",
                backgroundColor: "rgb(0, 0, 20)"
            })
            setBtnText("Enable Light Mode");
        }
        else{
            setStyle({
                color: "rgb(0, 0, 20)",
                backgroundColor: "white"
            })
            setBtnText("Enable Dark Mode");
        }
    }
    return (
        <>
        <div className="container my-4">
            <h1 style={{color: props.mode === "dark"? "white":"black"}}>About TextUtils</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                    <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What is TextUtils?
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Apart from counting words and characters, our textutils app can help you to convert your letters into uppercase as well as lowercase letters, and it also gives you the option to clear all the text, and you can also preview the text that you wroite. You can also copy and paste text from another program into the online editor above.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                    <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Calculate words and characters.
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        To check word and characters count, simply place your cursor into the text box above and start typing. You'll see the number of characters and words increase or decrease as you type, delete, and edit them.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                    <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Conversion into upper and lowercase.
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        To convert text, simply  your cursor into the text box above and click uppercase or lowercae button.
                    </div>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-primary my-3" onClick={toggleMode}>{btnText}</button>
        </div>
        </>
     )
}
