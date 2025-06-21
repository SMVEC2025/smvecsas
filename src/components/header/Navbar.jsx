import React, { useState, useEffect, useContext } from 'react'
import { IoMdCall } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import mainlogo from '/assets/img/logo/logo.png'
import whitelogo from '/assets/img/logo/whitelogo.png'
import smveclogo from '/assets/img/logo/smveclogo.png'
import { useNavigate } from 'react-router-dom';
import TopHeader from './TopHeader';
import { AppContext } from '../../context/AppContext';
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate()
  const { setShowInstantForm } = useContext(AppContext)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Handle first scroll > 70px
      if (currentScrollY > 70) {
        setIsScrolled(true);

        // Detect scroll direction
        if (currentScrollY < lastScrollY) {
          setScrollingUp(true);
        } else {
          setScrollingUp(false);
        }
      } else {
        setIsScrolled(false);
        setScrollingUp(false); // Reset scrolling direction when less than 70px
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  function handleClick(value) {
    navigate(value)
  }
  const handleMouseIn = (value) => {
    setSliderContent(value);
    setShowSlider(true)
  }
  return (
    <>

      <div className={`navbar-main ${isScrolled ? "scrolled" : ''} ${scrollingUp ? "up" : "down"}`}>
        <div className='left'>
          <span><img src={isScrolled ? mainlogo : whitelogo} alt="" /></span>

        </div>
        <div className='right'>
          <div className='links'>
            <div className='menu-item'>
              <span onClick={() => handleClick('/')}>Home</span>
            </div>

            <div className='menu-item'>
              <span>About</span>
              <div className='dropdown'>
                <span onClick={() => handleClick('/about-us')}>About</span>
                <span onClick={() => handleClick('/about/history')}>History of SMVEC</span>
                <span onClick={() => handleClick('/contact-us')}>Contact us</span>
              </div>
            </div>

            <div className='menu-item'>
              <span>Academics</span>
              <div className='dropdown'>
                <span onClick={() => handleClick('/faculty')}>Faculty</span>
                <span onClick={() => handleClick('/programs')}>Programs</span>
                <span onClick={() => handleClick('/ug-programs')}>ug Programs</span>
                <span onClick={() => handleClick('/pg-programs')}>pg Programs</span>
                <span onClick={() => handleClick('/calendar')}>calendar</span>
                <span onClick={() => handleClick('/activities')}>Activities</span>
              </div>


            </div>
            <div className='menu-item'>
              <span>Department</span>
              <div className='dropdown'>
                <span onClick={() => handleClick('/department/commerce')}>Commerce</span>
                <span onClick={() => handleClick('/faculty')}>computational studies</span>
                <span onClick={() => handleClick('/department/business-studies')}>business studies</span>
                <span onClick={() => handleClick('/department/physics')}>physics</span>
                <span onClick={() => handleClick('/department/chemistry')}>chemistry</span>
                <span onClick={() => handleClick('/department/tamil')}>tamil</span>
                <span onClick={() => handleClick('/department/english')}>english</span>
                <span onClick={() => handleClick('/department/french')}>french</span>
                <span onClick={() => handleClick('/department/bio-science')}>bio science</span>
                <span onClick={() => handleClick('/department/food-science')}>food science</span>
                <span onClick={() => handleClick('/department/media-science')}>media studies</span>
              </div>


            </div>

            <div className='menu-item'>
              <span>Campus</span>
              <div className='dropdown'>
                <span onClick={() => handleClick('/campus')}>campus Life</span>
                <span onClick={() => handleClick('/events')}>Events</span>
              </div>
            </div>

            <div className='menu-item'>
              <span onClick={() => handleClick('/admission')} >Admission</span>

            </div>

            <div className='menu-item'>
              <span><button onClick={() => { setShowInstantForm(true) }}>Apply Now</button></span>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Navbar