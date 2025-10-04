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
