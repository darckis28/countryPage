import { Outlet } from "react-router-dom";
import Hero from "../components/Hero";
import Context from "../context/Context";

const Layout = () => {
  return (
    <Context>
      <Hero />
      <Outlet />
    </Context>
  );
};
export default Layout;
