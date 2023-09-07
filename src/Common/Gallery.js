import React from 'react'
import Interier1 from '../Assets/Images/Interier1.jpg'
import {AiOutlineArrowRight} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
const Gallery = (props) => {
  return (
  <>
  <div className='p-1'>
  <div className=" card Galley-Card-Image flex-column justify-content-center" >
  <img src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body  Gallery-Body">
    <h5 className="card-title WashCard-title">{props.Title}</h5>
  <NavLink to='/Gallery' > <AiOutlineArrowRight className='wash-icon'/></NavLink>
  </div>
  </div>
</div>

  </>
  )
}

export default Gallery