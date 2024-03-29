"use client";

import React, { useContext } from "react";
import style from "../../styles/module-styles/product-info.module.scss";
import { LogicContx } from "@/app/components/contextes/LogicContext";
import { FirestoreContext } from "@/app/components/contextes/FirebaseFirestoreContext";
import { useRouter } from "next/navigation";
const ProductInfo = (itemDetails) => {
  //Too lazy to destrucutre 👌
  const { setCartChangeColor, setFavChangeColor, toastFn } =
    useContext(LogicContx);
  const { addToShopCart, addToFav, authUid } = useContext(FirestoreContext);

  const { push } = useRouter();
  return (
    <>
      <div className={style.productInfo}>
        <section>
          <img src={itemDetails.image} alt="Product image" />
          <h1>{itemDetails.title}</h1>
          <p>
            <b>Description:</b> {itemDetails.description}.
          </p>
          <div className={style.mainInfo}>
            <h2>Price: {itemDetails.price}$</h2>
            <div className={style.btnContainer}>
              <button
                className={style.addToFavorites}
                onClick={
                  authUid
                    ? async () => {
                        setFavChangeColor(true);
                        addToFav({
                          title: itemDetails.title,
                          image: itemDetails.image,
                          price: itemDetails.price,
                          quantity: 1,
                        });
                        toastFn(
                          true,
                          `${itemDetails.title} is successfuly added to favorites`
                        );
                      }
                    : () => {
                        push("/signin");
                        toastFn(
                          false,
                          "Please create account to add items to cart"
                        );
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
                        setCartChangeColor(true);
                        addToShopCart({
                          title: itemDetails.title,
                          image: itemDetails.image,
                          price: itemDetails?.price,
                          quantity: 1,
                        });
                        toastFn(
                          true,
                          `${itemDetails.title} is successfuly added to cart`
                        );
                      }
                    : () => {
                        push("/signin");
                        toastFn(
                          false,
                          "Please create account to add items to cart"
                        );
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
  );
};

export default ProductInfo;
