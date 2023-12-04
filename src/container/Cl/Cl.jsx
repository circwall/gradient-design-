import React from 'react'
import './Cl.css'
import { Cltable } from '../../components'

const Cl = () => {
  return (
    <div className='grad__client section__padding'>
        <div className='grad__client-step1'>
            <div className='grad__client-step1__date'>
                <p className='gradient__text' >Since 2006</p>
            </div>
            
            <div className='grad__client-step1_colo-div'> 
                <div className='grad__client-step1_colo'>
                    <p className='gradient__text'>
                        ˜˜˜˜˜˜˜˜˜˜˜
                    </p>
                </div>
                <div className='grad__client-step1_heading'>
                    <h2 className='gradient__text'>
                        Help our clients achive their business
                        objectives
                    </h2>
                </div> 
            </div>
           
            
        </div>

        <div className='grad__client-step2'>
            <div className='grad__client-step2_text'>
                <p className='gradient__text'> London 2006</p>
            </div>

            <div className='grad__client-step2_text-p'>
                <div className='grad__client-step2_text-mid'>
                    
                    <p>
                        Influenzilla is a leading design and marketing agency 
                        that offers creative solutions to businesses of all 
                        sizes. Our team of experts specializes in creating 
                        unique and effective designs that help our clients 
                        stand out in a crowded market.
                    </p>

                    <p>
                    Our mission is to help our clients achieve their business
                    objectives through innovative and effective design solutions.
                    We believe that great design is more than just aesthetics. 
                    It's about creating a seamless user experience that engages
                    and delights your audience.
                    </p>
                </div>

                <div className='grad__client-step2_text-mid'>
                    <p>
                        We take pride in our ability to understand the
                        unique needs and goals of each of our clients, 
                        and to develop customized solutions that exceed 
                        their expectations. Our team of talented designers 
                        and marketers work closely with our clients to create 
                        a cohesive brand identity, effective marketing strategies,
                        and user-friendly websites and applications.
                    </p>
                    <p>
                        We offer a wide 
                        range of services, including branding, web design, social media 
                        marketing, graphic design, and more. Our goal is to help our clients 
                        achieve success by providing them with the tools and resources they
                        need to grow their business.
                    </p>
                </div>
            </div>
        </div>

    <div className='grad__client-step3'>
            <Cltable/>
    </div> 
  </div>
  )
}

export default Cl
