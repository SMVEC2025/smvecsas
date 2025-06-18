import { useNavigate } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/header/Navbar"
import TopHeader from "../../components/header/TopHeader"
import About from "./component/About"
import Counter from "./component/Counter"
import Hero from "./component/Hero"
import HomeCampus from "./component/HomeCampus"
import HomeCta from "./component/HomeCta"
import HomeNewsAndEvents from "./component/HomeNewsAndEvents"
import HomeSocial from "./component/HomeSocial"
import Program from "./component/Program"
import './Home.scss'
import { useContext, useEffect } from "react"
import { AppContext } from "../../context/AppContext"
import Placements from "./component/Placements"
import ScrollToTop from "../../components/scrolltotop/ScrollToTop"
function Index() {
  const {setCurrentPage}=useContext(AppContext)
  useEffect(() => {
   setCurrentPage('home')
  }, [])
  
  const programDetails = [
    {
      name: "UG Programs",
      code:"ug",
      id:"1"
    },
    {
      name: "PG Programs",
      code:"pg",
      id:"2"

    }
  ]
   const navigate = useNavigate();
  const handleProgramClick=(code)=>{
    navigate(`/${code}-programs`)
  }
  return (
    <div>
      <ScrollToTop/>
      <Hero />
      <About />
      <Counter />
      <div className='home-program'>
        <div className='overlay'></div>
        <div className='left'>
          <h2>Explore our Academic<br></br> Programs</h2>
          <p>Choose from 16 undergraduate and graduate majors</p>
        </div>
        <div className='right'>
          {programDetails?.map((program, index) => (
            <div key={program.id} onClick={() => { handleProgramClick(program.code) }}>
              {program.name}
            </div>
          ))}

        </div>
      </div>       
      <HomeNewsAndEvents title="SMVEC Events" eventurl="/events" />
      <HomeCampus />
      <Placements/>
      <HomeSocial />
      <HomeCta />


    </div>
  )
}

export default Index