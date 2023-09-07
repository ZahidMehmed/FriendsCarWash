import React from 'react'
import Slide1 from '../Assets/Images/Slide1.jpg'
import Slide2 from '../Assets/Images/Slide2.jpg'
import Slide3 from '../Assets/Images/Slide3.jpg'
import HomeServiceCard from './HomeServiceCard';
import SliderImages from './SliderImages'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Cards from './HomeService';
import { NavLink } from 'react-router-dom';

const HomeSlider = () => {
  return (
    <>
      <div className='container-fluid linear-gradient'>
      </div>
    
      {/* image Slider */}
      <div id="demo" className="carousel slide curosel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>
        
        <div className="carousel-inner">
        <div className="carousel-item active">
        <div className='container-fluid Home-Top'>
          <div className='row justify-content-start text-start '>
            <div className=' col-lg-8 col-md-12  mt-5 pt-5 '>
              <p className='pb-0 mb-0'>Quick and Easy</p>
              <h3>Keep Your Car Clean Always</h3>
              <h6 className='pb-0 mb-0 '>we are dedicated to provide best services at at your door step</h6>
            </div>
          </div>
        </div>
        <img src={Slide2}  alt="Chicago" className="d-block Slide-img " />
        </div>

        <div className="carousel-item">
        <div className='container-fluid Home-Top'>
          <div className='row justify-content-start text-start '>
            <div className=' col-lg-8 col-md-12  mt-5 pt-5 '>
              <p className='pb-0 mb-0'>Professional Auto Care</p>
              <h3>Save Your Car's Orignal Finish</h3>
              <h6 className='pb-0 mb-0 '>Making Orignal Shine Car Wash Detailing At Your Door Step</h6>
            </div>
          </div>
        </div>
        <img src={Slide1}  alt="Chicago" className="d-block Slide-img " />
        </div>

        
        <div className="carousel-item">
        <div className='container-fluid Home-Top'>
          <div className='row justify-content-start text-start '>
            <div className=' col-lg-8 col-md-12  mt-5 pt-5 '>
              <p className='pb-0 mb-0'>Care of Your Car</p>
              <h3>It's Time To Invite Us Shine Your Car</h3>
              <h6 className='pb-0 mb-0 '>Professional Car Wash Home Services Helps You Get Your Vehicle Clean At Your Own Home</h6>
            </div>
          </div>
        </div>
        <img src={Slide1}  alt="Chicago" className="d-block Slide-img " />
        </div>
          {/* <SliderImages img={Slide1} 
          Small_Title ="Quick and Easy"
          Large_Title ="Keep Your Car Clean Always"
          Caption ={`we are dedicated to provide best services at at your door step`}
          />
          <SliderImages img={Slide2}  
            Small_Title ="Professional Auto Care"
            Large_Title ="Save Your Car's Orignal Finish"
            Caption ={`Making Orignal Shine Car Wash Detailing At Your Door Step`}
          />
          <SliderImages img={Slide3} 
          Small_Title ="Car Your Car"
          Large_Title ="It's Time To Invite Us Shine Your Car"
          Caption ={`Professional Car Wash Home Services Helps You Get Your Vehicle Clean At Your Own Home`}
          /> */}
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className='container-fluid Home-Service'>
        <div className='container'>
          <Cards />
        </div>
        <div className='container pt-2 '>
          <div className='row justify-content-around d-flex mb-3 pb-5 align-items-center mt-5 Home-Service-Content'>
            <div className=' col-lg-6 col-md-6 col-sm-11 col-11  Text-Contact'>
              <Fade duration={2000} bottom><h6 className=''>Offering quick and efficient service to keep your car clean </h6>  </Fade>
             </div>
             <div className=' col-lg-5 col-md-6 col-sm-10 col-11  Text-Contact'>
              <Fade duration={2000} bottom>
                <div className='myContact d-flex align-items-center pt-2 justify-content-center'>
                  <h6>Call For Booking:</h6>
                  <h5>652-444-222</h5>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default HomeSlider