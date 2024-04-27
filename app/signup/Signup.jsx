"use client";
import React, { useContext, useState } from "react";
import style from "../styles/module-styles/auth.module.scss";
import Link from "next/link";
import LoaderAnimation from "react-spinners/ClipLoader";

import { AuthContext } from "../components/contextes/FirebseAuthContext.jsx";

const Signup = () => {
  const { signUp } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState("");
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
            if (username.length >= 4 && username.length <= 12) {
              setLoader(true);
              await signUp(username, email, password);
              setLoader(false);
            } else {
              alert(
                "Your username must contain atleast 4 charchters and maximum of 12  "
              );
            }
          }}
          className={style.formSignTwo}
        >
          <div className={style.infoContainer}>
            <h2>Welcome to SwiftCart</h2>
            <h4>The best place to shop</h4>
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
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
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={style.final}>
            <button>
              {loader ? (
                <LoaderAnimation size={20} color="#61707b" />
              ) : (
                "Sign up!"
              )}
            </button>
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
  );
};

export default Signup;
