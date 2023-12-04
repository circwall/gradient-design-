import React from 'react'
import { ExpertiseText, That } from '../../components'
import './Expertise.css'


const Expertise = () => {
  return (
    <section className='section__padding grad__expertise'>
      <div className='grad__expertise-nav'>
          <div className='textCom-para'>
            <p className='gradient__text' >hi there, let's get started!</p>
          </div>
          
          <div className='grad__expertise-nav_sub'>
            <ExpertiseText text={"hi there, let's get started!"}/>
            <ExpertiseText text={"hi there, let's get started!"}/>
          </div>
      </div>

      <div className='grad__expertise-hero'>

        <That head={'Expertise and experience'} colo={'˜˜˜˜˜˜˜'} paragraph={''}/>

        <div className='grad__expertise-hero__text'>
          <p className='gradient__text'>
            We believe that building long-lasting relationships with our clients is 
            key to achieving success. We are passionate about what we do, and we are 
            committed to delivering exceptional results for every client we work with.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Expertise