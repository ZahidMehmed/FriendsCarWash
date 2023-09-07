import React from 'react'
import '../Assets/CSS/Home.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
const SliderImages = (props) => {
  return (
    <>
      <div className="carousel-item active">
        <div className='container-fluid Home-Top'>
          <div className='row justify-content-start text-start '>
            <div className=' col-lg-8 col-md-12  mt-5 pt-5 '>
              <p className='pb-0 mb-0'>{props.Small_Title}</p>
              <h3>{props.Large_Title}</h3>
              <h6 className='pb-0 mb-0 '>{props.Caption}</h6>
            </div>
          </div>
        </div>
        <img src={props.img} alt="Chicago" className="d-block Slide-img " />
        </div>
    

    </>
  )
}
export default SliderImages