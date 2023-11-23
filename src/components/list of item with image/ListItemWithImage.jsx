import { Link } from "react-router-dom";
import ImportantLinks from "../../components/ImportantLinks/ImportantLinks"

function ListItemWithImage({ name,url, propData}) {
    console.log(name);
    return (
        <><div className="container p-0 my-3">
            <div className="row m-0 p-0 ">
                <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
                    <ImportantLinks />
                </div>
                <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
                    <h3 className="service-category-heading">{name}</h3>
                    <div className="service-item-list">
                        <div className="container p-0">
                            <div className="bg-white ">
                                <div className="row m-0 p-0  p-lg-3  ">
                                    {propData?.map((item) => (
                                        <div className="col-lg-4 mb-1 p-0 image-gallery" key={item?.id}>
                                            <div className="mx-1 position-relative">
                                                <Link to={`${item.name}`}>
                                                    <img
                                                        src={item?.industryImage}
                                                        title={item?.name}
                                                        alt={item?.id}
                                                        className="img-fluid "
                                                    />
                                                    <div className="service-name">
                                                        <h3>{item?.name?.toUpperCase()}</h3>
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
        </div></>
    )
}

export default ListItemWithImage