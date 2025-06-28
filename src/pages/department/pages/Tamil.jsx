import React from 'react'
import Home from '../component/Home'
import Footer from '../../../components/footer/Footer'
import About from '../component/About'
import Program from '../../home/component/Program'
import HomeCta from '../../home/component/HomeCta'
import HomeNewsAndEvents from '../../home/component/HomeNewsAndEvents'
import MissionVision from '../component/MissionAndVision'
import Navbar from '../../../components/header/Navbar'
import HodSection from '../component/HodSection'
import Faculty from '../component/Faculty'
import { ProgramData } from '../../../data/ProgramData'
import { HelmetProvider, Helmet } from 'react-helmet-async';

function Tamil() {
  const page = "tamil"
  const aboutData = {
    heading: `Department of ${page}`,
    url: 'tamil',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mk3qDELXEniKlj4r/adobestock_200491542-YZ9xbW14bMTE3rNG.jpeg',
    para: "The Department of Professional Studies at Sri Manakula Vinayagar Engineering College is a hub for excellence in career-focused education, designed to align students with industry standards and future career paths. Established with the vision to offer programs that combine academic rigor with real-world applicability, the department empowers students through a curriculum that integrates professional certifications, experiential learning, and industry exposure.At SMVEC, the Department of Professional Studies offers specialized undergraduate programs that blend foundational knowledge in arts and science with professional disciplines like Business Analytics, Digital Marketing, FinTech, Data Science, Aviation, Hospitality Management, and more. The programs are structured to meet the needs of today’s fast-evolving job markets, where interdisciplinary skills and adaptability are crucial."
  }
  const programDetails = ProgramData?.filter(program => program.department.toLocaleLowerCase() == page.toLocaleLowerCase())
  const HodData = {
    image: "/assets/img/department/faculty/tamil/Dr.M.VANITH.webp",
    name: "Dr.M.VANITHA",
    message: "தமிழுக்கு அமுதென்றுபேர் - அந்தத் தமிழ் இன்பத்தமிழ் எங்கள் உயிருக்கு நேர்! - பாவேந்தர் பாரதிதாசன்.Language is more than a communication tool—it is a vessel that carries the essence of a civilization, its culture, values, and wisdom. Tamil, one of the world’s oldest languages, is a literary treasure that spans over 5,000 years. Our department strives to instill a deep appreciation for the richness of Tamil among today’s youth. Through dedicated teaching and celebration of the languages nuances, we aim to empower our students to excel academically and culturally. எங்கும் உள்ளது என்தமிழ்! இமயத்தின் எல்லை கண்ட என்தமிழ்! என்றும் வாழியவே!"
  }
  const missionData = {
    mission: "To provide structured exercises in reading, writing, and speaking Tamil fluently and correctly. To teach the five core elements of Tamil grammar—script, vocabulary,meaning, syntax, and structure—along with literary history and classical texts.",
    vision: "To preserve the enduring glory of the Tamil language and to cultivate its relevance in the evolving global context."
  }
  return (
    <>
      <HelmetProvider>
        <title>Tamil | SMVEC SAS</title>
        <meta name="description" content="Start your carreer today in Tamil" />
        {/* <link rel="icon" href="/favicon-new.ico" /> */}
      </HelmetProvider>
      <Home title={`Department of ${page}`} image='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mk3qDELXEniKlj4r/adobestock_200491542-YZ9xbW14bMTE3rNG.jpeg' />
      <About data={aboutData} />
      <HodSection HodData={HodData} />
      <MissionVision missionData={missionData} />
      <Program programDetail={programDetails} />
      <Faculty dept="tamil" />
      <HomeNewsAndEvents title="SMVEC Events" dept="tamil" eventurl="/events/tamil" />
      <HomeCta />
    </>
  )
}

export default Tamil