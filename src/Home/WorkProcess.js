import React from 'react'
import Heading from '../Common/Heading'
import WorkProcessComponent from './WorkProcessComponent'
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';
const WorkProcess = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center text-center pt-5 pb-5'>
        <Heading
          Small_Title="How it Works"
          Large_Title="Our Work Process"
          Paragraph={`
      Book online. We’ll provide you with a trusted,
       excellent services most accurate and fair-price service Estimate.
      `}
        />
      </div>
      <div className='row justify-content-around'>
        <WorkProcessComponent Small_Title="1" Large_Title=" Make An Appointment"
          Paragraph={`
          Book online & leave your car with us.
           We’ll provide you with a trusted, excellent services.
      `}
        />

        <WorkProcessComponent Small_Title="2" Large_Title="Get Amazing Services"
          Paragraph={`
          Every cleaner is friendly and reliable.
           They’ve been background checked & rated 5-stars
      `}
        />

        <WorkProcessComponent Small_Title="3" Large_Title="Pay Online & Get your car"
          Paragraph={`
          Pay online.
           We’ll provide you with a trusted, excellent services with door delivery option.
      `}
        />
      </div>

      <div className='row justify-content-center'>
        <div className='col-lg-3 col-md-4 col-sm-10 col-10 mb-3 d-flex justify-content-center '>
          <Fade duration={2000} bottom>
        <NavLink className="btn mt-2 Know-Button1" to='/Booking' type="submit">Book An Appointment</NavLink>

        </Fade>
        </div>
         </div>
    </div>
  )
}

export default WorkProcess