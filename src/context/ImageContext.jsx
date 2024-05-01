import React, { createContext, useContext, useState } from "react";
import { productImage, productThumb } from "@/lib/productImage";

const ImageContext = createContext();

export const useImageContext = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleThumbClick = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightBox = () => {
    setIsOpen(false);
  };

  const handleNextClick = () => {
    const nextIndex =
      selectedImageIndex === productImage.length - 1
        ? 0
        : selectedImageIndex + 1;
    console.log("selectedImageIndex:", selectedImageIndex);
    console.log("nextIndex:", nextIndex);
    handleThumbClick(nextIndex);
  };

  const handlePreviousClick = () => {
    const previousIndex =
      selectedImageIndex === 0
        ? productImage.length - 1
        : selectedImageIndex - 1;
    handleThumbClick(previousIndex);
  };

  return (
    <ImageContext.Provider
      value={{
        selectedImageIndex,
        handleThumbClick,
        isOpen,
        setIsOpen,
        closeLightBox,
        handleNextClick,
        handlePreviousClick,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
