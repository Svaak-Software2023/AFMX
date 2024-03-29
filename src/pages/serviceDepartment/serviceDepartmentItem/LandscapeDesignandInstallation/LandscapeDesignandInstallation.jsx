import { Link } from "react-router-dom";
import "./style.css";
import ImportantLinks from "../../../../components/ImportantLinks/ImportantLinks";
import departmentData from "../../../../assets/data/serviceDepartmentData.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const LandscapeDesignandInstallation = () => {
  const LandscapeData = departmentData.find((item) => item.name === "Landscape design and installation");
  const maindata = LandscapeData.submenu;
  const boxStyle = {
    boxShadow: `0 0 12px 8px ${getRandomColor()}8C`, // Adjust alpha value as needed
  };

  return (
    <div className="container p-0 my-3">
      <div className="row m-0 p-0">
        <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
          <ImportantLinks />
        </div>
        <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 list_content">
          <h3 className="list-category-heading">Landscape design and Installation department</h3>
          <div className="list-item-list">
            <div className="container p-0">
              <div className="bg-white">
                <div className="row m-0 p-0  p-lg-3">
                  {maindata?.map((item) => (
                    <div className="col-lg-4 mb-3 p-3 list-image-gallery shadow" key={item?.id}>
                      <div className="mx-1 position-relative">
                        <Link to={`${item.name}`} target="_blank">
                          <div className="image-container" style={boxStyle}>
                            <LazyLoadImage src={item?.image} title={item?.name} alt={item?.id} className="img-fluid" />
                              {/* <h6 className="">{item?.name}</h6> */}
                              <div className="borderdiv"> <p>{item.name}</p> </div>
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
  );
};

export default LandscapeDesignandInstallation;
