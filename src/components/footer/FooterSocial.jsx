import { FaXTwitter } from "react-icons/fa6";
import { LuYoutube } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";


const socialData = [
  {
    id: 1,
    cls: "social-fb",
    href: "https://www.facebook.com/SMVECOfficial",
    iconClass: "fa-brands fa-facebook-f",
    alt: "Facebook",
    item: <SlSocialFacebook />
  },
  {
    id: 2,
    cls: "social-twit",
    href: "https://x.com/SMVEC2",
    iconClass: "fa-brands fa-twitter",
    alt: "Twitter",
    item: <FaXTwitter />

  },
  {
    id: 3,
    cls: "social-wa",
    href: "https://api.whatsapp.com/send/?phone=919344916320&text&app_absent=0",
    iconClass: "fa-brands fa-linkedin-in",
    alt: "Whatsapp",
    item: <FaWhatsapp />

  },
  {
    id: 4,
    cls: "social-insta",
    href: "https://www.instagram.com/smvec_official/",
    iconClass: "fa-brands fa-youtube",
    alt: "Instagram",
    item: <FaInstagram />

  },
  {
    id: 5,
    cls: "social-yout",
    href: "https://www.youtube.com/@official_smvec",
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
