import React from 'react'
import { BsCheck2Circle} from 'react-icons/bs';
import { RiCarWashingLine} from 'react-icons/ri';
import { Fade } from 'react-reveal';
import Cardimage from '../Assets/Images/Cardimage.jpg'
const CursolComponents = (props) => {
  return (
   <>
 
      <div className='col-xl-3 col-lg-5 col-md-5 col-sm-11 col-11 mt-5 mb-5'>
      <Fade duration={2000} bottom >
        <div className='Top-Icon ms-4 d-flex align-items-center justify-content-center'> <RiCarWashingLine  /></div>
        <div className="card carosel-card" >
        <img src ={props.img} alt ="" class="card-img-top " style={{height: '15rem'}}/>
       
           <div className='overlay' >
            <div className='ms-2'>
            <h5 className="card-title pt-3"> {props.Title} </h5>
            <div className='d-flex align-items-center card-item'> <BsCheck2Circle className='cursol-icon' />
              <p className="card-text"> {props.item1}</p></div>
            <div className='d-flex align-items-center card-item '> <BsCheck2Circle className='cursol-icon' />
              <p className="card-text">{props.item2} </p></div>
            <div className='d-flex align-items-center card-item '> <BsCheck2Circle className='cursol-icon' />
              <p className="card-text">{props.item3} </p></div>
            <div className='d-flex align-items-center card-item '> <BsCheck2Circle className='cursol-icon' />
              <p className="card-text">{props.item4} </p></div>
            <div className='d-flex align-items-center card-item '> <BsCheck2Circle className='cursol-icon' />
              <p className="card-text">{props.item5} </p></div>
              </div>
              </div>
        </div>
        </Fade>
      </div>
    
   </>
  )
}

export default CursolComponents