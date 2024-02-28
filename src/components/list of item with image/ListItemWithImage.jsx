import { Link } from "react-router-dom";
import ImportantLinks from "../../components/ImportantLinks/ImportantLinks"
import "./style.css"

function ListItemWithImage({ name,url, propData}) {
    console.log(name);
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <><div className="container p-0 my-3">
            <div className="row m-0 p-0 ">
                <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
                    <ImportantLinks />
                </div>
                <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 list_content">
                    <h3 className="list-category-heading">{name}</h3>
                    <div className="list-item-list">
                        <div className="container p-0">
                            <div className="bg-white ">
                                <div className="row m-0 p-0  p-lg-3  ">
                                    {propData?.map((item) => (
                                        <div className="col-lg-4 mb-1 p-0 list-image-gallery" key={item?.id}>
                                            <div className="mx-1 position-relative">
                                                <Link to={`${item.name}`} target="_blank">
                                                    <img
                                                        src={item?.image}
                                                        title={item?.name}
                                                        alt={item?.id}
                                                        className="img-fluid "
                                                    />
                                                    <div className="list-name">
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
        </div></>
    )
}

export default ListItemWithImage