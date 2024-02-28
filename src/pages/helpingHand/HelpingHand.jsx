import { useParams } from "react-router-dom"
import "./helpingHand.css"
import helpingHand from "../../assets/data/helpingHand.json"
import LeftMenue from "../../components/leftmenu/LeftMenu";
import { LazyLoadImage } from "react-lazy-load-image-component";

function HelpingHand() {
  const { id } = useParams();
  const data = helpingHand.find((item) => item.id === id)



  return (

    <>
      <div className="container p-0 my-3">
        <div className="row m-0 p-0 ">
          <div className="col-lg-3 col-md-3 col-0 p-0">
            <LeftMenue type="Helping Hand And Donations" data={helpingHand} url="/helping-hand"/>
          </div>
          <div className="col-lg-9 col-md-9 col-12 bg-white">
                <h3 className="my-3 helping-hand-heading">{data.name}</h3>

            <div className="row m-0 p-0  p-lg-3 py-3">
              <div className="col-lg-6 col-md-6 col-12">
                {data?.logo&&<div className="helpingHandLogo mb-3">
                  <LazyLoadImage src={data?.logo} alt="" className="img-fluid" />
                </div>}
                <p style={{ textAlign: "justify" }}>{data.text}</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <div>
                <LazyLoadImage src={data.image} alt="helpingHand" className="img-fl mb-3 helping-image" />
              </div>
                <div>
                {data?.image2&& 
                <LazyLoadImage src={data.image2} alt="helpingHand" className="img-fl helping-image" />
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HelpingHand