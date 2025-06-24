import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import mainlogo from '/assets/img/logo/logo.png'
import whitelogo from '/assets/img/logo/whitelogo.png'
const MobileSidebarMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };
    const navigate = useNavigate()
   function handleClick(value) {
    setMenuOpen(false)
    navigate(value)
  }
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
  return (
    <>
      {/* Menu toggle button - only on mobile */}
      <div className={`mobile-bar ${isScrolled?'hide':'show'} ${scrollingUp?'scroll':'down'}`}>
<img style={{width:"150px",height:"auto"}} src={isScrolled?mainlogo:whitelogo} alt="" />         <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
      <MdMenu/>
      </button>
      </div>

      {/* Overlay and Sidebar */}
      <div className={`sidebar-overlay ${menuOpen ? "show" : "hide"}`} onClick={() => setMenuOpen(false)}></div>
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </button>

        <ul className="menu">
          <li>
            <a onClick={() => handleClick('/')}>Home</a>
          </li>
          <li>
            <button className="submenu-toggle" onClick={() => toggleSubMenu(0)}>
              About ▾
            </button>
            <ul className={`submenu ${openSubMenu === 0 ? "show" : ""}`}>
              <li><a onClick={() => handleClick('/about-us')}>About</a></li>
              <li><a onClick={() => handleClick('/about/history')}>History of SMVEC</a></li>
              <li><a onClick={() => handleClick('/contact-us')}>Contact us
</a></li>
            </ul>
          </li>
          <li>
            <button className="submenu-toggle" onClick={() => toggleSubMenu(1)}>
              Academics ▾
            </button>
            <ul className={`submenu ${openSubMenu === 1 ? "show" : ""}`}>
              <li><a onClick={() => handleClick('/faculty')}>Faculty</a></li>
              <li><a onClick={() => handleClick('/programs')}>Programs</a></li>
              <li><a onClick={() => handleClick('/ug-programs')}>ug Programs</a></li>
              <li><a onClick={() => handleClick('/pg-programs')}>pg Programs</a></li>
              <li><a onClick={() => handleClick('/calendar')}>calendar</a></li>
              <li><a onClick={() => handleClick('/activities')}>Activities</a></li>
            </ul>
          </li>
          <li>
            <button className="submenu-toggle" onClick={() => toggleSubMenu(4)}>
              Department ▾
            </button>
            <ul className={`submenu ${openSubMenu === 4 ? "show" : ""}`}>
                <li><a onClick={() => handleClick('/department/commerce')}>Commerce</a></li>
                <li><a onClick={() => handleClick('/department/computaional-studies')}>computational studies</a></li>
                <li><a onClick={() => handleClick('/department/business-studies')}>business studies</a></li>
                <li><a onClick={() => handleClick('/department/physics')}>physics</a></li>
                <li><a onClick={() => handleClick('/department/chemistry')}>chemistry</a></li>
                <li><a onClick={() => handleClick('/department/tamil')}>tamil</a></li>
                <li><a onClick={() => handleClick('/department/english')}>english</a></li>
                <li><a onClick={() => handleClick('/department/french')}>french</a></li>
                <li><a onClick={() => handleClick('/department/bio-science')}>bio science</a></li>
                <li><a onClick={() => handleClick('/department/food-science')}>food science</a></li>
                <li><a onClick={() => handleClick('/department/media-studies')}>media studies</a></li>
            </ul>
          </li>
          <li>
            <button className="submenu-toggle" onClick={() => toggleSubMenu(2)}>
              Campus ▾
            </button>
            <ul className={`submenu ${openSubMenu === 2 ? "show" : ""}`}>
              <li><a onClick={() => handleClick('/campus')}>campus Life</a></li>
              <li><a onClick={() => handleClick('/events/all')}>Events</a></li>
              
            </ul>
          </li>
          <li><a onClick={() => handleClick('/admission')}>Admission</a></li>


        </ul>
      </div>
    </>
  );
};

export default MobileSidebarMenu;
