import React from "react";
import Heading from "../../ItemCard/Items/Heading";
import Product from "../../ItemCard/ItemCard";
import ReusableSlider from "../../ItemCard/Items/ReusableSlider";
import { PopularItem } from "../../ItemCard/Items";

const PopularItems: React.FC = () => {
  const customSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="flex flex-col pb-20 ml-[10%] mr-[10%]">
      <Heading heading="Popular Items" />
      <ReusableSlider settings={customSettings}>
        {PopularItem.map((item) => (
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
              time={item.time}
              deliveryCharges={item.deliveryCharges}
              deliveryType={item.deliveryType}
              review={item.review}
              menuTitle={item.menuTitle}
              menuType={item.menuType}
              toppings={""}
              menuSize={""}
            />
          </div>
        ))}
      </ReusableSlider>
    </div>
  );
};

export default PopularItems;
