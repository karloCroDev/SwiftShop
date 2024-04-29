"use client";
import React, { createContext, useEffect, useRef, useState } from "react";
import "../../styles/global-style.scss";

import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";

//////
export const LogicContx = createContext();

const LogicContext = ({ children }) => {
  const { push } = useRouter();
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
  // const params = useParams();
  // useEffect(() => {
  //   console.log(params);
  //   if (Object.keys(params).length > 0) push("/"); //this is so that searchbar could work because I wanted to miniize the api calls
  // }, []);
  /////
  const [items, setItems] = useState([]);
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
          setItems,
          items,
        }}
      >
        {children}
      </LogicContx.Provider>
    </>
  );
};

export default LogicContext;
