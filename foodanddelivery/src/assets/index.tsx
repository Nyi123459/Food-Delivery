/* Icons */
import logo from "./logo.png";
import TransportationIcon from "./Page/Taxi.png";
import FoodIcon from "./Page/Food.png";
import MallIcon from "./Page/Mall.png";
import AllIcon from "./Page/All.png";
import Car from "./Page/Taxi.png";
import Display from "./Banner/Display.png";
import InterfaceIcon from "./Banner/Interface.png";
import Taxi from "./BecomePartner/Taxi.png";
import Rider from "./BecomePartner/Rider.png";
import Store from "./BecomePartner/Store.png";
import Question from "./question.png";
import MoneyBag from "./money-bag.png";
import Payment from "../assets/Instruction/payment.jpg";
import Order from "../assets/Instruction/order.jpg";
import Location from "../assets/Instruction/location.jpg";
import Meal from "../assets/Instruction/meal.jpg";
import Newletters from "./newletters.jpg";
import AppleBlack from "./DownloadApp/AppleBlack.png";
import AppleWhite from "./DownloadApp/AppleWhite.png";
import PlayStoreIcon from "./DownloadApp/PlayStore.png";
import QrCode from "./DownloadApp/QrCode.png";
import MobileApp from "./DownloadApp/MobileApp.png";
import BeefBurger from "../assets/Food/DailyDeal/beefburger.jpg";
import Coffee from "../assets/Food/DailyDeal/coffee4.jpg";
import Desert from "../assets/Food/DailyDeal/desert1.jpg";
import Strawberry from "../assets/Food/DailyDeal/strawberryjuice.jpg";
import Google from "./Google.png";
import Salad from "../assets/Food/FavoriteCuisines/salad.jpg";
import Juice from "../assets/Food/FavoriteCuisines/juice.jpg";
import MorningBreakfast from "../assets/Food/FavoriteCuisines/breakfast.jpg";
import Dumpling from "../assets/Food/FavoriteCuisines/dumpling.jpg";
import Soup from "../assets/Food/FavoriteCuisines/soup.jpg";
import Fruits from "../assets/Food/FavoriteCuisines/fruits.jpg";
import IceCream from "../assets/Food/FavoriteCuisines/icecream.jpg";
import Cake from "../assets/Food/FavoriteCuisines/cake.jpg";

interface Images {
  logo: string;
  TransportationIcon: string;
  FoodIcon: string;
  MallIcon: string;
  AllIcon: string;
  Car: string;
  Display: string;
  InterfaceIcon: string;
  Taxi: string;
  Rider: string;
  Store: string;
  Question: string;
  MoneyBag: string;
  Payment: string;
  Location: string;
  Order: string;
  Meal: string;
  Newletters: string;
  AppleBlack: string;
  AppleWhite: string;
  PlayStoreIcon: string;
  QrCode: string;
  MobileApp: string;
  BeefBurger: string;
  Coffee: string;
  Desert: string;
  Strawberry: string;
  Google: string;
  Salad: string;
  Juice: string;
  MorningBreakfast: string;
  Dumpling: string;
  Soup: string;
  Fruits: string;
  IceCream: string;
  Cake: string;
  Steak: string;
  Salmond: string;
  Spaghetti: string;
  Dimsum: string;
  Ramen: string;
  Image1: string;
  Image2: string;
  Image3: string;
  Image4: string;
  Image5: string;
  Image6: string;
  Image7: string;
  Image8: string;
  bakery: string;
  capcakestraw: string;
  icecream: string;
  krispykreme: string;
  chocolatecake: string;
  season: string;
}
export const Images: Images = {
  logo,
  TransportationIcon,
  FoodIcon,
  MallIcon,
  AllIcon,
  Car,
  Display,
  InterfaceIcon,
  Taxi,
  Rider,
  Store,
  Question,
  MoneyBag,
  Payment,
  Order,
  Location,
  Meal,
  Newletters,
  AppleBlack,
  AppleWhite,
  PlayStoreIcon,
  QrCode,
  MobileApp,
  BeefBurger,
  Coffee,
  Desert,
  Strawberry,
  Google,

  Salad,
  Juice,
  MorningBreakfast,
  Dumpling,
  Soup,
  Fruits,
  IceCream,
  Cake,

  Steak,
  Salmond,
  Spaghetti,
  Dimsum,
  Ramen,

  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,

  bakery,
  capcakestraw,
  icecream,
  krispykreme,
  chocolatecake,
  season,
};

