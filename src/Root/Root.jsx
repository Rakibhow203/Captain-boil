import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/Home/NavBar/NavBar";
import Footer from "../pages/Home/Footer/Footer";
import { useEffect } from "react";


const Root = () => {
  const loc = useLocation();
  useEffect(() => {
    if (loc.pathname === '/') {
      document.title = `TC-Boil - HOME`;
    } else {
      document.title = `TC-Boil ${loc.pathname.replace('/', '-')}`;
    }
  }, [loc.pathname]);
  return (
    <div>

      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;