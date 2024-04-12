"use client";
import React, { useContext, useEffect, useState } from "react";
import style from "../styles/module-styles/checkout.module.scss";
import { AuthContext } from "../components/contextes/FirebseAuthContext";
import { FirestoreContext } from "../components/contextes/FirebaseFirestoreContext";
import { useRouter } from "next/navigation";
import { LogicContx } from "../components/contextes/LogicContext";
const Checkout = () => {
  const { authName, authImage } = useContext(AuthContext);
  const { order, data } = useContext(FirestoreContext);
  const { toastFn } = useContext(LogicContx);
  const { push } = useRouter();
  const [processPayment, setProcessPayment] = useState(false);
  const [price, setPrice] = useState([]);
  useEffect(() => {
    if (data.length > 0) {
      setPrice(
        data[0].reduce(
          (acc, itm) => {
            return (
              (acc + itm.price.integerValue
                ? +itm.price.integerValue
                : +itm.price.doubleValue) * +itm.quantity.integerValue
            );
          }, //Number instead of + because it is more easy to read
          0
        )
      );
      //had to define like this because the inital version inside the vrai
    }
  }, [data]);
  return (
    <>
      <div className={style.checkoutContainer}>
        {/* self contaied data  */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setProcessPayment(true);
            try {
              const name = e.target[0].value;
              const lastName = e.target[1].value;
              const country = e.target[2].value;
              const address = e.target[3].value;
              const phoneNumber = e.target[4].value;
              const additionaEmail = e.target[5].value;
              await order(
                name,
                lastName,
                country,
                address,
                phoneNumber,
                additionaEmail,
                price
              );
              push("/");

              toastFn(true, "Your order is successfuly placed");
            } catch (error) {
              console.error(error);
              toastFn(false, "Please try again something is wrong ");
            }
            // orderFn();
          }}
        >
          <div className={style.userInfo}>
            <img src={authImage} alt="" />
            <h1>{authName}</h1>
          </div>
          <div className={style.mainContent}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name..."
                required
              />
            </div>
            <div>
              <label htmlFor="last-name">Last name:</label>
              <input
                type="text"
                id="last-name"
                placeholder="Enter your last name..."
                required
              />
            </div>
            <div>
              <label htmlFor="country">Country:</label>
              <select type="text" id="country">
                <option value="Croatia">Croatia</option>
                <option value="USA">USA</option>
                <option value="Germany">Germany</option>
                <option value="Italy">Italy</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                placeholder="Enter your address..."
                required
              />
            </div>
            <div>
              <label htmlFor="phone-number">Phone number:</label>
              <input
                type="text"
                id="phone-number"
                placeholder="Enter your phone number..."
                required
              />
            </div>
            <div>
              <label htmlFor="additional-email">Additional email:</label>
              <input
                type="email"
                id="additional-email"
                placeholder="Enter your additional email..."
              />
            </div>
          </div>
          <div className={style.total}>
            <h2>Total: {price}$</h2>
            <button>{processPayment ? "..." : "Buy"}</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
