import React from 'react'
import HomeSlider from '../Home/HomeSlider'
import HomeAbout from '../Home/HomeAbout'
import Cursol from '../Home/Cursol'
import Achievements from '../Common/Achievements'
import ExperienceDetail from '../Home/ExperienceDetail'
import PricingPlan from '../Home/PricingPlan'
import Contact_Information from '../Common/Contact_Information'
import WorkProcess from '../Home/WorkProcess'
import Reviews from '../Common/Reviews'
import Booking from '../Home/Booking'
import GallerySlider from '../Common/GallerySlider'

const Home = () => {
  React.useEffect(() => {
    document.title ="Home"

 }, [])
  return (
    <>
    {/* <HomeSlider />
    <HomeAbout /> */}
    {/* <Cursol />
    <Achievements />
    <ExperienceDetail />
    <PricingPlan />
    <Contact_Information />
    <WorkProcess />
    <GallerySlider />
    <Reviews />
    <Booking /> */}
   
    </>
    
  )
}

export default Home