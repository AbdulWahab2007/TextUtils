import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'
import About from './components/About'
import React from "react"
import {
  BrowserRouter as Router,
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light")

  const ToggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#090b0c"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }

  const ToggleModeBlue = () => {
    if (mode === "light") {
      setMode("Bluedark")
      document.body.style.backgroundColor = "#082132"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }

  const ToggleModeGreen = () => {
    if (mode === "light") {
      setMode("Greendark")
      document.body.style.backgroundColor = "#102308"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }


  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} ToggleMode={ToggleMode} ToggleModeBlue={ToggleModeBlue} ToggleModeGreen={ToggleModeGreen} />
        <div className="container mt-5">
          <Routes>
            <Route path="/about" element={<About mode={mode} />}>
            </Route>
            <Route path="/" element={<Textarea mode={mode} />}>
            </Route>
          </Routes>
          {/* <About /> */}

        </div>
      </BrowserRouter>
    </>
  )
}

export default App
