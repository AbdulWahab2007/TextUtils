import React, { useState } from 'react'

export default function Textarea(props) {
    const [text, setText] = useState("")
    const ConvertToUp = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const ConvertToLow = () => {
        let newText = text.toLocaleLowerCase()
        setText(newText)
    }
    const ClearArea = () => {
        setText("")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className={`container text-${props.mode === "light" ? "dark" : "light"}`}>
                <h3>Type somethigs down here</h3>
                <div className="mb-3">
                    <textarea className={`form-control${props.mode === "Bluedark" ? "-bg-Bluedark" : props.mode === "Greendark" ? "-bg-Greendark" : props.mode === "dark" ? "-bg-dark" : "-bg-light"}`} id="exampleFormControlTextarea1" rows="6" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className={`btn btn-${props.mode === "dark" ? "secondary" : props.mode === "Bluedark" ? "primary" : props.mode === "Greendark" ? "success" : "dark"} mx-1 my-1`} onClick={ConvertToUp}>Convert to UpperCase</button>
                <button className={`btn btn-${props.mode === "dark" ? "secondary" : props.mode === "Bluedark" ? "primary" : props.mode === "Greendark" ? "success" : "dark"} mx-1 my-1`} onClick={ConvertToLow}>Convert to LowerCase</button>
                <button className={`btn btn-${props.mode === "dark" ? "secondary" : props.mode === "Bluedark" ? "primary" : props.mode === "Greendark" ? "success" : "dark"} mx-1 my-1`} onClick={ClearArea}>Clear All</button>
            </div>
            <div className={`container my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
                <h4>Characters: {text.split(" ").join("").length}</h4>
            </div>
        </>
    )
}