import FAQ from "../../component/Home/FAQ/FAQ";
import Herosection from "../../component/Home/Herosection/Herosection";
import Interface from "../../component/Home/Interface/Interface";
import Navbar from "../../component/Common/Navbar/Navbar.common";
import ParterShip from "../../component/Home/PartnerShip/PartnerShip";
import Trending from "../../component/Home/Trending/Trending";
import DownloadSection from "../../component/Home/Interface/DownloadApp";

const HomeRoute = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar home={true} />
      <Herosection />
      <ParterShip />
      <Interface />
      <FAQ />
      <Trending />
      <DownloadSection />
    </div>
  );
};

export default HomeRoute;
