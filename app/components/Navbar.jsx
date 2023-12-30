import React from "react"
import styles from "../styles/module-styles/navbar.module.scss"
import Link from "next/link"
const navbar = () => {
  return (
    <>
      <nav>
        <div className={styles.logoSearchContainer}>
          <ul>
            <li>
              <Link href="/home">
                <h1>SwiftCart</h1>
              </Link>
            </li>
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
          </ul>
        </div>
        <div className={styles.productContainer}>
          <ul>
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
          </ul>
        </div>
        <div className={styles.orderContainer}>
          <ul>
            <li>
              <button className={styles.btnOne}>Favorite</button>
            </li>
            <li>
              <button className={styles.btnTwo}>Cart</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default navbar
