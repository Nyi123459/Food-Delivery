import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import HomeRoute from "./pages/Home/HomeRoute";
import Footer from "./component/Footer/Footer";
import "./index.css";
import FoodRoute from "./pages/Food/FoodRoute";
import OwnerRegister from "./pages/Account/Login/OwnerRegister";
import RiderRegister from "./pages/Account/Login/RiderRegister";
import DriverRegister from "./pages/Account/Login/DriverRegister";
import PartnerLogin from "./pages/Account/Login/PartnerLogin";
import Login from "./pages/Account/Login";

const Layout: React.FC = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="font-bodyFont style={{ margin: 0 }}">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeRoute />} />
            <Route path="/food" element={<FoodRoute />} />
          </Route>
          <Route
            path="/register/food-merchant-owner"
            element={<OwnerRegister />}
          />
          <Route path="/register/rider" element={<RiderRegister />} />
          <Route path="/register/driver" element={<DriverRegister />} />
          <Route path="/login/:role" element={<PartnerLogin />} />
          <Route path="/login/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
