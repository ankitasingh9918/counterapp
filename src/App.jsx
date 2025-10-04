<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx' ;
import About from './pages/About.jsx' ; 
import Services from './pages/Services.jsx' ;
import Blog from './pages/Blog.jsx' ;
import Contact from './pages/Contact.jsx' ;

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename="/React_pro_two/">
      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
=======
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [count, setCount] = useState(0);
  const min = 0;
  const max = 100;

  return (
    <div 
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ 
        height: "100vh",              // full viewport height
        backgroundColor: "rgb(1, 54, 98)", // dark blue background
        fontFamily:"-moz-initial"
      }}
    >
      {/* Heading */}
      <h1 className="text-white mb-3 text-center display-4 fw-bold">Welcome to My Counter App</h1>

      {/* Paragraph */}
      <p className="text-white mb-5 text-center fs-5" style={{ maxWidth: "500px" }}>
        This simple React Counter App lets you increase, decrease, or reset the number. 
        You can also set limits for minimum and maximum values.
      </p>

      {/* Counter Card */}
      <div className="card shadow p-4 text-center bg-white" style={{ width: "30rem", borderRadius: "15px" }}>
        <div className="card-body">
          <h3 className="card-title mb-3 display-5">Counter App</h3>
          <h2 className="mb-4">{count}</h2>
          <div className="d-flex justify-content-center gap-2">
            <button
              className="btn btn-success"
              onClick={() => setCount(count + 1)}
              disabled={count >= max}
            >
              Increase
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setCount(count - 1)}
              disabled={count <= min}
            >
              Decrease
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
          <p className="mt-3 text-muted">Min: {min}, Max: {max}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
>>>>>>> df975fa (Initial commit: React Counter App)
