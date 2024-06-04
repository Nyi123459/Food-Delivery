import React from "react";
import FloatingItems from "../../Common/FloatingItems";
import { FavoriteCuisinesLinks } from "../../../constants/food";
import Heading from "../../ItemCard/Items/Heading";

const FavoriteCuisines = () => {
  return (
    <div className="flex flex-col py-12 ml-[10%] mr-[10%]">
      <Heading heading="Your favourite cuisines" />
      <FloatingItems data={FavoriteCuisinesLinks} showOptionalContent={true} />
    </div>
  );
};

export default FavoriteCuisines;
