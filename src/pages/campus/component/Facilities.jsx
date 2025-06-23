import { useState } from "react";
import PanoramaViewer from "../../../components/PanoramaViewer";
import Test from "../../home/component/Test";


function Facilities() {
  const [showViewer, setShowViewer] = useState(false);

  const labData = [
    {
      name: 'lab1',
      source: '/assets/img/360/lab/lab1.jpg'
    },
    {
      name: 'lab2',
      source: '/assets/img/360/lab/lab2.jpg'
    },
    {
      name: 'lab3',
      source: '/assets/img/360/lab/lab3.jpg'
    },
    {
      name: 'lab4',
      source: '/assets/img/360/lab/lab4.jpg'
    },
    {
      name: 'lab5',
      source: '/assets/img/360/lab/lab5.jpg'
    },
    {
      name: 'lab6',
      source: '/assets/img/360/lab/lab6.jpg'
    },

  ]
  const facility = [
    {
      name: 'auditorium',
      subheading: null,
      para: 'Our state-of-the-art auditorium hosts cultural events, seminars, and celebrations that enrich campus life at SMVEC.',
      img: 'https://smvec.ac.in/wp-content/uploads/2024/06/DSC061361.webp'
    },
    {
      name: '24/7 ATM',
      subheading: null,
      para: 'With a 24/7 ATM on campus, students enjoy convenient banking access without leaving the college premises.',
      img: 'https://smvec.ac.in/wp-content/uploads/2024/06/DSC05735.webp'
    },
    {
      name: 'IT',
      subheading: null,
      para: 'Our modern IT infrastructure empowers students with seamless access to digital resources and lab facilities.',
      img: 'https://smvec.ac.in/wp-content/uploads/2024/06/IMG_9970.webp'
    },
    {
      name: 'GYM Facilities',
      subheading: null,
      para: 'The well-equipped gym encourages a healthy lifestyle, offering a space for students to stay fit and refreshed.',
      img: 'https://smvec.ac.in/wp-content/uploads/2024/06/DSC05779.webp'
    },
    {
      name: 'sports',
      subheading: null,
      para: 'Vibrant sports facilities at SMVEC foster team spirit, fitness, and enthusiasm across a range of outdoor games.',
      img: '/assets/img/campus/ground.jpg'
    },
    {
      name: 'canteen',
      subheading: null,
      para: 'Our hygienic canteen serves a variety of delicious meals and snacks, making it a favorite hangout spot for students.',
      img: '/assets/img/campus/Canteen.png'
    }
  ];

  return (
    <div className="cl_main">
      <div className="header">
        <h4>Life at SMVEC School of Arts and Science</h4>
        <p>Follow your passions, explore leadership opportunities, and challenge yourself. At SASS, learning and personal growth thrive in every aspect of student life—both inside and beyond the classroom.

        </p>
      </div>
      <div className="grid-container">
        {facility.map((e, i) => (
          <div key={i} className="grid-div">
            <img src={e.img} alt="" />
            <div className="content">
              <h3>{e.name}</h3>
              <p>{e.para}.</p>
            </div>
          </div> 
        ))}
      </div>
      <h2 className="lab-faci-title">Lab Facilities</h2>

      <div className="lab_facilities">
        {labData.map((e, i) => (
          <div className="con" onClick={() => { setShowViewer(e.source) }}>
            <img src={e.source} alt="" />
            <div className="layer">
              <h4>{e.name}</h4>
            </div>
          </div>
        ))}
      </div>
      <div>


        {/* {showViewer && (
                <PanoramaViewer
                    src={showViewer}
                    onClose={() => setShowViewer(false)}
                />
            )} */}

      </div>
   
    
    </div>
  )
}

export default Facilities