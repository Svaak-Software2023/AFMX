import { Link } from "react-router-dom"
import "./important.css"

function ImportantLinks() {
    return (
        <div className="left-menue-main mb-3">
            <h3 className="left-menu-heading">
                Categories
            </h3>
            <div className="left-menue-list">
                <ul>
                    <li><Link to="" className="Links">Start a Project</Link></li>
                    <li><Link to="/service-list" className="Links">Services we offer</Link></li>
                    <li><Link to="/industrirs-list" className="Links">Industries we serve</Link></li>
                    <li><Link to="/join-AFMX" className="Links">Membership</Link></li>
                    <li><Link to="" className="Links">Media</Link></li>
                    <li><Link to="" className="Links">Advanced technology & Robotic Cleaning</Link></li>
                    <li><Link to="" className="Links">Employee Self Services</Link></li>
                    <li><Link to="" className="Links">Art and Gallery</Link></li>
                    <li><Link to="" className="Links">Make A Payment</Link></li>
                    <li><Link to="" className="Links">Donations</Link></li>
                    <li><Link to="" className="Links">AFMX learning Center/Education Portal</Link></li>
                    <li><Link to="" className="Links">Complaint Portal</Link></li>
                    <li><Link to="" className="Links">Partner With Us</Link></li>
                    <li><Link to="/about-the-company" className="Links">About The Company</Link></li>
                    <li><Link to="/chemical-regulation" className="Links">Chemical Regulation</Link></li>
                    <li><Link to="" className="Links">Bulletin Board</Link></li>
                    <li><Link to="" className="Links">Past and present Client</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default ImportantLinks