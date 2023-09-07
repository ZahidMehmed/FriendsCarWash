import React from 'react'
import Top from '../Common/Top'
import DetailWashGallery from '../Gallery.js/DetailWashGallery'
import Zoom from 'react-reveal/Zoom';
const Gallery = () => {
  React.useEffect(() => {
    document.title ="Gallery"

 }, [])
  return (
   <>
    <Top Main_Title ="Gallery" Small_title ="Our Gallery" />
<Zoom duration ={2000}>
    <DetailWashGallery />
    </Zoom>
   </>
  )
}

export default Gallery