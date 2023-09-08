import React from 'react'
const WorkProcessComponent = (props) => {
    return (
        <>
                <div className='col-lg-4 col-md-4 col-sm-10 col-10 text-center flex-coloumn justify-content-center Work-Process' >
                    <div className='d-flex justify-content-center'><h6>{props.Small_Title}</h6> </div>
                    <h5>{props.Large_Title}</h5>
                    <p>{props.Paragraph}</p>
                </div>
        </>
    )
}

export default WorkProcessComponent