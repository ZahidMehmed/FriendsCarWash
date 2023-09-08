import React from 'react'
import Slider from "react-slick";
import Gallery from './Gallery';
import Interier2 from '../Assets/Images/Interier2.jpg'
import Interier3 from '../Assets/Images/Interier3.jpg'
import Interier4 from '../Assets/Images/Interier4.png'
import Interier5 from '../Assets/Images/Interier5.png'
const App = () => {
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
   <div className='container-fluid'>
    <div className='row pt-5 pb-2 justify-content-center Gallery-Heading'>
        <div className='col-lg-11 col-md-11 col-sm-11 col-11'>
            <h5>See Gallery to see our best works</h5>
        </div>
    </div>
    <div className='row justify-content-center'>
        <div className='col-lg-11 col-md-11 col-sm-11 col-11'>
    <Slider {...settings}>    
       <Gallery img = {Interier2} Title ="Complete Detail Wash" />
       <Gallery img = {Interier3} Title ="Dashboard Cleaning" />
       <Gallery img = {Interier4} Title ="Mashine Washing" />
       <Gallery img = {Interier5} Title ="RMW Minni Coper" />
    </Slider>
    </div>
    </div>
    </div>

)};
export default App;