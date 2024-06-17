// src/components/ItemCardDetail.tsx
import React from "react";
import { useLocation } from "react-router-dom";
import { SampleMenuItem } from "./Items";

const ItemCardDetail: React.FC = () => {
  const location = useLocation();
  const props = location.state as SampleMenuItem;

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center py-4 border-b">
        <div>
          <h1 className="text-2xl font-bold">{props.shopTitle}</h1>
          <p className="text-gray-600">{props.category}</p>
          <p className="text-gray-600">
            Delivery MMK {props.deliveryCharges} | 2.5Km | {props.time}
          </p>
          <p className="text-yellow-500">
            ⭐ {props.rating} / 5 {props.review}
          </p>
        </div>
      </header>
      <div className="mt-4">
        <img
          className="w-full h-72 object-cover"
          src={props.image}
          alt={props.shopTitle}
        />
        <p className="mt-4 text-gray-700">{props.category}</p>
        {/* Render more details as needed */}
      </div>
    </div>
  );
};

export default ItemCardDetail;
