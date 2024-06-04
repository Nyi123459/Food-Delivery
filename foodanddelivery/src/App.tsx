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
r

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
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomeRoute />} />
              <Route path="/food" element={<FoodRoute />} />
            </Route>
            <Route
              path="/register/food-merchant-owner"
              element={<ProtectedRoute element={<OwnerRegister />} />}
            />
            <Route
              path="/register/rider"
              element={<ProtectedRoute element={<RiderRegister />} />}
            />
            <Route
              path="/register/driver"
              element={<ProtectedRoute element={<DriverRegister />} />}
            />
            <Route path="/login/:role" element={<PartnerLogin />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/taxi" element={<Taxi />} />
            <Route path="/food" element={<FoodRoute />} />
            <Route path="/mall" element={<MallRoute />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </UserProvider>
          
    </div>
  );
}

export default App;
