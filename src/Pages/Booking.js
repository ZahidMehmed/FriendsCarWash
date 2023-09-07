import React from 'react'
import BookingForm from '../Booking/BookingForm'
import Heading from '../Common/Heading'
import Top from '../Common/Top'
import PricingPlan from '../Home/PricingPlan'
const Booking = () => {
  React.useEffect(() => {
    document.title ="Booking"

 }, [])
  return (
    <>
      <Top Main Main_Title="Book Here" Small_title="Book Your Car" />
      <PricingPlan />
      <div className='container'>
        <div className='row text-center mt-4 mb-4 pt-4 pb-4'>
          <Heading Large_Title="Our Location"
            Small_Title="We are Here"
            Paragraph="Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia"
          />
        </div>
      </div>
      <BookingForm />
    </>
  )
}

export default Booking