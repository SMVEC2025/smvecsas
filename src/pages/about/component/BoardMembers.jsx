import React from 'react'
import chairman from '/assets/img/board/chairman.png'
import secratary from '/assets/img/board/secratary.png'
import treasurer from '/assets/img/board/treasurer.png'
import Jointsecretary from '/assets/img/board/Jointsecretary.png'
import principal from '/assets/img/board/principal.png'
function BoardMembers() {
  return (
    <div className='bm_main'>
      <div className='assets'>
        {/* <Image src="/assets/img/medalasset.png" alt="" /> */}
      </div>
      {/* <div className='asset2'>
            <img src="/assets/img/mainentranceoutline2.png" alt="" />
        </div> */}
      <div className="section-title color-red text-center">

        <h2 className="header" data-wow-delay=".3s">
          Board of Trustees and Management
        </h2>
        <p className="courses-sub-text mt-3 wow fadeInUp" data-wow-delay=".5s">  Guided by visionary leadership, our Board of Trustees and Management ensure the college&apos;s commitment to excellence and integrity.
        </p>
      </div>


      <div className='bm_chairman'>
        <img src={chairman} alt="" />
        <div className='content'>
          <h2>Shri.M.Dhanasekaran</h2>
          <h4>Founder, Chairman and Managing Director</h4>
          <p>
            At Sri Manakula Vinayaga Educational Trust, our mission is to provide quality education to all—especially students from underprivileged backgrounds. Over the years, we’ve established premier institutions in engineering, medicine, nursing, and polytechnic education. With a strong foundation built on academic excellence and modern learning technologies, we empower students to pursue their dreams with confidence and competence.
          </p>
          <p>Beyond academics, we focus on shaping responsible individuals by instilling core values, discipline, and a spirit of service. Our charitable hospital, offering free medical care, reflects this commitment to community welfare. We deeply value the continued support from our students, faculty, and partners. Together, we’re shaping not just careers—but a brighter, more meaningful future.

          </p>
        </div>
      </div>

      <div className='bm_chairman'>
        <img src={secratary} alt="" />
        <div className='content'>
          <h2>Dr.K.Narayanasamy
          </h2>
          <h4>Secretary</h4>
          <p>Since its inception in 1998, Sri Manakula Vinayagar Engineering College (SMVEC) has evolved into a center of excellence, shaping the next generation of innovative technologists. With consistent achievements in academics, placements, sports, and co-curricular activities, we take pride in creating a vibrant and holistic learning environment that fosters both personal and professional growth.</p>

          <p>Our dedicated faculty play a key role in transforming young minds into future-ready engineers. Through active student chapters and professional bodies, we bridge the gap between classroom learning and industry expectations. At SMVEC, we encourage students to stay connected with emerging trends and technologies—preparing them to lead in an ever-evolving world. I invite you to be part of this journey, where challenges turn into opportunities and aspirations become achievements.

          </p>
        </div>
      </div>

      <div className='bm_chairman'>
        <img src={treasurer} alt="" />
        <div className='content'>
          <h2>D. Rajarajan Dhanasekaran                </h2>
          <h4>Treasurer</h4>
          <p>Welcome to Sri Manakula Vinayagar Engineering College (SMVEC)—a place where academic excellence meets personal growth. As Treasurer, I take immense pride in being part of an institution that empowers students through innovation, discipline, and a strong value-based education system. Our mission is to provide every learner with opportunities that shape their future and fuel their success.</p>

          <p>With modern infrastructure, a dedicated faculty team, excellent placement records, and a clean, eco-friendly campus, SMVEC offers an ideal environment for holistic development. Through continuous mentoring and support, we ensure that each student is guided both academically and personally. I look forward to seeing you thrive and make the most of your journey here.

          </p>

        </div>
      </div>
      <div className='bm_chairman'>
        <img src={Jointsecretary} alt="" />
        <div className='content'>
          <h2>S. Velayudham                </h2>
          <h4>Joint Secretary</h4>
          <p>It is with great pride and enthusiasm that I extend my warmest greetings to the Department of Physics on the release of Reflection, the official science magazine of Sri Manakula Vinayagar Engineering College (SMVEC). This initiative beautifully captures the spirit of curiosity, innovation, and intellectual exploration—offering a vibrant platform for students and faculty to engage with the latest in scientific thought and discovery. Reflection promotes a culture of inquiry, critical thinking, and shared knowledge, inspiring young minds to push the boundaries of science and contribute to meaningful change.

          </p>
          <p>At SMVEC, we are deeply committed to academic excellence and all-round development. As an autonomous institution, we offer an industry-relevant curriculum backed by the vision of the Sri Manakula Vinayagar Educational Trust—which provides a continuous learning journey from school to higher education in diverse fields including Engineering, Arts & Science, Medicine, Law, and Agriculture. I applaud the hard work of our students and faculty in bringing this magazine to life. Reflection is not just a publication—it is a celebration of scientific spirit and a lasting source of inspiration for future innovators.

          </p>
        </div>
      </div>
      <div className='bm_chairman'>
        <img src={principal} alt="" />
        <div className='content'>
          <h2>Dr. V.S.K. Venkatachalapathy     </h2>
          <h4>Director cum Principal</h4>
          <p>At Sri Manakula Vinayagar Engineering College (SMVEC), we take pride in offering a peaceful and focused environment that fosters academic excellence and personal growth. Located away from the distractions of city life, our serene campus allows students to fully concentrate on their studies. With a strong commitment to safety, discipline, and order, our administration ensures an ideal learning atmosphere. Our highly qualified faculty members are devoted to mentoring students towards academic success and professional readiness, while our value-added courses bridge the gap between classroom learning and real-world industry needs.</p>
          <p>SMVEC stands tall with a legacy of excellence, being the first engineering institution in Puducherry accredited with an ‘A’ grade by NAAC in 2013. Our students consistently earn top ranks and gold medals at Pondicherry University. Beyond academics, we focus on character building and citizenship, preparing students to thrive in life. With advanced infrastructure, fully equipped labs, a modern library, and dedicated hostel facilities with gym access, SMVEC offers everything needed for a holistic educational experience. We warmly invite you to explore the opportunities that await you and wish you a successful journey ahead.

          </p>
        </div>
      </div>
    </div>
  )
}

export default BoardMembers