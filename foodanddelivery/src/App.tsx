import React from "react";
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
import { UserProvider } from "./context/userContext";
import ProtectedRoute from "../src/routes/protectedRoute/protectedRoute";
import Taxi from "./pages/Taxi/Taxi";
import ProfileDetail from "./pages/Account/LoginProfile/ProfileDetail";
import { GoogleMapsProvider } from "./context/GoogleMapsProvider";
import { Toaster } from "react-hot-toast";
import DriverBidding from "./component/Taxi/Booking/DriverBidding";
import RoleSwitch from "./pages/Account/RoleSwitch";

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
    <div className="font-bodyFont" style={{ margin: 0 }}>
      <UserProvider>
        <GoogleMapsProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomeRoute />} />
                <Route path="food" element={<FoodRoute />} />
                <Route path="mall" element={<MallRoute />} />
              </Route>
              <Route path="taxi" element={<Taxi />} />
              <Route
                path="register/food-merchant-owner"
                element={<ProtectedRoute element={<OwnerRegister />} />}
              />
              <Route
                path="register/rider"
                element={<ProtectedRoute element={<RiderRegister />} />}
              />
              <Route
                path="register/driver"
                element={<ProtectedRoute element={<DriverRegister />} />}
              />
              <Route
                path="userProfile/profile"
                element={<ProtectedRoute element={<ProfileDetail />} />}
              />
              <Route path="login/:role" element={<PartnerLogin />} />
              <Route path="login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/driver/bidding"
                element={
                  <ProtectedRoute element={<DriverBidding isOpen={false} onClose={function (): void {
                    throw new Error("Function not implemented.");
                  } } />} role="driver" />
                }
              />
              <Route
                path="/roleSwitch"
                element={<ProtectedRoute element={<RoleSwitch />} />}
              />{" "}
              {/* Add the RoleSwitch route */}
            </Routes>
            <Toaster />
          </Router>
        </GoogleMapsProvider>
      </UserProvider>
    </div>
  );
}

export default App;
