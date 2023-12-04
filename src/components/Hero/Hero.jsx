import React from 'react'
import Herobg from '../../asset/heroBg.jpg'
import './Hero.css'
import startIcon from '../../asset/Star 2.svg'
import Services from '../Services/Services'
import That from '../That/That'

const Hero = () => {


  return (
    <div className='grad__hero'>
      <div className='grad__hero-upper section__padding'>
        
        <div className='grad__hero-upper_up gradient__text'>
          <h4>
            2023
          </h4>
          <div className='grad__hero-upper_up-text '>
            <p>
              hi there, let's get started!
            </p>
          </div>
        </div>

        <div className='grad__hero-upper_down'>
         <That colo={'˜˜˜˜˜˜˜˜˜˜'} head={'Influence your audience'} paragraph={'boost your brand with our marketing expertise'}/>

          <div className='grad__hero-upper_down-right'>
            <div className='grad__hero-upper_down-right_image'>
              <img src={startIcon} alt='icon'/>
            </div>
           <div className='grad__hero-upper_down-right-text'>
              <p className='gradient__text'>
                We believe in the power of digital media to transform businesses and connect them with their audiences in meaningful ways.
              </p>
           </div>
          </div>

        </div>

      </div>
      <div className='grad__hero-down_service'>
        <Services text={'digital branding'}/>
        <Services text={'influence marketing'}/>
        <Services text={'content creation'}/>
        <Services text={'design'}/>
      </div>
    </div>
  )
}

export default Hero;
