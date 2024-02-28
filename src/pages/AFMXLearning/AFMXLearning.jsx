import LeftMenue from "../../components/leftmenu/LeftMenu"
import data from "../../assets/data/afmxLearning.json"
import { useParams } from "react-router-dom"


function AFMXLearning() {
    const{id}=useParams();
    const ItemData=data.find((item)=>item.id===id)
    return (
        <>
            <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
                        <LeftMenue
                            type="AFMX Learning Center And Education"
                            data={data}
                            url="/afmx-learning"
                        />
                    </div>
                    <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
                    <div className="service-item-list ">
                            <div className="container p-0 m-0">
                                <div className="bg-white ">
                                    <div className="row m-0 p-0 ">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            
                                                <div className="col-lg-12 col-12">
                                                    <div className="service-department-item-name">
                                                        <h3>{ItemData.name}</h3>
                                                    </div>
                                                    <div className="service-department-item-text">
                                                        <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum exercitationem vero iusto incidunt similique asperiores aliquam mollitia voluptatem sequi sed! amet consectetur adipisicing elit. Incidunt quo cum voluptatum obcaecati consequatur expedita dolore delectus, eaque unde, itaque rem impedit, odio iusto quae voluptates. Veritatis expedita facilis fuga reiciendis maiores architecto commodi. Iste ipsum rem obcaecati aliquid totam, aspernatur minima? Odio expedita deleniti quis blanditiis adipisci consequatur quaerat earum.</p>
                                                    </div>
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
    )
}

export default AFMXLearning