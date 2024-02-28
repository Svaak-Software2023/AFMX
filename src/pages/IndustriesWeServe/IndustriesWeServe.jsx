import ListItemWithImage from "../../components/list of item with image/ListItemWithImage";
import IndustryWeserveData from "../../assets/data/industriesWeServeData.json"
function IndustriesWeServe() {

  return (
    <>
      <ListItemWithImage
        name="Industries We Serve"
        propData={IndustryWeserveData}
       />
    </>
  )
}

export default IndustriesWeServe