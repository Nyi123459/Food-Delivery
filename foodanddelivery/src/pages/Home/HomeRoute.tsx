import FAQ from "../../component/FAQ/FAQ";
import Herosection from "../../component/Herosection/Herosection";
import Interface from "../../component/Interface/Interface";
import Navbar from "../../component/Navbar/Navbar";
import ParterShip from "../../component/PartnerShip/ParterShip";
import Trending from "../../component/Trending/Trending";

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
