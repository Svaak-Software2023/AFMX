import { Link } from "react-router-dom";
import "./style.css";
import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks";
import departmentData from "../../../../assets/data/serviceDepartmentData.json";

const FlowerandGardenBedMaintenanceDepartment = () => {
  const flowerData = departmentData.find((item) => item.name === "Flower and garden bed maintenance department");
  const maindata = flowerData.submenu;
  return (
    <div className="container p-0 my-3">
      <div className="row m-0 p-0 ">
        <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
          <ImportantLinks />
        </div>
        <div className="col-lg-9 col-md-9 col-12 bg-white p-3 list_content">
          <h3 className="list-category-heading">{flowerData.name}</h3>
          <div className="list-item-list">
            <div className="divMain p-3">
              {maindata.map((item, index) => (
                <Link to={item.name} key={index}>
                  <div className="b-btn" style={{ backgroundColor: "#48DBC5"}}>
                    <img src={item.image} className="w-50 rounded-2" alt="Icon 1" style={{ height:"100%" }}/> 
                    <p className="divP">{item.name}</p>
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

export default FlowerandGardenBedMaintenanceDepartment;
