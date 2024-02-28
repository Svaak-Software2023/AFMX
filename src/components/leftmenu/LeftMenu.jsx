import "./leftMenu.css"
import { Link } from "react-router-dom"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { IoIosArrowDropdown } from "react-icons/io";
function LeftMenue({ type, data,url }) {
    const menuItem = data;
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
                            {type}
                        </h3>
                    </AccordionSummary>
                    <AccordionDetails className="mt-2 p-0">
                        <div className="left-menue-list">
                            <ul>
                                {
                                    menuItem && menuItem?.map((item,index) => (
                                        <li key={index}>
                                            <Link to={`${url}/${item.name}`} className="Links">{item?.name}</Link>
                                        </li>
                                    )
                                    )
                                }
                            </ul>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="left-menue-main mb-3 left-window-menu">
                <h3 className="left-menu-heading">
                    {type}
                </h3>
                <div className="left-menue-list">
                    <ul>
                        {
                            menuItem && menuItem?.map((item,index) => (
                                <li key={index}>
                                    <Link to={`${url}/${item.name}`} className="Links">{item?.name}</Link>
                                </li>
                            )
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default LeftMenue