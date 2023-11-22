import { Route, Routes } from "react-router-dom"
import CommunityCollege from "./IndustriesItem/Community College/CommunityCollege"
import LiberalArtsCollege from "./IndustriesItem/Liberal Arts College/LiberalArtsCollege"
import IvyLeagueUniversity from "./IndustriesItem/Ivy League University/IvyLeagueUniversity"
import NonprofitCollege from "./IndustriesItem/Nonprofit College/NonprofitCollege"
import TechnicalSchool from "./IndustriesItem/Technical School/TechnicalSchool"
import CommercialGeneralContractors from "./IndustriesItem/Commercial General Contractors/CommercialGeneralContractors"
import BedAndBreakfast from "./IndustriesItem/Bed and breakfast/BedAndBreakfast​"
import Hostel from "./IndustriesItem/Hostel/Hostel"
import Motel from "./IndustriesItem/Motel/Motel"
import Inn from "./IndustriesItem/Inn/Inn"
import ApartmentHotel from "./IndustriesItem/Apartment Hotel/ApartmentHotel"


function IndustriesRoute() {
  return (
    <Routes>
        <Route path="/community-college" element={<CommunityCollege/>}/>
        <Route path="/liberal-arts-college" element={<LiberalArtsCollege/>}/>
        <Route path="/ivy-league-university" element={<IvyLeagueUniversity/>}/>
        <Route path="/nonprofit-college" element={<NonprofitCollege/>}/>
        <Route path="/technical-school" element={<TechnicalSchool/>}/>
        <Route path="/commercial-general-contractors" element={<CommercialGeneralContractors/>}/>
        <Route path="/bed-and-breakfast" element={<BedAndBreakfast/>}/>
        <Route path="/hostel" element={<Hostel/>}/>
        <Route path="/motel" element={<Motel/>}/>
        <Route path="/inn" element={<Inn/>}/>
        <Route path="/apartment-hotel" element={<ApartmentHotel/>}/>
    </Routes>
  )
}

export default IndustriesRoute