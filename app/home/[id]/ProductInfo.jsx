import React from "react";
import style from "../../styles/module-styles/product-info.module.scss";
import Btns from "../Btns.jsx";
const ProductInfo = (itemDetails) => {
  //Too lazy to destrucutre 👌

  return (
    <>
      <div className={style.productInfo}>
        <section>
          <img src={itemDetails.image} alt="Product image" />
          <h1>{itemDetails.title}</h1>
          <p>
            <b>Description:</b> {itemDetails.description}.
          </p>
          <div className={style.mainInfo}>
            <h2>Price: {itemDetails.price}$</h2>
            <div className={style.btnContainer}>
              <Btns />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductInfo;
