"use client"

import React, { useContext } from "react"
import style from "../../styles/module-styles/product-info.module.scss"
import { LogicContx } from "@/app/components/contextes/LogicContext"
import { FirestoreContext } from "@/app/components/contextes/FirebaseFirestoreContext"
import { useRouter } from "next/navigation"
const ProductInfo = () => {
  const { itemDetails, setCartChangeColor, setFavChangeColor } =
    useContext(LogicContx)
  const { addToShopCart, addToFav, createCND, authUid } =
    useContext(FirestoreContext)

  const { push } = useRouter()
  return (
    <>
      <div className={style.productInfo}>
        <section>
          <img src={itemDetails?.image} alt="Product image" />
          <h1>{itemDetails?.title}</h1>
          <p>
            <b>Description:</b> {itemDetails?.description}.
          </p>
          <div className={style.mainInfo}>
            <h2>Price: {itemDetails?.price}$</h2>
            <div className={style.btnContainer}>
              <button
                className={style.addToFavorites}
                onClick={
                  authUid
                    ? async () => {
                        await createCND()
                        await addToFav({
                          title: itemDetails?.title,
                          image: itemDetails?.image,
                          price: itemDetails?.price,
                          quantity: 1,
                        })
                        setFavChangeColor(true)
                      }
                    : () => {
                        push("/signin")
                      }
                }
              >
                Add to favorites
              </button>
              <button
                className={style.addToCart}
                onClick={
                  authUid
                    ? async () => {
                        createCND()
                        await addToShopCart({
                          title: itemDetails?.title,
                          image: itemDetails?.image,
                          price: itemDetails?.price,
                          quantity: 1,
                        })
                        setCartChangeColor(true)
                      }
                    : () => {
                        push("/signin")
                      }
                }
              >
                Add to cart
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProductInfo
