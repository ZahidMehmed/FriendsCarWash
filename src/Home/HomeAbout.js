import React from 'react'
import {BsFlag} from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { NavLink } from 'react-router-dom';
const HomeAbout = () => {
  return (
   <>
   <div className='container'>
        <div className='row justify-content-around d-flex align-items-center mt-5'>
          <Fade duration={1000} bottom >
            <div className='col-lg-5 col-md-5 col-sm-10 col-10  Detail'>
              <h6>Who We Are</h6>
              <h5>Professional Auto washing and detailing services</h5>
              <p>Over the past 6 years we cleaned over 34,000 cars, saved over
                8.9 million liters of water from being used in car washing and employed 50 youth.
                Our legacy is in the youth that gained work and life skills, grew their confidence
                and have moved on to bigger.</p>
              <NavLink to="/Contact" > <button className="btn mt-2 mb-4 Know-Button" type="submit">Know More</button></NavLink>
            </div>
          </Fade>
          <Fade duration={1000} bottom >
            <div className='col-lg-4 col-md-4 col-sm-10 col-10 d-flex align-items-center justify-content-start Qaulity'>
              <Zoom duration={1000}>
                <div className='Quality-Line d-flex justify-content-center align-items-center'>
                  <BsFlag />
                  <p className='ms-3 mt-2'>25 Years of Quality <br />
                    Services</p>
                </div>
              </Zoom>
            </div>
          </Fade>
        </div>
      </div>
   </>
  )
}

export default HomeAbout