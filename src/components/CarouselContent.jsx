import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { productImage, productThumb } from "@/lib/productImage";
import { LightBox } from "@/components/LightBox.jsx";
import { useImageContext } from "@/context/ImageContext";
import iconNext from "../assets/images/icon/iconNext.svg";
import iconPrevious from "../assets/images/icon/iconPrevious.svg";

function CarouselImage() {
  const {
    selectedImageIndex,
    handleThumbClick,
    isOpen,
    setIsOpen,
    handleNextClick,
    handlePreviousClick,
  } = useImageContext();

  return (
    <>
      <div className="w-[500px] max-md:w-[400px] h-full">
        <Carousel>
          <CarouselContent>
            <CarouselItem key={selectedImageIndex} className="px-0 mx-0">
              <div className="flex flex-col justify-center items-center">
                <Card className="border-none flex items-center justify-center w-[400px] h-[330px] md:w-[400px] md:h-[400px]">
                  <CardContent className="max-md:px-0 relative">
                    <img
                      src={productImage[selectedImageIndex]}
                      alt={`Product ${selectedImageIndex + 1}`}
                      className="rounded-[14px] cursor-pointer"
                      onClick={() =>
                        !window.matchMedia("(max-width: 768px)").matches &&
                        setIsOpen(true)
                      }
                    />
                    <button
                      onClick={handlePreviousClick}
                      className="hidden absolute z-10 top-[190px] left-[25px] w-[35px] h-[35px] rounded-full bg-white max-md:flex justify-center items-center"
                    >
                      <img
                        src={iconPrevious}
                        alt=""
                        className="w-[7px] h-[10px]"
                      />
                    </button>
                    <button
                      onClick={handleNextClick}
                      className="hidden absolute z-10 top-[185px] right-[20px] w-[35px] h-[35px] rounded-full bg-white max-md:flex justify-center items-center"
                    >
                      <img src={iconNext} alt="" className="w-[7px] h-[10px]" />
                    </button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="flex justify-center items-center gap-[17px] max-md:hidden">
            {productThumb.map((thumb, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleThumbClick(index)}
                  className="relative group"
                >
                  <img
                    src={thumb}
                    alt={`Product ${index + 1}`}
                    className={`w-[75px] h-[75px] rounded-xl cursor-pointer hover:bg-orange-300 ${
                      selectedImageIndex === index
                        ? "opacity-50 ring-[3px] ring-orange-500 ring-opacity-100"
                        : ""
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </Carousel>
      </div>
      {isOpen && <LightBox />}
    </>
  );
}

export default CarouselImage;
