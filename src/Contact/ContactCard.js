import React from 'react'
import { useState } from 'react';
import { Fade } from 'react-reveal';

const ContactCard = (props) => {
  
  return (
    <>
      <Fade duration={2000} bottom>
        <div className='col-lg-3 col-md-3 col-sm-10 col-10 mt-3 '>
          <div className="card" >
            <div className="card-body">
              {props.icon}
              <h5 className="card-title">{props.Title}</h5>
              <p className="card-text">{props.Paragraph}</p>
            </div>
          </div>
        </div>
      </Fade>
    </>
  )
}

export default ContactCard