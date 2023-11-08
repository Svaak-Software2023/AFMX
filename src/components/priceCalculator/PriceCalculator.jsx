import { MenuItem, TextField } from "@mui/material"
import ImportantLinks from "../ImportantLinks/ImportantLinks"
import { MdGroups, MdOutlineWatchLater, MdCalendarMonth } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LuTimerReset } from "react-icons/lu";
import { GiThermometerScale } from "react-icons/gi";

import "./style.css"


function PriceCalculator() {
    return (
        <>
            <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
                        <ImportantLinks />
                    </div>
                    <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
                        <div className="price-calculator">
                            <div className="calculator-box-shadow mb-3">
                                <div className="mb-3">
                                    <h3 className="heading p-4">Labor Cost</h3>
                                </div>
                                <div className="row m-0 calculator-item">
                                    <div className="col-lg-2 col-6">
                                        <div className="labor">
                                            <span className="label-text"><MdGroups className="fs-4" /> Labor</span>
                                            <TextField
                                                select
                                                id="labor"
                                                variant="standard"
                                                sx={{ m: 1, minWidth: 120 }}                                              >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Custodians</MenuItem>
                                                <MenuItem value={20}>Supervisors</MenuItem>
                                                <MenuItem value={30}>Trainers</MenuItem>
                                                <MenuItem value={40}>Team Leads</MenuItem>
                                                <MenuItem value={50}>Managers</MenuItem>
                                                <MenuItem value={70}>Inspectors</MenuItem>
                                                <MenuItem value={80}>Floor Techs</MenuItem>
                                                <MenuItem value={90}>Project Techs</MenuItem>
                                                <MenuItem value={100}>Housekeeper</MenuItem>
                                            </TextField>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-6">
                                        <div className="staff">
                                            <span className="label-text"><MdGroups className="fs-4 mt3" /> Staff</span>
                                            <TextField
                                                id="standard-number"
                                                type="number"
                                                variant="standard"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-6">
                                        <div className="rate-of-pay">
                                            <span className="label-text"><AiOutlineDollarCircle className="fs-4" /> Rate of pay</span>
                                            <TextField
                                                id="standard-number"
                                                type="number"
                                                variant="standard"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-6">
                                        <div className="hours">
                                            <span className="label-text"><MdOutlineWatchLater className="fs-4" /> Hours</span>
                                            <TextField
                                                id="standard-number"
                                                type="number"
                                                variant="standard"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-6">
                                        <div className="freq">
                                            <span className="label-text"><LuTimerReset className="fs-4" /> Freq</span>
                                            <TextField
                                                select
                                                id="standard-number"
                                                variant="standard"
                                                sx={{ m: 1, minWidth: 120 }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                                <MenuItem value={3}>3</MenuItem>
                                                <MenuItem value={4}>4</MenuItem>
                                                <MenuItem value={5}>5</MenuItem>
                                                <MenuItem value={6}>6</MenuItem>
                                                <MenuItem value={7}>7</MenuItem>
                                                <MenuItem value={8}>8</MenuItem>
                                                <MenuItem value={9}>9</MenuItem>
                                                <MenuItem value={10}>10</MenuItem>
                                            </TextField>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-6">
                                        <div className="per">
                                            <span className="label-text"><MdCalendarMonth className="fs-4" /> Per</span>

                                            <TextField
                                                select
                                                id="standard-number"
                                                variant="standard"
                                                sx={{ m: 1, minWidth: 120 }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Week</MenuItem>
                                                <MenuItem value={20}>Month</MenuItem>
                                                <MenuItem value={30}>Quarter</MenuItem>
                                                <MenuItem value={40}>Year</MenuItem>
                                            </TextField>

                                        </div>
                                    </div>
                                </div>
                                <div className="cost-calculator mb-3">
                                    <h3>YOUR LABOR COST PER CLEAN <span>$ 23</span> </h3>
                                </div>
                            </div>

                            <div className="calculator-box-shadow">
                                <div className="row m-0 p-0">
                                    <div className="col-lg-5 col-12 p-lg-4">
                                        <div className="mb-3">
                                            <h3 className="heading mb-3">Total of Price for All Labor Costs</h3>
                                            <p className="mb-3">All labor costs added above combined into one monthly price</p>
                                        </div>
                                        <div className="building-sq">
                                            <div>
                                                <h3><GiThermometerScale/> Building Sq Ft.</h3>
                                                <TextField
                                                    id="building-input"
                                                    type="number"
                                                    variant="standard"
                                                />
                                            </div>
                                        </div>
                                        <div className="per-sq">
                                            <h3 > Per Sq Ft</h3>
                                            <div>
                                                <input type="text" value={"$ 25"} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-12"></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PriceCalculator