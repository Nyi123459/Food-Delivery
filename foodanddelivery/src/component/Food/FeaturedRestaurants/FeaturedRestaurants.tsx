/* import React from "react";
import Heading from "../../ItemCard/Items/Heading";
import Product from "../../ItemCard/ItemCard";
import { FeaturedRestaurantsMenu } from "../../ItemCard/Items";


const FeaturedRestaurants : React.FC = () => {
  return (
    <div className="flex flex-col pb-20 ml-[10%] mr-[10%]">
    <Heading heading="Featured Restaurants" />
    {FeaturedRestaurantsMenu.map((item:any) => (
          <div className="px-2" key={item._id}>
            <Product
              _id={item._id}
              image={item.image}
              shopTitle={item.shopTitle}
              price={item.price}
              color={item.color}
              badge={item.badge}
              description={item.description}
              rating={item.rating}
              category={item.category}
              time={""}
              deliveryCharges={""}
              deliveryType={item.deliveryType}
              review={item.review}
              menuTitle={item.menuTitle}
              menuType={item.menuType}
              toppings={""}
              menuSize={""}
            />
          </div>
        ))}
    </div>
  )
}

export default FeaturedRestaurants */

import React from "react";
import Heading from "../../ItemCard/Items/Heading";
import Product from "../../ItemCard/ItemCard";
import { FeaturedRestaurantsMenu } from "../../ItemCard/Items";

const FeaturedRestaurants: React.FC = () => {
  return (
    <div className="flex flex-col pb-20 ml-[10%] mr-[10%]">
      <Heading heading="Featured Restaurants" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {FeaturedRestaurantsMenu.slice(0, 8).map((item: any) => (
          <div className="px-2" key={item._id}>
            <Product
              _id={item._id}
              image={item.image}
              shopTitle={item.shopTitle}
              price={item.price}
              color={item.color}
              badge={item.badge}
              description={""}
              rating={item.rating}
              category={""}
              time={""}
              deliveryCharges={""}
              deliveryType={item.deliveryType}
              review={item.review}
              menuTitle={item.menuTitle}
              menuType={item.menuType}
              toppings={""}
              menuSize={""}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRestaurants;
