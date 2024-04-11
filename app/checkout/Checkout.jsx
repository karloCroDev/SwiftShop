"use client";
import React, { useContext } from "react";
import style from "../styles/module-styles/checkout.module.scss";
import { AuthContext } from "../components/contextes/FirebseAuthContext";
const Checkout = () => {
  const { authName, authImage } = useContext(AuthContext);

  return (
    <>
      <div className={style.checkoutContainer}>
        {/* self contaied data  */}
        <article>
          <div className={style.userInfo}>
            <img src={authImage} alt="" />
            <h1>{authName}</h1>
          </div>
          <div className={style.mainContent}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Enter your name..." />
            </div>
            <div>
              <label htmlFor="last-name">Last name:</label>
              <input
                type="text"
                id="last-name"
                placeholder="Enter your last name..."
              />
            </div>
            <div>
              <label htmlFor="country">Country:</label>
              <input
                type="text"
                id="country"
                placeholder="Enter your country..."
              />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                placeholder="Enter your address..."
              />
            </div>
            <div>
              <label htmlFor="phone-number">Phone number:</label>
              <input
                type="text"
                id="phone-number"
                placeholder="Enter your phone number..."
              />
            </div>
            <div>
              <label htmlFor="additional-email">Additional email:</label>
              <input
                type="text"
                id="additional-email"
                placeholder="Enter your additional email..."
              />
            </div>
          </div>
          <div className={style.total}>
            <h2>Total: 999</h2>
            <button>Buy</button>
          </div>
        </article>
      </div>
    </>
  );
};

export default Checkout;
