import { useParams } from "react-router-dom"
import serviceData from "../../assets/data/servicesData.json"
import { Carousel } from "react-responsive-carousel";
import LeftMenue from "../../components/leftmenu/LeftMenu";


function ServiceItem() {
    const { name } = useParams()
    const data = serviceData.find((item) => item.name === name);
  console.log(name);

    return (
        <div className="container p-0 my-3">
            <div className="row m-0 p-0 ">
                <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
                    <LeftMenue
                        type="Services We Offer"
                        data={serviceData}
                        url="/service-list-item"
                    />
                </div>
                {data ?
                    <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
                        <div className="service-item-list ">
                            <div className="container p-0 m-0">
                                <div className="bg-white ">
                                    <div className="row m-0 p-0 ">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="row m-0 p-0  p-lg-3 py-3 ">

                                                <div className="col-lg-5 mb-3 p-0 ">
                                                    <div className="seervicedepartment-crausel">
                                                        <Carousel showThumbs={false}>
                                                            <div className="service-department-item-img">
                                                                <img effect="blur" src={data?.serviceImage
                                                                } />

                                                            </div>
                                                            <div className="service-department-item-img">
                                                                <img effect="blur" src={data?.serviceImage
                                                                } />
                                                            </div>
                                                            <div className="service-department-item-img">
                                                                <img effect="blur" src={data?.serviceImage
                                                                } />
                                                            </div>
                                                        </Carousel>
                                                    </div>
                                                </div>

                                                <div className="col-lg-7 col-12">
                                                    <div className="service-department-item-name">
                                                        <h3>{data?.name}</h3>
                                                    </div>
                                                    <div className="service-department-item-text">
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quo cum voluptatum obcaecati consequatur expedita dolore delectus, eaque unde, itaque rem impedit, odio iusto quae voluptates. Veritatis expedita facilis fuga reiciendis maiores architecto commodi. Iste ipsum rem obcaecati aliquid totam, aspernatur minima? Odio expedita deleniti quis blanditiis adipisci consequatur quaerat earum.</p>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
                        <div className="service-item-list ">
                            <div className="container p-0 m-0">
                                <div className="bg-white ">
                                    <div className="d-flex justify-content-center">
                                        <h3>Data Not Found !</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>

    )
}

export default ServiceItem