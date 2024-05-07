"use client";
import React, { useContext } from "react";
import styles from "../../styles/module-styles/navbar.module.scss";
import { LogicContx } from "../contextes/LogicContext";
import { AuthContext } from "../contextes/FirebseAuthContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
    <Link href="/" className={styles.adapt}>
      <h1>SwiftCart</h1>
    </Link>
    //I ve done like this because it cuts thorgh with the poorly written global styles
  );
};

export default Hamburger;
