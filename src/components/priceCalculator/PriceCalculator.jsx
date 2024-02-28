import {
    Button,
    InputAdornment,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import ImportantLinks from "../ImportantLinks/ImportantLinks";
import { MdGroups, MdOutlineWatchLater, MdCalendarMonth } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LuTimerReset } from "react-icons/lu";
import { GiThermometerScale } from "react-icons/gi";

import "./style.css";
import { useEffect, useState } from "react";

function PriceCalculator() {
    const [formData, setFormData] = useState({
        freq: "",
        hour: "",
        labor: "",
        per: "",
        rate: "",
        staff: "",
    });
    const [expenses, setExpenses] = useState([]);
    const [expensesForm, setExpensesForm] = useState({
        expensesName: "",
        expensesAmount: "",
    });
    const [subTotal, setSubTotal] = useState(0);
    const [additonal, setAdditional] = useState(0);
    const [perClean, setPerClean] = useState(0);

    // additional expenses onchange function 
    function expencseshandler(e) {
        const name = e.target.name;
        setExpensesForm({ ...expensesForm, [name]: e.target.value });
    }
    // additional expenses Array creation 
    function expensesSubmithandler(e) {
        e.preventDefault();
        setExpenses([...expenses, expensesForm]);
        setExpensesForm({ expensesName: "", expensesAmount: "" });
    }

    // labor form details //
    function handleChange(e) {
        const name = e.target.name;
        setFormData({ ...formData, [name]: e.target.value });
    }

    useEffect(() => {
        // set sub total amount 
        setSubTotal(formData.staff * formData.rate * formData.hour * formData.freq);

        // set per clean cost 
        let value = Number(subTotal) / 2
        setPerClean(value);
        // find sum of all additional expenses  
        let sum = 0;
        expenses.forEach(function (item) {
            sum += Number(item.expensesAmount)
        });
        setAdditional(sum)
    }, [formData, subTotal, additonal, expenses]);

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
                                    <div className="col-lg-2 col-6 mb-3">
                                        <div className="labor">
                                            <p className="label-text">
                                                <MdGroups className="fs-4" /> Labor
                                            </p>
                                            <Select
                                                className="m-0 p-0"
                                                sx={{ m: 1, minWidth: 120 }}
                                                variant="standard"
                                                name="labor"
                                                onChange={handleChange}
                                                value={formData.labor}
                                            >
                                                <MenuItem value={"Custodians"}>Custodians</MenuItem>
                                                <MenuItem value={"Supervisors"}>Supervisors</MenuItem>
                                                <MenuItem value={"Trainers"}>Trainers</MenuItem>
                                                <MenuItem value={"Team Leads"}>Team Leads</MenuItem>
                                                <MenuItem value={"Managers"}>Managers</MenuItem>
                                                <MenuItem value={"Inspectors"}>Inspectors</MenuItem>
                                                <MenuItem value={"Floor Techs"}>Floor Techs</MenuItem>
                                                <MenuItem value={"Project Techs"}>
                                                    Project Techs
                                                </MenuItem>
                                                <MenuItem value={"Housekeeper"}>Housekeeper</MenuItem>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-6 mb-3">
                                        <div className="staff">
                                            <p className="label-text">
                                                <MdGroups className="fs-4 mt3" /> Staff
                                            </p>
                                            <TextField
                                                id="standard-number"
                                                type="number"
                                                variant="standard"
                                                name="staff"
                                                onChange={handleChange}
                                                value={formData.staff}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-6 mb-3">
                                        <div className="rate-of-pay">
                                            <p className="label-text">
                                                <AiOutlineDollarCircle className="fs-4" /> Rate of pay
                                            </p>
                                            <TextField
                                                id="standard-number"
                                                type="number"
                                                variant="standard"
                                                name="rate"
                                                onChange={handleChange}
                                                value={formData.rate}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-6 mb-3">
                                        <div className="hours">
                                            <p className="label-text">
                                                <MdOutlineWatchLater className="fs-4" /> Hours
                                            </p>
                                            <TextField
                                                id="standard-number"
                                                type="number"
                                                variant="standard"
                                                name="hour"
                                                onChange={handleChange}
                                                value={formData.hour}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-6 mb-3">
                                        <div className="freq">
                                            <p className="label-text">
                                                <LuTimerReset className="fs-4" /> Freq
                                            </p>
                                            <Select
                                                className="m-0 p-0"
                                                variant="standard"
                                                sx={{ m: 1, minWidth: 120 }}
                                                name="freq"
                                                onChange={handleChange}
                                                value={formData.freq}
                                            >
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
                                                <MenuItem value={11}>11</MenuItem>
                                                <MenuItem value={12}>12</MenuItem>
                                                <MenuItem value={13}>13</MenuItem>
                                                <MenuItem value={14}>14</MenuItem>
                                                <MenuItem value={15}>15</MenuItem>
                                                <MenuItem value={16}>16</MenuItem>
                                                <MenuItem value={17}>17</MenuItem>
                                                <MenuItem value={18}>18</MenuItem>
                                                <MenuItem value={19}>19</MenuItem>
                                                <MenuItem value={20}>20</MenuItem>
                                                <MenuItem value={21}>21</MenuItem>
                                                <MenuItem value={22}>22</MenuItem>
                                                <MenuItem value={23}>23</MenuItem>
                                                <MenuItem value={24}>24</MenuItem>
                                                <MenuItem value={25}>25</MenuItem>
                                                <MenuItem value={26}>26</MenuItem>
                                                <MenuItem value={27}>27</MenuItem>
                                                <MenuItem value={28}>28</MenuItem>
                                                <MenuItem value={29}>29</MenuItem>
                                                <MenuItem value={30}>30</MenuItem>
                                                <MenuItem valu={31}>31</MenuItem>

                                            </Select>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-6 mb-3">
                                        <div className="per">
                                            <p className="label-text">
                                                <MdCalendarMonth className="fs-4" /> Per
                                            </p>

                                            <Select
                                                className="m-0 p-0"
                                                sx={{ m: 1, minWidth: 120 }}
                                                variant="standard"
                                                name="per"
                                                onChange={handleChange}
                                                value={formData.per}
                                            >
                                                <MenuItem value={"Week"}>Week</MenuItem>
                                                <MenuItem value={"Month"}>Month</MenuItem>
                                                <MenuItem value={"Quarter"}>Quarter</MenuItem>
                                                <MenuItem value={"Year"}>Year</MenuItem>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="cost-calculator mb-3">
                                    <h3>
                                        YOUR LABOR COST PER CLEAN <span>$ {perClean}</span>{" "}
                                    </h3>
                                </div>
                            </div>

                            <div className="calculator-box-shadow">
                                <div className="row m-0 p-0">
                                    <div className="col-lg-5 col-12 p-lg-4">
                                        <div className="mb-3">
                                            <h3 className="heading mb-3">
                                                Total of Price for All Labor Costs
                                            </h3>
                                            <p className="mb-3">
                                                All labor costs added above combined into one monthly
                                                price
                                            </p>
                                        </div>
                                        <div className="building-sq">
                                            <div>
                                                <h3>
                                                    <GiThermometerScale /> Building Sq Ft.
                                                </h3>
                                                <TextField
                                                    id="building-input"
                                                    type="number"
                                                    variant="standard"
                                                />
                                            </div>
                                        </div>
                                        <div className="per-sq">
                                            <h3> Per Sq Ft</h3>
                                            <div>
                                                <input type="text" value={"$ 25"} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-12">
                                        <div className="calculator-box-shadow my-3 p-3">
                                            <div className="janitorial-labor-cost">
                                                <h3>Cleaning Labor Costs (1)</h3>
                                                <h3>${subTotal}</h3>
                                            </div>
                                            <p className="janitorial-labor-cost-text">
                                                1 labor cost added
                                            </p>
                                            <div className="janitorial-labor-cost">
                                                <h3>Additional Expenses ({expenses.length})</h3>
                                                <h3>$ {additonal}.00</h3>
                                            </div>
                                            <p className="janitorial-labor-cost-text">
                                                {expenses.length} additional expense added
                                            </p>
                                            {expenses && expenses.map((item, index) => (
                                                <div key={index} className="additional-expense mb-1">
                                                    <h3>{item.expensesName} </h3>
                                                    <h3>$ {item.expensesAmount}</h3>
                                                </div>
                                            ))
                                            }
                                            <div className="add-expense my-3">
                                                <form onSubmit={expensesSubmithandler}>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-12 mb-3">
                                                            <TextField
                                                                className="w-100"
                                                                variant="standard"
                                                                placeholder="Expenses Name"
                                                                value={expensesForm.expensesName}
                                                                name="expensesName"
                                                                onChange={expencseshandler}
                                                            />
                                                        </div>
                                                        <div className="col-lg-4 col-12 mb-3">
                                                            <TextField
                                                                className="mx-2 w-100"
                                                                type="Number"
                                                                variant="standard"
                                                                placeholder="0"
                                                                value={expensesForm.expensesAmount}
                                                                name="expensesAmount"
                                                                onChange={expencseshandler}
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position="start">
                                                                            $
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                            />
                                                        </div>
                                                        {/* hide button when input empty  */}
                                                        {expensesForm.expensesName && expensesForm.expensesAmount && <div className="col-lg-4 col-12 mb-3">
                                                            <Button variant="contained" type="submit">
                                                                Add
                                                            </Button>
                                                        </div>}
                                                    </div>
                                                </form>
                                            </div>

                                            <div className="janitorial-labor-cost">
                                                <h3>Sub-Total</h3>
                                                <h3>$ {Number(subTotal) + additonal}</h3>
                                            </div>
                                        </div>
                                        <div className="calculator-box-shadow mb-3 p-3">
                                            <div className="janitorial-labor-cost">
                                                <h3>Add Your Profit Margin</h3>
                                                <h3>$0.00</h3>
                                            </div>
                                            <p className="janitorial-labor-cost-text">
                                                (Margin cannot be equal to or greater than 100%)
                                            </p>
                                        </div>

                                        <div className="calculator-box-shadow mb-3 p-3">
                                            <div className="janitorial-labor-cost">
                                                <h3>MONTHLY CHARGE TO CLIENT</h3>
                                                <h3>= $ {Number(subTotal) + additonal}.00</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PriceCalculator;
