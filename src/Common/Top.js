import React from 'react'
import '../Assets/CSS/Common.css'
import { FaGreaterThan } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Top = (props) => {
  return (
    <>

         <div className='container-fluid linear-gradient-top'>
          <div className='row'></div>
        </div>
      <section className='Top-Background d-flex align-items-center' >
       
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <div className='col-lg-12 col-md-10 col-sm-12 col-12 '>
              <h5 className='Heading text-center'>
                {props.Main_Title}
              </h5>
              <div className='justify-content-center  d-flex align-items-center About-Links'>
                <NavLink className='nav-link mynavlink p-3 fs-4' to="./Home">Home </NavLink>  <FaGreaterThan className='Top-Background-Icon' />
                <NavLink className='nav-link mynavlink p-3 fs-4' to="">   {props.Small_title}</NavLink></div>
            </div>
          </div>
        </div>
      </section>


    </>

  )
}

export default Top