import React from 'react'
import Header from '../../../components/Header'
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function HomeSocial() {
  const navigate = useNavigate()

 function handleNavigation(value){
  // https://www.instagram.com/smvec_official/
  window.open(`${value}`, '_blank');
 }
  return (
    <div className='home_socail-main'>
      <Header title='stay connected' />
      <div className='content'>
        <div className='left' style={{ backgroundImage: 'url(/assets/img/socialmedia/imageleft.webp)' }}>
          <section className='facebook' onClick={()=>{handleNavigation('https://www.facebook.com/SMVECOfficial')}}>
            <p>From a single vision to 25 years of impact, this was a moment of pride, gratitude, and inspiration.</p>
            <span><span className='logo_t facebook'><SlSocialFacebook /></span>@SMVEC</span>
          </section>
        </div>
        <div className='center' onClick={()=>{handleNavigation('https://x.com/SMVEC2')}}>
          <p>From a single vision to 25 years of impact, this was a moment of pride, gratitude, and inspiration.</p>
          <span><span className='logo_t'><FaXTwitter /></span>@SMVEC</span>
        </div>
        <div className='right'  style={{ backgroundImage: 'url(/assets/img/socialmedia/imageright.webp)' }}>
          <section className='insta' onClick={()=>{handleNavigation('https://www.instagram.com/smvec_official/')}}> 
            <p>From a single vision to 25 years of impact, this was a moment of pride, gratitude, and inspiration.</p>
            <span><span className='logo_t insta'><FaInstagram /></span>@SMVEC</span>
          </section>
        </div>
      </div>
    </div>
  )
}

export default HomeSocial