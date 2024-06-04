import FloatingItems from "../../Common/FloatingItems";
import { FavoriteCuisinesLinks } from "../../../constants/food";

const FavoriteCuisines = () => {
  return (
    <div className="flex flex-col py-12 ml-[10%] mr-[10%]">
      <div className="flex flex-start mb-6">
        <h2 className="text-2xl font-bold">Your favourite cuisines</h2>
      </div>
      <FloatingItems data={FavoriteCuisinesLinks} showOptionalContent={true} />
    </div>
  );
};

export default FavoriteCuisines;
