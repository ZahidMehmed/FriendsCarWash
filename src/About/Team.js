import React from 'react'
import Heading from '../Common/Heading'
import Slider from "react-slick";
import TeamMemberCard from './TeamMemberCard';
import Member1 from '../Assets/Images/Member1.jpg'
import Member2 from '../Assets/Images/Member2.jpg'
import Member3 from '../Assets/Images/Member3.jpg'
import Member4 from '../Assets/Images/Member4.jpg'
import { Fade } from 'react-reveal';
const Team = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
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
            <div className='container'>
                <div className='row justify-content-center text-center pt-5 pb-5'>
                    <Heading Small_Title="Power Behind Us"
                        Large_Title="Meet the Team Members"
                        Paragraph=  {`
                        We know the most integral part of our 
                        success is our team members. Our goals
                        of delivering exceptional customer service are high.`}
                    />
                </div>
                <div className='row justify-content-center text-center'>
                  <Fade duration ={2000} bottom>
                    <div className='col-lg-12 col-8 col-sm-10'>
                <Slider {...settings}>    
                <TeamMemberCard 
                img ={Member1} Name ="Cevin Peter"
                Position ="Owner/Operetor"
                />
                  <TeamMemberCard 
                img ={Member2} Name ="Cevin Peter"
                Position ="Owner/Operetor"
                />
                  <TeamMemberCard 
                img ={Member3} Name ="Cevin Peter"
                Position ="Owner/Operetor"
                />
                  <TeamMemberCard 
                img ={Member4} Name ="Cevin Peter"
                Position ="Owner/Operetor"
                />
               </Slider>
               </div></Fade>
                </div>
            </div>
        </>
    )
}
export default Team