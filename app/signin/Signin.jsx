"use client";
import React, { useContext, useState } from "react";
import style from "../styles/module-styles/auth.module.scss";
import Link from "next/link";
import { AuthContext } from "../components/contextes/FirebseAuthContext.jsx";
import { useRouter } from "next/navigation";

const Signin = () => {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  return (
    <>
      <div className={style.align}>
        <nav>
          <Link href="/">
            <h1>SwiftCart</h1>
          </Link>

          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="get-out"
            >
              <path
                stroke="#ff4c29"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 12h16m0 0-4-4m4 4-4 4"
              />
            </svg>
          </Link>
        </nav>
      </div>
      <div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await signIn(email, password);
          }}
          className={style.formSign}
        >
          <div className={style.infoContainer}>
            <h2>Welcome back to SwiftCart</h2>
            <h4>The best place to shop</h4>
          </div>
          <div className={style.inputContainer}>
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
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={style.final}>
            <button>Sign in!</button>
            <p>
              Don't have an account?
              <span>
                <Link href="/signup"> Sign up!</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
