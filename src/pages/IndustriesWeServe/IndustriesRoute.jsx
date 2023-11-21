import { Route, Routes } from "react-router-dom"
import CommunityCollege from "./IndustriesItem/Community College/CommunityCollege"
import LiberalArtsCollege from "./IndustriesItem/Liberal Arts College/LiberalArtsCollege"
import IvyLeagueUniversity from "./IndustriesItem/Ivy League University/IvyLeagueUniversity"
import NonprofitCollege from "./IndustriesItem/Nonprofit College/NonprofitCollege"
import TechnicalSchool from "./IndustriesItem/Technical School/TechnicalSchool"


function IndustriesRoute() {
  return (
    <Routes>
        <Route path="/community-college" element={<CommunityCollege/>}/>
        <Route path="/liberal-arts-college" element={<LiberalArtsCollege/>}/>
        <Route path="/ivy-league-university" element={<IvyLeagueUniversity/>}/>
        <Route path="/nonprofit-college" element={<NonprofitCollege/>}/>
        <Route path="/technical-school" element={<TechnicalSchool/>}/>
    </Routes>
  )
}

export default IndustriesRoute