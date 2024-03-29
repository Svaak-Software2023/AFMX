import { Link } from "react-router-dom";
import "./style.css";
import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks";
import departmentData from "../../../../assets/data/serviceDepartmentData.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

const TreeAndShrubDepartment = () => {
  const TreeDept = departmentData.find((item) => item.name === "Tree and shrub maintenance department");
  return (
    <div className="container p-0 my-3">
      <div className="row m-0 p-0 ">
        <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
          <ImportantLinks />
        </div>
        <div className="col-lg-9 col-md-9 col-12 bg-white p-3 list_content">
          <h3 className="list-category-heading">{TreeDept.name}</h3>
          <div className="tree-shrub-content">
            <div className="tree-shrub-main">
              {
                TreeDept.submenu.map((item, index) => (
                  <Link to={item.name} key={index}>
                    <div className="tree-shrub-2main">
                      <div>
                        <LazyLoadImage effect="blur" src={item.image} alt="img" className="tree-shrub-img" />
                      </div>
                      <div className="tree-shrub-text"> <h5>{item.name}</h5></div>
                    </div>
                  </Link>
                    ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeAndShrubDepartment;
