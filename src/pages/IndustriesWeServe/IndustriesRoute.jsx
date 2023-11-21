import { Route, Routes } from "react-router-dom"
import CommunityCollege from "./IndustriesItem/Community College/CommunityCollege"
import LiberalArtsCollege from "./IndustriesItem/Liberal Arts College​/LiberalArtsCollege​"


function IndustriesRoute() {
  return (
    <Routes>
        <Route path="community-college" element={<CommunityCollege/>}/>
        <Route path="liberal-arts-college" element={<LiberalArtsCollege/>}/>
    </Routes>
  )
}

export default IndustriesRoute