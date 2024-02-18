"use client"
import React, { useContext } from "react"
import styles from "../styles/module-styles/navbar.module.scss"
import Link from "next/link"
import { AuthContext } from "./contextes/FirebseAuthContext.jsx"
import { LogicContx } from "./contextes/LogicContext.jsx"
import { useRouter } from "next/navigation"

const navbar = () => {
  //Contexes
  const { authName, signOutUsr } = useContext(AuthContext)
  const { setCloseCart } = useContext(LogicContx)

  //Routers
  const router = useRouter()
  const checkIfUserExists = () => {
    authName !== "" ? setCloseCart(true) : router.push("/signin")
  }
  return (
    <>
      <nav>
        <Link href="/">
          <h1>SwiftCart</h1>
        </Link>
        <ul className={styles.ul}>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width={25}
              height={25}
              viewBox="0 0 488.4 488.4"
            >
              <path d="M0 203.25c0 112.1 91.2 203.2 203.2 203.2 51.6 0 98.8-19.4 134.7-51.2l129.5 129.5c2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.2 8.7-3.6c4.8-4.8 4.8-12.5 0-17.3l-129.6-129.5c31.8-35.9 51.2-83 51.2-134.7C406.4 91.15 315.2.05 203.2.05S0 91.15 0 203.25zm381.9 0c0 98.5-80.2 178.7-178.7 178.7s-178.7-80.2-178.7-178.7 80.2-178.7 178.7-178.7 178.7 80.1 178.7 178.7z" />
            </svg>
            <input type="text" placeholder="Search products" />
          </li>

          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#men">Men</Link>
          </li>
          <li>
            <Link href="/#women">Women</Link>
          </li>
          <li>
            <Link href="/#jewlery">Jewlery</Link>
          </li>
          <li>
            <Link href="/#electronics">Electronics</Link>
          </li>

          <li>
            <button className={styles.btnOne} onClick={checkIfUserExists}>
              Favorite
            </button>
          </li>
          <li>
            <button className={styles.btnTwo} onClick={checkIfUserExists}>
              Cart
            </button>
          </li>
        </ul>
        {authName !== "" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Flat Line"
            viewBox="0 0 24 24"
            className="signOut"
            onClick={signOutUsr}
          >
            <path
              d="m18 9 3 3-3 3"
              style={{
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
              }}
            />
            <path
              d="m13 9 3 3-3 3M16 12H7"
              data-name="primary"
              style={{
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
              }}
            />
            <path
              d="M14 19v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1"
              data-name="primary"
              style={{
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
              }}
            />
          </svg>
        ) : (
          <div></div> //Don't remove this div because of space-between
        )}
      </nav>
    </>
  )
}

export default navbar
