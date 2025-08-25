import React,{useState} from 'react'

export default function TextForm(props) {
    const handle=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handle1=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase!","success");
    }
    const handletoTitle=()=>{
        let texter=text.replace(/\b\w/g, char => char.toUpperCase());
        setText(texter);
        props.showAlert("Converted to titlecase!","success");
    }
    const hanldeonChange=(event)=>{
        // console.log("Event was changed");
        setText(event.target.value);
    }
    const[text,setText]=useState("");
    return (
        <>
        <div className="container">
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={hanldeonChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handle}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handle1}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handletoTitle}>Convert to Titlecase</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
