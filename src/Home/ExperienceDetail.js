import React from 'react'
import Carwash from '../Assets/Images/Carwash2.png'
import { AiOutlineCheck } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const ExperienceDetail = (props) => {
    return (
        <>
            <div className='container-fluid experience-Detail'>
                <div className='row d-flex align-items-center pt-5 pb-5 justify-content-center'>
                    <Fade duration ={2000} bottom>
                    <div className='col-lg-5 col-md-6 col-sm-10 col-11'>
                        <img src={Carwash} alt="car" className='img-fluid car-wash25' />
                    </div>
                    </Fade>
                    <Fade duration ={2000} bottom>
                    <div className='col-lg-5 col-md-6 col-sm-11 col-11'>
                        <h5>25 Years in Car Wash Industry</h5>
                        <p className='ms-0 mb-4'>Carwash made its debut in America in 1998,
                            bringing with us a 40 year legacy in the convenience-store and car wash.</p>

                        <div className='d-flex mt-2  ' ><AiOutlineCheck className='Check-icon' /> <p>Platinum exterior wash</p></div>
                        <div className='d-flex mt-2 ' ><AiOutlineCheck className='Check-icon' /> <p>Door pannels / Seats </p></div>
                        <div className='d-flex mt-2 ' ><AiOutlineCheck className='Check-icon' /> <p>Hard surfaces cleaned & disinfected</p></div>
                        <div className='d-flex mt-2 ' ><AiOutlineCheck className='Check-icon' /> <p>Rubber mats washed</p></div>
                        <NavLink to ="/Services" className="btn mt-4 Know-Button" type="submit">Know More</NavLink >
                    </div>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default ExperienceDetail