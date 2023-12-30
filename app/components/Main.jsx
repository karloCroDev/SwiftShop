"use client"
import React, { useEffect, useState } from "react"
import style from "../styles/module-styles/main.module.scss"
const Main = () => {
  const [products, setProducts] = useState([])

  const men = products.filter((itm) => itm.category === "men's clothing")
  const women = products.filter((itm) => itm.category === "women's clothing")
  const jewlery = products.filter((itm) => itm.category === "jewelery")
  const electronics = products.filter((itm) => itm.category === "electronics")
  const itemOfTheWeek = products[Math.floor(Math.random() * products.length)]
  console.log(itemOfTheWeek)
  useEffect(() => {
    try {
      const getProducts = async () => {
        const api = await fetch("https://fakestoreapi.com/products")
        const data = await api.json()
        console.log(data)
        setProducts(data)
      }
      getProducts()
    } catch (error) {
      console.error(error)
    }
  }, [])
  return (
    <>
      <div className={style?.position}>
        <section>
          <h2>Recommended:</h2>
          <div>
            <img src={itemOfTheWeek?.image} alt="Reommended image" />
          </div>
          <h3>
            <span>Product: </span>
            {itemOfTheWeek?.title}
          </h3>
          <h3>
            <span>Price:</span> {itemOfTheWeek?.price}$
          </h3>
        </section>
        <h2 className={style.section} id="men">
          Men:
        </h2>
        <div className={style.row}>
          {men.map((itm) => {
            return (
              <article>
                <img src={itm.image} alt="Image of the product" />
                <h3>Product:{itm.title}</h3>
                <h3>Price: {itm.price}$</h3>
              </article>
            )
          })}
        </div>
        <h2 className={style.section} id="women">
          Women:
        </h2>

        <div className={style.row}>
          {women.map((itm) => {
            return (
              <article>
                <img src={itm.image} alt="Image of the product" />
                <h3>Product:{itm.title}</h3>
                <h3>Price: {itm.price}$</h3>
              </article>
            )
          })}
        </div>
        <h2 className={style.section} id="jewlery">
          Jewlery:
        </h2>
        <div className={style.row}>
          {jewlery.map((itm) => {
            return (
              <article>
                <img src={itm.image} alt="Image of the product" />
                <h3>Product:{itm.title}</h3>
                <h3>Price: {itm.price}$</h3>
              </article>
            )
          })}
        </div>
        <h2 className={style.section} id="electronics">
          Electronics:
        </h2>
        <div className={style.row}>
          {electronics.map((itm) => {
            return (
              <article>
                <img src={itm.image} alt="Image of the product" />
                <h3>Product:{itm.title}</h3>
                <h3>Price: {itm.price}$</h3>
              </article>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Main
