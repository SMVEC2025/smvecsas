import Header from "../../../components/Header"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";

function HomeNewsAndEvents({ title,eventurl,dept }) {
    const navigate = useNavigate();
    const {events} = useContext(AppContext)
    const [filteredData,setFilteredData] = useState()
 useEffect(() => {
     
    function filtered(){
      const FilteredEvents = events.filter((e)=> e.acf.department == dept)
     setFilteredData(FilteredEvents)
    }
    filtered()
  }, [events]);
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
                    {filteredData?.map((event, index) => (
                        <SwiperSlide>
                            <img src={event.acf.image} alt="" />
                            <div className="bottom" onClick={()=>{navigate(`/event/${event.slug}`)}}>
                                <div className="left">
                                    <h2>{event.acf.date?.split('/')[0]}</h2>
                                    <h4>{event.acf.date?.split('/')[1]}/{event.acf.date?.split('/')[2]}</h4>
                                </div>
                                <div className="right">
                                    <h2  >{event.acf.name}</h2>
                                    <p>Pondicherry,india</p>
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