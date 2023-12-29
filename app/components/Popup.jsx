"use client"
import React, { useState, useEffect } from "react"
import style from "../styles/module-styles/popup.module.scss"
const Popup = () => {
  //When I push to production change this to false and alo uncomment it
  const [state, setState] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setState(true)
  //   }, 15000)
  // }, [])
  return (
    <>
      <aside className={state ? style.show : style.hide}>
        <div className={style.container}>
          <h2 className={style.title}>
            You like our products, then sign up/ sign in :)
          </h2>
          <div className={style.btnContainer}>
            <button className={style.btn1}>Sign up</button>
            <button className={style.btn2}>Sign in</button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Popup
