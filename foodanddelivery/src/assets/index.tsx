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
import Payment from '../assets/Instruction/payment.jpg';
import Order from '../assets/Instruction/order.jpg';
import Location from '../assets/Instruction/location.jpg';
import Meal from '../assets/Instruction/meal.jpg';

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
  Meal
};

import ChickenBreast from "./Food/ChickenBreast.jpg";
import Pancake from "./Food/Pancake.jpg";
import Ramen from "./Food/Ramen.jpg";
import RiceWithCurry from "./Food/RiceWithCurry.jpg";
import ShrimpFriedRice from "./Food/ShrimpFriedRice.jpg";

export const Food = [
  {
    image: ChickenBreast,
    title: "Chicken Breast",
  },
  {
    image: Pancake,
    title: "Pancake",
  },
  {
    image: Ramen,
    title: "Ramen",
  },
  {
    image: RiceWithCurry,
    title: "Rice with Curry",
  },
  {
    image: ShrimpFriedRice,
    title: "Shrimp Fried Rice",
  },
];
