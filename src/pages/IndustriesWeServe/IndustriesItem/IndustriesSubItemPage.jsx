import React from 'react'
import LeftMenue from '../../../components/leftmenu/LeftMenu'
import { Carousel } from 'react-responsive-carousel'
import industryData from "../../../assets/data/industriesWeServeData.json";
import { useParams } from 'react-router-dom';
import "./industriesSubpage.css"
import CommingSoon from '../../CommingSoon';
import { img } from 'react-lazy-load-image-component';

function IndustriesSubItemPage() {
    const { parentName, name } = useParams()
    console.log(parentName, name);
    const response = industryData.find((item) => item.name === parentName);
    const data = response?.data.find((item) => item.name === name);
    console.log(data);
    return (
        <>
           {data?.imgData?.length>0? <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
                        <LeftMenue
                            type={parentName}
                            data={response.data}
                            url={`/industries-list/${parentName}`}
                        />
                    </div>
                    <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
                        <div className="container p-0 m-0">
                            <div className="bg-white">
                                <div className="m-0 p-0">
                                    <h3 className="heading">{data?.name}</h3>
                                </div>
                                <div className="row p-2">

                                    <div className="col-lg-6 m-0 p-0 ">
                                        <div className="my-2">
                                            <Carousel showThumbs={false} autoPlay infiniteLoop>
                                                {

                                                    !!data.imgData && data?.imgData?.map((item, index) => (
                                                        <div className="industries-slider-item-img" key={index}>
                                                            <img effect="blur" src={item?.url} className="img-fluid" />
                                                        </div>
                                                    ))
                                                }
                                            </Carousel>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">

                                  {data?.para&& data?.para?.map((item,index)=><p className='mb-2' key={index}><b>{item.heading}</b> {item.text}</p>)}

                                        <ul className="comminityCollegeList m-0">
                                            {
                                                !!data.list1 && data?.list1?.map((item, index) => <>
                                                <li key={index}><b>{item?.heading}</b>{item?.text}<h3>{item?.headingh3}</h3></li>
                                                </>)
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <ul className="comminityCollegeList mx-0 ">
                                    {
                                        !!data.list2 && data?.list2?.map((item, index) => <li key={index}><b>{item?.heading}</b>{item.text} <h3>{item.headingh3}</h3></li>)
                                    }
                                </ul>
                                {data?.para2&& data?.para2?.map((item,index)=><p key={index}><b>{item.heading}</b> {item.text}</p>)}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <CommingSoon/>}
        </>
    )
}

export default IndustriesSubItemPage