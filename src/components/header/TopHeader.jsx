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
            <span>smvec@smvec.ac.in</span>
            <span>0413-2641151</span>
         </div>
         <div className='right'>
            <span onClick={() => handleNavigate('/activities')}>Activities</span>
            <span onClick={() => handleNavigate('/department/commerce')}>SMVEC</span>
            {/* <span onClick={() => handleNavigate(`/faculty${currentPage == 'home' ? '' : `/${currentPage}`}`)}>Faculty</span> */}
            <span onClick={() => handleNavigate('/placement')}>Placement</span>
            <span onClick={() => handleNavigate('/calendar')}>Calendar</span>
            <span onClick={() => handleNavigate('/virtual-tour')}>Virtual Campus</span>
            {/* <span onClick={() => handleNavigate('/test')}>Virtual Campus</span> */}
         </div>
      </div>
   )
}

export default TopHeader