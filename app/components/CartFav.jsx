"use client";

import React, { useContext, useState } from "react";
import style from "../styles/module-styles/cart-fav.module.scss";
import { AuthContext } from "./contextes/FirebseAuthContext.jsx";
import { LogicContx } from "./contextes/LogicContext.jsx";
import CartItem from "./CartItem";
import { FirestoreContext } from "./contextes/FirebaseFirestoreContext";
import { IoMdArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";

const CartFav = () => {
  //Getting data from state
  const { authName, authImage } = useContext(AuthContext);
  const { closeCart, setCloseCart } = useContext(LogicContx);
  const { data } = useContext(FirestoreContext);
  const IDhelper = 1000;
  const { push } = useRouter();
  return (
    <>
      <div
        className={closeCart ? style.background : style.hide}
        onClick={() => {
          setCloseCart(false); //this is very bad made, this could have been done, I didn't want to wrap around it because I would need to stop propagation on every element, and also I would need to make animation faster or to find new way to make it
        }}
      ></div>
      <div
        className={`${style.cartContainer} ${
          closeCart ? style.showContainer : style.hideContainer
        }`}
      >
        {closeCart ? (
          <IoMdClose
            className={style.close}
            onClick={() => setCloseCart(false)}
          />
        ) : null}
        <header>
          <img src={authImage} className={style.image} />
          <h1>{authName}</h1>
          <hr />
        </header>

        <div className={style.favContainer}>
          <button className={style.gBtn}>
            Favorite <IoMdArrowDown />
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
            <IoMdArrowDown />
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

        <button
          className={style.buy}
          onClick={() => {
            //maybe it's better to use router here
            setCloseCart(false);
            setTimeout(() => {
              push("/checkout");
            }, 250); //not 500 because  this looks cooler imo
          }}
        >
          Checkout!
        </button>
      </div>
    </>
  );
};

export default CartFav;
