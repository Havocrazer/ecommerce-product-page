import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { productImage, productThumb } from "@/lib/productImage";
import { useImageContext } from "@/context/ImageContext";
import iconNext from "../assets/images/icon/iconNext.svg";
import iconPrevious from "../assets/images/icon/iconPrevious.svg";
import iconClose from "../assets/images/icon/iconClose.svg";

export function LightBox() {
  const {
    selectedImageIndex,
    handleThumbClick,
    isOpen,
    closeLightBox,
    handleNextClick,
    handlePreviousClick,
  } = useImageContext();

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="flex flex-col justify-center items-center relative ">
                  <button
                    className="absolute top-0 right-[24px]"
                    onClick={closeLightBox}
                  >
                    <img
                      src={iconClose}
                      alt=""
                      className="hover:fill-orange-500"
                    />
                  </button>
                  <Card className="border-none flex items-center justify-center w-[500px] h-[500px] mt-[20px]">
                    <CardContent>
                      <img
                        src={productImage[selectedImageIndex]}
                        alt={`Product ${selectedImageIndex + 1}`}
                        className="rounded-[14px]"
                      />
                    </CardContent>
                  </Card>
                </div>
                <button
                  onClick={handlePreviousClick}
                  className="absolute z-10 top-[230px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center"
                >
                  <img src={iconPrevious} alt="" />
                </button>
                <button
                  onClick={handleNextClick}
                  className="absolute z-10 top-[230px] right-[0px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center"
                >
                  <img src={iconNext} alt="" />
                </button>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center items-center gap-[17px]">
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
                      className={`w-[75px] h-[75px] rounded-xl cursor-pointer hover:opacity-50 ${
                        selectedImageIndex === index
                          ? "opacity-50 ring-[3px] ring-orange-500"
                          : ""
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </Carousel>
        </div>
      )}
    </>
  );
}
