import React from "react";
import style from "../styles/module-styles/main.module.scss";
import Link from "next/link";
import Passer from "./Passer.jsx";
const getProducts = async () => {
  try {
    const api = await fetch("https://fakestoreapi.com/products");
    return api.json();
    // console.log(data)
  } catch (error) {}
};

const Main = async () => {
  const products = await getProducts();

  const men = products.filter((itm) => itm.category === "men's clothing");
  const women = products.filter((itm) => itm.category === "women's clothing");
  const jewlery = products.filter((itm) => itm.category === "jewelery");
  const electronics = products.filter((itm) => itm.category === "electronics");
  const itemOfTheWeek = products[Math.floor(Math.random() * products.length)];

  const filtredItem = (category) => {
    //Need to define return two times
    return category.map((itm, indx) => {
      const arrStr = itm.title.split(" ");
      const title =
        arrStr.length > 4
          ? arrStr.map((itm, i) => (i > 5 ? null : itm)).join(" ") + "..."
          : arrStr.join(" ");
      return (
        <Link href={`/home/${itm.id}`} key={indx}>
          <article>
            <img src={itm.image} alt="Image of the product" />
            <h3>Product: {title}</h3>
            <h3>Price: {Math.round(itm.price)}$</h3>
          </article>
        </Link>
      );
    });
  };

  return (
    <>
      <div className={style?.position}>
        <Link href={`/home/${itemOfTheWeek?.id}`}>
          <section>
            <h2>Recommended:</h2>
            <div className={style.itemContainer}>
              <img src={itemOfTheWeek?.image} alt="Reommended image" />
              <div>
                <h3>
                  <span>Product: </span>
                  {itemOfTheWeek?.title}
                </h3>
                <h3>
                  <span>Price:</span> {itemOfTheWeek?.price}$
                </h3>
              </div>
            </div>
          </section>
        </Link>
        <h2 className={style.section} id="men">
          Men:
        </h2>

        {/* Need to make this as function, because this is awful  */}
        <div className={style.row}>{filtredItem(men)}</div>
        <h2 className={style.section} id="women">
          Women:
        </h2>

        <div className={style.row}>{filtredItem(women)}</div>
        <h2 className={style.section} id="jewlery">
          Jewlery:
        </h2>
        <div className={style.row}>{filtredItem(jewlery)}</div>
        <h2 className={style.section} id="electronics">
          Electronics:
        </h2>
        <div className={style.row}>{filtredItem(electronics)}</div>
      </div>
      <Passer products={products} />
    </>
  );
};

export default Main;
