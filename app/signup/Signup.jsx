"use client"
import React from "react"
import style from "../styles/module-styles/auth.module.scss"
import Link from "next/link"
const Signup = () => {
  return (
    <>
      <div className={style.align}>
        <ul className={style.nav}>
          <li>
            <h1>SwiftCart</h1>
          </li>
          <li>
            <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  stroke="#ff4c29"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 12h16m0 0-4-4m4 4-4 4"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <form onSubmit={() => e.preventDefault()} className={style.formSignTwo}>
          <div className={style.infoContainer}>
            <h2>Welcome to SwiftCart</h2>
            <h4>The best place to shop</h4>
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="email">Username:</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your username..."
            />
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" placeholder="Enter your email..." />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enetr your password..."
            />
          </div>
          <div className={style.final}>
            <button>Sign up!</button>
            <p>
              Don't have an account?
              <span>
                <Link href="/signin"> Sign in!</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup
