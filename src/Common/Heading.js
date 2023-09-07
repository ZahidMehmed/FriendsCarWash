import React from 'react'
import '../Assets/CSS/Home.css'
import Fade from 'react-reveal/Fade';
const Heading = (props) => {
  return (
   <>
   <Fade duration={2000} bottom>
     <div className='col-lg-6 col-md-8 col-sm-10 col-10 Prcing-plan'>
        <h6>{props.Small_Title}</h6>
        <h5> {props.Large_Title} </h5>
        <p>{props.Paragraph}</p>
        </div>
        </Fade>
   </>
  )
}

export default Heading