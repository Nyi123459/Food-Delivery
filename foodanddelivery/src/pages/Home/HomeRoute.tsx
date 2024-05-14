import FAQ from "../../component/Home/FAQ/FAQ";
import Herosection from "../../component/Home/Herosection/Herosection";
import Interface from "../../component/Home/Interface/Interface";
import Navbar from "../../component/Navbar/Navbar";
import ParterShip from "../../component/Home/PartnerShip/PartnerShip";
import Trending from "../../component/Home/Trending/Trending";
import Newletters from "../../component/Home/Newletters/Newletters";

const HomeRoute = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
      <Newletters/>
    </div>
  );
};

export default HomeRoute;
