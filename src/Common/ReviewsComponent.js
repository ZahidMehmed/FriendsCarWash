import React from 'react'

const ReviewsComponent = (props) => {
    return (
        <>
            <div className=' d-sm-flex  Client-Reviews' >
                <div className='d-flex justify-content-center'>
                <img src={props.img} alt='profile1' className= 'mt-4 Review_Image' />
                </div>
              
                <div className='ms-4 mt-4 '>
                    <p>Behria is Pakistan’s largest and most successful business net working organisation.
                        We offer our members the opportunity to share ideas, contacts, and most importantly!</p>

                    <h5>{props.Name}</h5>
                    <h6>{props.post}</h6>
                </div>
            </div>
        </>
    )
}

export default ReviewsComponent