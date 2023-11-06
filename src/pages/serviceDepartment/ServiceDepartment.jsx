import { Link, useParams } from "react-router-dom";
import LeftMenu from "../../components/leftMenu/LeftMenu";
import serviceData from "../../assets/data/serviceDepartmentData.json";
import "./serviceDepartment.css";
//import { loadConfigFromFile } from "vite";
const ServiceDepartment = () => {
  const { id } = useParams();
  const data = serviceData.find((item) => item.id === id);
  console.log(data);
  return (
    <>
      <div className="container p-0 my-3">
        <div className="row m-0 p-0 ">
          <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
            <LeftMenu
              type={data?.name}
              data={data?.submenu}
              url={`/service-department-item/${data?.id}`}
            />
          </div>
          <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
            <h3 className="service-category-heading" style={{ textTransform: "capitalize" }}>{data.name}</h3>
            <div className="service-item-list ">
              <div className="container p-0 m-0">
                <div className="bg-white ">
                  <div className="d-flex justify-content-center">

                    <div className="piramid-top-img row mx-1">
                      <Link to={`/service-department-item/${data?.id}/${data?.submenu[0]?.id}`}>

                        <img src={data?.submenu[0]?.image} alt="" />
                        <div className="service-name">
                          <h3>{data?.submenu[0]?.name}</h3>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="row m-0 p-0 ">
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="row m-0 p-0  p-lg-3 py-3 ">
                        {data?.submenu?.slice(1)?.map((item) => (
                          <div className="col-lg-4 mb-1 p-0 " key={item.id}>
                            <div className="mx-1 image-gallery">
                              <Link to={`/service-department-item/${data?.id}/${item.id}`}>
                                <img
                                  src={item?.image}
                                  alt={data?.id}
                                  className="img-fluid "
                                />
                                <div className="service-name">
                                  <h3>{item?.name}</h3>
                                </div>
                              </Link>
                            </div>
                          </div>
                        ))}
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
};

export default ServiceDepartment;
