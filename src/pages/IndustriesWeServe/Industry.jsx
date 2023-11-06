import LeftMenue from "../../components/leftmenu/LeftMenu"
import industryData from "../../assets/data/IndustryData.json"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./industry.css"


function Industry() {
    const { id } = useParams();
    const [data, setData] = useState([])
    useEffect(() => {
        setData(industryData.find((item) => item.id === id))
    }, [id])
    console.log(data.logo);

    return (
        <>
            <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    <div className="col-lg-3 col-md-3 col-0 p-0">
                        <LeftMenue type="Industries we serve" data={industryData} url="/industry" />

                    </div>
                    <div className="col-lg-9 col-md-9 col-12 bg-white  py-4">
                        <div className="industry-main container">
                            <div className="industry-type">
                                <h3 className="industry-name" >{data?.name}</h3>
                                <p><span>Type: </span>{data?.type}</p>
                            </div>
                            <div className="industry-image">
                                <div className="industry-logo-img">
                                    <img src={data.logo} alt="" className="img-fluid" />
                                </div>
                                <div className="industry-contact">

                                    <p><span>Address: </span>{data?.address}</p>
                                    <p> <span>Contact: </span>{data?.contact_with?.name}</p>
                                    <p><span>Phone: </span>9123456789</p>
                                    <p><span>Fax: </span>1234546789</p>
                                    <p><i className="fab fa-youtube"></i><a href="" target="blank">Industry</a></p>
                                </div>
                            </div>

                            <div className="industry-description">
                                <h3>Description:</h3>
                                <i>{`"${data?.description}"`}</i>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    {data.containt && data.containt.map((item) => (
                                        <div key={item.id} className="industrial-containt">
                                            <h3>{item.heading}</h3>
                                            <p className="mb-3">{item.text}</p>
                                        </div>))}
                                </div>
                                    <div className="col-lg-6 industry-detail-img ">
                                        <img src={data.image} className="img-fluid " />
                                    </div>
                            </div>

                            <div className="industrial-containt">
                                <h3>Heading 3</h3>
                                <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. A reiciendis odio, aliquam dolores eveniet optio, explicabo autem, ad quo tempore voluptas recusandae nihil. Animi velit exercitationem odit, corporis placeat similique, sint, veniam assumenda amet minima autem consectetur cupiditate vitae numquam dolorum aperiam sunt expedita incidunt optio?</p>
                                <h3>Heading 4</h3>
                                <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. A reiciendis odio, aliquam dolores eveniet optio, explicabo autem, ad quo tempore voluptas recusandae nihil. Animi velit exercitationem odit, corporis placeat similique, sint, veniam assumenda amet minima autem consectetur cupiditate vitae numquam dolorum aperiam sunt expedita incidunt optio?</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Industry