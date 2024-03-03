import React, { useContext, useState } from "react"
import style from "../styles/module-styles/cart-fav.module.scss"
import { FirestoreContext } from "./contextes/FirebaseFirestoreContext"
import { LogicContx } from "./contextes/LogicContext"

/////////
const CartItem = ({ image, title, quantity, price, category }) => {
  const { removeItem, updateQuantity } = useContext(FirestoreContext)
  const { setCountItem, countItem } = useContext(LogicContx)

  const [doesElEx, setDoesElEx] = useState(true)
  console.log(quantity)
  return doesElEx ? (
    <div
      className={style.prodItem}
      onDoubleClick={() => {
        setDoesElEx(false)
        removeItem(category, title)
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
            setCountItem(countItem - 1)
            updateQuantity(category, title)
          }}
        >
          -
        </button>
        <h2>{quantity}</h2>
        <button
          className={style.count}
          onClick={() => {
            setCountItem(countItem + 1)
            updateQuantity(category, title)
          }}
        >
          +
        </button>
      </div>
      <h3 className={style.centerMe}>{price}$</h3>
    </div>
  ) : null
}

export default CartItem
