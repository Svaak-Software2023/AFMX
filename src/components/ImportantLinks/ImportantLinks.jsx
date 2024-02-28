import { Link } from "react-router-dom"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { IoIosArrowDropdown } from "react-icons/io";
import "./important.css"

function ImportantLinks() {
    return (
        <>
            <div className="left-menue-main mb-3 left-mobile-menu">
                <Accordion className="m-0 p-0">
                    <AccordionSummary
                        expandIcon={<IoIosArrowDropdown className="open-icon" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="p-0 m-0"
                        style={{ height: "0px", backgroundColor: "var(--blue)" }}
                    >
                        <h3 className="left-menu-heading">
                            Categories
                        </h3>
                    </AccordionSummary>
                    <AccordionDetails className="mt-2 p-0">
                        <div className="left-menue-list">
                            <ul>
                                <li><Link to="" className="Links">Start a Project</Link></li>
                                <li><Link to="/service-list" className="Links">Services we offer</Link></li>
                                <li><Link to="/industrirs-list" className="Links">Industries we serve</Link></li>
                                <li><Link to="/join-AFMX" className="Links">Membership</Link></li>
                                <li><Link to="/media/1" className="Links">Media</Link></li>
                                <li><Link to="" className="Links">Advanced technology & Robotic Cleaning</Link></li>
                                <li><Link to="" className="Links">Employee Self Services</Link></li>
                                <li><Link to="" className="Links">Art and Gallery</Link></li>
                                <li><Link to="" className="Links">Make A Payment</Link></li>
                                <li><Link to="" className="Links">Donations</Link></li>
                                <li><Link to="/afmx-learning/2" className="Links">AFMX learning Center/Education Portal</Link></li>
                                <li><Link to="" className="Links">Complaint Portal</Link></li>
                                <li><Link to="" className="Links">Partner With Us</Link></li>
                                <li><Link to="/about-the-company" className="Links">About The Company</Link></li>
                                <li><Link to="/chemical-regulation" className="Links">Chemical Regulation</Link></li>
                                <li><Link to="" className="Links">Bulletin Board</Link></li>
                                <li><Link to="" className="Links">Past and present Client</Link></li>
                            </ul>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="left-menue-main mb-3 left-window-menu">
                <h3 className="left-menu-heading">
                    Categories
                </h3>
                <div className="left-menue-list">
                    <ul>
                        <li><Link to="" className="Links">Start a Project</Link></li>
                        <li><Link to="/service-list" className="Links">Services we offer</Link></li>
                        <li><Link to="/industrirs-list" className="Links">Industries we serve</Link></li>
                        <li><Link to="/join-AFMX" className="Links">Membership</Link></li>
                        <li><Link to="/media/1" className="Links">Media</Link></li>
                        <li><Link to="" className="Links">Advanced technology & Robotic Cleaning</Link></li>
                        <li><Link to="" className="Links">Employee Self Services</Link></li>
                        <li><Link to="" className="Links">Art and Gallery</Link></li>
                        <li><Link to="" className="Links">Make A Payment</Link></li>
                        <li><Link to="" className="Links">Donations</Link></li>
                        <li><Link to="/afmx-learning/2" className="Links">AFMX learning Center/Education Portal</Link></li>
                        <li><Link to="" className="Links">Complaint Portal</Link></li>
                        <li><Link to="" className="Links">Partner With Us</Link></li>
                        <li><Link to="/about-the-company" className="Links">About The Company</Link></li>
                        <li><Link to="/chemical-regulation" className="Links">Chemical Regulation</Link></li>
                        <li><Link to="" className="Links">Bulletin Board</Link></li>
                        <li><Link to="" className="Links">Past and present Client</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ImportantLinks