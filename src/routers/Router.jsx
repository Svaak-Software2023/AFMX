import Home from "../pages/Home/Home"
import CreateAccount from "../pages/CreateAccount/CreateAccount";
import HelpingHand from "../pages/helpingHand/HelpingHand";
import Login from "../pages/Login/Login"
import CommingSoon from "../pages/CommingSoon"
import ProductCategory from "../pages/productCategory/ProductCategory"
import Forget from "../pages/Login/Forget"
import ResetPassword from "../pages/Login/ResetPassword"
import TermsConditions from "../pages/terms&conditions/TermsConditions"
import Services from "../pages/services/Services"
import JoinAfmx from "../pages/Membership/JoinAfmx"
import ServiceDepartment from "../pages/serviceDepartment/ServiceDepartment"
import ServiceDepartmentItem from "../pages/serviceDepartment/ServiceDepartmentItem"
import ServiceItem from "../pages/services/ServiceItem"
import CareersAndEmployment from "../pages/CareersAndEmployment/CareersAndEmployment"
import ApplyJob from "../pages/CareersAndEmployment/ApplyJob"
import IndustriesWeServe from "../pages/IndustriesWeServe/IndustriesWeServe"
import ChemicalRegulation from "../pages/categories/chemicalRegulation/ChemicalRegulation"
import AboutTheCompany from "../pages/AFMXCompany/aboutCompany/AboutTheCompany"
import BeforeAndAfter from "../pages/artAndGallery/BeforeAndAfter"
import Vision from "../pages/AFMXCompany/Vision/Vision"
import Mission from "../pages/AFMXCompany/Mission/Mission"
import Statment from "../pages/AFMXCompany/Statment/Statment"
import Legal from "../pages/AFMXCompany/Legal/Legal"
import CoreValue from "../pages/AFMXCompany/Corevalue/CoreValue"
import AFMXLearning from "../pages/AFMXLearning/AFMXLearning"
import Media from "../pages/Media/Media"
import PriceCalculator from "../components/priceCalculator/priceCalculator"
import ComplainPortal from "../pages/complainPortal/ComplainPortal"
import Contact from "../components/Contact/Contact";
import MapLocation from "../pages/mapLocation/MapLocation";
import SubList from "../pages/IndustriesWeServe/SubList";
import IndustriesSubItemPage from "../pages/IndustriesWeServe/IndustriesItem/IndustriesSubItemPage";
import ComplaintList from "../pages/userDashboard/complaintList/ComplaintList";
import UserDashboard from "../pages/userDashboard/UserDashboard";
import HandymanSolutionDepartment from "../pages/serviceDepartment/serviceDepartmentItem/handymanSolutionDepartment/HandymanSolutionDepartment"
import AssemblyDepartment from "../pages/serviceDepartment/serviceDepartmentItem/AssemblyDepartment/AssemblyDepartment";
import RemodlingDepartment from "../pages/serviceDepartment/serviceDepartmentItem/RemodlingDepartment/RemodlingDepartment";
import AtticInstallationAndRepairDepartment from "../pages/serviceDepartment/serviceDepartmentItem/AtticInstallationAndRepairDepartment/AtticInstallationAndRepairDepartment";
import FloorInstallation from "../pages/serviceDepartment/serviceDepartmentItem/FloorInstallationandRepair/FloorInstallation";
import JunkRemovalandHaulingDepartment from "../pages/serviceDepartment/serviceDepartmentItem/JunkRemoval/JunkRemovalandHaulingDepartment";
import HandymanDepartment from "../pages/serviceDepartment/serviceDepartmentItem/HandymanDepartment.jsx/HandymanDepartment";
import FlowerandGardenBedMaintenanceDepartment from "../pages/serviceDepartment/serviceDepartmentItem/FlowerandGardenBedMaintenanceDepartment/FlowerandGardenBedMaintenanceDepartment";
import LandscapeDesignandInstallation from "../pages/serviceDepartment/serviceDepartmentItem/LandscapeDesignandInstallation/LandscapeDesignandInstallation";
import CarpentryInstallationAndRepairDepartment from "../pages/serviceDepartment/serviceDepartmentItem/CarpentryInstallationAndRepairDepartment/CarpentryInstallationAndRepairDepartment";
import LawnCareDepartment from "../pages/serviceDepartment/serviceDepartmentItem/LawnCareDepartment/LawnCareDepartment";
import TreeAndShrubDepartment from "../pages/serviceDepartment/serviceDepartmentItem/TreeAndShrubDepartment/TreeAndShrubDepartment";
import FertilizationWeedandPestDepartment from "../pages/serviceDepartment/serviceDepartmentItem/Fertilization,WeedandPestDepartment/FertilizationWeedandPestDepartment";
import LawnMaintenanceDepartment from "../pages/serviceDepartment/serviceDepartmentItem/LawnMaintenanceDepartment/LawnMaintenanceDepartment";
import GroundsMaintenanceDepartment from "../pages/serviceDepartment/serviceDepartmentItem/GroundsMaintenanceDepartment/GroundsMaintenanceDepartment";
import PorterandMatronDepartment from "../pages/serviceDepartment/serviceDepartmentItem/PorterandMatronDepartment/PorterandMatronDepartment";
import TechnologyAndDataCentersDepartment from "../pages/serviceDepartment/serviceDepartmentItem/TechnologyAndDataCentersDepartment/TechnologyAndDataCentersDepartment";
import ExteriorPaintingDepartment from "../pages/serviceDepartment/serviceDepartmentItem/ExteriorPaintingDepartment/ExteriorPaintingDepartment";
import AssemblyDepartmentList from "../pages/serviceDepartment/serviceDepartmentItem/AssemblyDepartment/AssemblyDepartmentList";
import AssamblyDepartmentItem from "../pages/serviceDepartment/serviceDepartmentItem/AssemblyDepartment/AssamblyDepartmentItem";
import RestroomClinicRXDepartment from "../pages/serviceDepartment/serviceDepartmentItem/RestroomClinicRXDepartment/RestroomClinicRXDepartment";
import HvacRepairAndServicesDepartment from "../pages/serviceDepartment/serviceDepartmentItem/HvacRepairAndServicesDepartment/HvacRepairAndServicesDepartment";
import Cart from "../pages/Cart/Cart";
import SingleProduct from "../pages/productCategory/SingleProduct";
import DeliveryAddress from "../pages/Cart/DeliveryAddress";
import ThankyouPage from "../components/paymentSuccess/ThankyouPage";
import RestroomRXMemberships from "../pages/serviceDepartment/serviceDepartmentItem/RestroomClinicRXDepartment/RestroomRXMemberships";
import AddToCart from "../pages/Cart/AddToCart";
import RestroomRxService from "../pages/serviceDepartment/serviceDepartmentItem/RestroomRXServices/RestroomRXServices";
import RestroomRxServices from "../pages/serviceDepartment/serviceDepartmentItem/RestroomRXServices/RestroomRXServices";
import RestroomRXIndustriesWeServices from "../pages/serviceDepartment/serviceDepartmentItem/RestroomRXIndustriesWeServices/RestroomRXIndustriesWeServices";
import NotFound from "../assets/404/NotFound";
import Success from "../components/paymentSuccess/Success";
import Failed from "../components/paymentSuccess/Failed";
import InternetConnectionStatus from "../assets/connection/InternetConnectionStatus";
import ServiceDepartmentList from "../pages/Home/ServiceDepartmentList";
import ChatBot from "../pages/ChatBot/ChatBot";
import GMap from "../pages/mapLocation/GMap";

