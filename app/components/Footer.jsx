"use client";
import React, { useContext, useRef } from "react";
import style from "../styles/module-styles/footer.module.scss";
import { AuthContext } from "./contextes/FirebseAuthContext";
import { FirestoreContext } from "./contextes/FirebaseFirestoreContext";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  const { authName, authEmail } = useContext(AuthContext);
  const { feedback } = useContext(FirestoreContext);
  const email = useRef();
  const textarea = useRef();
  //need to clean up email and the footer also in the ui and this is more convinient way
  return (
    <>
      <footer>
        <div className={style.all}>
          <h2 className={style.info}>
            Want to send me some feedback information, you can do it here 👇
          </h2>
          <div className={style.fieldContainer}>
            {!authName ? (
              <div className={style.emailContainer}>
                <label htmlFor="emailId">
                  <h3>Email:</h3>
                </label>
                <input
                  type="text"
                  id="emailId"
                  placeholder="Enter your email..."
                />
              </div>
            ) : (
              <div></div>
            )}
            <div
              className={`${authName !== "" ? style.expand : null}  ${
                style.messageContainer
              }`}
            >
              <label htmlFor="textAreaId">
                <h3>Message:</h3>
              </label>
              <textarea
                name="textarea field"
                id="textareaId"
                placeholder="Enter your message..."
                ref={textarea}
              ></textarea>
              <button
                onClick={async () => {
                  await feedback(
                    authEmail ? authEmail : email.current.value, //could have used logical or but this is more readable imo
                    textarea.current.value
                  );
                  !authEmail ? (email.current.value = "") : null;
                  textarea.current.value = "";
                }}
              >
                <IoIosSend className={style.svg} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
