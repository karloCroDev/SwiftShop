"use client";
import React, { useContext, useEffect, useState } from "react";
import style from "../styles/module-styles/cart-fav.module.scss";
import { FirestoreContext } from "./contextes/FirebaseFirestoreContext";
import { LogicContx } from "./contextes/LogicContext";

/////////
const CartItem = ({ image, title, quantity, price, category }) => {
  const { removeItem, updateQuantity, totalPrice, setTotalPrice } =
    useContext(FirestoreContext);
  const { toastFn, closeCart } = useContext(LogicContx);
  const [countItem, setCountItem] = useState(quantity);
  const [doesElEx, setDoesElEx] = useState(true);
  // console.log(quantity)
  useEffect(() => {
    if (doesElEx === false) {
      setDoesElEx(true); //Close cart is doing unexcpected error and this apparently fixes it no idead why
    }
  }, [closeCart]);
  return doesElEx ? (
    <div
      className={style.prodItem}
      onDoubleClick={(e) => {
        e.preventDefault();
        setDoesElEx(false);
        removeItem(category, title);
        toastFn(true, "Item succesfuly deleted");
        setTotalPrice(totalPrice - price);
      }}

      //This prevents user from dragging text instead of item, I'ce got this classname from devTools(because of sass)
    >
      <img src={image} />
      <h3 className={style.title}>
        {title?.substring(0, 4)}
        <span>..</span>
      </h3>
      <div className={style.quantity}>
        <button
          className={style.count}
          onClick={() => {
            setCountItem(+countItem - 1);
            if (+countItem <= 1) {
              setDoesElEx(false);
              removeItem(category, title);
              toastFn(true, "Item succesfully deleted");
              setTotalPrice(totalPrice - price);
              return;
            }
            updateQuantity(category, title, +countItem - 1);
          }}
        >
          -
        </button>
        <h2>{countItem}</h2>
        <button
          className={style.count}
          onClick={() => {
            setCountItem(+countItem + 1); //DB returns string so this fixes
            updateQuantity(category, title, +countItem + 1); //I need to specify that is number, look into future why is that
            setTotalPrice(totalPrice + price);
          }}
        >
          +
        </button>
      </div>
      <h3 className={style.centerMe}>{price}$</h3>
    </div>
  ) : null;
};

export default CartItem;
