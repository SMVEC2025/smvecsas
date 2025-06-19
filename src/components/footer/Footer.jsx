import { Link, useNavigate } from "react-router-dom";

import FooterSocial from "./FooterSocial";
import logo from '/assets/img/logo/logo.png';
import logo_black from '/assets/img/logo/logo.png';
import { AiTwotoneMail } from "react-icons/ai";
import mainlogo from '/assets/img/logo/logo.png'


export default function Footer() {
  const navigate = useNavigate()

  const style_2 = false
  const footerLinks = {
    link_one: [
      { id: 1, title: "About Us", link: '/about-us' },
      { id: 2, title: "Programs", link: '/programs' },
      { id: 5, title: "Events", link: '/events' },
      { id: 6, title: "Contact", link: '/contact-us' },
    ],
    link_two: [
      { id: 2, title: "Admission", link: '/admission' },
      { id: 3, title: "Faculty & Staffs", link: '/faculty' },
      { id: 4, title: "placement", link: 'placement' },
    ]
  }
  return (
    <footer >
      <div className={`tp-footer-main ${style_2 ? '' : 'grey-bg'} pt-80 pb-55`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-3 col-sm-6">
              <div className={`tp-footer-widget ${style_2 ? 'tp-footer-5-col-1' : 'tp-footer-col-1'} mb-30`}>
                <div className="tp-footer-widget-logo mb-20 tp-header-logo">
                  <Link href="/">
                    <img
                      src={style_2 ? logo_black : logo}
                      alt="logo"
                      style={{ height: "auto", width: "250px" }} />
                  </Link>
                </div>
                <div className="tp-footer-widget-content">
                  <p>
                 Education the foundation personal and<br></br> societal growth, empowering individuals <br></br> with knowledge.
                  </p>
                </div>
                <div className="tp-footer-contact">
                  <span>Got Questions? Call us</span>
                  <a href="tel:012345678">0413-2641151</a>
                </div>
                <div className="tp-footer-contact-mail">
                  <a href="mailto:smvec@gmail.com">
                    <span>
                      <AiTwotoneMail />
                    </span>
                    smvec@smvec.ac.in
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-6">
              <div className={`tp-footer-widget ${style_2 ? 'tp-footer-5-col-2' : 'tp-footer-col-2'} mb-30`}>
                <h4 className="tp-footer-widget-title mb-20">About</h4>
                <div className="tp-footer-widget-link">
                  <ul>
                    {footerLinks.link_one.map((link) => (
                      <li style={{cursor:"pointer"}} onClick={()=>{navigate(`${link.link}`)}} key={link.id}>
                        {link.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-4">
              <div className={`tp-footer-widget ${style_2 ? 'tp-footer-5-col-3' : 'tp-footer-col-3'} mb-30`}>
                <h4 className="tp-footer-widget-title mb-20">Quick links</h4>
                <div className="tp-footer-widget-link">
                  <ul>
                    {footerLinks.link_two.map((link) => (
                      <li  style={{cursor:"pointer"}} onClick={()=>{navigate(`${link.link}`)}} key={link.id}>
                        {link.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-8">
              <div className={`p-footer-widget ${style_2 ? 'tp-footer-5-col-4' : 'tp-footer-col-4'} mb-30`}>
                <h4 className="tp-footer-widget-title mb-20">Follow Us</h4>
                <div className="tp-footer-newsletter-wrap">
                  <p>
                    To get in touch follow us <br></br>on Social media
                  </p>

                  {/* footer social */}
                  <div className="tp-footer-newsletter-social">
                    <FooterSocial />
                  </div>
                  {/* footer social */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style_2 ? 'tp-footer-5-bottom' : 'tp-footer-bottom'}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-footer-copyright text-center">
                <span>
                  © {new Date().getFullYear()} <a href="#">SMVEC</a>. All
                  rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
