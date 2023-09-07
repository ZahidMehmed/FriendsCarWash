import React from 'react'
import Heading from '../Common/Heading'
import { MdOutlineHighQuality } from 'react-icons/md';
import { GiFluffyTrefoil } from 'react-icons/gi';
import { FaUserAstronaut } from 'react-icons/fa';
import { GiSwipeCard } from 'react-icons/gi';
import { BsTools } from 'react-icons/bs';
import { AiFillCar } from 'react-icons/ai';

const Quality = () => {
  return (
    <>
      <div className='container'>
        <div className='row  pt-5 mt-2 pb-3 justify-content-center text-center'>
          <Heading Small_Title='Why Chose Us'
            Large_Title="What advantages will you get when washing your car?"
          />
        </div>

        {/* <div className='row justify-content-center'>
          <QualityComonents
            Large_Title="High Quality"
            icon={<MdOutlineHighQuality className='Quality-Icon' />}

            Paragraph={`
      Quality, service, and satisfaction are everything to us!
      `}
          />
          <QualityComonents
            Large_Title="Organic Products"
            icon={<GiFluffyTrefoil className='Quality-Icon' />}
            Paragraph={`
      We use organic material to maintain purity instead artificial!
      `}
          />
          <QualityComonents
            Large_Title="Talented Workers"
            icon={<FaUserAstronaut className='Quality-Icon' />}
            Paragraph={`
      We hired very professional workers, well known to their Jobs!
      `}
          />
        </div> */}

        {/* <div className='row justify-content-center'>
          <QualityComonents
            Large_Title="Talented Workers"
            icon={<GiSwipeCard className='Quality-Icon' />}
            Paragraph={`
      We hired very professional workers, well known to their Jobs!
      `}
          />


          <QualityComonents
            Large_Title="Modern Equipments"
            icon={<BsTools className='Quality-Icon' />}
            Paragraph={`
      We use moder tools, rather than custom tools!
      `}
          />

          <QualityComonents
            Large_Title="Best Result"
            icon={<AiFillCar className='Quality-Icon' />}
            Paragraph={`
      You fill find satisfied after seeing the our services!
      `}
          />
        </div> */}
      </div>
    </>
  )
}

export default Quality