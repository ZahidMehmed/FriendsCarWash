import React from 'react'
import { useFormik } from 'formik'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';
import { BsCheck2 } from 'react-icons/bs';
import { Modal } from 'antd';
const MessgeForm = () => {

      const success= () => {
        Modal.success({
          content: 'Message sent Successfully',
        });
      };
      const warning= () => {
        Modal.warning({
          content: 'Please addd required fields',
        });
      };
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_pw1xrv8', 'template_4vrf2k2', form.current, 'E9cR7c4BxOcsKDoZa')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    const initialValues = {
        name: '',
        email: '',
        contact: '',
        subject: '',
        message: '',
    }
    const onSubmit = (values, submitProps) => {
        submitProps.resetForm()
    }

    const validate = values => {
        let errors = {}
        let filter = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!values.name) {
            errors.name = "Write your full name!"
        }
        if (!values.contact) {
            errors.contact = "Write your contact number!"
        }
        if (!values.email) {
            errors.email = "Write your email address!"
        }
        else if (!filter.test(values.email)) {
            errors.email = "invalid! Please enter your valid email!"
        }
        if (!values.subject) {
            errors.subject = "Add Your converstation subject!"
        }
        if (!values.message) {
            errors.message = "Write your message above!"
        }
        return errors;

    }



    const formik = useFormik({
        initialValues,
        validate,
        onSubmit,
     
    })

    const formSubmit = (e) => {
        e.preventDefault(e);
        formik.handleSubmit()
        if(!e.name || !e.contact || !e.email || !e.subject || !e.message){
            success()  
        }

        if(e.name || e.contact || e.email || e.subject || e.message){
            warning()
   }
   
        // sendEmail(e)
    }

    return (
        <>
            <div className='container Message pt-5'>
                <form
                    ref={form}
                    onSubmit={formSubmit}
                >
                    <div className='row justify-content-center Message'>
                        <h5 className='text-center'>Leave Your Message Here</h5>
                        <div className='col-lg-5 col-md-5  col-sm-11 col-11'>
                            <div className="mb-3 pt-3">
                                <label htmlFor="exampleInputName1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleInputName" name='name' aria-describedby="nameHelp"
                                    {...formik.getFieldProps('name')}
                                />
                                {
                                    formik.touched.name && formik.errors.name ?
                                        <p className='warning  pt-0 pb-0 mb-0'>{formik.errors.name}
                                        </p> : null
                                }
                            </div>
                            <div className="mb-3 pt-3">
                                <label htmlFor="exampleInputContact" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" id="exampleInputName" name='contact' aria-describedby="contactHelp"
                                    {...formik.getFieldProps('contact')}
                                />
                                {
                                    formik.touched.contact && formik.errors.contact ?
                                        <p className='warning  pt-0 pb-0 mb-0'>{formik.errors.contact}
                                        </p> : null
                                }
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-5  col-sm-11 col-11'>
                            <div className="mb-3 pt-3">
                                <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                                <input type="text" className="form-control" id="exampleInputName" name='email' aria-describedby="emalHelp"
                                    {...formik.getFieldProps('email')}
                                />
                                {
                                    formik.touched.email && formik.errors.email ?
                                        <p className='warning  pt-0 pb-0 mb-0'>{formik.errors.email}
                                        </p> : null
                                }
                            </div>
                            <div className="mb-3 pt-3">
                                <label htmlFor="exampleInputSubject" className="form-label">Subject</label>
                                <input type="text" className="form-control" id="exampleInputSubject" name='subject' aria-describedby="subjectHelp"
                                    {...formik.getFieldProps('subject')}
                                />
                                {
                                    formik.touched.subject && formik.errors.subject ?
                                        <p className='warning  pt-0 pb-0 mb-0'>{formik.errors.subject}
                                        </p> : null
                                }
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-lg-8'>
                                <div className="mb-3 pt-3">
                                    <label htmlFor="floatingTextarea">Write Your Message:</label>
                                    <textarea className="form-control mt-3" rows="5" cols="50" name="message" placeholder="Wirte Message Here" id="floatingTextarea"

                                        {...formik.getFieldProps('message')}
                                    >   </textarea>
                                    {
                                        formik.touched.message && formik.errors.message ?
                                            <p className='warning  pt-0 pb-0 mb-0'>{formik.errors.message}
                                            </p> : null
                                    }
                                    {/* <Modal title="Message"
                                        open={isModalOpen} onOk={handleOk}
                                        onCancel={handleCancel}>
                                        <div className='check-form d-flex'>
                                        <BsCheck2 className='check-icon' /> <p className='mt-2'>Message Sent Successfully</p>
                                        </div>
                                    </Modal> */}

                                </div>
                                <div className='row'>
                                    <div className='col-10'>
                                    </div>
                                    <button type="submit"  className="btn Msg-Button"
                                    >Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default MessgeForm