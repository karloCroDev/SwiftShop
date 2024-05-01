"use client";
import React, { useContext } from "react";
import styles from "../../styles/module-styles/navbar.module.scss";
import { LogicContx } from "../contextes/LogicContext";
import { RxHamburgerMenu } from "react-icons/rx";

const Hamburger = () => {
  const { setCloseCart } = useContext(LogicContx);
  return (
    <RxHamburgerMenu
      className={styles.humburger}
      onClick={() => setCloseCart(true)}
    />
  );
};

export default Hamburger;
