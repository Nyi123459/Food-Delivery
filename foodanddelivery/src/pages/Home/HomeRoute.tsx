import FAQ from "../../component/FAQ/FAQ";
import Footer from "../../component/Footer/Footer";
import Herosection from "../../component/Herosection/Herosection";
import Interface from "../../component/Interface/Interface";
import Navbar from "../../component/Navbar/Navbar";
import ParterShip from "../../component/PartnerShip/ParterShip";
import Trending from "../../component/Trending/Trending";

const HomeRoute = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      {/* <ParterShip />
      <Interface />
      <FAQ />
      <Trending />
      <Footer /> */}
    </div>
  );
};

export default HomeRoute;
