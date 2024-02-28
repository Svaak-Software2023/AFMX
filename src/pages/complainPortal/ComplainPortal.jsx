import ExistingClients from "./ExistingClients";
import NonExistingClients from "./NonExistingClients";
import "./complain.css";
function ComplainPortal() {
  const user=JSON.parse(localStorage.getItem("user")) 
  return (
    <> 
      {
        user&&user.token
          ?
          <ExistingClients />
          :
          <NonExistingClients />
      }
    </>
  );
}

export default ComplainPortal;
