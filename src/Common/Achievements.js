import React from 'react'
import AchievmentComponents from './AchievmentComponents'

const Achievements = () => {
  return (
<div className='container-fluid text-start Details'>
    <div className='row text-center justify-content-center pt-5 pb-5'>
     <AchievmentComponents  Years ="25" Title ="Years of Experience" />
     <AchievmentComponents  Years ="40k" Title ="Cars Washed" />
     <AchievmentComponents  Years ="12" Title ="Awards and Recogination" />
     <AchievmentComponents  Years ="25k" Title ="Happy Clients" />
    </div>
</div>
  )
}

export default Achievements