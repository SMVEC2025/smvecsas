import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Index';
import Departments from './pages/department/index';
import About from './pages/about/Index';
import Faculty from './pages/faculty/Index';
import AboutHistory from './pages/about-history/Index';
import Campus from './pages/campus/Index';

//programs
import AllPrograms from './pages/ug-programs/Index';
import PgPrograms from './pages/ug-programs/PgPrograms';
import UgPrograms from './pages/ug-programs/UgPrograms';
import Events from './pages/events/Index';
import EventDetails from './pages/event-details/Index';
import Program from './pages/program-details/Index';
import DepartmentOfBasicScience from './pages/department/pages/BasicScience';
import './styles/main.scss'
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import BasicScience from './pages/department/pages/BasicScience';
import ContactUs from './pages/contactus/Index';
import Admission from './pages/admission/Index';
import Test from './pages/home/component/Test';
import DepartmentFaculty from './pages/faculty/DepartmentFaculty';
import Map from './pages/map/Index';
import MainLayout from './MainLayout';
import { AppProvider } from './context/AppContext';
//department pages
import Commerce from './pages/department/pages/Commerce';
import ComputationalStudies from './pages/department/pages/ComputationalStudies';
import ManagementStudies from './pages/department/pages/ManagementStudies';
import Physics from './pages/department/pages/Physics';
import Chemistry from './pages/department/pages/Chemistry';
import Mathematics from './pages/department/pages/Mathematics';
import Tamil from './pages/department/pages/Tamil';
import English from './pages/department/pages/English';
import French from './pages/department/pages/French';
import BioScience from './pages/department/pages/BioScience';
import FoodScience from './pages/department/pages/FoodScience';
import MediaStudies from './pages/department/pages/MediaStudies';

////calender
import Calender from './pages/calender/Index'
//noticeboard
import NoticeBoard from './pages/noticeboard/NoticeBoard'
//test
import PanoramaViewer from './pages/test/Index'
import Placement from './pages/placement/Index';

function App() {
  return (
    <>
    <AppProvider>
     <Router>
      
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/departments/:program" element={<Departments />} /> 
          <Route path="/departments/department-of-basicscience" element={<DepartmentOfBasicScience />} /> 
          <Route path="/program/:program" element={<Program />} /> 
          <Route path="/faculty" element={<Faculty />} /> 
          <Route path="/faculty/:dept" element={<DepartmentFaculty />} /> 
          <Route path="/about-us" element={<About />} /> 
          <Route path="/about/history" element={<AboutHistory />} /> 
          <Route path="/campus" element={<Campus />} /> 
          <Route path="/programs" element={<AllPrograms />} /> 
          <Route path="/ug-programs" element={<UgPrograms />} /> 
          <Route path="/pg-programs" element={<PgPrograms />} /> 
          <Route path="/events" element={<Events />} /> 
          <Route path="/event/:slug" element={<EventDetails />} /> 
          <Route path="/department/basic-science" element={<BasicScience />} /> 
          <Route path="/admission" element={<Admission />}/>
          <Route path="/contact-us" element={<ContactUs />}/> 
          <Route path="/map" element={<Map />} /> 
          <Route path="/virtual-tour" element={<PanoramaViewer />} /> 
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/calender" element={<Calender />} /> 
          <Route path="/calendar" element={<Calender />} /> 
          <Route path="/activities" element={<NoticeBoard />} /> 
          
          {/* ////department pages///// */}
          <Route path="/department/commerce" element={<Commerce />} />
          <Route path="/department/computational-studies" element={<ComputationalStudies />} />
          <Route path="/department/business-studies" element={<ManagementStudies />} />
          <Route path="/department/physics" element={<Physics />} />
          <Route path="/department/chemistry" element={<Chemistry />} />
          <Route path="/department/mathematics" element={<Mathematics />} />
          <Route path="/department/tamil" element={<Tamil />} />
          <Route path="/department/english" element={<English />} />
          <Route path="/department/french" element={<French />} />
          <Route path="/department/bio-science" element={<BioScience />} />
          <Route path="/department/food-science" element={<FoodScience />} />
          <Route path="/department/media-studies" element={<MediaStudies />} />
          {/* ////Placement pages///// */}
          <Route path="/placement" element={<Placement />} />
          <Route path="/test" element={<Test />} />

        </Routes>
      </MainLayout>
    </Router>
    </AppProvider>
    </>
  );
}

export default App;
