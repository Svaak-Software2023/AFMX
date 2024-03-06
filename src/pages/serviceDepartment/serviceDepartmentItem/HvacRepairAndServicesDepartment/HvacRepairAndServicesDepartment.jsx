import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks";
import "./style.css";
import departmentData from "../../../../assets/data/serviceDepartmentData.json";
import { Link } from "react-router-dom";

const HvacRepairAndServicesDepartment = () => {
  const HvacRepairAndServicesDepartments = departmentData.find((item) => item.name === "Hvac Repair And Services Department");
  const mainData = HvacRepairAndServicesDepartments.submenu;
  return (
    <div className="container p-0 my-3">
      <div className="row m-0 p-0 flex">
        <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
          <ImportantLinks />
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <h1 className="hvac-heading1"> Hvac Repair And Services Department</h1>
          <div className='HvacMain'>
            <div className='HvacDiv1'>
                <div className="Hvac_Triangle">
                    <p>Hvac Repair And Services Department</p>
                </div>
            </div>
            <div className='HvacDiv2'>
                {mainData.map((item, index) =>(
                  <Link  key={index} to={item.name}>
                    <div className='HvacDiv2_Box'> 
                        <p>{item.name}</p>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HvacRepairAndServicesDepartment;