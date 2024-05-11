import FAQ from "../../component/Home/FAQ/FAQ";
import Herosection from "../../component/Home/Herosection/Herosection";
import Interface from "../../component/Home/Interface/Interface";
import Navbar from "../../component/Navbar/Navbar";
import ParterShip from "../../component/Home/PartnerShip/ParterShip";
import Trending from "../../component/Home/Trending/Trending";

const HomeRoute = () => {
  return (
    <div>
      <Navbar
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Herosection />
      <ParterShip />
      <Interface />
      <FAQ />
      <Trending />
    </div>
  );
};

export default HomeRoute;
