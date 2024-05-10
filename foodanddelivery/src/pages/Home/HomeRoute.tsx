import FAQ from "../../component/FAQ/FAQ";
import Herosection from "../../component/Herosection/Herosection";
import Interface from "../../component/Interface/Interface";
import Navbar from "../../component/Navbar/Navbar";
import ParterShip from "../../component/PartnerShip/ParterShip";
import Trending from "../../component/Trending/Trending";
import styles from "../../style";

const HomeRoute = () => {
  return (
    <div>
      <Navbar
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Herosection />
        </div>
      </div>
      <ParterShip />
      <Interface />
      <FAQ />
      <Trending />
    </div>
  );
};

export default HomeRoute;
