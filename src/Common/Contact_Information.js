import React from 'react'
import { MdOutlineInfo} from 'react-icons/md';
const Contact_Information = () => {
  return (
      <div className='container-fluid '>
          <div className='row  pt-5 pb-5 justify-content-center'>
            <div className='col-lg-11 col-sm-10 col-10 col-10 call-information '>
                <div className='row  justify-content-center d-flex align-items-center pb-4 pt-4'>
                <div className='col-lg-2 text-center col-md-3 col-sm 3'>
                  <MdOutlineInfo className="info-icon" />
              </div>             
              <div className='col-lg-7 col-md-7 col-sm-10 col-10'>
                  <h5>Do you need help with your vehicle? </h5>
                  <p>Send us a message, or phone 1-800 234 567 between 09:00 and 18:00 Mon -Sat.</p>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-8 col-10'>
                  <button className="btn mt-2 Know-Button" type="submit">Request Call Back</button>
              </div>
              </div>
            </div>             
          </div>
      </div>
  )
}

export default Contact_Information