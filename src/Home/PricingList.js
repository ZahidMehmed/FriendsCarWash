import React from 'react'

const PricingList = (props) => {
  return (
   <>
      <li className="list-inline">
          {props.icon} <span>{props.ListTitel1}</span> </li> 
   </>
  )
}

export default PricingList