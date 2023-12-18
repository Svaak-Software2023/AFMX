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
import IndustryItem from "../pages/IndustriesWeServe/IndustryItem"
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
import Loader from "../components/Loader/Loader";
import MapLocation from "../pages/mapLocation/MapLocation";
import SubList from "../pages/IndustriesWeServe/SubList";
import IndustriesSubItemPage from "../pages/IndustriesWeServe/IndustriesItem/IndustriesSubItemPage";
import HandymanSolutionDepartment from "../pages/serviceDepartment/serviceDepartmentItem/handymanSolutionDepartment/HandymanSolutionDepartment";
import AtticInstallationAndRepairDepartment from "../pages/serviceDepartment/serviceDepartmentItem/AtticInstallationAndRepairDepartment/AtticInstallationAndRepairDepartment";
import AssemblyDepartment from "../pages/serviceDepartment/serviceDepartmentItem/AssemblyDepartment/AssemblyDepartment";
import CarpentryInstallationAndRepairDepartment from "../pages/serviceDepartment/serviceDepartmentItem/CarpentryInstallationAndRepairDepartment/CarpentryInstallationAndRepairDepartment";
import UserDashboard from "../pages/userDashboard/UserDashboard";
import ExistingClients from "../pages/complainPortal/ExistingClients";

export const navigation = [
    { path: "*", name: "Default", element: <p>There's nothing here: 404!</p>, isPrivate: false },
    { path: "/", name: "Home", element: <Home />, isPrivate: false },
    { path: "/login", name: "Login", element: <Login />, isPrivate: false },
    { path: "/create-account", name: "Create Account", element: <CreateAccount />, isPrivate: false },
    { path: "/helping-hand/:id", name: "Helping Hand", element: <HelpingHand />, isPrivate: false },
    { path: "/product/:id", name: "Product Category", element: <ProductCategory />, isPrivate: false },
    { path: "/user-dashboard/:type", name: "User Dashboard", element: <UserDashboard />, isPrivate: false },
    { path: "/service-department/:name", name: "Service Department", element: <ServiceDepartment />, isPrivate: false },
    { path: "/service-department-item/:parentId/:ItemId", name: "Service Department Item", element: <ServiceDepartmentItem />, isPrivate: false },
    { path: "/handyman-solutions-department", name: "Handyman Solution Department", element: <HandymanSolutionDepartment />, isPrivate: false },
    { path: "/assembly-department", name: "Assembly Department", element: <AssemblyDepartment />, isPrivate: false },
    { path: "/attic-installation-and-repair-department", name: "Attic Installation And Repair Department", element: <AtticInstallationAndRepairDepartment />, isPrivate: false },
    { path: "/carpentry-installation-and-repair-department", name: "Carpentry Installation And Repair Department", element: <CarpentryInstallationAndRepairDepartment />, isPrivate: false },
    { path: "/forget-password", name: "Forget Passwordme", element: <Forget />, isPrivate: false },
    { path: "/reset-password", name: "Reset Password", element: <ResetPassword />, isPrivate: false },
    { path: "/terms-condition/:id", name: "Terms Conditions", element: <TermsConditions />, isPrivate: false },
    { path: "/services/:id", name: "Services", element: <Services />, isPrivate: false },
    { path: "/service-list", name: "Services", element: <Services />, isPrivate: false },
    { path: "/service-list-item/:id", name: "Service List Item", element: <ServiceItem />, isPrivate: false },
    { path: "/careers-employment", name: "Careers And Employment", element: <CareersAndEmployment />, isPrivate: false },
    { path: "/apply-job", name: "Apply Job", element: <ApplyJob />, isPrivate: false },
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
    { path: "/new", name: "Comming Soon", element: <CommingSoon />, isPrivate: false }
]