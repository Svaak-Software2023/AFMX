import React from 'react'
import { useParams } from 'react-router-dom';
import industryData from "../../assets/data/industriesWeServeData.json";
import ListItemWithImage from '../../components/list of item with image/ListItemWithImage';

function SubList() {
  const { name } = useParams()
  const data = industryData.find((item) => item.name === name);
  console.log();
  return (
    <>
      {
        data?.data ?
          <ListItemWithImage
            name={data.name} 
            propData={data?.data}
            />
          :
          <h1>Data Not Found</h1>
      }
    </>
  )
}

export default SubList