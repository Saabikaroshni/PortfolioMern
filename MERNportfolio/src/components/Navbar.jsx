import React from 'react'
import '../css/Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <header>
      <nav>
      
        <li><Link to="/" className="link">Home</Link></li>
        <li><Link to="/about" className="link">About</Link></li>
        <li><Link to="/skills" className="link">Skills</Link></li>
        <li><Link to="/projects" className="link">Projects</Link></li>
        <li><Link to="/contact" className='link'>Contact</Link></li>
        <li><Link to="/Resume" className='link'>Resume</Link></li>
      </nav>
    </header>
  )
}

export default Navbar