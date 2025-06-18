import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { 
  FaBriefcase, FaChartLine, FaCoins, FaFileSignature, FaGavel,
  FaUserTie, FaChartBar, FaLaptopCode, FaDesktop, FaKeyboard, FaBrain,
  FaAtom, FaMicroscope, FaBookOpen, FaUsers, FaDna, FaLeaf,
  FaAppleAlt, FaUtensils, FaVideo, FaNewspaper
} from 'react-icons/fa';
import { DepartmentData } from "../../../data/DeprartmentData";
function Home({title}) {
    const [programBar,setProgramBar]=useState(false)
    const navigate = useNavigate();
    const handleProgramClick = (linkurl) => {
        navigate(`/department/${linkurl}`);
    };
  
    return (
        <header className='ug-header-main' style={{backgroundImage:"url('/assets/img/image/entrance.JPG')"}}>
            <div className="content">
                <h2>{title}</h2>
                <p>This department fosters professional growth through industry-relevant training and real-world skill development. </p>
                <div className="button-container">
                   <button onClick={()=>{navigate('/admission')}}>Enquire Now</button>
                </div>
            </div>


           <div className="layer"></div>
            {/* <div className='programs-container'>
                {ugPrograms.map((program, index) => (
                    <div onClick={() => { handleProgramClick(program.department) }} className="items">{program.department}</div>
                ))}
            </div> */}
          <div className="programbar">
             <div className={`btn ${programBar?"true":""}`} onMouseEnter={()=>setProgramBar(true)} >
                department
             </div>
              <div  className={`content ${programBar?"open":"close"}`} onMouseLeave={()=>setProgramBar(false)}>
                <h1>department</h1>
                  <div className='items'>
                    
                {DepartmentData.map((program, index) => (
                    <div onClick={() => { handleProgramClick(program.linkurl) }} className="itemlist">
                        <div className="icons">
                            {program.icons}
                        </div>
                        <h3>
                            {program.department}
                        </h3>
                    </div>
                ))}
            </div>
              </div>
          </div>
        </header>
    )
}

export default Home