"use client";
import React, { useContext, useRef, useState } from "react";
import style from "../../styles/module-styles/search.module.scss";
import { CiSearch } from "react-icons/ci";
import { LogicContx } from "../contextes/LogicContext";
import { useRouter } from "next/navigation";

const Serach = () => {
  const [show, setShow] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const { items } = useContext(LogicContx);
  const { push } = useRouter();

  const inputSelected = (e) => {
    e.target === document.activeElement
      ? setShow(true)
      : setTimeout(() => setShow(false), 100); //animation looks smmoother imo
  };

  return (
    <>
      <div className={style.serach}>
        <CiSearch />
        <input
          onFocus={inputSelected}
          onBlur={inputSelected}
          type="text"
          placeholder="Search products"
          onChange={(e) => {
            const text = e.target.value;
            setInputVal(text);
            // text.length > 0 ? setShow(true) : setShow(false);
          }}
        />

        <ul className={`${!show ? style.hide : null} ${style.popover}`}>
          {show
            ? items.map((itm, i) => {
                if (itm?.title.toLowerCase().includes(inputVal.toLowerCase())) {
                  return (
                    <li
                      onClick={() => {
                        push(`/home/${i + 1}`);
                      }}
                      key={i}
                    >
                      <img src={itm.image} alt={itm.category} />

                      <p>
                        {itm.title
                          .split(" ")
                          .map((x, i) => (i <= 5 ? x + " " : null))}
                      </p>
                      <span>{itm.price}$</span>
                    </li>
                  );
                }
              })
            : false}
        </ul>
      </div>
    </>
  );
};

export default Serach;
