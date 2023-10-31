import LeftMenu from "../../components/leftmenu/LeftMenu";
import serviceData from "../../assets/data/servicesData.json";
import "./services.css";
import { Link, useParams } from "react-router-dom";

function Services() {
  const { id } = useParams();
  const data = serviceData.find((item) => item.id === id);
  console.log(serviceData);
  return (
    <>
      <div className="container p-0 my-3">
        <div className="row m-0 p-0 ">
          <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
            <LeftMenu
              type="Services we offer"
              data={serviceData}
              url=""
            />
          </div>
          <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
            <h3 className="service-category-heading">Services we offer</h3>
            <div className="service-item-list ">
              <div className="container p-0 my-3">
                <div className="bg-white ">
                  <div className="row m-0 p-0  p-lg-3 py-3 ">
                    {serviceData?.map((item) => (
                      <div className="col-lg-4 mb-1 p-0 image-gallery" key={item.id}>
                        <div className="mx-1 ">
                        {/* <Link to={`/${item.id}`}> */}
                          <img
                            src={item?.serviceImage}
                            alt={data?.id}
                            className="img-fluid "
                          />
                          <div className="service-name">
                            <h3>{item.name}</h3>
                          </div>
                          {/* </Link> */}
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
    </>
  )
}

export default Services