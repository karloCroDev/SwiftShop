"use client";
import React, { useContext } from "react";
import styles from "../../styles/module-styles/navbar.module.scss";
import { LogicContx } from "../contextes/LogicContext";
import { AuthContext } from "../contextes/FirebseAuthContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
const Hamburger = () => {
  const { setCloseCart } = useContext(LogicContx);
  const { authUid } = useContext(AuthContext);
  const { push } = useRouter();
  return authUid !== "" ? (
    <RxHamburgerMenu
      className={styles.humburger}
      onClick={() => setCloseCart(true)}
    />
  ) : (
    <h1 className={styles.adapt} onClick={() => push("/")}>
      SwiftCart
    </h1>
    //I ve done like this because it cuts thorgh with the poorly written global styles
  );
};

export default Hamburger;
