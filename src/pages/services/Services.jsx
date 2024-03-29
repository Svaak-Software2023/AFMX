import serviceData from "../../assets/data/servicesData.json";
import "./services.css";
import {  Link, useParams } from "react-router-dom";
import ImportantLinks from "../../components/ImportantLinks/ImportantLinks";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Services() {
  const { id } = useParams();
  const data = serviceData.find((item) => item.id === id);
  return (
    <>
      <div className="container p-0 my-3">
        <div className="row m-0 p-0 ">
          <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
           <ImportantLinks/>
          </div>
          <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
            <h3 className="service-category-heading">Services we offer</h3>
            <div className="service-item-list ">
              <div className="container p-0 m-0">
                <div className="bg-white ">
                  <div className="row m-0 p-0  p-lg-3 py-3 ">
                    {serviceData?.map((item) => (
                      <div className="col-lg-4 mb-1 p-0 image-gallery" key={item.id}>
                        <div className="mx-1 position-relative">
                        <Link to={`/service-list-item/${item.name}`}>
                          <LazyLoadImage effect="blur"
                            src={item?.serviceImage}
                            title={item?.name}
                            alt={data?.id}
                            className="img-fluid "
                          />
                          <div className="service-name">
                            <h3>{item.name}</h3>
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
    </>
  )
}

export default Services