import React from 'react'
import '../Assets//CSS/Booking.css'
const BookingHeading = (props) => {
  return (
 <>
 <h5 className='Form-Heading'>{props.Title}</h5>
 <p className='Form-Paragraph'>{props.Statement}</p>
 </>
  )
}

export default BookingHeading