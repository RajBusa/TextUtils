// Just Write rfc and click Enter
import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here ');    // Search React Hooks
    const handleUpclick = () =>{
        // console.log("Uppercase is clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Connvert to Uppercase", "success");
    }

    // const handleLowclick = () =>{
    //     // console.log("Uppercase is clicked " + text);
    //     let newText = text.toLowerCase();
    //     setText(newText);
    // }
    
    function handleLowclick(){
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Connvert to Lowercase", "success");
    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }


    // text = "Enter text here2"; // Wrong way to change the state
    // setText("Enter text here2");

    return (
        <>
            <div className = "container my-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'light' ? 'white' : 'gray',
                                               color: props.mode === 'light' ? 'Black' : 'White ' 
                }}></textarea>
                </div>
                <button className="btn btn-primary m-2" onClick={handleUpclick}>Convert to  Uppercase</button>
                <button className="btn btn-primary m-2" onClick={handleLowclick}>Convert to Lowercase</button>
            </div>  
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{text.length === 0 ? 0 : text.split(" ").length - 1} Words and {text.length} Characters</p>
                <p>{0.08*text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter something is the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
