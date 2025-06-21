import { Link } from "react-router-dom";
import { FaArrowUpLong } from "react-icons/fa6";

export default function TeamItem({item,instructor}) {
  return (
    <div className="tp-leadership-item mb-55">
      <div className={`tp-leadership-thumb ${instructor?'instructor':''} p-relative`}>
        <img
          src={item.image}
          alt={item.name}
          
          style={{ height: "auto" }}
        />
        
      </div>
      <div className="tp-leadership-content">
        <span>{item.title}</span>
        <h4 className="tp-leadership-title">
          <Link href="/my-profile">{item.name}</Link>
        </h4>
      </div>
    </div>
  );
}
