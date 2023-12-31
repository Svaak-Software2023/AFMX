import { useParams } from "react-router-dom"
import serviceData from "../../assets/data/serviceDepartmentData.json";
import { Carousel } from "react-responsive-carousel";
import "./serviceDepartmentItem.css"
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImportantLinks from "../../components/ImportantLinks/ImportantLinks";
import CommingSoon from "../CommingSoon";
function ServiceDepartmentItem() {
    const { parentId,ItemId } = useParams()

    const data = serviceData.find((item) => Number(item.id) === Number(parentId));
    const itemData = data?.submenu.find((item) =>Number(item.id) == Number(ItemId));
    console.log(itemData);
    return (
        <>
        {itemData?.imgData?.length>0? <div className="container p-0 my-3">
             <div className="row m-0 p-0 ">
                 <div className="col-lg-3 col-md-3 col-12 p-0 service_menu">
                    <ImportantLinks/>
                 </div>
                 <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
                     <div className="container p-0 m-0">
                         <div className="bg-white">
                             <div className="m-0 p-0">
                                 <h3 className="heading">{itemData?.name}</h3>
                             </div>
                             <div className="row p-2">

                                 <div className="col-lg-6 m-0 p-0 ">
                                     <div className="my-2">
                                         <Carousel showThumbs={false} autoPlay infiniteLoop>
                                             {

                                                 !!itemData.imgData && itemData?.imgData?.map((item, index) => (
                                                     <div className="industries-slider-item-img" key={index}>
                                                         <LazyLoadImage src={item?.url} className="img-fluid" />
                                                     </div>
                                                 ))
                                             }
                                         </Carousel>
                                     </div>
                                 </div>
                                 <div className="col-lg-6">

                               {itemData?.paira&& itemData?.paira?.map((item,index)=><p className='mb-2' key={index}><b>{item?.heading}</b> {item?.text}</p>)}

                                     <ul className="comminityCollegeList m-0">
                                         {
                                             !!itemData.list1 && itemData?.list1?.map((item, index) => <>
                                             <li key={index}><b>{item?.heading}</b>{item?.text}<h3>{item?.headingh3}</h3></li>
                                             </>)
                                         }
                                     </ul>
                                 </div>
                             </div>
                             <ul className="comminityCollegeList mx-0 ">
                                 {
                                     !!itemData.list2 && itemData?.list2?.map((item, index) => <li key={index}><b>{item?.heading}</b> <h3>{item.headingh3}</h3> {item.text} <h3>{item.headingh3}</h3></li>)
                                 }
                             </ul>
                             {itemData?.paira2&& itemData?.paira2?.map((item,index)=><p key={index}><b>{item?.heading}</b> {item.text}</p>)}

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

export default ServiceDepartmentItem