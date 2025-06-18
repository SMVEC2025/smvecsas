import React from 'react'
import Header from '../../../components/Header'
import { FaXTwitter } from "react-icons/fa6";

function HomeSocial() {
  return (
    <div className='home_socail-main'>
      <Header title='stay connected'/>
      <div className='content'>
  <div className='left' style={{backgroundImage:'url(/assets/img/socialmedia/imageleft.png)'}}>
        <section>
              <p>From a single vision to 25 years of impact, this was a moment of pride, gratitude, and inspiration.</p>
         <span><span className='logo_t'><FaXTwitter/></span>@SMVEC</span>
        </section>
       </div>
       <div className='center'>
         <p>From a single vision to 25 years of impact, this was a moment of pride, gratitude, and inspiration.</p>
         <span><span className='logo_t'><FaXTwitter/></span>@SMVEC</span>
       </div>
       <div className='right' style={{backgroundImage:'url(/assets/img/socialmedia/imageright.png)'}}>
 <section>
              <p>From a single vision to 25 years of impact, this was a moment of pride, gratitude, and inspiration.</p>
         <span><span className='logo_t'><FaXTwitter/></span>@SMVEC</span>
        </section>
       </div>
      </div>
    </div>
  )
}

export default HomeSocial