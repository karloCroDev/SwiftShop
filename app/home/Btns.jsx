"use client";
import React, { useContext } from "react";
import { LogicContx } from "@/app/components/contextes/LogicContext";
import { FirestoreContext } from "@/app/components/contextes/FirebaseFirestoreContext";
import { useRouter } from "next/navigation";
import style from "../styles/module-styles/product-info.module.scss";

const Btns = () => {
  const { setCartChangeColor, setFavChangeColor, toastFn } =
    useContext(LogicContx);
  const { addToShopCart, addToFav, authUid } = useContext(FirestoreContext);

  const { push } = useRouter();
  return (
    <>
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
                  "Please create account to add items to favorites"
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
                toastFn(false, "Please create account to add items to cart");
              }
        }
      >
        Add to cart
      </button>
    </>
  );
};

export default Btns;
