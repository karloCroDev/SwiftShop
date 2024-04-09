"use client";
import React, { useContext, useEffect, useState } from "react";
import style from "../styles/module-styles/buy.module.scss";
import { Toaster } from "react-hot-toast";
import { LogicContx } from "./contextes/LogicContext";
const Buy = () => {
  const { toastFn } = useContext(LogicContx);

  return (
    <>
      <div
        className={style.container}
        onClick={() => {
          console.log("Hello world");
        }}
      >
        <section>
          <div>
            <h1>Proceed with your checkout</h1>
            <ul>
              <li>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Enter your name..." />
              </li>
              <li>
                <label htmlFor="surname">Surname:</label>
                <input
                  type="text"
                  id="surname"
                  placeholder="Enter your surname..."
                />
              </li>
              <li>
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your address..."
                />
              </li>
              <li>
                <label htmlFor="phone-number">Phone number:</label>
                <input
                  type="text"
                  id="phone-number"
                  placeholder="Enter your phone number..."
                />
              </li>
            </ul>
            <div>
              <p>Total price:</p>
              <button
                onClick={() => toastFn(true, "Item is successfuly ordered")}
              >
                Place your order
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Buy;
