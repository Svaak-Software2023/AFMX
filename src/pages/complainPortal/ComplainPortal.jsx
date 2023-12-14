import { useEffect, useState } from "react";
import ExistingClients from "./ExistingClients";
import NonExistingClients from "./NonExistingClients";
import "./complain.css";
function ComplainPortal() {
  const [data,setData]=useState(false)
  
  return (
    <> 
      {
        data
          ?
          <ExistingClients />
          :
          <NonExistingClients />
      }
    </>
  );
}

export default ComplainPortal;
