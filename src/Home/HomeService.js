import React from 'react'
import HomeServiceCard from './HomeServiceCard'
import { BiSprayCan } from 'react-icons/bi';
import { GiShower } from 'react-icons/gi';
import { MdLocalCarWash } from 'react-icons/md';
import { RiCarWashingFill } from 'react-icons/ri';

const Cards = () => {
  return (
   
    <div className='row justify-content-around'>
      <HomeServiceCard icon={<BiSprayCan className='Service-Icon'
      />} title='Car wash 100% without detergents' />

      <HomeServiceCard icon={<GiShower className='Service-Icon'
      />} title='Rain/Snow protection programs' />

      <HomeServiceCard icon={<MdLocalCarWash className=' Service-Icon'
      />} title='Efficient modern wash machines' />

      <HomeServiceCard icon={<RiCarWashingFill className='Service-Icon'
      />} title='Efficient modern wash machines' />
  
  </div>
  )
}

export default Cards