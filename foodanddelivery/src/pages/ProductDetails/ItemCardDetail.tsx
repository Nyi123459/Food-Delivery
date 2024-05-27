import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../component/ItemCard/Items/Breadcrumbs";
import ProductInfo from "../../component/ItemCard/Items/ProductInfo";

import { Product } from "../../component/ItemCard/Items/ProductInfo";

const ItemCardDetail: React.FC = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState<Product | null>(null);

  useEffect(() => {
    setProductInfo(location.state.item);
    setPrevLocation(location.pathname);
  }, [location]);

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      <div className="max-w-container mx-auto px-4">
        <div className="xl:-mt-10 -mt-7">
          <Breadcrumbs title="" prevLocation={prevLocation} />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
          <div className="h-full">Hello</div>
          {productInfo && (
            <>
              <div className="h-full xl:col-span-2">
                <img
                  className="w-full h-full object-cover"
                  src={productInfo.image}
                  alt={productInfo.productName}
                />
              </div>
              <div className="h-full w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
                <ProductInfo productInfo={productInfo} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCardDetail;
