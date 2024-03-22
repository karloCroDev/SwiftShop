import React from "react"
import style from "../styles/module-styles/toasts.module.scss"
import { IoMdCheckmark } from "react-icons/io"

const Toast = () => {
  return (
    <>
      <div className={style.toastContainer}>
        <div className={style.signContainer}>
          <IoMdCheckmark className={style.checkmark} />
        </div>
        <h3>Successfulm sign in</h3>
      </div>
    </>
  )
}

export default Toast
