import React from "react"
import style from "../styles/module-styles/footer.module.scss"
const Footer = () => {
  return (
    <>
      <footer>
        <div className={style.all}>
          <h2 className={style.info}>
            Want to send me some feedback information, you can do it here 👇
          </h2>
          <div className={style.fieldContainer}>
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
            <div className={style.messageContainer}>
              <label htmlFor="textAreaId" placeholder="Enter your message...">
                <h3>Message:</h3>
              </label>
              <textarea
                name="textarea field"
                id="textareaId"
                placeholder="Enter your message..."
              ></textarea>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
