import React from 'react'
import Heading from '../Common/Heading'
import Top from '../Common/Top'
import '../Assets/CSS/Contact.css'
import { useEffect } from 'react'
import ContactCard from '../Contact/ContactCard'
import { GoLocation } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { BiTime } from 'react-icons/bi';
import MessgeForm from '../Contact/MessgeForm'
const Contact = () => {
  useEffect(() => {
    document.title = "Contact"

  }, [])
  return (
    <>
      <Top Main_Title="Contact Us" Small_title="Contact Us" />
      <div className='container-fluid Contact-Background'>
        <div className='row pt-5 pb-5 text-center justify-content-center'>

          <Heading Small_Title="Get in Touch" Large_Title="See Contact Details"
            Paragraph={`
                    In malesuada, tortor eget sodales mollis,
                     mauris lectus hendrerit purus, porttitor 
                     finibus eros lorem eget mauris.
                    `}
          />
        </div>
      </div>
      <div className='container pt-5 pb-2 Contact-Card'>
        <div className='row justify-content-center'>
          <ContactCard
            icon={<GoLocation className="Contact-Icon" />}
            Title="Our Address"
            Paragraph={`
          Level 13, 2 Elizabeth St, Melbourne, Victoria, Australia
          `}
          />
          <ContactCard
            icon={<FiPhoneCall className="Contact-Icon" />}
            Title="Our Address"
            Paragraph={`
          (61) 630-792-9639 :: 9234567890
          `}
          />
          <ContactCard
            icon={<FiMail className="Contact-Icon" />}
            Title="Email"
            Paragraph={`
          abx@gmail.com :: abxc@gmail.com
          `}
          />
          <ContactCard
            icon={<BiTime className="Contact-Icon" />}
            Title="Hours"
            Paragraph={`
          We are Available:: Sat to Sub :: 8:00AM to 10:00PM
          `}
          />
        </div>
      </div>
      <MessgeForm />
     
    </>
  )
}

export default Contact