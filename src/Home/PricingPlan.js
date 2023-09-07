import React from 'react'
import PricingCard from './PricingCard'
import { BsCheck2Circle } from 'react-icons/bs';
import Heading from '../Common/Heading';
const PricingPlan = () => {
  const pricingData = [
    {
      Package_Type:"Express Wash",
      Package_Ammount:"24",
      Time_Duration:"Time Duration: 15min",
      iconList:<> <BsCheck2Circle class='card-list-icons' /> <span>Soft-Cloth Wash</span></>,
      iconList1:<><BsCheck2Circle class='card-list-icons' /> <span>Soft-Free Rinse</span></>,
      iconList2:<><BsCheck2Circle class='card-list-icons' /> <span>Spot-Free Thermal dry</span></>
    },
    {
      Package_Type:"Supreme Wash",
      Package_Ammount:"40",
      Time_Duration:"Time Duration: 30min",
      iconList:<> <BsCheck2Circle class='card-list-icons' /> <span>Soft-Cloth Wash</span></>,
      iconList1:<><BsCheck2Circle class='card-list-icons' /> <span>Soft-Free Rinse</span></>,
      iconList2:<><BsCheck2Circle class='card-list-icons' /> <span>Spot-Free Thermal dry</span></>,
      iconList3:<><BsCheck2Circle class='card-list-icons' /> <span>Rain Sheild</span></>,
      iconList4:<><BsCheck2Circle class='card-list-icons' /> <span>Triple Foam</span></>
    },
    {
      Package_Type:"Ultra Wash",
      Package_Ammount:"50",
      Time_Duration:"Time Duration: 45min",
      iconList:<> <BsCheck2Circle class='card-list-icons' /> <span>Soft-Cloth Wash</span></>,
      iconList1:<><BsCheck2Circle class='card-list-icons' /> <span>Soft-Free Rinse</span></>,
      iconList2:<><BsCheck2Circle class='card-list-icons' /> <span>Spot-Free Thermal dry</span></>,
      iconList3:<><BsCheck2Circle class='card-list-icons' /> <span>Rain Sheild</span></>,
      iconList4:<><BsCheck2Circle class='card-list-icons' /> <span>Triple Foam</span></>,
      iconList5:<><BsCheck2Circle class='card-list-icons' /> <span>Tire-Dressing</span></>
    },
    {
      Package_Type:"Ultimate Wash Was",
      Package_Ammount:"60",
      Time_Duration:"Time Duration: 70min",
      iconList:<> <BsCheck2Circle class='card-list-icons' /> <span>Soft-Cloth Wash</span></>,
      iconList1:<><BsCheck2Circle class='card-list-icons' /> <span>Soft-Free Rinse</span></>,
      iconList2:<><BsCheck2Circle class='card-list-icons' /> <span>Spot-Free Thermal dry</span></>,
      iconList3:<><BsCheck2Circle class='card-list-icons' /> <span>Rain Sheild</span></>,
      iconList4:<><BsCheck2Circle class='card-list-icons' /> <span>Triple Foam</span></>,
      iconList5:<><BsCheck2Circle class='card-list-icons' /> <span>Tire-Dressing</span></>,
      iconList6:<><BsCheck2Circle class='card-list-icons' /> <span>Vaccum and Wipe Console</span></>
    },

  ]
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center text-center pt-5 Prcing-plan'>
          <Heading Small_Title="Pricing Plan"
            Large_Title="Chose Our Package"
            Paragraph={`
    Unlimited Washes is for you! Wash whenever you want
    and enjoy the ease of auto monthly billing and you can cancel any time.
    `}
          />
        </div>
        <div className='row justify-content-center mb-5 pt-5'>
        {pricingData.map((pricing, index) => (
            <PricingCard
              key={index}
              Package_Type={pricing.Package_Type}
              Package_Ammount={pricing.Package_Ammount}
              Time_Duration={pricing.Time_Duration}
              iconList={pricing.iconList}
              iconList1={pricing.iconList1}
              iconList2={pricing.iconList2}
              iconList3={pricing.iconList3}
              iconList4={pricing.iconList4}
              iconList5={pricing.iconList5}
              iconList6={pricing.iconList6}
            />
          ))}
        </div>
      </div></>
  )
}

export default PricingPlan