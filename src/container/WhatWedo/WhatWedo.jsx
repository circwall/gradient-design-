import React from 'react'
import './WhatWedo.css'
import {stars,shine} from './index'
import { What } from '../../components'

const WhatWedo = () => {
  return (
    <div className='whatwedo'>
        <div className='section__padding grad__whatwedo'>
            
        <div className='grad__whatwedo-up'>
                <div className='grad__whatwedo-up_up'>
                    <div className='grad__whatwedo-up_up-text'>
                        <p className='gradient__text'>
                            London 2006
                        </p>
                    </div>
                    <div className='grad__whatwedo-up_up-text_para'>
                        <p>
                            Our creative design bureau is based in the heart of
                            London and specializes in digital branding, website design, and influence marketing. 
                        </p>

                        <p>We believe in the power of digital media to transform businesses 
                            and connect them with their audiences in meaningful ways.
                        </p>
                        
                    </div>
                </div>
     

                <div className='grad__whatwedo-up_mid'>
                    <div className='grad__whatwedo-up_mid-heading'>
                        <h2 className='gradient__text'>
                            We turn your digital dreams into reality
                        </h2>
                    </div>
                    <div className='grad__whatwedo-up_mid-colo'> 
                        <p className='gradient__text'>
                        ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜
                        </p>
                    </div>
                </div>

                <div className='grad__whatwedo-up_down'>
                    <div className='grad__whatwedo-up_down-image'>
                        <img src={stars} alt='image'/>
                    </div>
                    <div className='grad__whatwedo-up_down-text'>
                        <p>
                            Our team of experienced designers and marketing
                            professionals work closely with each client to 
                            understand their unique vision and develop tailored
                            solutions that align with their goals. 
                        </p>
                        <p>
                            From designing eye-catching logos and brand identities,
                            to building custom websites that engage and convert
                            visitors, to crafting effective influencer marketing 
                            campaigns, we are dedicated to helping our clients 
                            succeed in the digital space
                        </p>
                    </div>

                    <div className='grad__whatwedo-up_down-box'>
                        <div className='grad__whatwedo-up_down-box_image'>
                            <img src={shine} alt='rush'/>
                        </div>

                        <p className='gradient__text'>
                        since 2006
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <What/>
    </div>    
  )
}

export default WhatWedo
