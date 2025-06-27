import { Link, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import TabSwitcher from "./TabSwitcher";
import { AppContext } from "../../../context/AppContext";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const AllEventSection = ({ eventData }) => {
  const { selectedEvent } = useContext(AppContext);
  const eventPerPage = 6;
  const navigate = useNavigate();
  const [currentEventPage, setCurrentEventPage] = useState(1);

  // Helper function to parse DD/MM/YYYY to Date object
  const parseDate = (dateStr) => {
    if(dateStr){
const [day, month, year] = dateStr?.split("/").map(Number);
    return new Date(year, month - 1, day);
    }
    
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize time for accurate comparison

  // Filter events based on selectedEvent
  const filteredEvents = eventData.filter((item) => {
    const eventDate = parseDate(item?.acf?.date);
    if (selectedEvent === "all") return true;
    if (selectedEvent === "upcoming") return eventDate >= today;
    if (selectedEvent === "past") return eventDate < today;
    return true;
  });

  // Pagination
  const totalEventPages = Math.ceil(filteredEvents.length / eventPerPage);
  const startEventIndex = (currentEventPage - 1) * eventPerPage;
  const endEventIndex = startEventIndex + eventPerPage;
  const currentEventItems = filteredEvents.slice(startEventIndex, endEventIndex);

  const handleEventPageChange = (newPage) => {
    setCurrentEventPage(newPage);
    setTimeout(() => {
      window.scrollTo(0, 200);
    }, 500);
  };
  function handleclick(slug){
navigate(`/event/${slug}`)
  }
  return (
    <div className="events_main">
      <TabSwitcher />
      <section className="tf__event_page mt_50 xs_mt_50">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-xl-6 col-md-8 col-lg-6 m-auto">
              <div className="tf__heading_area mb_15">
                {selectedEvent == 'all' && (<h5>OUR Events</h5>)}
                {selectedEvent == 'upcoming' && (<h5>OUR Upcoming Events</h5>)}
                {selectedEvent == 'past' && (<h5>OUR past Events</h5>)}
              </div>
            </div>
          </div>
          <div className="row">
            {currentEventItems?.map((item, index) => (
              <div onClick={()=>{handleclick(item.slug)}} className="col-xl-4 col-md-6 wow fadeInUp" key={index}>
                <div className="tf__single_event">
                  <div className="tf__single_event_img">
                    <img
                      src={item?.acf?.image}
                      alt="event"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__single_event_text">
                    <ul>
                      <li>
                        <i><IoLocationOutline /></i> pondicherry
                      </li>
                      <li>
                        <i><SlCalender /></i> {item?.acf?.date}
                      </li>
                    </ul>
                    <Link className="title" to={`/event/${item.slug}`}>
                      {item?.acf?.name}
                    </Link>
                    <p className="pb-5">{item?.acf?.intro}</p>
                    <div className="tf__single_event_footer">
                      <button onClick={() => navigate(`/event/${item.slug}`)}>
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {currentEventItems.length === 0 && (
              <p className="text-center">No events found.</p>
            )}
          </div>

          {/* Pagination */}
          {totalEventPages > 1 && (
            <div className="tf__pagination mt_50 mb-50">
              <div className="row">
                <div className="col-12">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item">
                        <a
                          className={`page-link ${currentEventPage === 1 ? "disabled" : ""}`}
                          aria-label="Previous"
                          onClick={() => handleEventPageChange(currentEventPage - 1)}
                        >
                          <i><GoChevronLeft /></i>
                        </a>
                      </li>
                      {Array.from({ length: totalEventPages }, (_, index) => (
                        <li className="page-item" key={index}>
                          <a
                            className={`page-link ${currentEventPage === index + 1 ? "active" : ""}`}
                            onClick={() => handleEventPageChange(index + 1)}
                          >
                            {index + 1}
                          </a>
                        </li>
                      ))}
                      <li className="page-item">
                        <a
                          className={`page-link ${currentEventPage === totalEventPages ? "disabled" : ""}`}
                          aria-label="Next"
                          onClick={() => handleEventPageChange(currentEventPage + 1)}
                        >
                          <i><GoChevronRight /></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllEventSection;
