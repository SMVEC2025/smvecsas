import mainimg from "/assets/img/board/auditorium.jpg"



export default function AboutTwo() {
   return (
      <section className={`about-area`}>
         <img className="mainimage" src={mainimg} alt="thumb-img" style={{ height: 'auto' }} />
         <div className="con">
            <h2 className="">Diverse and Industry-Aligned Programs</h2>
            <p className="">At SMVEC School of Arts and Science, we offer a wide range of undergraduate and postgraduate programs across Arts, Commerce, Management, and Science disciplines. Each program is thoughtfully designed to combine academic rigor with practical exposure, ensuring students gain the skills and confidence needed to thrive in today’s competitive world. Our curriculum is regularly updated to meet industry standards and foster interdisciplinary learning.

            </p>

         </div>
      </section>
   )
}
