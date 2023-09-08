import React from 'react'
import BookingHeading from './BookingHeading'
import { useFormik } from 'formik'
import Heading from '../Common/Heading'
const BookingForm = () => {
  const initialValues = {
    vehicleSlection :'',
    packageSelection:'',
    extraSelection:'',
    date:'',
    time:'',
    fName:'',
    lName:'',
    email:'',
    contact:'',
    make:'',
    model:'',
    year:'',
    requirements:'',
  }
  const onSubmit = (values) => {
    console.log('')
  }
  const validate = values => {
    let errors = {}
    let filter = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!values.vehicleSlection){
      errors.vehicleSlection ="Plsease select vehicle type!"
    }
    if(!values.packageSelection){
      errors.packageSelection ="Please select your package!"
    }
    if(!values.date){
      errors.date ="Please add date!"
    }
    if(!values.time){
      errors.time ="Please add time you want to chose!"
    }
    if(!values.fName){
      errors.fName ="Write first name!"
    }
    if(!values.lName){
      errors.lName ="Write last name!"
    }
    if(!values.email){
      errors.email ="Write your email address!"
    }
    else if(!filter.test(values.email)){
      errors.email ="invalid! Please enter your valid email!"
  }
  if(!values.contact){
    errors.contact ="Please your active contact number!"
  }
  if(!values.make){
    errors.make ="Please write your car make!"
  }
  if(!values.model){
    errors.model ="Please write your car model!"
  }
  if(!values.year){
    errors.year ="Please write your car year!"
  }
  if(!values.requirements){
    errors.requirements ="Please add above your additional requirements!"
  }
    return errors;
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
})
  return (
    <>
      <div className='container-fluid Booking-Form '> 
      <div className='container pt-3 pb-3'>
        <form
        onSubmit={formik.handleSubmit} 
        className='my-Booking-Form p-4 m-4 pt-3'>
          <div className='row justify-content-center text-center pt-4 pb-4'>
            <Heading Large_Title ="Booking For Services" Small_Title ="Book Here" />
          </div>
          <div className='row'>
          <div className="mb-3 mt-3">
            <label htmlFor="sel1" className="form-label">
              <BookingHeading Title ="Vehicle Type" Statement ="Select your vehicle type" />
            </label>
            <select className="form-control form-select" id="sel1" name="vehicleSlection"
             {...formik.getFieldProps('vehicleSlection')}
            >
              <option>Select Vehicle Type</option>
              <option>Middle Size Car</option>
              <option>Small Size Car</option>
              <option>Full Size Car</option>
              <option>Pick Up Truck</option>
              <option>Minni Van</option>
            </select>
            {
                formik.touched.vehicleSlection && formik.errors.vehicleSlection?
                  <p className='warning  pt-0 pb-0 mb-0'>{formik.errors.vehicleSlection}
                  </p> : null
              }
            </div> 
            <div className="mb-3 mt-3">
            <label htmlFor="sel1" className="form-label">
            <BookingHeading Title ="Wash Package" Statement ="Which is the best wash package htmlFor your vehicle?" />
            </label>
            <select className=" form-control form-select" id="sel1" name="packageSelection"
                {...formik.getFieldProps('packageSelection')}
            >
              <option>Select Package</option>
              <option>Express Car Wash</option>
              <option>Supreme Car Wash</option>
              <option>Ultra Full Service</option>
              <option>Ultimate Shine</option>
            </select>
            {
                formik.touched.packageSelection && formik.errors.packageSelection?
                  <p className=' warning  pt-0 pb-0 mb-0'>{formik.errors.packageSelection}
                  </p> : null
              }
            </div>

            <div className="mb-3 mt-3">
            <label htmlFor="sel1" className="form-label">
            <BookingHeading Title ="Extra Services" Statement ="Choose the extra value added services htmlFor your vehicle" />
            </label>
            <select className=" form-control form-select" id="sel1" name="extraSelection"
             {...formik.getFieldProps('extraSelection')}
            >
              <option>Select from Extra Services</option>
              <option>Full Fivestar Detail Wash - $12.99</option>
              <option>Scratch Repair - $24.00</option>
              <option>Interior Fivestar Detail - $25.99</option>
              <option>Headlight Restoration - $18.59</option>
            </select>
            {
              formik.touched.extraSelection && formik.errors.extraSelection ?
              <p className=' warning  pt-0 pb-0 mb-0'>{formik.errors.extraSelection}
              </p> : null
              }
            </div>
          </div>
          <div className='row pt-5 '>
          <BookingHeading Title ="Appointment Details" Statement ="When would you like us to come?" />        
            <div className='col-lg-6 col-11'> 
              <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">Date:</label>
                <input type="date" className="form-control" id="date" name="date" 
                   {...formik.getFieldProps('date')}
                />
                  {
              formik.touched.date && formik.errors.date ?
              <p className=' warning  pt-0 pb-0 mb-0'>{formik.errors.date}
              </p> : null
              }
              </div>
            
            </div>
            <div className='col-lg-6  col-11'>
              <div className="mb-3 mt-3">
                <label htmlFor="time" className="form-label">Time</label>
                <input type="time" className="form-control" id="date" placeholder="Enter email" name="time" 
                 {...formik.getFieldProps('time')}
               />
                {
              formik.touched.time && formik.errors.time ?
              <p className='warning  pt-0 pb-0 mb-0'>{formik.errors.time}
              </p> : null
              }
              </div>
             
            </div>
          </div>
          <div className='row pt-5'>
          <BookingHeading Title ="Enter Your Details" Statement ="See Duration and Price Estimate here" />        
            <div className='col-lg-6 col-11'>
            <div className="mb-3 mt-3">   
                <input type="text" className="form-control" id="fName" placeholder='First Name'  name="fName" 
                   {...formik.getFieldProps('fName')}
                />
             {
              formik.touched.fName && formik.errors.fName ?
              <p className=' warning  pt-0 pb-0 mb-0'>{formik.errors.fName}
              </p> : null
              }
              </div>
            </div>
            <div className='col-lg-6 col-11'>
            <div className="mb-3 mt-3">
                <input type="text" className="form-control" id="lName" placeholder='Last Name'  name="lName"
                   {...formik.getFieldProps('lName')}
                />
                  {
              formik.touched.lName && formik.errors.lName ?
              <p className='warning  pt-0 pb-0 mb-0'>{formik.errors.lName}
              </p> : null
              }
              </div>
            </div>
          </div>
          <div className='row '>
            <div className='col-lg-6 col-11 '>
            <div className="mb-3 mt-3">
                <input type="email" className="form-control" id="email" placeholder='Email Address'  name="email"
                 {...formik.getFieldProps('email')}
                />
                   {
              formik.touched.email && formik.errors.email ?
              <p className=' warning  pt-0 pb-0 mb-0'>{formik.errors.email}
              </p> : null
              }
              </div>
            </div>
            <div className='col-lg-6 col-11'>
            <div className="mb-3 mt-3">
                <input type="text" className="form-control" id="contact" placeholder='Phone Number' name="contact"
                {...formik.getFieldProps('contact')}
                />
                {
              formik.touched.contact && formik.errors.contact ?
              <p className=' warning  pt-0 pb-0 mb-0'>{formik.errors.contact}
              </p> : null
              }
              </div>
            </div>
          </div>

          <div className='row '>
            <div className='col-lg-4 col-11'>
            <div className="mb-3 mt-3">
                <input type="text" className="form-control" id="make" placeholder='Make'   name="make" 
                   {...formik.getFieldProps('make')}
                />
                {
              formik.touched.make && formik.errors.make ?
              <p className=' warning  pt-0 pb-0 mb-0'>{formik.errors.make}
              </p> : null
              }
              </div>
            </div>
            <div className='col-lg-4 col-11'>
            <div className="mb-3 mt-3">
                <input type="text" className="form-control" id="model" placeholder='Model'  name="model" 
                    {...formik.getFieldProps('model')}
                    />
                    {
                  formik.touched.model && formik.errors.model ?
                  <p className='warning  pt-0 pb-0 mb-0'>{formik.errors.model}
                  </p> : null
                  }
              </div>
            </div>
            <div className='col-lg-4 col-11'>
               <div className="mb-3 mt-3">
                <input type="text" className="form-control" id="year" placeholder='Year'   name="year"  
                  {...formik.getFieldProps('year')}
                  />
                  {
                formik.touched.year && formik.errors.year ?
                <p className=' warning  pt-0 pb-0 mb-0'>{formik.errors.year}
                </p> : null
                }
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
          <div className="mb-3 pt-3">
              <textarea className="form-control mt-3" rows="5" cols="50" name='requirements' placeholder="Wirte Additional Requirements" id="floatingTextarea"
               {...formik.getFieldProps('requirements')}
              >

              </textarea>
         
                
                  {
                formik.touched.requirements && formik.errors.requirements ?
                <p className=' warning  pt-0 pb-0 mb-0'>{formik.errors.requirements}
                </p> : null
                }
            </div>
            <div className='col-lg-7 col-md-10 col-11'>
          <p className='Form-Paragraph'>Please note that the date and time you requested may not be available.
           We will contact you within 24 hours to confirm your actual appointment details.</p>
           <div className='row'>
           <button type="submit" className="btn Msg-Button ">Submit</button>
           </div>
          </div>
          
          </div>
        </form>
      </div>
      </div>
    </>
  )
}

export default BookingForm