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
import MallRoute from "./pages/Mall/MallRoute";

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

            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Route>
          <Route path="/food" element={<FoodRoute />} />
          <Route path="/mall" element={<MallRoute />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
