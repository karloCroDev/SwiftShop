"use client"

import React, { useContext, useRef, useState } from "react"
import style from "../styles/module-styles/cart-fav.module.scss"
import { AuthContext } from "./contextes/FirebseAuthContext.jsx"
import { LogicContx } from "./contextes/LogicContext.jsx"

const CartFav = () => {
  //Getting data from state
  const { authName, authImage } = useContext(AuthContext)
  const { closeCart, setCloseCart } = useContext(LogicContx)
  console.log(authName, authImage)

  //Move this component as soon as possible
  const LittleComp = () => {
    const [countItem, setCountItem] = useState(1)
    const itemRef = useRef()
    const [doesElEx, setDoesElEx] = useState(true)

    return doesElEx ? (
      <div
        className={style.prodItem}
        onDoubleClick={() => {
          setDoesElEx(false)
        }}
      >
        <div className={style.img}></div>
        <h3 className={style.title}>
          Men<span>..</span>
        </h3>
        <div className={style.quantity}>
          <button
            className={style.count}
            onClick={() => setCountItem(countItem - 1)}
          >
            -
          </button>
          <h2>{countItem}</h2>
          <button
            className={style.count}
            onClick={() => setCountItem(countItem + 1)}
          >
            +
          </button>
        </div>
        <h3>500$</h3>
      </div>
    ) : null
  }

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
            <LittleComp />
            <LittleComp />
            <LittleComp />
            <LittleComp />
            <LittleComp />
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
          <div className={`${style.favBlock} ${style.gBtn}`}></div>
        </div>
        <button className={style.buy}>Buy!!!!</button>
      </div>
    </>
  )
}

export default CartFav
