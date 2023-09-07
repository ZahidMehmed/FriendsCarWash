import React from 'react'
import { FiPhoneCall } from 'react-icons/fi';
import { BiTime } from 'react-icons/bi';
import RegistrationForm from './RegistrationForm';
import Fade from 'react-reveal/Fade';
const Booking = () => {
  return (
    <>
      <div className='container-fluid Registration_Background'>
        <div className='row mt-5 pt-3 pb-3 justify-content-around'>
          <Fade duration={2000} bottom>
            <div className='col-lg-4 col-md-5 col-sm-10 col-10 pt-3 pb-2 '>
              <h5>Request A Call Back</h5>
              <p>We inspire clients to make their most
                challenging business decisions with confidence.
                Send us a message or Call Us.</p>
              <div className=' mt-5 d-flex align-items-center'>
                <FiPhoneCall className='Reg-icon' />
                <div className='ms-3 Registration-Contact'>
                  <h5>Cal For Book:</h5>
                  <h6>92345678990</h6>
                </div>
              </div>

              <div className='mt-3 d-flex align-items-center'>
                <BiTime className='Reg-icon' />
                <div className='ms-3 Registration-Contact'>
                  <h5>Working Hours</h5>
                  <h6>09:00-18:00 (Mon-Sat)</h6>
                </div>
              </div>
            </div>
          </Fade>

          <div className='col-lg-4 col-md-6 col-sm-10 col-10 pt-3 pb-2 '>
            <Fade duration={2000} bottom>
              <RegistrationForm />
            </Fade>
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking