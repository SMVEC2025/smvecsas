import Header from "../../../components/Header"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { useNavigate } from "react-router-dom";

function HomeNewsAndEvents({ title,eventurl }) {
    const navigate = useNavigate();

    const newsAndEvents = [
        {
            "eventName": "Tech Innovators Conference 2025",
            "time": "2025-06-15T10:00:00",
            "location": "Pondicherry, India",
            "description": "A gathering of the brightest minds in technology to discuss the future of innovation and AI.",
            "image": "https://unicamp-4437.kxcdn.com/main/wp-content/uploads/sites/2/2021/01/event-09-480x290.jpg"
        },
        {
            "eventName": "Global Saffron Expo",
            "time": "2025-07-10T09:30:00",
            "location": "Pondicherry, India",
            "description": "An international exhibition showcasing premium saffron products, innovations, and suppliers from around the globe.",
            "image": "https://unicamp-4437.kxcdn.com/main/wp-content/uploads/sites/2/2021/01/event-08-480x290.jpg"
        },
        {
            "eventName": "Startup Pitch Night",
            "time": "2025-08-05T18:00:00",
            "location": "Pondicherry, India",
            "description": "An evening for emerging startups to pitch their ideas to potential investors and receive valuable feedback.",
            "image": "https://unicamp-4437.kxcdn.com/main/wp-content/uploads/sites/2/2021/01/event-07-480x290.jpg"
        },
        {
            "eventName": "ReactJS Developer Meetup",
            "time": "2025-06-22T16:00:00",
            "location": "Pondicherry, India",
            "description": "A community meetup to discuss the latest in ReactJS development, tools, and trends.",
            "image": "https://unicamp-4437.kxcdn.com/main/wp-content/uploads/sites/2/2021/01/event-06-480x290.jpg"
        },
        {
            "eventName": "Eco Fashion Week",
            "time": "2025-09-12T14:00:00",
            "location": "Pondicherry, India",
            "description": "A celebration of sustainable fashion, featuring eco-friendly designers and innovations in the fashion industry.",
            "image": "https://unicamp-4437.kxcdn.com/main/wp-content/uploads/sites/2/2021/01/event-04-480x290.jpg"
        }
    ]

    return (
        <div className="hnae_main">
            <Header title={title} />
            <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {newsAndEvents.map((event, index) => (
                        <SwiperSlide>
                            <img src={event.image} alt="" />
                            <div className="bottom">
                                <div className="left">
                                    <h2>{event.time?.split('T')[0]?.split('-')[2]}</h2>
                                    <h4>{event.time?.split('T')[0]?.split('-')[1]}/{event.time?.split('T')[0]?.split('-')[0]}</h4>
                                </div>
                                <div className="right">
                                    <h2>{event.eventName}</h2>
                                    <p>{event.location}</p>
                                </div>
                            </div>
                        </SwiperSlide>))}
                </Swiper>
            </div>
            <div className="event_footer">
                <button onClick={()=>(navigate(eventurl))} className="btn">View All Events</button>
            </div>
        </div>
    )
}

export default HomeNewsAndEvents