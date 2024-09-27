import { Outlet} from "react-router-dom";

import Navigate from "./nav";

function Layout(){
  return (
    <>
      <Navigate/>
      <Outlet />
      
    </>
  )
};

export default Layout;