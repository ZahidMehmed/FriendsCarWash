import React from 'react'

const AchievmentComponents = (props) => {
  return (
    <div className='col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12 mt-3 justify-content-center '>
    <h6 className=' text-start Achievments-List' > <span className='Years-data'>{props.Years} </span> {props.Title}</h6>
     </div> 
  )
}

export default AchievmentComponents