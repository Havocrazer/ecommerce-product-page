import * as React from "react";

import { useItemCartContext } from "@/context/ItemCartContext";
import CarouselImage from "./CarouselContent";
import iconPlus from "../assets/images/icon/iconPlus.svg";
import iconMinus from "../assets/images/icon/iconMinus.svg";
import iconCart from "../assets/images/icon/iconCart.svg";

function ProductContent() {
  const { quantity, setQuantity, price, addItem } = useItemCartContext();

  const handleAddToCart = () => {
    const product = {
      name: "Fall Limited Edition Sneakers",
      price: price,
      quantity: quantity,
    };
    addItem(product);
    setQuantity(0);
  };

  const handlePlusClick = () => {
    return setQuantity(quantity + 1);
  };

  const handleMinusClick = () => {
    if (quantity > 0) {
      return setQuantity(quantity - 1);
    }
  };

  return (
    <div className="w-full mx-auto lg:w-[1080px] lg:flex lg:justify-center">
      <CarouselImage />
      <div className="w-full lg:w-[500px] pt-4 lg:pt-0 px-4 lg:mt-[50px] ">
        <p className="text-[13px] text-orange-500 font-bold tracking-widest mb-2 lg:mb-4">
          SNEAKER COMPANY
        </p>
        <p className="text-[40px] font-bold leading-[48px] mb-2 lg:mb-4">
          Fall Limited Edition Sneakers
        </p>
        <p className="text-gray-500 mb-4 lg:mb-6">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="flex justify-between items-center lg:flex-col lg:items-start mb-4 lg:mb-6">
          <div className="flex justify-between gap-[10px] items-center mb-2 lg:mb-0">
            <div className="text-[25px] font-bold">{`$${price}.00`}</div>
            <p className="text-[14px] font-bold text-orange-500 bg-orange-100 rounded-[5px] px-[8px]">
              50%
            </p>
          </div>
          <p className="text-gray-400 text-[14px] font-bold line-through">
            $250.00
          </p>
        </div>
        <div className="flex flex-col justify-start items-center gap-[20px] lg:flex-row mb-4 lg:mb-6 lg:gap-[10px]">
          <div className="flex justify-between items-center px-[15px] bg-gray-200 rounded-[9px] w-full lg:w-[150px] h-[50px]">
            <button onClick={handleMinusClick}>
              <img src={iconMinus} alt="" />
            </button>
            <div className="font-bold">{quantity}</div>
            <button onClick={handlePlusClick}>
              <img src={iconPlus} alt="" />
            </button>
          </div>
          <button
            onClick={quantity > 0 ? handleAddToCart : ""}
            className="flex justify-center items-center w-full lg:w-[250px] h-[50px] rounded-[9px] text-white font-bold bg-orange-500 gap-[12px] hover:bg-orange-300 hover:shadow-xl hover:shadow-orange-200"
          >
            <img
              src={iconCart}
              alt=""
              className="w-[15px] h-[15px] text-white"
            />
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductContent;
