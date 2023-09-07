import React from 'react';
import { Carousel } from 'antd';
import Heading from './Heading';
import ReviewsComponent from './ReviewsComponent';
import profile1 from '../Assets/Images/Profile1.jpg'
import Profile2 from '../Assets/Images/Profile2.jpg'
import Profile3 from '../Assets/Images/Profile3.jpg'
import Fade from 'react-reveal/Fade';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Reviews = () => (
<>
<div className='container-fluid'>
  <div className='row pt-5 justify-content-center text-center'>
    <Heading Small_Title ="TESTIMONIALS" Large_Title ="What people think about our services" />
  </div>
</div>
<div className='container'>
<div className='row justify-content-center'>
  <Fade duration ={2000} bottom>
  <div className=' col-lg-8 col-md-10 col-sm-12 col-12 pt-3'>
  <Carousel className='' autoplay>
    <div style={contentStyle}>
     <ReviewsComponent Name ="Antthany Wills" post ="City Mayor" img ={profile1} />
    </div>
    <div>
    <ReviewsComponent Name ="Sara Khan" post ="Famous Actress" img ={Profile2} />
    </div>
    <div>
    <ReviewsComponent Name ="Eisa Khail" post ="Famous Businessman" img ={Profile3} />
    </div>   
  </Carousel>
  </div>
  </Fade>
  </div>
  </div>
  </>
);
export default Reviews;