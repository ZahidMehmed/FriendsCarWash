import React from 'react'
import { BsAwardFill } from 'react-icons/bs';
import Profile2 from '../Assets/Images/Inspire.jpg'
import '../Assets/CSS/About.css'
const Inspire = () => {
  return (
   <>

   <div className='col-lg-8 col-md-10 col-sm-11 col-11 mt-md-4 Mission '>
                <div>
                    <BsAwardFill className='Mission-icon' />
                    <h5>Inspiring People to Shine</h5>
                </div>
                <div className='d-sm-flex'>
                    <img src={Profile2} className="inspire-image" alt='' />
                    <div>
                        <p className='ms-3'>Everyday we strive to create the best possible
                         experience for both our new customers and our carwash members.
                         It’s not just part of our culture, it is our culture by listening
                          to you and applying the principles.</p>
                        <ul className=" ms-3 text-start list-inline">
                            <li className="list-inline">   
                                <h6 className='fs-5' >Our Purpose:</h6> Use all senses and take action </li>
                            <li className="list-inline">                               
                                <h6 className='fs-5' >Our Vision:</h6> Stay honest; do what’s right</li>
                            </ul>
                    </div>
                </div>
            </div>
   </>
  )
}

export default Inspire