/* Images for Herosection of Food Page  */
import ChickenBreast from "./Food/Herosection/ChickenBreast.jpg";
import Pancake from "./Food/Herosection/Pancake.jpg";
import Pizza from "./Food/Herosection/Pizza.jpg";
import Burger from "./Food/Herosection/Burger.jpg";
import Breakfast from "./Food/Herosection/Breakfast.jpg";
import RiceWithCurry from "./Food/Herosection/RiceWithCurry.jpg";
import KyayOh from "./Food/Herosection/Kyay Oh.jpg";

export const Food = [
  {
    image: Pizza,
    title: "Pizza",
  },
  {
    image: ChickenBreast,
    title: "Chicken Breast",
  },
  {
    image: Pancake,
    title: "Pancake",
  },
  {
    image: Breakfast,
    title: "Breakfast",
  },
  {
    image: Burger,
    title: "Burger",
  },
  {
    image: RiceWithCurry,
    title: "Rice With Curry",
  },
  {
    image: KyayOh,
    title: "Kyay Oh",
  },
];

/* Images for BestDeals of Food page  */
import Sandwiches from "./Food/Image/Sandwiches.png";
import FriedChicken from "./Food/Image/FriedChicken.png";
import PizzaDeal from "./Food/Image/Pizza-deal.png";

export const Image = [
  {
    image: Sandwiches,
    title: "Sandwiches",
  },
  {
    image: FriedChicken,
    title: "Fried Chicken",
  },
  {
    image: PizzaDeal,
    title: "Pizza",
  },
];

/* Images for Coupon of Food page  */
import Coupon1 from "./Food/CouponCard/Food Coupon1.png";
import Coupon2 from "./Food/CouponCard/Food Coupon2.png";
import Coupon3 from "./Food/CouponCard/Food Coupon3.png";
import Coupon4 from "./Food/CouponCard/Food Coupon4.png";

export const Coupons = [
  { id: "1", image: Coupon1 },
  { id: "2", image: Coupon2 },
  { id: "3", image: Coupon3 },
  { id: "4", image: Coupon4 },
];

/* Images for Popular Items of Food page  */

import Steak from "./Food/PopularItems/steak.jpg";
import Salmond from "./Food/PopularItems/salmond.jpg";
import Spaghetti from "./Food/PopularItems/spaghetti.jpg";
import Dimsum from "./Food/PopularItems/dimsum.jpg";
import Pasta from "./Food/PopularItems/pasta.jpg";
import Ramen from "./Food/PopularItems/ramen.jpg";
import Donut from "./Food/PopularItems/donut.jpg";
import PizzaHut from "./Food/PopularItems/pizza.jpg";

export const PopularItems = [
  { image: Steak, title: "Steak on the street" },
  {
    image: Salmond,
    title: "Seafood City",
  },
  {
    image: Spaghetti,
    title: "The Pizza Company",
  },
  {
    image: Dimsum,
    title: "Oriental House",
  },
  {
    image: Pasta,
    title: "Pizza Family",
  },
  {
    image: Ramen,
    title: "Ramen Monster",
  },
  {
    image: Donut,
    title: "JDonut",
  },
  {
    image: PizzaHut,
    title: "Pizza Hut",
  },
];

/* Images for Featured Restaurants of Food page  */

import Image1 from "./Food/FeaturedRestaurants/Image1.png";
import Image2 from "./Food/FeaturedRestaurants/Image2.png";
import Image3 from "./Food/FeaturedRestaurants/Image3.png";
import Image4 from "./Food/FeaturedRestaurants/Image4.png";
import Image5 from "./Food/FeaturedRestaurants/Image5.png";
import Image6 from "./Food/FeaturedRestaurants/Image6.png";
import Image7 from "./Food/FeaturedRestaurants/Image7.png";
import Image8 from "./Food/FeaturedRestaurants/Image8.png";

export const FeaturedRestaurants = [
  {
    image: Image1,
    title: "Food World",
  },
  {
    image: Image2,
    title: "Pizza hut",
  },
  {
    image: Image3,
    title: "Donuts",
  },
  {
    image: Image4,
    title: "Icecream",
  },
  {
    image: Image5,
    title: "Beef Steak",
  },
  {
    image: Image6,
    title: "CP Chicken",
  },
  {
    image: Image7,
    title: "Red square soup",
  },
  {
    image: Image8,
    title: "Taco Roll",
  },
];

import bakery from "./Food/FoodHighlights/bakery.jpg";
import capcakestraw from "./Food/FoodHighlights/capcakestraw.jpg";
import icecream from "./Food/FoodHighlights/icecream (2).jpg";
import chocolatecake from "./Food/FoodHighlights/chocolatecake.jpg";
import krispykreme from "./Food/FoodHighlights/krispykreme.jpg";
import season from "./Food/FoodHighlights/season.jpg";

