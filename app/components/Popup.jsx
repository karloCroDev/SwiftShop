"use client";
import React, { useState, useEffect, useContext } from "react";
import style from "../styles/module-styles/popup.module.scss";
import Link from "next/link";
// import { AuthContext } from "./contextes/FirebseAuthContext.jsx"
import { LogicContx } from "./contextes/LogicContext.jsx";

const Popup = () => {
  const { showPopup, setShowPopup } = useContext(LogicContx);

  //When I push to production change this to false and alo uncomment it
  // const [state, setState] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowPopup(true)
  //   }, 15000)
  // }, [])
  return null;
  // <>
  //   <aside className={showPopup ? style.show : style.hide}>
  //     <div className={style.container}>
  //       <h2 className={style.title}>
  //         You like our products, then sign up/ sign in :)
  //       </h2>
  //       <div className={style.btnContainer}>
  //         <Link href="/signup">
  //           <button className={style.btn1}>Sign up</button>
  //         </Link>
  //         <Link href="/signin">
  //           <button className={style.btn2}>Sign in</button>
  //         </Link>
  //       </div>
  //     </div>
  //   </aside>
  // </>
};

export default Popup;
