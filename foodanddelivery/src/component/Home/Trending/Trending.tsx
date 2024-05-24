import { useState } from "react";
import Heading from "../../ItemCard/Items/Heading";

const Trending = () => {
  const [selectedCategory, setSelectedCategory] = useState("foods");

  const topFoods = [
    "Mohinga",
    "Burmese Curry",
    "Shan Noodle",
    "Fried Rice",
    "Ice-cream & Drink",
    "Bubble Tea",
    "Kyay Oh",
    "Mala Xiang Guo",
    "Pizza",
    "Burger",
    "Steak",
    "Sushi",
    "Pasta",
    "Tacos",
    "Tea & Coffee",
  ];
  const topShops = [
    "KFC",
    "Lotteria",
    "Marry Brown",
    "Bonchon",
    "YKKO",
    "Parisian",
    "King Lashio",
    "Gong Cha",
    "MINISO",
    "REMAX",
    "Omuk",
    "Bonchon",
    "Cheese O'Tea",
    "Potato Corner",
    "Marry Brown",
  ];
  const topCities = [
    "Yangon",
    "Mandalay",
    "Taunggyi",
    "Kalaw",
    "Sagaing",
    "Monywa",
    "PyinOoLwin",
    "Bago",
    "Myingyan",
    "Aungban",
    "Meikhtila",
    "Myawaddy",
    "Hpa-An",
    "Nyaung-U",
    "Bagan",
  ];

  const renderItems = () => {
    switch (selectedCategory) {
      case "foods":
        return topFoods;
      case "shops":
        return topShops;
      case "cities":
        return topCities;
      default:
        return [];
    }
  };

  return (
    <main className="px-6 pb-20">
      <Heading heading="Get more from your neighborhood" />

      <section>
        <div className="flex justify-around gap-10 mb-2 ml-[10%] mr-[10%]">
          <button
            className={`text-lg font-semibold hover:text-yellow-300 ${
              selectedCategory === "foods" ? "text-amber-600" : ""
            }`}
            onClick={() => setSelectedCategory("foods")}
          >
            Top Foods
          </button>
          <button
            className={`text-lg font-semibold hover:text-yellow-300 ${
              selectedCategory === "foods" ? "text-amber-600" : ""
            }`}
            onClick={() => setSelectedCategory("shops")}
          >
            Top Shops
          </button>
          <button
            className={`text-lg font-semibold hover:text-yellow-300 ${
              selectedCategory === "foods" ? "text-amber-600" : ""
            }`}
            onClick={() => setSelectedCategory("cities")}
          >
            Top Cities
          </button>
        </div>
        <hr />

        <div className="grid grid-cols-1 ml-[10%] mr-[10%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-8 mt-2 mb-8 gap-4 text-black font-medium text-center ">
          {renderItems().map((item, index) => (
            <div key={index} className="p-1 hover:bg-amber-100">
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Trending;
