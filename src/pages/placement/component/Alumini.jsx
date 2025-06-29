import React from "react";
import {bcomgeneral} from '../../../data/PlacementStudentData'
// Example logos (replace with actual logo URLs or import statically)
const recruiters = [
  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/2560px-Tata_Consultancy_Services_old_logo.svg.png" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png" },
  { name: "Whirlpool", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjO0YBBxvGNQJdn_2u-so8MsdL0ostWy-EsQ&s" },
  { name: "Jusdial", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVb3-triq81EGt_qghnuLhJXg9i9JcO3Xwog&s" },
  { name: "CUB Bank", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPUwkCST7gZ0Je0j_i_YROC1nMWEtApSbCRQ&s" },
  { name: "Integra", logo: "https://mma.prnewswire.com/media/1953706/Integra_Logo.jpg" },
  { name: "Suraj Insurance", logo: "/assets/img/placement/logo/sim.png" },
  { name: "Fast Track HR", logo: "/assets/img/placement/logo/cjs.png" },
  { name: "Fast Track HR", logo: "/assets/img/placement/logo/laksh.png" },
  { name: "Fast Track HR", logo: "/assets/img/placement/logo/societe.png" },
];

const Alumini = () => {
  return (
    <section style={{marginTop:"5rem"}} className="top-recruiters-section">
      <h2>Our Students Placed in</h2>
      <h3>Department of commerce</h3>
      <div className="alumini-card">
        {bcomgeneral.map((r, i) => (
          <div key={i} className="alumini-item">
            <img src={`/assets/img/placement/students/departmentofcommerce/20225-2025/${r.source}.png`} alt={r.name} />
            <h3>{r.name}</h3>
            <p>{r.placed}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Alumini;
