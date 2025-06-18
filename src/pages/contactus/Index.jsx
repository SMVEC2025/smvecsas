import { IoMailOutline,IoCallOutline,IoLocationOutline } from "react-icons/io5";
import Navbar from "../../components/header/Navbar";
import TopHeader from "../../components/header/TopHeader";
import BreadcrumbTwo from "../../components/breadcrumb/BreadCrumb";
import Footer from "../../components/footer/Footer";

function Index() {
    
const contactInfoData = [
    {
        icon: <IoMailOutline />,
        title: 'Feedbacks',
        description: 'Speak to our Friendly team.',
        linkText: 'Support@gmail.com',
        href: 'mailto:Support@gmail.com'
    },
    {
        icon: <IoCallOutline />,
        title: 'Call Us',
        description: 'Mon-Fri from 8am to 5pm',
        linkText: '+1(555) 000-0000',
        href: 'tel:+15550000000'
    },
    {
        icon: <IoLocationOutline />,
        title: 'Visit Us',
        description: 'Visit our office HQ.',
        linkText: '77 Robinson Road #33-01',
        href: '#'
    }
];

  return (
    <>    <BreadcrumbTwo title="ContactUs" subtitle="ContactUs"/>
     <section className="tp-contact-info-area tp-contact-p pb-90 pt-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="tp-contact-info-wrapper text-center">
                            <h2 className="tp-contact-main-title ">Let us know how we can help - Reach us</h2>
                        </div>
                        <div className="row">
                            {contactInfoData.map((item, index) => (
                                <div key={index} className="col-lg-4 col-md-6">
                                    <div className="tp-contact-info-item mb-30">
                                        <div className="tp-contact-info-icon">
                                            <span>{item.icon}</span>
                                        </div>
                                        <h4 className="tp-contact-info-title">{item.title}</h4>
                                        <p>{item.description}</p>
                                        <a href={item.href}>{item.linkText}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
         <div className="tp-map-area">
                <div className="tp-contact-map-content">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458.1819829569959!2d79.63448309432792!3d11.914746844122824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5358c4d27d10a9%3A0x5013c5b96143ae32!2sSri%20Manakula%20Vinayagar%20Engineering%20College!5e0!3m2!1sen!2sin!4v1749185648331!5m2!1sen!2sin"  width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            
    </>
  )
}

export default Index