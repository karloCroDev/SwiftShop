"use client"

import React, { useContext } from "react"
import style from "../../styles/module-styles/product-info.module.scss"
import { LogicContx } from "@/app/components/contextes/LogicContext"

const ProductInfo = () => {
  const { itemDetails } = useContext(LogicContx)
  return (
    <>
      <div className={style.productInfo}>
        <img src={itemDetails?.image} alt="Product image" />
        <section>
          <h1>Title:{itemDetails?.title}</h1>
          <p>Description: {itemDetails?.description}</p>
          <div className={style.mainInfo}>
            <h2>Price: {itemDetails?.price}$</h2>
            <div className={style.btnContainer}>
              <button className={style.addToCart}>Add to cart</button>
              <button className={style.addToFavorites}>Add to favorites</button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProductInfo
