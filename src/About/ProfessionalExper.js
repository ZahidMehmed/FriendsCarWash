import React from 'react'
import {BsFlag} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
const ProfessionalExper = () => {
  return (
    <div className='container'>
        <div className='row justify-content-around d-flex align-items-around mt-5'>
         
            <div className='col-lg-5 col-md-5 col-sm-10 col-10 d-flex align-items-center justify-content-start Qaulity'>
              <div className='Quality-Line d-flex justify-content-center align-items-center'>
                <BsFlag />
                <p className='ms-3 mt-2'>25 Years of Quality <br />
                  Services</p>
              </div>
            </div>

          <div className='col-lg-5 col-md-5 col-sm-10 col-10  Detail'>
            <h6>Who We Are</h6>
            <h5>Professional Washing and Cleaning of Your Car</h5>
            <p>Since opening Mister Car Wash in 1998, owners Petisars and
              Ken Mathovhave been the driving force. <br />  <br />  Mister wash made its debut
              in Islamabad, Pakistan in 1998, bringing with us a 40 year legacy in the
              convenience-store and car wash business from across seven states.
              Far from your typical gas-n-go, we built our brand by giving customers
              a sense of luxury in a place.
            </p>
                <NavLink to="/Contact" className="btn mt-4 mb-4 Know-Button" type="submit">Know More</NavLink >
            </div>
  
    </div>
   </div>
  )
}

export default ProfessionalExper