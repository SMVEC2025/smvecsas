import React from 'react'
import UGProgramsTable from '../../ug-programs/component/UGProgramsTable'

function CourseDetailSection({ courseData }) {
    console.log(courseData)
    return (
        <div className='container program_details-main'>
            <h2 className='title-main'>{courseData?.name}</h2>
            <p className='desc' style={{ whiteSpace: "pre-line" }}>{courseData?.desc}</p>
            <h2>Fees Structure</h2>
            {courseData?.fees?.map((element, index) => (
                <>
                    <h4>{element?.title}</h4>
                    <div className='program-table'>
                        <div className="table-container">
                            <table className="ug-programs-table">
                                <thead>
                                    <tr className='header'>
                                        <th>Duration</th>
                                        <th>Fee / Year</th>
                                        <th className='fees_header'>Intake</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <td className='items'>{element?.courseDuration}</td>
                                        <td className='items'>{element?.feePerYear}</td>
                                        <td id='fees_item' className='items'>{element?.intake}</td>
                                        {console.log(courseData?.fees)}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            ))}

            <h2 className='eligiblity-head'>eligibility</h2>
            <p>{courseData?.eligibility}</p>
            <h2>Career opportunities</h2>
            <div className='career-opportunity'>
                {courseData?.careerOpportunities?.map((item, index) => (
                    <>
                        <h3>{item.title}</h3>

                        <div >
                            {item?.opportunity?.map((e, i) => (
                                <li>{e}</li>
                            ))}
                        </div>
                    </>
                ))}

            </div>


            <h2>Curriculum and Syllabus</h2>
            <div className='bos-grid' >
                {courseData?.curriculumAndSyllabus?.map((item, index) => (
                    <button className='button-course'>{item.name}</button>
                ))}
            </div>
            <h2>Board of Studies</h2>
            <div className='bos-grid' >
                {courseData?.boardOfStudies?.map((item, index) => (
                    <button className='button-course'>{item.name}</button>
                ))}
            </div>
        </div>
    )
}

export default CourseDetailSection