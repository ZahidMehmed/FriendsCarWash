import React from 'react'

const TeamMemberCard = (props) => {
  return (
  <>
  <div className=''>
  <div className='p-1'>
  <div className=" card Team-Card flex-column justify-content-center" >
  <img src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">{props.Name}</h5>
   <p>{props.Position}</p>
  </div>
  </div>
</div>
  </div>
  </>
  )
}

export default TeamMemberCard