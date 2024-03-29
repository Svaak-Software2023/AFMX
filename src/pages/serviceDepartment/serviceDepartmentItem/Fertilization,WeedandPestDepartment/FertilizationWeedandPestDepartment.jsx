import { Link } from "react-router-dom";
import "./style.css";
import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks";
import departmentData from "../../../../assets/data/serviceDepartmentData.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FertilizationWeedandPestDepartment = () => {
  const fertilizeData = departmentData.find((item) => item.name === "Fertilization, weed and pest department");
  console.log(fertilizeData)
  return (
    <div className="container p-0 my-3">
      <div className="row m-0 p-0 ">
        <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
          <ImportantLinks />
        </div>
        <div className="col-lg-9 col-md-9 col-12 bg-white p-3 list_content">
          <h3 className="list-category-heading">{fertilizeData.name}</h3>
          <div className="fertilize-div">
            {fertilizeData.submenu.map((item, index) => (
              <Link to={item.name} key={index}>
                <div className="fertilize-main">
                  <div className="fertilize-main2">
                    <LazyLoadImage effect="blur" src={item.image} alt="img" className="fertilize-img"/>
                  </div>
                  <div className="fertilize-text"> {item.name} </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FertilizationWeedandPestDepartment;
