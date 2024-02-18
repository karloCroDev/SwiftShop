import React, { useContext, useState } from "react"
import style from "../styles/module-styles/cart-fav.module.scss"
import { LogicContx } from "./contextes/LogicContext"
const CartItem = () => {
  const [countItem, setCountItem] = useState(1)

  const [doesElEx, setDoesElEx] = useState(true)

  return doesElEx ? (
    <div
      className={style.prodItem}
      onDoubleClick={() => {
        setDoesElEx(false)
      }}
      draggable="true"
      onDragStart={(e) => {
        e.target.classList.add(style.dragging)

        //This prevents user from dragging text instead of item, I'ce got this classname from devTools(because of sass)
      }}
      onDragEnd={(e) => {
        e.target.classList.remove(style.dragging)
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

export default CartItem
