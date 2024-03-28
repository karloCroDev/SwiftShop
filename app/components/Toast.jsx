"use client";
import React, { useEffect, useState } from "react";
import style from "../styles/module-styles/toasts.module.scss";
import { IoMdCheckmark } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Toast = ({ state, text }) => {
  const [animate, setAnimate] = useState("");
  const [display, setDisplay] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setAnimate("animateContainer");
    }, 250);
    setTimeout(() => {
      setDisplay("fade");
    }, 10000);
  }, []);
  return (
    <div
      className={`${style.toastContainer} ${style[animate]} ${style[display]}`}
      onClick={() => setDisplay("fade")}
    >
      <div className={style.signContainer}>
        {state ? (
          <IoMdCheckmark className={style.icon} />
        ) : (
          <IoClose className={`${style.icon} ${style.red}`} />
        )}
      </div>
      <h3>Successful sign in!</h3>
    </div>
  );
};

export default Toast;
