import React from 'react'
import Fade from 'react-reveal/Fade';
const WorkProcessComponent = (props) => {
    return (
        <>
            <Fade duration={2000} bottom>
                <div className='col-lg-4 col-md-4 col-sm-10 col-10 text-center flex-coloumn justify-content-center Work-Process' >
                    <div className='d-flex justify-content-center'><h6>{props.Small_Title}</h6> </div>
                    <h5>{props.Large_Title}</h5>
                    <p>{props.Paragraph}</p>
                </div>
            </Fade>
        </>
    )
}

export default WorkProcessComponent