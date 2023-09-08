import React from 'react'
import Contact_Information from '../Common/Contact_Information'
import Gallery from '../Common/Gallery'
import GallerySlider from '../Common/GallerySlider'
import Heading from '../Common/Heading'
import Top from '../Common/Top'
import HomeAbout from '../Home/HomeAbout'
import Quality from '../Services/Quality'
// import ServiceVeriety from '../Services/ServiceVeriety'
const Services = () => {

 React.useEffect(() => {
    document.title ="Service"

 }, [])
  return (
    
    <section>
    <Top Main Main_Title ="Services" Small_title ="Services" />
    <HomeAbout />
    <div className='container'>
      <div className='row pt-5 text-center justify-content-center' >
      <Heading Small_Title ="We Care Your Car" Large_Title ="Services We Provide"
       Paragraph = {`
       We have over 20 years of experience providing carwash & detail
        services for both Commercial and individuals without compromise quality.
       `}
      />
      </div>
    </div>
  <GallerySlider />
  <Contact_Information />
  <Quality />
    </section>

  )
}

export default Services