export const FoodHighlights = [
  {
    image: bakery,
    title: "Kudos' Bakery",
  },
  {
    image: icecream,
    title: "Ice Manias",
  },
  {
    image: chocolatecake,
    title: "Khit Bakery",
  },
  {
    image: krispykreme,
    title: "Krispy Kreme",
  },
  {
    image: capcakestraw,
    title: "SP Bakery",
  },
  {
    image: season,
    title: "Season ",
  },
];

/* Images for Can Order Now Page  */
import FruitsAndVegetables from "./Can Order/Fruits & Vegetables.png";
import HomeAndLiving from "./Can Order/Home & Living.png";
import Stationary from "./Can Order/Stationary.png";
import Electronic from "./Can Order/Electronic.png";
import FlowerShop from "./Can Order/Flower Shop.png";
import BreadAndSnacks from "./Can Order/Breads & Snacks.png";
import Pharmacy from "./Can Order/Pharmacy.png";
import Cosmetic from "./Can Order/Cosmetic.png";

type Image = {
  id: string;
  img: string;
  title: string;
};

export const CanOrderImages: Image[] = [
  {
    id: "1",
    img: FruitsAndVegetables,
    title: "Fruits & Vegetabes",
  },
  {
    id: "2",
    img: HomeAndLiving,
    title: "Home & Living",
  },
  {
    id: "3",
    img: Stationary,
    title: "Stationary",
  },
  {
    id: "4",
    img: Electronic,
    title: "Electronic",
  },
  {
    id: "5",
    img: FlowerShop,
    title: "Flower Shop",
  },
  {
    id: "6",
    img: BreadAndSnacks,
    title: "Bread & Snacks",
  },
  {
    id: "7",
    img: Pharmacy,
    title: "Pharmacy",
  },
  {
    id: "8",
    img: Cosmetic,
    title: "Cosmetic",
  },
];

/* Images for Our Mall Brand Page  */
import CityExpress from "./Mall Brand/CityExpress.png";
import CityMall from "./Mall Brand/CityMall.png";
import CityMart from "./Mall Brand/CityMart.png";
import Nescafe from "./Mall Brand/Nescafe.png";
import Parisian from "./Mall Brand/Parisian.png";
import Seasons from "./Mall Brand/Seasons.png";
import SeinGayHar from "./Mall Brand/SeinGayHar.png";

export const MallBrandImage: Image[] = [
  {
    id: "1",
    img: CityExpress,
    title: "CityExpress",
  },
  {
    id: "2",
    img: CityMall,
    title: "CityMall",
  },
  {
    id: "3",
    img: CityMart,
    title: "CityMart",
  },
  {
    id: "4",
    img: Nescafe,
    title: "Nescafe",
  },
  {
    id: "5",
    img: Parisian,
    title: "Parisian",
  },
  {
    id: "6",
    img: Seasons,
    title: "Seasons",
  },
  {
    id: "7",
    img: SeinGayHar,
    title: "SeinGayHar",
  },
];

/* Mall Cupon Images */
import MallCuponOne from "./Mall/Mall Coupon1.png";
import MallCuponTwo from "./Mall/Mall Coupon2.png";
import MallCuponThree from "./Mall/Mall Coupon3.png";
import MallCuponFour from "./Mall/Mall Coupon4.png";

export const MallCupon: Image[] = [
  {
    id: "1",
    img: MallCuponOne,
    title: "Mall_Cupon_1",
  },
  {
    id: "2",
    img: MallCuponTwo,
    title: "Mall_Cupon_2",
  },
  {
    id: "3",
    img: MallCuponThree,
    title: "Mall_Cupon_3",
  },
  {
    id: "4",
    img: MallCuponFour,
    title: "Mall_Cupon_4",
  },
];

/* Payment Methods logo */

import AYA from "../assets/Taxi/Payment/AYA logo.png";
import Cash from "../assets/Taxi/Payment/Cash.png";
import KPay from "../assets/Taxi/Payment/K-Pay logo.png";
import MPU from "../assets/Taxi/Payment/MPU logo.png";
import UAB from "../assets/Taxi/Payment/UAB logo.png";
import WaveMoney from "../assets/Taxi/Payment/Wave Money logo.png";

export const PaymentLogos: Image[] = [
  {
    id: "1",
    img: KPay,
    title: "KBZ Pay",
  },
  {
    id: "2",
    img: WaveMoney,
    title: "Wave Pay",
  },
  {
    id: "3",
    img: AYA,
    title: "AYA Pay",
  },
  {
    id: "4",
    img: UAB,
    title: "UAB Pay",
  },
  {
    id: "5",
    img: MPU,
    title: "MPU Pay",
  },
  {
    id: "6",
    img: Cash,
    title: "Cash in hand",
  },
];
