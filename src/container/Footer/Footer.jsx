import React from 'react'
import star from '../../asset/Union.svg';
import './Footer.css';
import Footerbar from '../../components/Footerbar/Footerbar';


const Footer = () => {
  return (
    <footer className='section__padding'>
        <div className='grad__footer-upper_div'>
            <div className='grad__footer-upper_div-image'>
                <div><img src={star} alt='stars'/></div>
            </div>

            <div className='grad__footer-upper_div-text'>
                <div className='grad__footer-text '>
                    <p>
                        Our team of talented designers and marketers 
                        works closely with each of our clients, taking 
                        the time to understand their unique needs and goals, 
                        and developing customized solutions that exceed their expectations. 
                    </p>
                    <p>
                        We take pride in our ability to create a cohesive brand identity, 
                        effective marketing strategies, and user-friendly websites and 
                        applications that help our clients achieve success.
                    </p>
                </div>

                <div className='grad__footer-text on'>
                    <p>
                        So if you're a start-up looking to create a strong brand identity, 
                        or an established business looking to revamp your marketing strategy,
                        we have the expertise and experience to help you succeed. 
                        </p>
                    <p>
                        Contact us today to learn more about our services and how we can help your 
                        business grow. We look forward to hearing from you and starting this exciting journey together.
                    </p>
                </div>
            </div>
        </div>


        <Footerbar/>
    </footer>
  )
}

export default Footer