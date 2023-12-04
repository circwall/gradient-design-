import React from 'react'
import './That.css'

const That = ({head,paragraph, colo}) => {
  return (
    <div className='grad__hero-upper_down-left'>
            
            <div className='colo'>
              <p className='gradient__text'>{colo}</p>
            </div>
              
            <div className='grad__hero-upper_down-left_caption-text'>
              <div className='grad__hero-upper_down-left_caption-text_heading'> 
                <h2 className='gradient__text'>
                  {head}
                </h2>
              </div>
             <div className='grad__hero-upper_down-left_caption-text_para'>
                <p>
                  {paragraph}
                </p>
             </div>
            </div>
          </div>
  )
}

export default That