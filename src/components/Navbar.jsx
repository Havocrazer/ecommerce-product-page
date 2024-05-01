import logo from "../assets/images/logo.svg";
import iconCartNav from "../assets/images/icon/iconCartNav.svg";
import imageAvatar from "../assets/images/imageAvatar.png";
import { useItemCartContext } from "@/context/ItemCartContext";
import { useState } from "react";
import { productThumb } from "../lib/productImage";
import iconDelete from "../assets/images/icon/iconDelete.svg";
import iconMenu from "../assets/images/icon/iconMenu.svg";
import iconClose from "../assets/images/icon/iconClose.svg";

function Navbar() {
  const { items, removeItem, menuOpen, setMenuOpen } = useItemCartContext();
  console.log(items);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="w-[1080px] max-md:w-[400px] h-[100px] max-md:h-[70px] flex justify-start items-center gap-[120px] lg:justify-between border-b-2 border-gray-200 my-0 max-md:px-[10px]">
        <div className="flex justify-center items-center gap-[50px] max-md:gap-[0px]">
          <div className="flex gap-[10px]">
            <div className="max-md:flex hidden justify-center items-center pl-[15px]">
              <button onClick={handleToggleMenu} className="w-[20px] h-[15px]">
                <img src={iconMenu} alt="" />
              </button>
            </div>
            <img src={logo} alt="" />
          </div>
          <div className="flex gap-[35px] text-gray-500 max-md:hidden">
            <button className="hover:border-b-[5px] hover:border-orange-500 h-[100px] hover:text-black">
              Collections
            </button>
            <button className="hover:border-b-[5px] hover:border-orange-500 h-[100px] hover:text-black">
              Men
            </button>
            <button className="hover:border-b-[5px] hover:border-orange-500 h-[100px] hover:text-black">
              Women
            </button>
            <button className="hover:border-b-[5px] hover:border-orange-500 h-[100px] hover:text-black">
              About
            </button>
            <button className="hover:border-b-[5px] hover:border-orange-500 h-[100px] hover:text-black">
              Contact
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[50px] max-md:gap-[20px]">
          <button onClick={handleToggle} className="relative">
            <img className="w-[20px] h-[20px] " src={iconCartNav} alt="" />
            {items.length > 0 ? (
              <div className="absolute top-[-5px] right-[-10px] text-[12px] text-white bg-orange-600 px-[8px] h-[16px] flex justify-center items-center rounded-full">
                {items.map((item, index) => {
                  return <p key={index}>{item.quantity}</p>;
                })}
              </div>
            ) : (
              ""
            )}
          </button>
          {isOpen && (
            <div className="absolute z-20 top-[95px] right-[175px] max-md:top-[85px] max-md:right-[38px] bg-white flex flex-col w-[320px] h-[210px] shadow-2xl rounded-[10px] ">
              <div className="border-b border-gray-200 h-[50px] px-[15px] flex items-center">
                <p className="text-[14px] font-bold">Cart</p>
              </div>
              <div className="h-full w-full p-[20px] flex justify-center items-center">
                {items.length > 0 ? (
                  <div className="flex flex-col justify-center items-center h-full w-full">
                    {items.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex w-full h-[50px] items-center gap-[15px] mb-[20px]"
                        >
                          <img
                            src={productThumb[0]}
                            alt=""
                            className="w-[45px] h-[45px] rounded-[4px]"
                          />
                          <div className="flex flex-col">
                            <p className="text-[14px] text-gray-500">
                              {item.name}
                            </p>
                            <div className="flex gap-[5px]">
                              <p className="text-[14px] text-gray-500 tracking-wide">{`$${item.price}.00 x ${item.quantity}`}</p>
                              <p className="text-[14px] font-bold tracking-wide">{`$${
                                item.price * item.quantity
                              }.00`}</p>
                            </div>
                          </div>
                          <button onClick={() => removeItem(index)}>
                            <img
                              src={iconDelete}
                              alt=""
                              className="w-[13px] h-[13px]"
                            />
                          </button>
                        </div>
                      );
                    })}
                    <button className=" flex justify-center items-center w-full h-[50px] rounded-[9px] text-white font-bold bg-orange-500 gap-[12px]">
                      Checkout
                    </button>
                  </div>
                ) : (
                  <p className="text-gray-500">Your cart is empty.</p>
                )}
              </div>
            </div>
          )}
          <button className="hover:ring-[3px] hover:ring-orange-500 hover:rounded-full">
            <img className="w-[50px] h-[50px]" src={imageAvatar} alt="" />
          </button>
        </div>
      </div>
      <div>
        {menuOpen && (
          <div className="absolute w-full h-full bg-black bg-opacity-50 z-50 top-0 left-[0px]">
            <div className="absolute left-0 w-[210px] h-full bg-white ">
              <div className="h-[60px] flex justify-start items-center p-[20px] mb-[20px]">
                <button onClick={handleToggleMenu}>
                  <img src={iconClose} alt="" className="w-[12px] h-[12px]" />
                </button>
              </div>
              <div className="flex flex-col items-start pl-[10px] gap-[20px] text-gray-500">
                <button className=" text-black font-bold">Collections</button>
                <button className=" text-black font-bold">Men</button>
                <button className=" text-black font-bold">Women</button>
                <button className=" text-black font-bold">About</button>
                <button className=" text-black font-bold">Contact</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
