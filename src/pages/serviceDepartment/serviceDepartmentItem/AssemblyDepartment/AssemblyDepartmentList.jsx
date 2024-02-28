
import ListItemWithImage from "../../../../components/list of item with image/ListItemWithImage";
import data from "../../../../assets/data/serviceDepartmentData.json";
import { useParams } from "react-router-dom";

function AssemblyDepartmentList(){
    const {id} = useParams();
    const listData = data[1].submenu.find((item) => item.id == id);
    return (
        <>
            <ListItemWithImage name = {listData.name} propData={listData.data}/>
        </>
    )
}

export default AssemblyDepartmentList;