"use client";
import React, { createContext, useRef, useState } from "react";
import "../../styles/global-style.scss";

import toast from "react-hot-toast";

//////
export const LogicContx = createContext();

const LogicContext = ({ children }) => {
  const toastFn = (state, text) => {
    state
      ? toast.success(text, {
          duration: 4000,
          position: "bottom-left",
          className: "toast-message",
        })
      : toast.error(text, {
          duration: 4000,
          position: "bottom-left",
          className: "toast-message",
        });
  };
  /////////
  const [showPopup, setShowPopup] = useState(false);
  const [closeCart, setCloseCart] = useState(false);

  const [favChangeColor, setFavChangeColor] = useState(false);
  const [cartChangeColor, setCartChangeColor] = useState(false);

  const showPopupFunc = (state) => {
    if (state) {
      setTimeout(() => {
        setShowPopup(state);
      }, 7500);
      return;
    }
    setShowPopup(state);
  };

  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <>
      <LogicContx.Provider
        value={{
          showPopup,
          setShowPopup,
          closeCart,
          setCloseCart,
          favChangeColor,
          setFavChangeColor,
          cartChangeColor,
          setCartChangeColor,
          showPopupFunc,
          toastFn,
          totalPrice,
          setTotalPrice,
        }}
      >
        {children}
      </LogicContx.Provider>
    </>
  );
};

export default LogicContext;
