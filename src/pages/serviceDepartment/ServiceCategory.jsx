import { useParams } from "react-router-dom";
import LeftMenu from "../../components/leftMenu/LeftMenu";
import serviceData from "../../assets/data/serviceDepartmentData.json";
import "./serviceCategory.css";
//import { loadConfigFromFile } from "vite";
const ServiceCategory = () => {
  const { id } = useParams();
  const data = serviceData.find((item) => item.id === id);
  console.log(data);
  const mapData = data.data.filter((item) => item.id == 1)
  console.log(mapData);
  return (
    <>
      <div className="container p-0 my-3">
        <div className="row m-0 p-0 ">
          <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
            <LeftMenu
              type={data.name}
              data={data.submenu}
              url="/service"
            />
          </div>
          <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
            <h3 className="service-category-heading" style={{ textTransform: "capitalize" }}>{data.name}</h3>
            <div className="service-item-list ">
              <div className="container p-0 my-3">
                <div className="bg-white ">
                  <div className="row m-0 p-0 ">
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="row service-image-main">
                      <div className="d-flex justify-content-center">
                        <div className="service-top-image">
                          <img src={mapData[0]?.img} alt="" className="img-fluid" />
                          {/* <div className="service-name">
                            <h3>Service</h3>
                          </div> */}
                        </div>
                      </div>
                        {data?.data?.slice(1)?.map((item) => (
                          <div className="col-lg-4 mb-1 p-0 image-gallery" key={item.id}>
                            <div className="mx-1 ">
                              <img
                                src={item?.img}
                                alt={data?.id}
                                className="img-fluid "
                              />
                              {/* <div className="service-name">
                                <h3>Service</h3>
                              </div> */}
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

export default ServiceCategory;
