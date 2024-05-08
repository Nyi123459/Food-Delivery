import { IconType } from "react-icons";
import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics } from "react-icons/md";

interface AccordionItem {
  icon: IconType; 
  heading: string;
  detail: string;
}

const data: AccordionItem[] = [
  {
    icon: HiShieldCheck, 
    heading: "What is Ride & Savor?",
    detail:
      "Shield yourself from unpredictable costs through our price stabilization measures.",
  },
  {
    icon: MdCancel,
    heading: "Question2",
    detail:
      "Shield yourself from unpredictable costs through our price stabilization measures.",
  },
  {
    icon: MdAnalytics, 
    heading: "Question3",
    detail:
      "Shield yourself from unpredictable costs through our price stabilization measures.",
  },
];

export default data;




