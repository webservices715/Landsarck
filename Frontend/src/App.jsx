import React from 'react'
import {BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Footer from './components/Footer'
import Header from './components/Header'
import PopupForm from './components/PopupForm'
import Home from './pages/Home'
import Location from './components/Location'
import Blog from './components/blog'

function App() {
  return (
    <Router>
        <div className="flex flex-col min-h-screen">
        <Header />
        <PopupForm />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
           
          </Routes>
        </main>
        <Footer />
      <Location/>
      </div>

    </Router>
  )
}

export default App