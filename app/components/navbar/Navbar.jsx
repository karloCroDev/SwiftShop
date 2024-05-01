import React from "react";
import styles from "../../styles/module-styles/navbar.module.scss";
import Link from "next/link";
import SignOutBtn from "./SignOutBtn";
import NavBtns from "./NavBtns";
import Search from "./Search.jsx";
import Hamburger from "./Hamburger.jsx";

const navbar = () => {
  //Contexes

  return (
    <>
      <nav>
        <Hamburger />
        <Link href="/" className={styles.titleContainer}>
          <h1>SwiftCart</h1>
        </Link>
        <ul className={styles.ul}>
          <li>
            <Search />
          </li>

          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#men">Men</Link>
          </li>
          <li>
            <Link href="/#women">Women</Link>
          </li>
          <li>
            <Link href="/#jewlery">Jewlery</Link>
          </li>
          <li>
            <Link href="/#electronics">Electronics</Link>
          </li>
          <NavBtns />
        </ul>
        <SignOutBtn className="sign-out" />
      </nav>
    </>
  );
};

export default navbar;
