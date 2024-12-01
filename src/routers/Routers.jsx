import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import CountryDetails from "../pages/CountryDetails";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="/:country"
            element={<CountryDetails />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
