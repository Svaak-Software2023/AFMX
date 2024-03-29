import { useParams } from "react-router-dom";
import serviceData from "../../assets/data/serviceDepartmentData.json";
import "./serviceDepartment.css";
// import ImportantLinks from "../../components/ImportantLinks/ImportantLinks";
import ListItemWithImage from "../../components/list of item with image/ListItemWithImage";
//import { loadConfigFromFile } from "vite";
const ServiceDepartment = () => {
  const { name } = useParams();
  const data = serviceData.find((item) => item.name === name);
  //console.log(name);
  return (
    <>
      {data?.submenu&&<ListItemWithImage
        name={data.name}
        propData={data?.submenu}
        url={`/service-department-item/${data.name}`}
       />}
    </>
  );
};

export default ServiceDepartment;
