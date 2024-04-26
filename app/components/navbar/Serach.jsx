"use client";
import React, { useContext, useRef, useState } from "react";
import style from "../../styles/module-styles/search.module.scss";
import { CiSearch } from "react-icons/ci";
import { LogicContx } from "../contextes/LogicContext";
import { useRouter } from "next/navigation";

const Serach = () => {
  const [show, setShow] = useState(false);
  const [itemSelected, setIsItemSelected] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const { items } = useContext(LogicContx);
  const { push } = useRouter();

  const inputSelected = (e) => {
    e.target === document.activeElement
      ? setShow(true)
      : setTimeout(() => setShow(false), 400); //Fix this imediatelly
  };

  return (
    <>
      <div className={style.serach}>
        <CiSearch />
        <input
          type="text"
          placeholder="Search products"
          onFocus={inputSelected}
          onBlur={inputSelected}
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
                      <div>
                        <img src={itm.image} alt={itm.category} />
                      </div>
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
            : null}
        </ul>
      </div>
    </>
  );
};

export default Serach;
