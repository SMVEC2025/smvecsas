import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';

function TopHeader() {
   const navigate = useNavigate();
   const { currentPage } = useContext(AppContext)

   const handleNavigate = (val) => {
      navigate(val)
   }
   return (
      <div className='top_header-main'>
         <div className='left'>
            <span>help@smvec.ac.in</span>
            <span>+(402) 763 282 46</span>
         </div>
         <div className='right'>
            <span onClick={() => handleNavigate('/activities')}>Activities</span>
            <span onClick={() => handleNavigate('/department/commerce')}>Departments</span>
            <span onClick={() => handleNavigate(`/faculty${currentPage == 'home' ? '' : `/${currentPage}`}`)}>Faculty</span>
            <span  ><a href='smcev.ac.in' target='_Blank'>SMVEC</a></span>
            <span onClick={() => handleNavigate('/calendar')}>Calendar</span>
            {/* <span onClick={() => handleNavigate('/test')}>Virtual Campus</span> */}
         </div>
      </div>
   )
}

export default TopHeader