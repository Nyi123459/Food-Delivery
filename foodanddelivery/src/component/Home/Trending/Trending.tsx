// const Trending = () => {
//   return (
//     <main className="px-6">
//       <h2 className="text-center text-3xl font-bold mb-10 mt-6">
//         Get more from your neighborhood
//       </h2>

//       <section>
//         <div className="flex justify-around gap-10 mb-2 ml-[10%] mr-[10%]">
//           <button className="text-lg font-semibold">Top Foods</button>
//           <button className="text-lg font-semibold">Top Shops</button>
//           <button className="text-lg font-semibold">Top Cities</button>
//         </div>
//         <hr />

//         <div className="grid grid-cols-1 ml-[10%] mr-[10%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-8 mt-2 mb-8 gap-4 text-black font-medium text-center">
//           <div className="p-1">New York</div>
//           <div className="p-1">Yangon</div>
//           <div className="p-1">Taunggyi</div>
//           <div className="p-1">Mandalay</div>
//           <div className="p-1">Sagaing</div>
//           <div className="p-1">Monywa</div>
//           <div className="p-1">Mogok</div>
//           <div className="p-1">TaungTha</div>
//           <div className="p-1">Myingyan</div>
//           <div className="p-1">Aungban</div>
//           <div className="p-1">Meikhtila</div>
//           <div className="p-1">Wundwin</div>
//           <div className="p-1">Pizza</div>
//           <div className="p-1">Burger</div>
//           <div className="p-1">Yangon</div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Trending;
import { useState } from "react";

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
    <main className="px-6">
      <h2 className="text-center text-3xl font-bold mb-10 mt-6">
        Get more from your neighborhood
      </h2>

      <section>
        <div className="flex justify-around gap-10 mb-2 ml-[10%] mr-[10%]">
          <button
            className={`text-lg font-semibold ${
              selectedCategory === "foods" ? "text-amber-500" : ""
            }`}
            onClick={() => setSelectedCategory("foods")}
          >
            Top Foods
          </button>
          <button
            className={`text-lg font-semibold ${
              selectedCategory === "shops" ? "text-amber-500" : ""
            }`}
            onClick={() => setSelectedCategory("shops")}
          >
            Top Shops
          </button>
          <button
            className={`text-lg font-semibold ${
              selectedCategory === "cities" ? "text-amber-500" : ""
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
