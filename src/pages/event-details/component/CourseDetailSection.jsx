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
                                        <i className="far fa-map-marker-alt"></i> pondicherry
                                    </li>
                                    <li>
                                        <i className="far fa-clock"></i> {eventDetail?.time}
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