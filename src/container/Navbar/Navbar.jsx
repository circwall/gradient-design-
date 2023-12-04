import React,{useState} from 'react';
import logo from '../../asset/Star 1.svg';
import './Navbar.css';
import web from '../../asset/Vector.svg';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';


const Navbar = () => {


    const [show,setShow] = useState(false)
    const  Menu =()=>(
        <div className= 'grad__nav-head_menu fade-in-right'>
            <div>
                <p><a href='#'>ABOUT</a></p>
                <p><a href='#'>SERVICES</a></p>
                <p><a href='#'>CASES</a></p>
                <p><a href='#'>TEAM</a></p>
                <p><a href='#'>BOOST PROGRAM</a></p>
                <p><a href='#'>PRODUCTS</a></p>
                <p><a href='#'>BOOK</a></p>
                <p><a href='#'>BLOG</a></p>
                <p><a href='#'><img src={web} alt='browse'/></a></p>
            </div>
        </div>
    )

  return (
    <div className='nav '>
        <div className='grad__nav'>
            <div className='grad__nav-head_left-div'>
                <div className='grad__nav-head__image'>
                    <img src={logo} alt='logo'/>
                    <h4>
                        Influenzilla
                    </h4>
                </div>
                
                <div className='grad__nav-head__text'>
                    <p>
                        bespoke design and marketing services
                    </p>
                </div>
            </div>

            <div className='grad__nav-head_right-div'>
                <div className='grad__nav-head_right-div_up'>
                    <p><a href='#'>ABOUT</a></p>
                    <p><a href='#'>SERVICES</a></p>
                    <p><a href='#'>CASES</a></p>
                    <p><a href='#'>TEAM</a></p>
                    <p><a href='#'><img src={web} alt='browse'/></a></p>
                </div>
                <div className='grad__nav-head_right-div_down'>
                    <p><a href='#'>BOOST PROGRAM</a></p>
                    <p><a href='#'>PRODUCTS</a></p>
                    <p><a href='#'>BOOK</a></p>
                    <p><a href='#'>BLOG</a></p>
                </div>
            </div>
            <div className='grad__nav-menubar'>
                {!show ? <div onClick={()=>setShow(!show)} className='grad__nav-menubar_menu'>
                    <div >
                        MENU
                    </div>
                </div>:
                <div onClick={()=>setShow(!show)} className='close'>
                    <RiCloseLine  color='#fff' size={27} />
                </div>}

                
                {show && (
                    <Menu/>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar
