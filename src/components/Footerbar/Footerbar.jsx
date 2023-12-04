import React from 'react'
import logo from '../../asset/Star 1.svg';
import box from '../../asset/Vector.svg';

const Footerbar = () => {

    const  Menu =()=>(
        <div className='drop_menu'>
            <a href='#' className='border'>ABOUT</a>
            <a href='#' className='border'>SERVICES</a>
            <a href='#' className='border'>CASES</a>
            <a href='#' className='border'>TEAM</a>
           <a href='#' className='border'><div><img src={box}/></div></a>
        </div>
    )

  return (
    <footer className='grad__footer-tab'>
        <div className='grad__footer-tab_one border'>
            <div className='grad__footer-tab_one-left'>
                <div className='grad__footer-tab_one-logo__box'>
                    <div className='grad__footer-tab_one-img'>
                        <img className='footer__logo' src={logo} alt='logo'/>
                    </div>
                    <div className='grad__footer-tab_one-img__text'>
                        <p className='gradient__text'>Influenzilla</p>
                    </div>
                </div>
                <div className='grad__footer-tab_one-text'>
                    <p className='gradient__text'>
                        bespoke design and marketing services
                    </p>
                </div>
            </div>
        </div>

        <div className='grad__footer-tab_one-right'>
            <div className='grad__footer-tab_one-right-up'>
                <Menu/>
            </div>
        </div>
    </footer>
  )
}

export default Footerbar