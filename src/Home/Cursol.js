import React from 'react'
import { NavLink } from 'react-router-dom';
// import Slider from "react-slick";
import CursolComponents from './CursolComponents';
import Carosel1 from '../Assets/Images/Carosel1.jpg'
import Carosel2 from '../Assets/Images/Carosel2.jpg'
import Carosel3 from '../Assets/Images/Carosel3.jpg'

const Cursol = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3
  // };
  return (
    <>
      <div className='container-fluid cursol-background'>
        <div className='row mt-5 pt-5 justify-content-around'>
          <div className='col-lg-7 col-md-6 col-sm-10 col-11 card-Heading'>
            <h5>We’re dedicated to providing best quality service</h5>
          </div>
          <div className='col-lg-2 col-md-5 col-sm-7 col-8'>
            <NavLink to='/Services'className="btn mt-2 mb-4 Know-Button" type="submit">Visit Services</NavLink>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-lg-11'>
            <div className='row justify-content-center'>
              <CursolComponents Title="Express Exterirer"    img ={Carosel1}
                item1="Seats Washing" item2="Vaccum Cleaning"
                item3="Spot-free Thermal Dry" item4="Rained Sheild" item5="Triple Foam" />
              <CursolComponents Title="Auto Dealing" img ={Carosel2}
                item1="Seats Washing" item2="Vaccum Cleaning"
                item3="Spot-free Thermal Dry" item4="Rained Sheild" item5="Triple Foam" />
              <CursolComponents Title="Full Service Wash " img ={Carosel3}
                item1="Seats Washing" item2="Vaccum Cleaning"
                item3="Spot-free Thermal Dry" item4="Rained Sheild" item5="Triple Foam" />
              <CursolComponents Title="Express Exterirer"    img ={Carosel1}
                item1="Seats Washing" item2="Vaccum Cleaning"
                item3="Spot-free Thermal Dry" item4="Rained Sheild" item5="Triple Foam" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cursol