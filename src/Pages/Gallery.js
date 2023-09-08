import React from 'react'
import Top from '../Common/Top'
import DetailWashGallery from '../Gallery.js/DetailWashGallery'

const Gallery = () => {
  React.useEffect(() => {
    document.title ="Gallery"

 }, [])
  return (
   <>
    <Top Main_Title ="Gallery" Small_title ="Our Gallery" />
    <DetailWashGallery />
   </>
  )
}

export default Gallery