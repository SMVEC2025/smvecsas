import React from 'react'

function CourseDetailSection({ event }) {
    const eventDetail = event[0]?.acf
    const dummyGallery = ["image1", "image1", "image1", "image1", "image1"]
    return (
        <div className='events_main pb-50'>
            <section className="tf__event_details mt_50 xs_mt_40">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <h2 className='event_name-details'>{eventDetail?.name}</h2>
                            <div className="tf__event_details_img wow fadeInUp">

                                <img
                                    src={eventDetail?.image}
                                    alt="event details"
                                    className="img-fluid w-100"
                                />
                            </div>
                            <div className="tf__event_details_text mt_35 wow fadeInUp">
                                <span className="categories">{eventDetail?.department}</span>
                                <ul className="location d-flex flex-wrap">
                                    <li>
                                        <i >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_344_2)">
                                                    <path d="M12.6239 1C11.3985 2.63653 9.68289 7.12768 12.6239 12C13.6623 10.1149 15.1162 5.27571 12.6239 1Z" fill="#D8A228" />
                                                    <path d="M2.38917 6.64421C3.0606 8.22141 5.59519 11.3611 10.3621 11.3022C9.43201 9.75465 6.53522 6.65645 2.38917 6.64421Z" fill="#D8A228" />
                                                    <path d="M22.5971 7.11317C20.9107 6.82012 16.9021 7.24398 14.3596 11.2838C16.1619 11.3432 20.3326 10.5923 22.5971 7.11317Z" fill="#D8A228" />
                                                    <path d="M18.4829 2.72138C17.3755 3.25231 15.074 5.17911 14.7272 8.63887C15.8358 7.9209 18.139 5.73225 18.4829 2.72138Z" fill="#D8A228" />
                                                    <path d="M6.46238 2.72138C7.5698 3.25231 9.87134 5.17911 10.2181 8.63887C9.10948 7.9209 6.8063 5.73225 6.46238 2.72138Z" fill="#D8A228" />
                                                    <path d="M4.24737 4.25927C4.8301 4.28419 6.08981 4.72506 6.46675 6.28919C5.87239 6.17613 4.5964 5.61186 4.24737 4.25927Z" fill="#D8A228" />
                                                    <path d="M9.38938 1.15985C9.88779 1.46335 10.7788 2.4584 10.3555 4.0106C9.8894 3.62427 9.04359 2.51326 9.38938 1.15985Z" fill="#D8A228" />
                                                    <path d="M1.3128 9.6379C1.84269 9.39373 3.16444 9.21026 4.21227 10.4298C3.63188 10.6009 2.23944 10.682 1.3128 9.6379Z" fill="#D8A228" />
                                                    <path d="M20.9538 4.5122C20.3711 4.53712 19.1114 4.97799 18.7344 6.54212C19.3288 6.42906 20.6048 5.86479 20.9538 4.5122Z" fill="#D8A228" />
                                                    <path d="M15.8118 1.41302C15.3134 1.71652 14.4224 2.71157 14.8456 4.26377C15.3118 3.87745 16.1576 2.76644 15.8118 1.41302Z" fill="#D8A228" />
                                                    <path d="M23.8903 9.89108C23.3604 9.6469 22.0387 9.46343 20.9909 10.683C21.5712 10.854 22.9637 10.9351 23.8903 9.89108Z" fill="#D8A228" />
                                                    <path d="M11.8493 24C8.43459 23.9564 6.3757 22.5638 5.77309 21.873L8.83633 18.546C9.92102 19.4187 11.3974 19.6368 12 19.6368L11.8493 24Z" fill="#33409C" />
                                                    <path d="M8.33416 18.2188L5.32114 21.4366C3.07142 19.7786 2.07377 17.4371 1.85617 16.4735H7.02852C7.26956 17.2153 7.99938 17.9461 8.33416 18.2188Z" fill="#33409C" />
                                                    <path d="M6.677 15.7645C6.10563 14.6301 6.00371 13.1466 6.02418 12.5467H6.52622C6.72709 16.299 8.78599 18.0006 9.79033 18.3824V12.0013H1.00248C0.962302 13.7029 1.42095 15.2191 1.6553 15.7645H6.677Z" fill="#33409C" />
                                                    <path d="M10.3427 18.546V12.0013C10.3427 12.0013 11.8993 11.8922 11.9497 13.692C12 15.4918 11.9497 18.9278 11.9497 18.9278C11.2667 19.0151 10.5938 18.7097 10.3427 18.546Z" fill="#33409C" />
                                                    <path d="M13.1507 24C16.5654 23.9564 18.6243 22.5636 19.2269 21.8727L16.1637 18.5455C15.079 19.4182 13.6026 19.6364 13 19.6364L13.1507 24Z" fill="#33409C" />
                                                    <path d="M16.6658 18.2182L19.6789 21.4364C21.9286 19.7782 22.9262 17.4364 23.1438 16.4727H17.9715C17.7304 17.2145 17.0006 17.9455 16.6658 18.2182Z" fill="#33409C" />
                                                    <path d="M18.323 15.7636C18.8944 14.6291 18.9963 13.1455 18.9758 12.5455H18.4738C18.2729 16.2982 16.214 18 15.2097 18.3818V12H23.9975C24.0377 13.7018 23.579 15.2182 23.3447 15.7636H18.323Z" fill="#33409C" />
                                                    <path d="M14.6573 18.5455V12C14.6573 12 13.0503 12.2182 13.0503 13.6909V18.9273C13.7333 19.0145 14.4062 18.7091 14.6573 18.5455Z" fill="#33409C" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_344_2">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </i> pondicherry
                                    </li>
                                    <li>
                                      {eventDetail?.time}
                                    </li>
                                </ul>
                                <div dangerouslySetInnerHTML={{ __html: eventDetail?.description }}>

                                </div>

                                <h3>Event Gallery</h3>

                                <div className='event_gallery_container'>

                                    <div className='event_gallery'>
                                        {eventDetail?.gallery?.image1 &&
                                            (<img className='gallery-image' src={eventDetail?.gallery?.image1} alt="" />)
                                        }
                                    </div>
                                    <div className='event_gallery'>
                                        {eventDetail?.gallery?.image2 &&
                                            (<img className='gallery-image' src={eventDetail?.gallery?.image2} alt="" />)
                                        }                                    </div>
                                    <div className='event_gallery'>
                                        {eventDetail?.gallery?.image3 &&
                                            (<img className='gallery-image' src={eventDetail?.gallery?.image3} alt="" />)
                                        }                                    </div>
                                    <div className='event_gallery'>
                                        {eventDetail?.gallery?.image4 &&
                                            (<img className='gallery-image' src={eventDetail?.gallery?.image4} alt="" />)
                                        }                                    </div>
                                    <div className='event_gallery'>
                                        {eventDetail?.gallery?.image5 &&
                                            (<img className='gallery-image' src={eventDetail?.gallery?.image5} alt="" />)
                                        }                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>)
}

export default CourseDetailSection