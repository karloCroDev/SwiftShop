"use client"
import React, { useContext, useState } from "react"
import style from "../styles/module-styles/auth.module.scss"
import Link from "next/link"
import { AuthContext } from "../components/contextes/FirebseAuthContext.jsx"
import { useRouter } from "next/navigation"

const Signup = () => {
  const { signUp } = useContext(AuthContext)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()
  return (
    <>
      <div className={style.align}>
        <ul className={style.nav}>
          <li>
            <Link href="/">
              <h1>SwiftCart</h1>
            </Link>
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
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (username.length >= 4 && username.length <= 12) {
              signUp(username, email, password)
              router.push("/")
              window.location.reload
            } else {
              alert(
                "Your username must contain atleast 4 charchters and maximum of 12  "
              )
            }
          }}
          className={style.formSignTwo}
        >
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
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="email">Email:</label>

            <input
              type="text"
              id="email"
              placeholder="Enter your email..."
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enetr your password..."
              onChange={(e) => setPassword(e.target.value)}
              required
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
