
function Facilities() {
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
      img: 'https://smvec.ac.in/wp-content/uploads/2024/06/sports-2.webp'
    },
    {
      name: 'canteen',
      subheading: null,
      para: 'Our hygienic canteen serves a variety of delicious meals and snacks, making it a favorite hangout spot for students.',
      img: 'https://smvec.ac.in/wp-content/uploads/2024/06/canteen.webp'
    }
  ];
  
  return (
    <div className="cl_main">
          <div className="header">
            <h4>Life at SMVEC SAS</h4>
            <p>Follow your passions, explore leadership opportunities, and challenge yourself. At SASS, learning and personal growth thrive in every aspect of student life—both inside and beyond the classroom.

</p>
          </div>
          <div className="grid-container">
           {facility.map((e,i)=>(
            <div key={i} className="grid-div">
            <img src={e.img} alt="" />
            <div className="content">
               <h3>{e.name}</h3>
               <p>{e.para}.</p>
            </div>
          </div>
           ))}
          </div>
    </div>
  )
}

export default Facilities