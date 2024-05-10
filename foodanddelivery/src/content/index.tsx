import { RxAngle, RxFigmaLogo, RxGithubLogo } from "react-icons/rx";
import Images from "../assets";

export const footerLinks = [
  {
    title: "Product",
    links: [
      {
        name: "Feature",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "API",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Solution",
        link: "https://www.hoobank.com/create/",
      },
    ],
  },

  {
    title: "Company",
    links: [
      {
        name: "About Us",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Contact Us",
        link: "https://www.hoobank.com/suggestions/",
      },
    ],
  },

  {
    title: "Support",
    links: [
      {
        name: "Support Center",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "System Status",
        link: "https://www.hoobank.com/become-a-partner/",
      },
      {
        name: "Language",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
  {
    title: "Follow Us",
    links: [
      {
        name: <RxFigmaLogo />,
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: <RxGithubLogo />,
        link: "https://www.hoobank.com/become-a-partner/",
      },
      {
        name: <RxAngle />,
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const partnerShips = [
  {
    icon: Images.Taxi,
    title: "Become a Savor Driver",
    text: "As a delivery driver, you'll make reliable money-working anytime, anywhere.",
    link: "Start earning ⮕",
  },
  {
    icon: Images.Rider,
    title: "Become a Savor Rider",
    text: "As a delivery Rider, you'll make reliable money—working anytime, anywhere.",
    link: "Start earning ⮕",
  },
  {
    icon: Images.Store,
    title: "Become a Savor Partner",
    text: "Grow your business and reach new customers by partnering with us.",
    link: "Start earning ⮕",
  },
];

export const socialMedia = [
  {
    id: "social-media-2",
    icon: "facebook",
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: "twitter",
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: "",
    link: "https://www.linkedin.com/",
  },
];
