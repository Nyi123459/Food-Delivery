import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import HomeRoute from "./pages/Home/HomeRoute";
import Footer from "./component/Common/Footer/Footer";
import "./index.css";
import FoodRoute from "./pages/Food/FoodRoute";
import OwnerRegister from "./pages/Account/Login/OwnerRegister";
import RiderRegister from "./pages/Account/Login/RiderRegister";
import DriverRegister from "./pages/Account/Login/DriverRegister";
import PartnerLogin from "./pages/Account/Login/PartnerLogin";
import Login from "./pages/Account/Login";
import MallRoute from "./pages/Mall/MallRoute";
import SignUp from "./pages/Account/SignUp";
import ProfileDetail from "./pages/Account/LoginProfile/ProfileDetail";

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
          <Route path="/food" element={<FoodRoute />} />
          <Route path="/mall" element={<MallRoute />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profileDetail" element={<ProfileDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
