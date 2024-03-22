"use client"
import React, { useContext, useState } from "react"
import style from "../styles/module-styles/footer.module.scss"
import { AuthContext } from "./contextes/FirebseAuthContext"
import { FirestoreContext } from "./contextes/FirebaseFirestoreContext"
import { IoIosSend } from "react-icons/io"

const Footer = () => {
  const { authName, authEmail } = useContext(AuthContext)
  const { feedback } = useContext(FirestoreContext)
  const [email, setEmail] = useState("")
  const [content, setContent] = useState("")
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
                  onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <button
                onClick={async () => {
                  if (
                    authEmail === "" &&
                    email.length > 0 &&
                    !email.includes("@")
                  )
                    return //make toast message
                  await feedback(authEmail !== "" ? authEmail : email, content)
                  setContent("")
                }}
              >
                <IoIosSend className={style.svg} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
