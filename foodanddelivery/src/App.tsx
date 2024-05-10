import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import HomeRoute from "./pages/Home/HomeRoute";
import Footer from "./component/Footer/Footer";
import "./index.css";
import MainFoodPage from "./pages/FoodPage/MainFoodPage";

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
    <div className="font-bodyFont">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeRoute />} />
            <Route path="/product/:_id" element={<MainFoodPage />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
