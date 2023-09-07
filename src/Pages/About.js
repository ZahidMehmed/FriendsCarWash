import React from 'react'
import Inspire from '../About/Inspire'
import Mission from '../About/Mission'
import ProfessionalExper from '../About/ProfessionalExper'
import Top from '../Common/Top'
import Achievements from '../Common/Achievements'
import Reviews from '../Common/Reviews'
import { useEffect } from 'react'
import Team from '../About/Team'
const About = () => {
  useEffect(() => {
     document.title ="About"

  }, [])
  return (
   <>
    <Top Main Main_Title ="About Us" Small_title ="About Us" />
    <ProfessionalExper />
    <div className='container'>
    <div className='row pt-5 pb-5 justify-content-center'>
       <Mission />
        <Inspire />
    </div>
  </div>
  <Achievements />
  <Team />
  <Reviews />
   </>
  )
}

export default About