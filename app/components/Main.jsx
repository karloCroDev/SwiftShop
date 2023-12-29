// "use client"
import React from "react"
import style from "../styles/module-styles/main.module.scss"
const Main = () => {
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const api = await fetch("https://fakestoreapi.com/products")
  //     const data=await api.json()

  //   }
  //   getProducts()
  // }, [])
  return (
    <>
      <div className={style.position}>
        <section>
          <h2>Product of the week:</h2>
          <div></div>
          <h3>Product: Samusng Oled television</h3>
          <h3>Price: 1000$</h3>
        </section>
        <h2 className={style.section}>Electronics:</h2>
        <div className={style.row}>
          <article>
            <div></div>
            <h3>Product: Xbox series X</h3>
            <h3>Price: 500$</h3>
          </article>
          <article>
            <div></div>
            <h3>Product: Xbox series X</h3>
            <h3>Price: 500$</h3>
          </article>
        </div>
        <div className={style.row}>
          <article>
            <div></div>
            <h3>Product: Xbox series X</h3>
            <h3>Price: 500$</h3>
          </article>
          <article>
            <div></div>
            <h3>Product: Xbox series X</h3>
            <h3>Price: 500$</h3>
          </article>
        </div>
        <div className={style.row}>
          <article>
            <div></div>
            <h3>Product: Xbox series X</h3>
            <h3>Price: 500$</h3>
          </article>
          <article>
            <div></div>
            <h3>Product: Xbox series X</h3>
            <h3>Price: 500$</h3>
          </article>
        </div>
      </div>
    </>
  )
}

export default Main
