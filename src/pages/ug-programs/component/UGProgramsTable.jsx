import { div } from 'framer-motion/client';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const UGProgramsTable = ({ data, category }) => {
  const navigate = useNavigate();
  
 // Step 1: Filter data by UG or PG category
  const filteredData = data.filter(course => course.category === category);

  // Step 2: Group filtered data by department
  const groupedByDepartment = filteredData.reduce((acc, course) => {
    const dept = course.department?.trim() || 'Unspecified Department';
    if (!acc[dept]) acc[dept] = [];
    acc[dept].push(course);
    return acc;
  }, {});

  function handleNavigate(value) {
    navigate(`/program/${value}`); 
  }
  return (
    <div className='ug-program-table'>
           <h3>{category} Programs</h3>
        <div className="table-container">
      <table className="ug-programs-table">
        <thead>
          <tr className='header'>
            <th>Course</th>
            {/* <th>Duration</th> */}
            <th className='fees_header'>Fees/Year</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedByDepartment).map(([departmentName, courses]) => (
            <React.Fragment key={departmentName}>
              <tr className="category-row">
                <td className='cat-heading' colSpan="3">{departmentName}</td>
              </tr>
              {courses.map((program, i) => (
                <tr key={i} onClick={()=>handleNavigate(program.name)}>
                  <td className='items' >{program.name}</td>
                  {/* <td className='items' >{program.fees[0].courseDuration}</td> */}
                  <td id='fees_item' className='items'>{program.fees[0].feePerYear}</td>
                  
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default UGProgramsTable;
