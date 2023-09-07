import React from 'react'
import { Image } from 'antd';
const GalleryImagesComonent = (props) => {
  return (
   <>
     <div className='p-1'>
  <div className=" card Galley-Card-Slide flex-column justify-content-center" >
  <Image width={400} src={props.img} className="card-img-top" alt="..."/>

  </div>
</div>
   </>
  )
}

export default GalleryImagesComonent