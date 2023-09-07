import React from 'react'
import { BiSprayCan } from 'react-icons/bi';
import Fade from 'react-reveal/Flip';
const HomeServiceCard = (props) => {
  return (
    <Fade duration ={2000} bottom >
      <div className='col-lg-3 col-md-5 col-sm-12 col-10 mt-3 d-flex justify-content-start '>
        <div class="card p-2 d-flex text-start justify-content-start">
          <div className='ms-2'>{props.icon}</div>
          <div class="card-body">
           <p>{props.title}</p>
          </div>
      </div>
      </div>
    </Fade>
  )
}

export default HomeServiceCard
