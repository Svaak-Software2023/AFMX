import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HandymanSolutionDepartment from './serviceDepartmentItem/handymanSolutionDepartment/HandymanSolutionDepartment'

function DepartmentRoute() {
  return (
<>
    <Routes>
    <Route path="/handyman-solutions-department" element={<HandymanSolutionDepartment/>} />

    </Routes>
</>
  )
}

export default DepartmentRoute