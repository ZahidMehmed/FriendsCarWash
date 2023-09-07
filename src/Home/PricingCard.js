import React from 'react'
import { Fade } from 'react-reveal';
import { NavLink } from 'react-router-dom';
const PricingCard = (props) => {
  return (
    <Fade duration ={2000} bottom >
    <div className='col-xl-3 col-lg-5 col-md-5 col-sm-11 col-11 mt-3'>
      <div className="card text-center" >
        <div className="card-body Pricing-Card">
          <h6 className="card-title">{props.Package_Type}</h6>
          <h5 className="card-title"><sup>$</sup> {props.Package_Ammount} <sup>99</sup></h5>
          <p>{props.Time_Duration}</p>
          <hr />
          <ul class="  text-start list-inline">
          <li className="list-inline"> {props.iconList}</li> 
           <li className="list-inline">{props.iconList1}</li>
           <li className="list-inline">{props.iconList2} </li>
           <li className="list-inline">{props.iconList3}</li>
            <li className="list-inline">{props.iconList4}</li>
            <li className="list-inline">{props.iconList5}</li>     
            <li className="list-inline">{props.iconList6}</li>
         </ul>
         <NavLink to='/booking'> <button className="btn mt-4 Know-Button" type="submit">Chose Package</button></NavLink>
        </div>
      </div>
    </div>
    </Fade>
  )
}

export default PricingCard