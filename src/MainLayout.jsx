// src/components/layout/MainLayout.jsx
import React, { useEffect, useState } from 'react';
import Navbar from './components/header/Navbar';
import TopHeader from './components/header/TopHeader';
import Footer from './components/footer/Footer';
import InstantForm from './components/form/InstantForm';
import MobileSidebarMenu from './components/header/MobileSidebarMenu';
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const [path,setPath]=useState()
  const location = useLocation();
  useEffect(() => {
     const pathParts = location.pathname.split("/").filter(Boolean);
     setPath(pathParts[0])
  }, [location.pathname])
  
  return (
    <>
     {path !=="virtual-tour" &&
     (
      <>
      <Navbar />
      <TopHeader/>
      
      <MobileSidebarMenu/>
      </>

     )}
      
      <InstantForm/>
      <ScrollToTop/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
