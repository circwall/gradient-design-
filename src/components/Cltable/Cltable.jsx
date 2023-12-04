import React from 'react'
import {star,shine} from './import'
import './Cltable.css';

const Cltable = () => {
  return (
   <div className='grad__cltabl-main'>

        <div className='grad__cltabl-main_i'>
            <div className='grad__cltabl-main_image'>
                <img src={star} alt='start'/>
            </div>
            <div className='grad__cltabl-main_i-text'>
                <p>
                Influenzilla is a leading design and marketing 
                agency that offers creative solutions to businesses 
                of all sizes. Our team of experts specializes in creating 
                unique and effective designs that help our clients stand out in a crowded market.
                </p>
                <p>
                Our mission is to help our clients achieve their business objectives
                through innovative and effective design solutions. We believe that great 
                design is more than just aesthetics. It's about creating a seamless user 
                experience that engages and delights your audience.
                </p>
            </div>
        </div>
        <div className='grad__cltabl-main_side'>
            <div className='grad__cltabl-main_mid-box'>
                <div className='grad__cltabl-main_box-left col'>
                    <div className='imagebox'>
                        <div className=' imge'>
                            <img src={shine} alt='shine'/>
                        </div>
                    </div>

                    <div className='grad__cltabl-main_box-left_text text'>
                        <div className='grad__cltabl-main_box-left_text-heading'>
                            <h3 className='gradient__text'>
                                Branding
                            </h3>
                        </div>
                        <div className='grad__cltabl-main_box-left_text-paragraph para'>
                            <p>
                                Our team of experts specializes in creating unique and 
                                effective designs
                            </p>
                        </div>
                    </div>
                </div>

                <div className='grad__cltabl-main_box-mid col'>
                    <div className='imagebox'>
                        <div className='grad__cltabl-main_box-mid_image left imge'>
                            <img src={shine} alt='shine'/>
                        </div>
                        <div className='grad__cltabl-main_box-mid_image imge right'>
                            <img src={shine} alt='shine'/>
                        </div>
                    </div>

                    <div className='grad__cltabl-main_box-mid_text text'>
                        <div className='grad__cltabl-main_box-mid_text-heading'>
                            <h3 className='gradient__text'>
                                Design
                            </h3>
                        </div>
                        <div className='grad__cltabl-main_box-mid_text-paragraph para'>
                            <p>
                                Innovative and effective design solutions for
                                business of our clients
                            </p>
                        </div>
                    </div>
                </div>

                <div className='grad__cltabl-main_box-right col'>
                    <div className='imagebox'>
                        <div className='grad__cltabl-main_box-right_image imge left'>
                            <img src={shine} alt='shine'/>
                        </div>
                        <div className='grad__cltabl-main_box-right_image imge mid'>
                            <img src={shine} alt='shine'/>
                        </div>
                        <div className='grad__cltabl-main_box-right_image imge right'>
                            <img src={shine} alt='shine'/>
                        </div>
                    </div>

                    <div className='grad__cltabl-main_box-right_text text'>
                        <div className='grad__cltabl-main_box-right_text-heading'>
                            <h3 className='gradient__text'>
                                Marketing
                            </h3>
                        </div>
                        <div className='grad__cltabl-main_box-right_text-paragraph para'>
                            <p>
                                Our team of experienced designers and 
                                marketing professionals work closely
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grad__cltabl-main_side-paragraph'>
                <p>
                    We specialize in creating unique and innovative 
                    designs that not only capture the essence of your 
                    business but also help you achieve your goals. We 
                    believe that great design is about creating a seamless 
                    user experience that engages and delights your audience, 
                    and we work hard to ensure that every design we create meets this high standard.
                </p>
            </div>
        </div>

   </div>
  )
}

export default Cltable
