import React from 'react'
import Slider from "react-slick";
import Gallery from '../Common/Gallery';
import Detail1 from '../Assets/Images/Detail1.png'
import Detail2 from '../Assets/Images/Detail2.png'
import Detail3 from '../Assets/Images/Detail3.png'
import Detail4 from '../Assets/Images/Detail4.png'
import Detail5 from '../Assets/Images/Detail5.png'
import Detail6 from '../Assets/Images/Detail6.png'
import GalleryImagesComonent from './GalleryImagesComonent';
const DetailWashGallery = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
   <>
    <div className='container-fluid'>
    <div className='row pt-5 pb-2 justify-content-center Gallery-Heading'>
        <div className='col-lg-11 col-md-11 col-sm-11 col-11'>
            <h5>See our detail car wash work</h5>

        </div>
    </div>
    <div className='row justify-content-center'>
        <div className='col-lg-11 col-md-11 col-sm-11 col-11'>
    <Slider {...settings}>    
       <GalleryImagesComonent img = {Detail1} Title ="Complete Detail Wash" />
       <GalleryImagesComonent img = {Detail2} Title ="Dashboard Cleaning" />
       <GalleryImagesComonent img = {Detail3} Title ="Mashine Washing" />
       <GalleryImagesComonent img = {Detail4} Title ="RMW Minni Coper" />
       <GalleryImagesComonent img = {Detail5} Title ="RMW Minni Coper" />
       <GalleryImagesComonent img = {Detail6} Title ="RMW Minni Coper" />
    </Slider>
    </div>
    </div>
    </div>
   </>
  )
}

export default DetailWashGallery