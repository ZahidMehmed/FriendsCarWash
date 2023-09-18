import React from 'react'
import { AiFillFacebook } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import {FiSend } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Bottom = () => {
    return (
        <>
            <footer className="text-center mt-5  footer">
                <div className="container  pt-4">
                    <section className="mb-4 mt-4">
                        <Link
                            className="btn btn-link btn-floating btn-lg text-dark "
                            to="#!"
                            role="button"
                            data-mdb-ripple-color="dark" ><AiFillFacebook className='footer-icon' /></Link>
                        <Link
                            className="btn btn-link btn-floating btn-lg text-dark "
                            to="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><BsTwitter className="footer-icon" /></Link>
                        <Link
                            className="btn btn-link btn-floating btn-lg text-dark "
                            to="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        > <FaInstagram className="footer-icon" /> </Link>
                        <Link
                            className="btn btn-link btn-floating btn-lg text-dark "
                            to="#!"
                            role="button"
                        ><BsYoutube className="footer-icon" /></Link>
                    </section>
                </div>
                <div className='container'>
                    <div className='row justify-content-around footer-content'>
                        <div className='col-lg-3 col-md-4 col-sm-10 col-10 mt-5 '>
                            <h5>Our Address</h5>
                            <p  className='mt-3' >H9 13, 2 Elizabeth St,
                                Islamaabad, Block A, Street 3,
                                </p>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-10 col-10 mt-5  Hours-Time'>
                            <h5>Opening Hours</h5>
                            <div className='mt-1 mt-3'>
                            <p>Monday-Friday</p>
                            <p>09:00AM  6:00PM</p>
                            </div>
                            <div className='mt-2'>
                            <p>Saturday-Sunday</p>
                            <p>09:00AM  6:00PM</p>
                            </div>
                        </div>
                        <div className='col-lg-3  col-md-4 col-sm-10 col-10 mt-5  flex-column justify-content-center'>
                            <h5>News Letter</h5>
                            <p className='mt-3'>Join our newsletter for latest Updates</p>
                            <div className='Newsletter-Email d-flex align-items-center justify-content-around'>
                             <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email Address' aria-describedby="emailHelp"/>
                            <FiSend className ="send-icon" style={{color:'#fff'}} /> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-dark p-3" >
                    <Link className="text-dark" to=""></Link>
                </div>
            </footer>
        </>
    )
}

export default Bottom