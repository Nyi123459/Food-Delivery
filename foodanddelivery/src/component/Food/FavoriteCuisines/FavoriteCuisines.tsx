import React from "react";
import FloatingItems from "../../Common/FloatingItems";
import { FavoriteCuisinesLinks } from "../../../constants/food";

const FavoriteCuisines = () => {
  return (
    <FloatingItems
      data={FavoriteCuisinesLinks}
      heading={"Your Favorite Cuisines"}
    />
  );
};

export default FavoriteCuisines;
