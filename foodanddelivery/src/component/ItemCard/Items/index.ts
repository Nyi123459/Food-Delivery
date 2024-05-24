import { Images } from "../../../assets";

export interface SampleMenuItem {
  _id: string;
  image: string;
  shopTitle: string;
  menuTitle: string;
  menuType: string;
  toppings: string;
  menuSize: string;
  price: string;
  color: string;
  badge: boolean;
  rating: string;
  category: string;
  time: string;
  deliveryCharges: string;
  description: string;
  deliveryType: boolean;
  review: string;
}

export const SampleMenuData: SampleMenuItem[] = [
  {
    _id: "201",
    image: Images.BeefBurger,
    shopTitle: "Co Co Food",
    menuTitle: "Beef Burger",
    price: "3500",
    color: "",
    badge: false,
    description: "Delicious Beef burger.",
    rating: "4.3",
    category: "Fast Food",
    time: "35 min",
    deliveryCharges: "250",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  {
    _id: "202",
    image: Images.Coffee,
    shopTitle: "Season Bakery",
    menuTitle: "Nice Coffee",
    price: "2000",
    color: "",
    badge: true,
    description: "Chocolate and milk",
    rating: "4.0",
    category: "Coffee",
    time: "20 min",
    deliveryCharges: "500",
    deliveryType: true,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  {
    _id: "203",
    image: Images.Desert,
    shopTitle: "Season Bakery",
    menuTitle: "Sweet Cake",
    price: "1500",
    color: "",
    badge: false,
    description: "Yummy Cake",
    rating: "3.5",
    category: "Desert",
    time: "10 min",
    deliveryCharges: "300",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  {
    _id: "204",
    image: Images.Strawberry,
    shopTitle: "Chapayom",
    menuTitle: "Strawberry Juice",
    price: "2500",
    color: "",
    badge: true,
    description: "Cool Strawberry and Milk Juice",
    rating: "4.5",
    category: "Juice",
    time: "5 min",
    deliveryCharges: "Free",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },

  // Add other items here
];
