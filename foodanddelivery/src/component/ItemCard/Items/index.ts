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


export const PopularItem : SampleMenuItem[] = [
  {
    _id: "301",
    image: Images.Steak,
    shopTitle: "Steak Theory",
    menuTitle: "Beef Steak",
    price: "3500",
    color: "",
    badge: false,
    description: "Delicious Beef burger.",
    rating: "4.3",
    category: "European",
    time: "35 min",
    deliveryCharges: "250",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  {
    _id: "302",
    image: Images.Salmond,
    shopTitle: "Oishi Shushi House",
    menuTitle: "Nice hotpost",
    price: "2000",
    color: "",
    badge: true,
    description: "Hotpot and BBQ",
    rating: "4.0",
    category: "Chinese",
    time: "20 min",
    deliveryCharges: "500",
    deliveryType: true,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  {
    _id: "303",
    image: Images.Spaghetti,
    shopTitle: "Pizza Company",
    menuTitle: "tomato sauce spaghetti",
    price: "1500",
    color: "",
    badge: false,
    description: "Yummy Cake",
    rating: "3.5",
    category: "European",
    time: "10 min",
    deliveryCharges: "300",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  {
    _id: "304",
    image: Images.Dimsum,
    shopTitle: "Oriental House",
    menuTitle: "Breakfast Dimsum",
    price: "2500",
    color: "",
    badge: true,
    description: "All kinds of dimsum",
    rating: "4.5",
    category: "Chinese",
    time: "5 min",
    deliveryCharges: "Free",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },

  {
    _id: "305",
    image: Images.Ramen,
    shopTitle: "Ramen Monster",
    menuTitle: "Tonkotsu Ramen",
    price: "2500",
    color: "",
    badge: true,
    description: "All kinds of ramen",
    rating: "4.5",
    category: "Chinese",
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

export const FeaturedRestaurantsMenu : SampleMenuItem[] = [
  {
    _id: "401",
    image: Images.Image1,
    shopTitle: "Bonchon",
    menuTitle: "cheese sticky rice",
    price: "3500",
    color: "",
    badge: false,
    description: "Delicious Beef burger.",
    rating: "4.3",
    category: "European",
    time: "35 min",
    deliveryCharges: "250",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  {
    _id: "402",
    image: Images.Image2,
    shopTitle: "Food World",
    menuTitle: "Nice hotpost",
    price: "2000",
    color: "",
    badge: false,
    description: "Hotpot and BBQ",
    rating: "4.0",
    category: "Chinese",
    time: "20 min",
    deliveryCharges: "500",
    deliveryType: true,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  {
    _id: "403",
    image: Images.Image3,
    shopTitle: "Pizza Company",
    menuTitle: "tomato sauce spaghetti",
    price: "1500",
    color: "",
    badge: false,
    description: "Yummy Cake",
    rating: "3.5",
    category: "European",
    time: "10 min",
    deliveryCharges: "300",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  {
    _id: "404",
    image: Images.Image4,
    shopTitle: "Oriental House",
    menuTitle: "Breakfast Dimsum",
    price: "2500",
    color: "",
    badge: true,
    description: "All kinds of dimsum",
    rating: "4.5",
    category: "Chinese",
    time: "5 min",
    deliveryCharges: "Free",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },

  {
    _id: "405",
    image: Images.Image5,
    shopTitle: "Ramen Monster",
    menuTitle: "Tonkotsu Ramen",
    price: "2500",
    color: "",
    badge: true,
    description: "All kinds of ramen",
    rating: "4.5",
    category: "Chinese",
    time: "5 min",
    deliveryCharges: "Free",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },

  {
    _id: "406",
    image: Images.Image6,
    shopTitle: "Ramen Monster",
    menuTitle: "Tonkotsu Ramen",
    price: "2500",
    color: "",
    badge: true,
    description: "All kinds of ramen",
    rating: "4.5",
    category: "Chinese",
    time: "5 min",
    deliveryCharges: "Free",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  {
    _id: "407",
    image: Images.Image7,
    shopTitle: "Ramen Monster",
    menuTitle: "Tonkotsu Ramen",
    price: "2500",
    color: "",
    badge: true,
    description: "All kinds of ramen",
    rating: "4.5",
    category: "Chinese",
    time: "5 min",
    deliveryCharges: "Free",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },

  {
    _id: "408",
    image: Images.Image8,
    shopTitle: "Ramen Monster",
    menuTitle: "Tonkotsu Ramen",
    price: "2500",
    color: "",
    badge: true,
    description: "All kinds of ramen",
    rating: "4.5",
    category: "Chinese",
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


export const FoodHighlightsMenu : SampleMenuItem[] = [
  {
    _id: "501",
    image: Images.bakery,
    shopTitle: "Kudos' Bakery",
    menuTitle: "cheese sticky rice",
    price: "3500",
    color: "",
    badge: false,
    description: "Delicious Beef burger.",
    rating: "4.3",
    category: "European",
    time: "35 min",
    deliveryCharges: "250",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  {
    _id: "502",
    image: Images.capcakestraw,
    shopTitle: "SP Bakery",
    menuTitle: "Nice hotpost",
    price: "2000",
    color: "",
    badge: false,
    description: "Hotpot and BBQ",
    rating: "4.0",
    category: "Chinese",
    time: "20 min",
    deliveryCharges: "500",
    deliveryType: true,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  {
    _id: "503",
    image: Images.icecream,
    shopTitle: "Ice Manias",
    menuTitle: "tomato sauce spaghetti",
    price: "1500",
    color: "",
    badge: false,
    description: "Yummy Cake",
    rating: "3.5",
    category: "European",
    time: "10 min",
    deliveryCharges: "300",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  {
    _id: "504",
    image: Images.krispykreme,
    shopTitle: "Krispy Kreme",
    menuTitle: "Breakfast Dimsum",
    price: "2500",
    color: "",
    badge: true,
    description: "All kinds of dimsum",
    rating: "4.5",
    category: "Chinese",
    time: "5 min",
    deliveryCharges: "Free",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },

  {
    _id: "505",
    image: Images.chocolatecake,
    shopTitle: "Khit Bakery",
    menuTitle: "Tonkotsu Ramen",
    price: "2500",
    color: "",
    badge: true,
    description: "All kinds of ramen",
    rating: "4.5",
    category: "Chinese",
    time: "5 min",
    deliveryCharges: "Free",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },

  {
    _id: "406",
    image: Images.season,
    shopTitle: "Season",
    menuTitle: "Tonkotsu Ramen",
    price: "2500",
    color: "",
    badge: true,
    description: "All kinds of ramen",
    rating: "4.5",
    category: "Chinese",
    time: "5 min",
    deliveryCharges: "Free",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  
];

export const OurTopPicksMenu : SampleMenuItem[] = [
  {
    _id: "601",
    image: Images.AllFruits,
    shopTitle: "Ocean Center",
    menuTitle: "cheese sticky rice",
    price: "3500",
    color: "",
    badge: false,
    description: "Delicious Beef burger.",
    rating: "4.3",
    category: "European",
    time: "35 min",
    deliveryCharges: "250",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  {
    _id: "602",
    image: Images.Cosmetics,
    shopTitle: "Beauty Diary",
    menuTitle: "Nice hotpost",
    price: "2000",
    color: "",
    badge: false,
    description: "Hotpot and BBQ",
    rating: "4.0",
    category: "Chinese",
    time: "20 min",
    deliveryCharges: "500",
    deliveryType: true,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  {
    _id: "603",
    image: Images.Earphones,
    shopTitle: "Remax",
    menuTitle: "tomato sauce spaghetti",
    price: "1500",
    color: "",
    badge: false,
    description: "Yummy Cake",
    rating: "3.5",
    category: "European",
    time: "10 min",
    deliveryCharges: "300",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  {
    _id: "604",
    image: Images.PharmacyStore,
    shopTitle: "Shwe Ohh",
    menuTitle: "Breakfast Dimsum",
    price: "2500",
    color: "",
    badge: true,
    description: "All kinds of dimsum",
    rating: "4.5",
    category: "Chinese",
    time: "5 min",
    deliveryCharges: "250",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },

  {
    _id: "605",
    image: Images.StationaryStore,
    shopTitle: "KK Statinary",
    menuTitle: "Tonkotsu Ramen",
    price: "2500",
    color: "",
    badge: true,
    description: "All kinds of ramen",
    rating: "4.5",
    category: "Chinese",
    time: "5 min",
    deliveryCharges: "Free",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },

  {
    _id: "606",
    image: Images.Vegetables,
    shopTitle: "City Mall",
    menuTitle: "Tonkotsu Ramen",
    price: "2500",
    color: "",
    badge: true,
    description: "All kinds of ramen",
    rating: "4.5",
    category: "Chinese",
    time: "5 min",
    deliveryCharges: "750",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  
];

export const FreeDeliveryMenu : SampleMenuItem[] = [
  {
    _id: "701",
    image: Images.KFC,
    shopTitle: "KFC",
    menuTitle: "cheese sticky rice",
    price: "3500",
    color: "",
    badge: false,
    description: "Delicious Beef burger.",
    rating: "4.3",
    category: "European",
    time: "35 min",
    deliveryCharges: "free",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  {
    _id: "702",
    image: Images.Popcorn,
    shopTitle: "Sweet Choco",
    menuTitle: "Nice hotpost",
    price: "2000",
    color: "",
    badge: false,
    description: "Hotpot and BBQ",
    rating: "4.0",
    category: "Chinese",
    time: "20 min",
    deliveryCharges: "free",
    deliveryType: true,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  {
    _id: "703",
    image: Images.BubbleTea,
    shopTitle: "Penlnd",
    menuTitle: "tomato sauce spaghetti",
    price: "1500",
    color: "",
    badge: false,
    description: "Yummy Cake",
    rating: "3.5",
    category: "European",
    time: "10 min",
    deliveryCharges: "free",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  {
    _id: "704",
    image: Images.GG,
    shopTitle: "G & G",
    menuTitle: "Breakfast Dimsum",
    price: "2500",
    color: "",
    badge: true,
    description: "All kinds of dimsum",
    rating: "4.5",
    category: "Chinese",
    time: "5 min",
    deliveryCharges: "Free",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },

  {
    _id: "705",
    image: Images.PotatoCorner,
    shopTitle: "Potato Corner",
    menuTitle: "Tonkotsu Ramen",
    price: "2500",
    color: "",
    badge: true,
    description: "All kinds of ramen",
    rating: "4.5",
    category: "Chinese",
    time: "5 min",
    deliveryCharges: "Free",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },

  {
    _id: "706",
    image: Images.Crispy,
    shopTitle: "Bread Talk",
    menuTitle: "Tonkotsu Ramen",
    price: "2500",
    color: "",
    badge: true,
    description: "All kinds of ramen",
    rating: "4.5",
    category: "Chinese",
    time: "5 min",
    deliveryCharges: "Free",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },

  {
    _id: "707",
    image: Images.Abc,
    shopTitle: "ABC mart",
    menuTitle: "Tonkotsu Ramen",
    price: "2500",
    color: "",
    badge: true,
    description: "All kinds of ramen",
    rating: "4.5",
    category: "Chinese",
    time: "5 min",
    deliveryCharges: "Free",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  
  {
    _id: "708",
    image: Images.Chocosnack,
    shopTitle: "Seven Eleven",
    menuTitle: "Tonkotsu Ramen",
    price: "2500",
    color: "",
    badge: true,
    description: "All kinds of ramen",
    rating: "4.5",
    category: "Chinese",
    time: "5 min",
    deliveryCharges: "Free",
    deliveryType: false,
    review: "",
    menuType: "",
    toppings: "",
    menuSize: "",
  },
  
  
];


