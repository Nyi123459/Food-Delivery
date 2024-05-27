import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../component/ItemCard/Items/Image";
import Badge from "../../component/ItemCard/Items/Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../utils/Slices/cardSlice";

interface ProductProps {
  _id: string;
  image: string;
  productName: string;
  price: string;
  color: string;
  badge: boolean;
  des: string;
}

const ItemCard: React.FC<ProductProps> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rootId = props.productName.toLowerCase().split(" ").join("");

  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: props,
      },
    });
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: props._id,
        productName: props.productName,
        quantity: 1,
        image: props.image,
        badge: props.badge,
        price: props.price,
        color: props.color,
      })
    );
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative overflow-hidden">
        <Image className="w-full h-48 object-cover" imgSrc={props.image} />
        {props.badge && (
          <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
            New
          </div>
        )}
        <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
          Upto $2 50% OFF
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900">{props.productName}</h2>
        <p className="text-gray-600 text-sm">{props.des}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-800 font-bold">${props.price}</p>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-1">⭐</span>
            <span className="text-sm text-gray-800">{props.color}</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-gray-600 text-xs">
          <span>New Jersey</span>
          <span>3.2 km</span>
          <span>25 min</span>
        </div>
      </div>
      {/* <div className="p-4 border-t border-gray-200">
        <ul className="flex justify-between">
          <li
            className="flex items-center cursor-pointer"
            onClick={handleAddToCart}
          >
            <FaShoppingCart className="mr-1" /> Add to Cart
          </li>
          <li
            className="flex items-center cursor-pointer"
            onClick={handleProductDetails}
          >
            <MdOutlineLabelImportant className="mr-1" /> View Details
          </li>
          <li className="flex items-center cursor-pointer">
            <BsSuitHeartFill className="mr-1" /> Add to Wish List
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default ItemCard;

// import { Images } from "../../assets";
// const ItemCard = () => {
//   return (
//     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
//       <img
//         className="w-full"
//         src={Images.BeefBurger}
//         alt="The Grill Master's Cafe"
//       />
//       <div className="p-4">
//         <div className="flex justify-between items-center">
//           <h2 className="font-bold text-lg">The Grill Master's Cafe</h2>
//           <div className="flex items-center">
//             <span className="text-green-500">★</span>
//             <span className="ml-1 text-gray-700">4.3</span>
//           </div>
//         </div>
//         <p className="text-gray-600 text-sm mt-2">
//           Bread, Eggs, Butter, Fries...
//         </p>
//         <div className="flex items-center text-gray-600 text-sm mt-3">
//           <span>
//             <img src={Images.Car} /> New York
//           </span>
//           <span className="mx-2">•</span>
//           <span className="flex items-center">
//             <svg
//               className="w-4 h-4 text-orange-500"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M8 21h4M12 17h.01M8 13h4M12 9h.01M8 5h4"
//               />
//             </svg>
//             <span className="ml-1">5 km</span>
//           </span>
//           <span className="mx-2">•</span>
//           <span className="flex items-center">
//             <svg
//               className="w-4 h-4 text-orange-500"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 8v4l3 3"
//               />
//             </svg>
//             <span className="ml-1">40 min</span>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemCard;
