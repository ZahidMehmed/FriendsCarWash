import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Assets/CSS/Navbar.css'
import { AiOutlineWhatsApp } from 'react-icons/ai';
import Logo from '../Assets/Images/Logo.png'
const Navbar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg NavBar d-flex align-items-center">
    <div className="container-fluid">
      <NavLink className="navbar-brand " to="./Home"><img className='img-fluid' src={Logo} ></img></NavLink>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto  mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/"
            
            style={({ isActive }) => {
              return {
                color: isActive ? 'rgb(45, 183, 255)' : ''
              }
            }}
            >Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Services"
            style={({ isActive }) => {
              return {
                color: isActive ? 'rgb(45, 183, 255)' : ''
              }
            }}
            >Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About"
            
            style={({ isActive }) => {
              return {
                color: isActive ? 'rgb(45, 183, 255)' : ''
              }
            }}
            >About</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Booking"
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'rgb(45, 183, 255)' : ''
                  }
                }}
            >Booking</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Contact"
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'rgb(45, 183, 255)' : ''
                  }
                }}
            >Contact</NavLink>
          </li>

        </ul>
        <div className="row justify-content-center d-flex mb-0">
            <div className='col-lg-5 '>
            <div className='mt-3 d-flex justify-content-start '>
                <AiOutlineWhatsApp className='Contact-Icon me-1' />
                <p className=''>92303456789</p>
            </div>
            </div>
            <div className='col-lg-7 col-md-7'>
           <NavLink to ='/Booking'> <button className="btn appoint" to='/Booking' type="submit">Book Appointment</button></NavLink>
            </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar