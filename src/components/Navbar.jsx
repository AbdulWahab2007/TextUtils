import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === "Bluedark" ? "dark" : props.mode === "Greendark" ? "dark" : props.mode === "dark" ? "dark" : "light"} bg-${props.mode === "Bluedark" ? "dark" : props.mode === "Greendark" ? "dark" : props.mode === "dark" ? "dark" : "light"}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
              {/*className="nav-link active"*/}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                DarkModes
              </Link>
              <ul className={`dropdown-menu bg-${props.mode === "Bluedark" ? "dark" : props.mode === "Greendark" ? "dark" : props.mode === "dark" ? "dark" : "light"}`}>
                <li>
                  <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                    <input className="form-check-input" onClick={props.ToggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" disabled={props.mode === "Bluedark" || props.mode === "Greendark"} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
                  </div>
                </li>
                <li>
                  <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                    <input className="form-check-input" onClick={props.ToggleModeBlue} type="checkbox" role="switch" id="flexSwitchCheckDefault" disabled={props.mode === "Greendark" || props.mode === "dark"} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable blue dark mode</label>
                  </div>
                </li>
                <li>
                  <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                    <input className="form-check-input" onClick={props.ToggleModeGreen} type="checkbox" role="switch" id="flexSwitchCheckDefault" disabled={props.mode === "dark" || props.mode === "Bluedark"} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable green dark mode</label>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
