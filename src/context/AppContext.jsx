import { createContext, useEffect, useState } from "react";
import axios from "axios";
// Create Context
export const AppContext = createContext();

// Provider Component
export const AppProvider = ({ children }) => {
    const[showInstantForm,setShowInstantForm]=useState(false)
    const[events,setEvents]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    const[currentPage,setCurrentPage]=useState('home')
    const[selectedEvent,setSelectedEvent]=useState('all')
  const [imagePath, setImagePath] = useState();
      const [isVisible, setIsVisible] = useState(true);
  
useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Set loading to true at the start of the fetch operation
        setIsLoading(true);

        // Make the API call
        const response = await axios.get('https://cms.smvec.ac.in/wp-json/wp/v2/artsevents');

        // Update the events state with the fetched data
        setEvents(response.data);
        console.log(response.data)
      } catch (err) {
        // If an error occurs, set the error state
        console.error('Error fetching events:', err);
      } finally {
        // Set loading to false once the operation (success or failure) is complete
        setIsLoading(false);
      }
    };

    fetchEvents(); // Call the async function
  }, []); // Empty dependency array means this effect runs once after the initial render
  // console.log(events)
  return (
    <AppContext.Provider value={{ imagePath, setImagePath,currentPage,setCurrentPage,showInstantForm,setShowInstantForm,isLoading,setIsLoading,events,setEvents,selectedEvent,setSelectedEvent,isVisible, setIsVisible }}>
      {children}
    </AppContext.Provider>
  );
};
