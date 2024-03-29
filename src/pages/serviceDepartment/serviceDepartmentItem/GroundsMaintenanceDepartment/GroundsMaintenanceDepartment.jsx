// import { Link } from "react-router-dom";
import "./style.css";
import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks";
import departmentData from "../../../../assets/data/serviceDepartmentData.json";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Ground2 = () => {
  const navigate = useNavigate();
  
  const openService = (e) => { 
    navigate(`/service-department/Grounds maintenance department/${e.target.alt}`)
    console.log(e.target.alt);
  }

  const TreeDept = departmentData.find(
    (item) => item.name === "Grounds maintenance department"
  );
  return (
    <div className="container p-0 my-3">
      <div className="row m-0 p-0 ">
        <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
          <ImportantLinks />
        </div>
        <div className="col-lg-9 col-md-9 col-12 bg-white p-3 list_content">
          <h3 className="list-category-heading">{TreeDept.name}</h3>
          <div className="w-100 h-100">
            <LazyLoadImage effect="blur" src="/images/serviceDepartments/groundsMaintenanceDepartment/Grounds/GroundDesign1.jpg" alt="Aquatic and Pond Management" style={{height:"90px", width:"100%", cursor: "pointer"}} onClick={(e)=> openService(e)}/>

            <LazyLoadImage effect="blur" src="/images/serviceDepartments/groundsMaintenanceDepartment/Grounds/GroundDesign2.jpg" alt="Drainage Installation and Repair" style={{height:"90px", width:"100%", cursor: "pointer"}} onClick={(e)=> openService(e)}/>
            
            <LazyLoadImage effect="blur" src="/images/serviceDepartments/groundsMaintenanceDepartment/Grounds/GroundDesign3.jpg" alt="Irrigation System Installation and Repair" style={{height:"90px", width:"100%", cursor: "pointer"}} onClick={(e)=> openService(e)}/>

            <LazyLoadImage effect="blur" src="/images/serviceDepartments/groundsMaintenanceDepartment/Grounds/GroundDesign4.jpg" alt="Lawn Aeration" style={{height:"90px", width:"100%", cursor: "pointer"}} onClick={(e)=> openService(e)}/>

            <LazyLoadImage effect="blur" src="/images/serviceDepartments/groundsMaintenanceDepartment/Grounds/GroundDesign5.jpg" alt="Sod Installation" style={{height:"90px", width:"100%", cursor: "pointer"}} onClick={(e)=> openService(e)}/>
          </div>
          </div>

      </div>
    </div>
  );
};

export default Ground2;