export const navigation = [
    { path: "*", name: "Default", element: <NotFound />, isPrivate: false },
    { path: "/offline", name: "Offline", element: <InternetConnectionStatus />, isPrivate: false },

    { path: "/", name: "Home", element: <Home />, isPrivate: false },
    { path: "/login", name: "Login", element: <Login />, isPrivate: false },
    { path: "/create-account", name: "Create Account", element: <CreateAccount />, isPrivate: false },
    { path: "/helping-hand/:id", name: "Helping Hand", element: <HelpingHand />, isPrivate: false },

    // shopping center 
    { path: "/product/:name/:id", name: "Product Category", element: <ProductCategory />, isPrivate: false },
    { path: "/single-product/:parent/:childe", name: "Single Product", element: <SingleProduct />, isPrivate: false },



    { path: "/user-dashboard", name: "User Dashboard", element: <UserDashboard />, isPrivate: true },
    { path: "/user-complaint-list", name: "User Compalint List", element: <ComplaintList />, isPrivate: true },

    { path: "/service-department/:name", name: "Service Department", element: <ServiceDepartment />, isPrivate: false },
    { path: "/service-department/:parentName/:childName", name: "Service Department Item", element: <ServiceDepartmentItem />, isPrivate: false },
    // Service Departments 
    { path: "/service-department-list", name: "Service Department List", element: <ServiceDepartmentList />, isPrivate: false },

    { path: "/service-department/handyman-solutions-department", name: "Handyman solutions department", element: <HandymanSolutionDepartment />, isPrivate: false },
    { path: "/service-department/Assembly department", name: "Assembly Department", element: <AssemblyDepartment />, isPrivate: false },

    { path: "/service-department/assembly-department-list/:id", name: "Assembly Department List", element: <AssemblyDepartmentList />, isPrivate: false },
    { path: "/service-department/assembly-department-list/:id/:name", name: "Assembly Department List", element: <AssamblyDepartmentItem />, isPrivate: false },
    { path: "/service-department/Attic Installation And Repair Department", name: "Attic Installation And Repair Department", element: <AtticInstallationAndRepairDepartment />, isPrivate: false },
    { path: "/service-department/Remodeling department", name: "Remodeling department", element: <RemodlingDepartment />, isPrivate: false },
    { path: "/service-department/Restroom Clinic RX", name: "Restroom Clinic RX", element: <RestroomClinicRXDepartment />, isPrivate: false },
    { path: "/service-department/Restroom RX Memberships", name: "Restroom RX Memberships", element: <RestroomRXMemberships />, isPrivate: false },
    { path: "/service-department/Restroom RX Services", name: "Restroom RX Services", element: <RestroomRxServices />, isPrivate: false },
    { path: "/service-department/Restroom RX Industries We Services", name: "Restroom RX Industries We Services", element: <RestroomRXIndustriesWeServices />, isPrivate: false },
    { path: "/service-department/Floor installation and repair department", name: "Floor installation and repair department", element: <FloorInstallation />, isPrivate: false },
    { path: "/service-department/Junk removal and hauling department", name: "Junk removal and hauling department", element: <JunkRemovalandHaulingDepartment />, isPrivate: false },
    { path: "/service-department/Handyman department", name: "Handyman department", element: <HandymanDepartment />, isPrivate: false },
    { path: "/service-department/Flower and garden bed maintenance department", name: "Flower and garden bed maintenance department", element: <FlowerandGardenBedMaintenanceDepartment />, isPrivate: false },
    { path: "/service-department/Landscape design and installation", name: "Landscape design and installation", element: <LandscapeDesignandInstallation />, isPrivate: false },
    { path: "/service-department/Carpentry installation and repair department", name: "Carpentry installation and repair department", element: <CarpentryInstallationAndRepairDepartment />, isPrivate: false },
    { path: "/service-department/Lawn care department", name: "Lawn care department", element: <LawnCareDepartment />, isPrivate: false },
    { path: "/service-department/Tree and shrub maintenance department", name: "Tree and shrub maintenance department", element: <TreeAndShrubDepartment />, isPrivate: false },
    { path: "/service-department/Fertilization, Weed and Pest Department", name: "Fertilization, Weed and Pest Department", element: <FertilizationWeedandPestDepartment />, isPrivate: false },
    { path: "/service-department/Lawn maintenance department", name: "Lawn maintenance department", element: <LawnMaintenanceDepartment />, isPrivate: false },
    { path: "/service-department/Grounds maintenance department", name: "Grounds maintenance department", element: <GroundsMaintenanceDepartment />, isPrivate: false },
    { path: "/service-department/Porter and matron department", name: "Porter and matron department", element: <PorterandMatronDepartment />, isPrivate: false },
    { path: "/service-department/Technology And Data Centers Department", name: "Technology And Data Centers Department", element: <TechnologyAndDataCentersDepartment />, isPrivate: false },
    { path: "/service-department/Exterior painting department", name: "Exterior painting department", element: <ExteriorPaintingDepartment />, isPrivate: false },
    { path: "/service-department/Hvac Repair and Services Department", name: "Hvac Repair and Services Department", element: <HvacRepairAndServicesDepartment />, isPrivate: false },

    // End of Service Departments Data 

    { path: "/forget-password", name: "Forget Passwordme", element: <Forget />, isPrivate: false },
    { path: "/reset-password", name: "Reset Password", element: <ResetPassword />, isPrivate: false },
    { path: "/terms-condition/:id", name: "Terms Conditions", element: <TermsConditions />, isPrivate: false },
    { path: "/services/:id", name: "Services", element: <Services />, isPrivate: false },
    { path: "/service-list", name: "Services", element: <Services />, isPrivate: false },
    { path: "/service-list-item/:name", name: "Service List Item", element: <ServiceItem />, isPrivate: false },
    { path: "/careers-employment", name: "Careers And Employment", element: <CareersAndEmployment />, isPrivate: false },
    { path: "/apply-job/:title", name: "Apply Job", element: <ApplyJob />, isPrivate: false },
    { path: "/join-AFMX", name: "Join Afmx", element: <JoinAfmx />, isPrivate: false },
    { path: "/industries-list", name: "Industries We Serve", element: <IndustriesWeServe />, isPrivate: false },
    { path: "/industries-list/:name", name: "Industries List", element: <SubList />, isPrivate: false },
    { path: "/industries-list/:parentName/:name", name: "Industries Sub Item Page", element: <IndustriesSubItemPage />, isPrivate: false },
    { path: "/price-calculator", name: "Price Calculator", element: <PriceCalculator />, isPrivate: false },
    { path: "/complain-portal", name: "Complain Portal", element: <ComplainPortal />, isPrivate: false },
    { path: "/contact", name: "contact", element: <Contact />, isPrivate: false },
    { path: "/location", name: "Map Location", element: <MapLocation />, isPrivate: false },
    { path: "/chemical-regulation", name: "Chemical Regulation", element: <ChemicalRegulation />, isPrivate: false },
    { path: "/about-the-company", name: "About The Company", element: <AboutTheCompany />, isPrivate: false },
    { path: "/afmx-learning/:id", name: "AFMX Learning", element: <AFMXLearning />, isPrivate: false },
    { path: "/media/:id", name: "Media", element: <Media />, isPrivate: false },
    { path: "/mission", name: "Mission", element: <Mission />, isPrivate: false },
    { path: "/statment", name: "Statment", element: <Statment />, isPrivate: false },
    { path: "/vision", name: "Vision", element: <Vision />, isPrivate: false },
    { path: "/core-value", name: "Core Value", element: <CoreValue />, isPrivate: false },
    { path: "/legal", name: "Legal", element: <Legal />, isPrivate: false },
    { path: "/before-after", name: "Before And After", element: <BeforeAndAfter />, isPrivate: false },
    { path: "/new", name: "Comming Soon", element: <CommingSoon />, isPrivate: false },

    // start Cart add to cart delivery address checkout order place route
    { path: "/cart", name: "Cart", element: <Cart />, isPrivate: false },
    { path: "/buy_now/:totalAmount", name: "DeliveryAddress", element: <DeliveryAddress />, isPrivate: false },
    { path: "/thank_you", name: "ThankYou", element: <ThankyouPage />, isPrivate: false },
    // End Cart add to cart delivery address checkout order place route

    { path: "/restroom_RXMemberships", name: "Membership", element: <RestroomRXMemberships />, isPrivate: false },
    { path: "/success", name: "Success", element: <Success />, isPrivate: false },
    { path: "/failed", name: "Failed", element: <Failed />, isPrivate: false },
    { path: "/map", name: "map", element: <GMap />, isPrivate: false }

]