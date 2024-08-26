import React from 'react'

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div id="left">
        <img src="https://selfmade.ninja/assets/brand/logo-text.svg" alt="no logo displayed" />
        <button className="btn1">Courses</button>
      </div>
      <div id="right">
        <button className="btn2">About Us</button>
        <button className="btn2">Contact</button>
        <button className="btn2">Certification Verification</button>
        <button className="btn2">Sign in</button>

      </div>
    </div>
  )
}

export default Navbar
