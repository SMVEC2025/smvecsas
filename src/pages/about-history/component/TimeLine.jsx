

// History data array
const historyData = [
  {
    id: 1,
    year: "1999",
    imgSrc: "/assets/img/history/history-thumb-1.png",
    title: "1999",
    description: "Sri Manakula Vinayagar Engineering College (SMVEC) was founded by the Sri Manakula Vinayaga Educational Trust to provide quality, affordable education, especially for underprivileged communities.",
    thumbPosition: "left",
    overlayClass: "overlay-1"
  },
  {
    id: 2,
    year: "Early 2000s",
    imgSrc: "/assets/img/history/history-thumb-2.png",
    title: "Early 2000s",
    description: "SMVEC expanded its academic offerings in engineering disciplines</br> and gradually built modern infrastructure like libraries,<br/> laboratories, and hostels.",
    thumbPosition: "right",
    overlayClass: ""
  },
  {
    id: 3,
    year: "2013",
    imgSrc: "/assets/img/history/history-thumb-3.webp",
    title: "2013",
    description: "SMVEC became the first engineering college in Puducherry to be accredited by NAAC with an 'A' grade.",
    thumbPosition: "left",
    overlayClass: ""
  },
  {
    id: 4,
    year: "2019",
    imgSrc: "/assets/img/history/history-thumb-4.webp",
    title: "2019",
    description: "SMVEC was granted autonomous status by the University Grants Commission (UGC) while continuing its affiliation with Pondicherry University.",
    thumbPosition: "right",
    overlayClass: "overlay-2"
  },
   {
    id: 5,
    year: "2020s",
    imgSrc: "/assets/img/history/history-thumb-5.webp",
    title: "2020s",
    description: "added new programs in Arts and Science, Allied Health Sciences, Agriculture, Law, Physiotherapy, and Pharmacy. Campus grew to 125 acres with Wi-Fi enabled, air-conditioned auditoriums, modern labs, and separate boys' and girls' hostels.",
    thumbPosition: "left",
    overlayClass: "overlay-2"
  },
   {
    id: 6,
    year: "2022-2024",
    imgSrc: "/assets/img/history/history-thumb-6.jpg",
    title: "2022-2024",
    description: "Ranked in the 151–300 band in the NIRF Innovation Category. <br/>Rated 'AAA' by Careers 360 as the Best Engineering College <br/> in Puducherry. Strengthened placement records,<br/> with students placed in top companies in India and abroad.",
    thumbPosition: "right",
    overlayClass: "overlay-2"
  }
];

export default function TimeLine() {
  return (
    <section style={{paddingTop:"15rem"}} className="tp-history-area grey-bg pb-120">
      <div className="container">
        <div id="down" className="tp-history-box-wrapper p-relative">
          {historyData.map((item) => (
            <div key={item.id} className={`tp-history-box ${item.overlayClass} p-relative mb-180`}>
              <div className="row align-items-center">
                <div className="col-lg-2">
                  <div className="tp-history-year">
                    <h5 className="tp-history-year-title">{item.year}</h5>
                  </div>
                </div>
                {item.thumbPosition === "left" ? (
                  <>
                    <div className="col-lg-5">
                      <div className="tp-history-item-thumb-left">
                      <img src={item.imgSrc} alt="history-thumbnail" width={470} height={320} style={{ height: "auto" }} />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="tp-history-item-content">
                        <h2 className="tp-history-title">{item.title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-lg-5">
                      <div className="tp-history-item-content-left">
                        <h2 className="tp-history-title">{item.title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="tp-history-item-thumb-right">
                        <img src={item.imgSrc} alt="history-thumbnail" width={470} height={320} style={{ height: "auto" }} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
