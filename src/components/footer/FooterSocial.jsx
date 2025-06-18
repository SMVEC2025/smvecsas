import { FaXTwitter } from "react-icons/fa6";
import { LuYoutube } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";


const socialData = [
  {
    id: 1,
    cls: "social-fb",
    href: "https://www.facebook.com",
    iconClass: "fa-brands fa-facebook-f",
    alt: "Facebook",
    item: <SlSocialFacebook />
  },
  {
    id: 2,
    cls: "social-twit",
    href: "https://www.twitter.com",
    iconClass: "fa-brands fa-twitter",
    alt: "Twitter",
    item: <FaXTwitter />

  },
  {
    id: 3,
    cls: "social-wa",
    href: "https://www.linkedin.com",
    iconClass: "fa-brands fa-linkedin-in",
    alt: "Whatsapp",
    item: <FaWhatsapp />

  },
  {
    id: 4,
    cls: "social-insta",
    href: "https://www.youtube.com",
    iconClass: "fa-brands fa-youtube",
    alt: "Instagram",
    item: <FaInstagram />

  },
  {
    id: 5,
    cls: "social-yout",
    href: "https://www.youtube.com",
    iconClass: "fa-brands fa-youtube",
    alt: "YouTube",
    item: <LuYoutube />

  },
];

export default function FooterSocial() {
  return (
    <>
     <div style={{display:"flex",gap:"5px"}}>
       {socialData.map((item) => (
        <a key={item.id} className={item.cls} href={item.href} target="_blank">
          <i >{item.item}</i>
        </a>
      ))}
     </div>
    </>
  );
}
