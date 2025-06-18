import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../components/header/Navbar';
import BreadcrumbTwo from '../../components/breadcrumb/BreadCrumb';
import Footer from '../../components/footer/Footer';
import CourseDetailSection from './component/CourseDetailSection';
import { ProgramData } from '../../data/ProgramData';
function Index() {
    const { program } = useParams();
    const decodedProgram = decodeURIComponent(program);
    const [filteredProgram, setFilteredProgram] = useState([])
    console.log(decodedProgram)
   

    useEffect(() => {
        const filter = ProgramData.filter(course => course.name == decodedProgram)
        setFilteredProgram(filter)
        console.log("decodedProgram", decodedProgram)
    }, [])
    console.log("filteredProgram", filteredProgram)
    return (
        <>
            {filteredProgram ? (
                <>
                    <BreadcrumbTwo title={filteredProgram[0]?.name} subtitle={filteredProgram[0]?.name}/>
                    <CourseDetailSection courseData={filteredProgram[0]} />
                </>
            ) : "Loading..."}
        </>
    )
}

export default Index