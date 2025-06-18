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
          <p>Sri Manakula Vinayagar Educational Trust was established with a mission to provide quality education across diverse disciplines, with a strong commitment to uplifting the underprivileged sections of society. The Trust manages several esteemed institutions in the Union Territory of Puducherry, including engineering, medical, nursing, polytechnic colleges, and a charitable hospital that extends free healthcare services to those in need.</p>
          <p>Among these prestigious institutions, the Sri Manakula Vinayagar College of Law (SMVCL) emerges as a center of excellence in legal education. SMVCL is committed to nurturing future legal professionals by offering inclusive and high-quality legal education that empowers students from all backgrounds. The college is affiliated with Pondicherry University and operates as an autonomous institution, offering comprehensive undergraduate, postgraduate, and research programs in the field of law.</p>
        </div>
      </div>

      <div className='bm_chairman'>
        <img src={secratary} alt="" />
        <div className='content'>
          <h2>Dr.K.Narayanasamy
          </h2>
          <h4>Secretary</h4>
          <p>Sri Manakula Vinayagar Educational Trust stands as a beacon of excellence in shaping future legal professionals and thought leaders. Since its establishment in 1998, the Trust has achieved remarkable milestones in academic excellence, career placements, and contributions to holistic student development through co-curricular and extracurricular achievements. The Sri Manakula Vinayagar College of Law (SMVCL) reflects the Trust’s vision of delivering a comprehensive and value-driven legal education to aspiring law students.</p>

          <p>At SMVCL, our faculty comprises distinguished academicians and seasoned legal practitioners committed to inspiring and empowering students. With a strong emphasis on legal scholarship, critical thinking, and ethical advocacy, the institution prepares students to navigate and contribute meaningfully to the ever-evolving legal landscape.</p>
        </div>
      </div>

      <div className='bm_chairman'>
        <img src={treasurer} alt="" />
        <div className='content'>
          <h2>D. Rajarajan Dhanasekaran                </h2>
          <h4>Treasurer</h4>
          <p>As the Treasurer of Sri Manakula Vinayagar Educational Trust, it is my privilege to extend a warm welcome to all. The Sri Manakula Vinayagar College of Law (SMVCL) stands as a beacon of legal education, committed to fostering academic excellence and holistic personal development. Rooted in a legacy of integrity and dedication, our institution strives to offer students exceptional opportunities for intellectual growth and professional success in the dynamic field of law.</p>

          <p>Our strengths lie in a blend of modern infrastructure, a highly qualified and dedicated faculty, a commendable placement record, and a disciplined, student-friendly campus. We take pride in offering personalized mentoring within an environment that emphasizes ethical, value-based education—preparing students to become responsible legal professionals who uphold justice and contribute meaningfully to society.</p>

        </div>
      </div>
      <div className='bm_chairman'>
        <img src={Jointsecretary} alt="" />
        <div className='content'>
          <h2>S. Velayudham                </h2>
          <h4>Joint Secretary</h4>
          <p>As the Treasurer of Sri Manakula Vinayagar Educational Trust, it is my privilege to extend a warm welcome to all. The Sri Manakula Vinayagar College of Law (SMVCL) stands as a beacon of legal education, committed to fostering academic excellence and holistic personal development. Rooted in a legacy of integrity and dedication, our institution strives to offer students exceptional opportunities for intellectual growth and professional success in the dynamic field of law.</p>

          <p>Our strengths lie in a blend of modern infrastructure, a highly qualified and dedicated faculty, a commendable placement record, and a disciplined, student-friendly campus. We take pride in offering personalized mentoring within an environment that emphasizes ethical, value-based education—preparing students to become responsible legal professionals who uphold justice and contribute meaningfully to society.</p>

        </div>
      </div>
      <div className='bm_chairman'>
        <img src={principal} alt="" />
        <div className='content'>
          <h2>Dr. V.S.K. Venkatachalapathy     </h2>
          <h4>Director cum Principal</h4>
          <p>As the Treasurer of Sri Manakula Vinayagar Educational Trust, it is my privilege to extend a warm welcome to all. The Sri Manakula Vinayagar College of Law (SMVCL) stands as a beacon of legal education, committed to fostering academic excellence and holistic personal development. Rooted in a legacy of integrity and dedication, our institution strives to offer students exceptional opportunities for intellectual growth and professional success in the dynamic field of law.</p>

          <p>Our strengths lie in a blend of modern infrastructure, a highly qualified and dedicated faculty, a commendable placement record, and a disciplined, student-friendly campus. We take pride in offering personalized mentoring within an environment that emphasizes ethical, value-based education—preparing students to become responsible legal professionals who uphold justice and contribute meaningfully to society.</p>

        </div>
      </div>
    </div>
  )
}

export default BoardMembers