"use client";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { AuthContext } from "../contextes/FirebseAuthContext.jsx";
import { LogicContx } from "../contextes/LogicContext.jsx";
import styles from "../../styles/module-styles/navbar.module.scss";

const NavBtns = () => {
  const { authName } = useContext(AuthContext);
  const router = useRouter();

  const checkIfUserExists = () => {
    authName !== "" ? setCloseCart(true) : router.push("/signin");
  };
  const {
    setCloseCart,
    cartChangeColor,
    favChangeColor,
    setCartChangeColor,
    setFavChangeColor,
  } = useContext(LogicContx);
  return (
    <>
      <li>
        <button
          className={`${styles.btnOne} ${favChangeColor ? styles.green : null}`}
          onClick={() => {
            checkIfUserExists();
            setFavChangeColor(false);
            setCartChangeColor(false);
          }}
        >
          Favorite
        </button>
      </li>
      <li>
        <button
          className={`${styles.btnTwo} ${
            cartChangeColor ? styles.green : null
          }`}
          onClick={() => {
            checkIfUserExists();
            setFavChangeColor(false);
            setCartChangeColor(false);
          }}
        >
          Cart
        </button>
      </li>
    </>
  );
};

export default NavBtns;
