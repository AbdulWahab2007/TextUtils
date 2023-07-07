import React from 'react'

export default function About(props) {
    return (
        <>
            <div className={`card${props.mode === "dark" ? "-dark" : props.mode === "Greendark" ? "-Greendark" : props.mode === "Bluedark" ? "-Bluedark" : "-bg-light"}`}>
                <div className="card-body">
                    <h5 className="card-title">About Us</h5>
                    <hr />
                    <p className="card-text">Hello! <br /> This is TextUtils app.You can type your text here and perform different functions on it. <br />Enjoy XD</p>
                </div>
            </div>
        </>
    )
}
