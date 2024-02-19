"use client"

import React, { useContext, useRef, useState } from "react"
import style from "../styles/module-styles/cart-fav.module.scss"
import { AuthContext } from "./contextes/FirebseAuthContext.jsx"
import { LogicContx } from "./contextes/LogicContext.jsx"
import CartItem from "./CartItem"
import { FirestoreContext } from "./contextes/FirebaseFirestoreContext"

const CartFav = () => {
  //Getting data from state
  const { authName, authImage } = useContext(AuthContext)
  const { closeCart, setCloseCart } = useContext(LogicContx)
  const { data } = useContext(FirestoreContext)
  console.log(data[0]?.map((x) => x.title))
  return (
    <>
      <div
        className={closeCart ? style.background : style.hide}
        onClick={() => setCloseCart(false)}
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
            {data[0]?.map((items) => (
              <CartItem
                image={items.image.stringValue}
                title={items.title.stringValue}
                quantity={items.quantity.stringValue}
                price={Math.round(items.price.doubleValue)}
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
            {data[1]?.map((items) => (
              <CartItem
                image={items.image.stringValue}
                title={items.title.stringValue}
                quantity={items.quantity.stringValue}
                price={items.price.doubleValue}
              />
            ))}
          </div>
        </div>
        <button className={style.buy}>Buy!!!!</button>
      </div>
    </>
  )
}

export default CartFav
