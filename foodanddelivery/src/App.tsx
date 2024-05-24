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
import SignUp from "./pages/Account/SignUp";
import SignInRoute from "./pages/Account/SignInRoute";

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
          <Route path="/signin" element={<SignInRoute />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
