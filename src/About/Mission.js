import React from 'react'
import { GiThumbUp } from 'react-icons/gi';
import Profile2 from '../Assets/Images/Miss.jpg'
import '../Assets/CSS/About.css'
import { BsCheck2Circle } from 'react-icons/bs';
const Mission = () => {
    return (
        <>
                <div className='col-lg-8 col-md-10 col-sm-11 col-11 mt-4 Mission '>
                    <div>
                        <GiThumbUp className='Mission-icon' />
                        <h5>Our Mission, Vission And Values</h5>
                    </div>
                    <div className='d-sm-flex'>
                        <img src={Profile2} className="mission-image" alt='' />
                        <div>
                            <p className='ms-2'>
                                More like it was the first of its kind in the state, serving customers
                                looking for a high quality car wash. a reasonable price,
                                with friendly relationship.</p>
                            <ul class=" ms-2 text-start list-inline">
                                <li className="list-inline">
                                    <span><BsCheck2Circle class='card-list-icons me-2' /></span>
                                    <span className='fs-5' >Safety:</span> Use all senses and take action </li>
                                <li className="list-inline">
                                    <span><BsCheck2Circle class='card-list-icons me-2' /></span>
                                    <span className='fs-5' >Integirity:</span> Stay honest; do what’s right</li>
                                <li className="list-inline">
                                    <span><BsCheck2Circle class='card-list-icons me-2' /></span>
                                    <span className='fs-5'  >Fun:</span>  Connect, compete, and laugh</li>
                                <li className="list-inline">
                                    <span><BsCheck2Circle class='card-list-icons me-2' /></span>
                                    <span className='fs-5' >Team Work:</span> Help others before they ask any help to us. </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Mission