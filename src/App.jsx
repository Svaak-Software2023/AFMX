import { Route, Routes, useLocation } from "react-router-dom"
import React, { lazy, Suspense } from 'react';
import { FaArrowUp } from "react-icons/fa";
import 'react-lazy-load-image-component/src/effects/blur.css';

// Import the component lazily
// const Home = lazy(() => import("./pages/Home/Home"));

import "./App.css"
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import CommingSoon from "./pages/CommingSoon"
import Footer from "./components/Footer/Footer"
import { useEffect, useState } from "react"
import Login from "./pages/Login/Login"
import CreateAccount from "./pages/CreateAccount/CreateAccount"
import { ToastContainer } from 'react-toastify';
import HelpingHand from "./pages/helpingHand/HelpingHand"
import ProductCategory from "./pages/productCategory/ProductCategory"
import Forget from "./pages/Login/Forget"
import ResetPassword from "./pages/Login/ResetPassword"
import TermsConditions from "./pages/terms&conditions/TermsConditions"
import Services from "./pages/services/Services"
import JoinAfmx from "./pages/Membership/JoinAfmx"
import ServiceDepartment from "./pages/serviceDepartment/ServiceDepartment"
import ServiceDepartmentItem from "./pages/serviceDepartment/ServiceDepartmentItem"
import ServiceItem from "./pages/services/ServiceItem"
import CareersAndEmployment from "./pages/CareersAndEmployment/CareersAndEmployment"
import ApplyJob from "./pages/CareersAndEmployment/ApplyJob"
import IndustriesWeServe from "./pages/IndustriesWeServe/IndustriesWeServe"
import IndustryItem from "./pages/IndustriesWeServe/IndustryItem"
import ChemicalRegulation from "./pages/categories/chemicalRegulation/ChemicalRegulation"
import AboutTheCompany from "./pages/AFMXCompany/aboutCompany/AboutTheCompany"
import BeforeAndAfter from "./pages/artAndGallery/BeforeAndAfter"
import Vision from "./pages/AFMXCompany/Vision/Vision"
import Mission from "./pages/AFMXCompany/Mission/Mission"
import Statment from "./pages/AFMXCompany/Statment/Statment"
import Legal from "./pages/AFMXCompany/Legal/Legal"
import CoreValue from "./pages/AFMXCompany/Corevalue/CoreValue"
import AFMXLearning from "./pages/AFMXLearning/AFMXLearning"
import Media from "./pages/Media/Media"
import PriceCalculator from "./components/priceCalculator/priceCalculator"
import ComplainPortal from "./pages/complainPortal/ComplainPortal"
import Contact from "./components/Contact/Contact";
import Loader from "./components/Loader/Loader";
import MapLocation from "./pages/mapLocation/MapLocation";
import SubList from "./pages/IndustriesWeServe/SubList";
import IndustriesSubItemPage from "./pages/IndustriesWeServe/IndustriesItem/IndustriesSubItemPage";
import HandymanSolutionDepartment from "./pages/serviceDepartment/serviceDepartmentItem/handymanSolutionDepartment/HandymanSolutionDepartment";
import AtticInstallationAndRepairDepartment from "./pages/serviceDepartment/serviceDepartmentItem/AtticInstallationAndRepairDepartment/AtticInstallationAndRepairDepartment";
import AssemblyDepartment from "./pages/serviceDepartment/serviceDepartmentItem/AssemblyDepartment/AssemblyDepartment";
import CarpentryInstallationAndRepairDepartment from "./pages/serviceDepartment/serviceDepartmentItem/CarpentryInstallationAndRepairDepartment/CarpentryInstallationAndRepairDepartment";



function App() {
  const [showButton, setShowButton] = useState(false);

  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    // Add an event listener to track scroll position
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="m-0 backgroundPage">
        <Routes>
          <Route path="/" element={<Suspense fallback={<Loader />}><Home /></Suspense>} />
          <Route path="/new" element={<CommingSoon />} />
          <Route path="/employee-login" element={<Login loginType={"Employee Login"} />} />
          <Route path="/client-login" element={<Login loginType={"Client Login"} />} />
          <Route path="/federal-govrment-login" element={<Login loginType={"Federal Government Login"} />} />
          <Route path="/admin-login" element={<Login loginType={"Admin Login"} />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/helping-hand/:id" element={<HelpingHand />} />
          <Route path="/product/:id" element={<ProductCategory />} />










          <Route path="/service-department/:name" element={<ServiceDepartment />} />
          <Route path="/service-department-item/:parentId/:ItemId" element={<ServiceDepartmentItem />} />
          <Route path="/handyman-solutions-department" element={<HandymanSolutionDepartment />} />
          <Route path="/assembly-department" element={<AssemblyDepartment />} />
          <Route path="/attic-installation-and-repair-department" element={<AtticInstallationAndRepairDepartment />} />
          <Route path="/carpentry-installation-and-repair-department" element={<CarpentryInstallationAndRepairDepartment />} />




          {/* <DepartmentRoute/> */}









          <Route path="/forget-password" element={<Forget />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/terms-condition/:id" element={<TermsConditions />} />
          <Route path="/services/:id" element={<Services />} />
          <Route path="/join-AFMX" element={<JoinAfmx />} />
          <Route path="/service-list" element={<Services />} />
          <Route path="/service-list-item/:id" element={<ServiceItem />} />
          <Route path="/careers-employment" element={<CareersAndEmployment />} />
          <Route path="/apply-job" element={<ApplyJob />} />

          <Route path="/industries-list" element={<IndustriesWeServe />} />
          <Route path="/industries-list/:name" element={<SubList />} />
          <Route path="/industries-list/:parentName/:name" element={<IndustriesSubItemPage />} />

          <Route path="/price-calculator" element={<PriceCalculator />} />
          <Route path="/complain-portal" element={<Loader />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<MapLocation />} />


          {/* important links  category */}
          <Route path="/chemical-regulation" element={<ChemicalRegulation />} />
          <Route path="/about-the-company" element={<AboutTheCompany />} />
          <Route path="/about-the-company" element={<AboutTheCompany />} />
          <Route path="/afmx-learning/:id" element={<AFMXLearning />} />

          {/* media  */}

          <Route path="/media/:id" element={<Media />} />
          {/* AFMX Company  */}
          <Route path="/mission" element={<Mission />} />
          <Route path="/statment" element={<Statment />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/core-value" element={<CoreValue />} />
          <Route path="/legal" element={<Legal />} />
          {/* art and gallery */}
          <Route path="/before-after" element={<BeforeAndAfter />} />
        </Routes>

      </div>
      <Footer />
      {showButton && (
        <div
          className="back-to-top d-flex align-items-center justify-content-center active"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-white" />
        </div>
      )}
    </>
  )
}


export default App



