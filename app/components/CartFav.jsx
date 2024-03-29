"use client";

import React, { useContext, useState } from "react";
import style from "../styles/module-styles/cart-fav.module.scss";
import { AuthContext } from "./contextes/FirebseAuthContext.jsx";
import { LogicContx } from "./contextes/LogicContext.jsx";
import CartItem from "./CartItem";
import { FirestoreContext } from "./contextes/FirebaseFirestoreContext";

const CartFav = () => {
  //Getting data from state
  const { authName, authImage } = useContext(AuthContext);
  const { closeCart, setCloseCart } = useContext(LogicContx);
  const { data } = useContext(FirestoreContext);
  // console.log(data[0]?.map((x) => x.title))
  const IDhelper = 1000;
  return (
    <>
      <div
        className={closeCart ? style.background : style.hide}
        onClick={(e) => {
          e.preventDefault();
          setCloseCart(false);
        }}
      ></div>
      <div
        className={`${style.cartContainer} ${
          closeCart ? style.showContainer : style.hideContainer
        }`}
      >
        <header>
          <img src={authImage} className={style.image} />
          <h1>{authName}</h1>
          <hr />
        </header>

        <div className={style.favContainer}>
          <button className={style.gBtn}>
            Favorite
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon flat-line"
              data-name="Flat Line"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 3v18"
                style={{
                  fill: "none",
                  stroke: "#000",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                }}
              />
              <path
                d="m9 18 3 3 3-3"
                data-name="primary"
                style={{
                  fill: "none",
                  stroke: "#000",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                }}
              />
            </svg>
          </button>
          <div className={style.favBlock}>
            {data[1]?.map((items, indx) => (
              <CartItem
                key={indx}
                image={items.image.stringValue}
                title={items.title.stringValue}
                quantity={items.quantity.integerValue}
                price={
                  items.price.doubleValue !== undefined
                    ? Math.floor(items.price.doubleValue)
                    : items.price.integerValue
                }
                category={"favorites"}
              />
            ))}
          </div>
          <hr />
        </div>
        <div className={`${style.favContainer} ${style.marginTop}`}>
          <button className={style.gBtn}>
            Cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon flat-line"
              data-name="Flat Line"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 3v18"
                style={{
                  fill: "none",
                  stroke: "#000",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                }}
              />
              <path
                d="m9 18 3 3 3-3"
                data-name="primary"
                style={{
                  fill: "none",
                  stroke: "#000",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                }}
              />
            </svg>
          </button>
          <div className={`${style.favBlock} }`}>
            {data[0]?.map((items, indx) => (
              <CartItem
                key={IDhelper + indx}
                image={items.image.stringValue}
                title={items.title.stringValue}
                quantity={items.quantity.integerValue}
                price={
                  items.price.doubleValue !== undefined
                    ? Math.floor(items.price.doubleValue)
                    : items.price.integerValue
                }
                category={"cart"}
              />
            ))}
          </div>
        </div>
        <button className={style.buy}>Buy!!!!</button>
      </div>
    </>
  );
};

export default CartFav;
