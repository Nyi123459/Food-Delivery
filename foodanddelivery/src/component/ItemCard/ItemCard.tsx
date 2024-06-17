// src/components/ItemCard.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { SampleMenuItem } from "./Items";
import { FaClock } from "react-icons/fa";
import { FaBicycle } from "react-icons/fa6";

interface ProductProps extends SampleMenuItem {}

const ItemCard: React.FC<ProductProps> = (props) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/details", { state: props });
  };

  return (
    <div
      className="w-full max-w-xs h-72 mx-auto bg-white rounded-lg shadow-md shadow-amber-100 overflow-hidden group border-slate-400 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden ">
        <div className="h-48 w-full overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
            src={props.image}
            alt={props.shopTitle}
          />
          {props.badge && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
              Only on Ride&Savor
            </div>
          )}
          <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
            Up to 30% OFF
          </div>
        </div>

        <div className="p-2">
          <div className="flex flex-row justify-between items-center mb-2">
            <div className="flex flex-col">
              <h2 className="text-lg font-bold text-gray-900 mb-1">
                {props.shopTitle}
              </h2>
              <p className="text-gray-600 text-sm">{props.category}</p>
            </div>
            <div className="flex items-center ml-4">
              <span className="text-sm text-gray-500 mr-1">
                ⭐ {props.rating}
              </span>
              <span className="text-sm text-gray-800">{props.review}</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-gray-800 text-sm">
            <div className="flex items-center gap-1">
              <FaClock />
              <span>{props.time}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaBicycle />
              <span>MMK {props.deliveryCharges}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
