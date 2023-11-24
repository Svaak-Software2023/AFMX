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

import ResidentialGeneralContractors from "./IndustriesItem/Residential General Contractors/ResidentialGeneralContractors"
import ApartmentOwners from "./IndustriesItem/Apartment Owners/ApartmentOwners"
import GuestHouse from "./IndustriesItem/Guest House/GuestHouse"

import CruiseShip from "./IndustriesItem/Cruise Ship/CruiseShip"
import FacilityManagers from "./IndustriesItem/Facility Managers/FacilityManagers"
import BoutiqueHotel from "./IndustriesItem/Boutique Hotel/BoutiqueHotel"
import ReligiousUniversities from "./IndustriesItem/Religious Universities/ReligiousUniversities"
import YachtClub from "./IndustriesItem/Yacht Club/YachtClub"
import IndependentLiving from "./IndustriesItem/Independent Living/IndependentLiving"
import InternalCorporateEvent from "./IndustriesItem/Internal Corporate Event/InternalCorporateEvent"
import Casinos from "./IndustriesItem/Casinos/Casinos"
import CarDealerships from "./IndustriesItem/Car Dealerships/CarDealerships"
import CorporateOffices from "./IndustriesItem/Corporate Offices/CorporateOffices"
import PetFriendlyResort from "./IndustriesItem/Pet Friendly Resort/PetFriendlyResort"
import ListItemWithImage from "../../components/list of item with image/ListItemWithImage"
import industryweserveData from "../../assets/data/industriesWeServeData.json"

function IndustriesRoute() {
  return (
    <Routes>
      <Route path="/community-college" element={<CommunityCollege />} />
      <Route path="/liberal-arts-college" element={<LiberalArtsCollege />} />
      <Route path="/ivy-league-university" element={<IvyLeagueUniversity />} />
      <Route path="/nonprofit-college" element={<NonprofitCollege />} />
      <Route path="/technical-school" element={<TechnicalSchool />} />
      <Route path="/commercial-general-contractors" element={<CommercialGeneralContractors />} />
      <Route path="/bed-and-breakfast" element={<BedAndBreakfast />} />
      <Route path="/hostel" element={<Hostel />} />
      <Route path="/motel" element={<Motel />} />
      <Route path="/inn" element={<Inn />} />
      <Route path="/apartment-hotel" element={<ApartmentHotel />} />
      <Route path="/univercity-list" element={<ListItemWithImage propData={industryweserveData[0].data}/>} />



      
      <Route path="/residential-general-contractors" element={<ResidentialGeneralContractors />} />
      <Route path="/facility-managers" element={<FacilityManagers />} />
      <Route path="/apartment-owners" element={<ApartmentOwners />} />
      <Route path="/guest-house" element={<GuestHouse />} />
      <Route path="/boutique-hotel" element={<BoutiqueHotel />} />
      <Route path="/religious-universities" element={<ReligiousUniversities />} />
      <Route path="/yacht-club" element={<YachtClub />} />
      <Route path="/independent-living" element={<IndependentLiving />} />
      <Route path="/internal-corporate-event" element={<InternalCorporateEvent />} />
      <Route path="/casinos" element={<Casinos />} />
      <Route path="/car-dealerships" element={<CarDealerships />} />
      <Route path="/corporate-offices" element={<CorporateOffices />} />
      <Route path="/pet-friendly-resort" element={<PetFriendlyResort />} />
      <Route path="/cruise-ship" element={<CruiseShip />} />

    </Routes>
  )
}

export default IndustriesRoute