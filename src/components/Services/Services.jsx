import React from 'react'
import './Services.css'


const Services = ({text}) => {
  return (
    
      <div className='grad__service section__padding '>
        <p className='gradient__text'>
            {text}
        </p>
        <div className='grad__service-rectangle'>

        </div>
      </div>
  )
}

export default Services
