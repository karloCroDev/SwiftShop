"use client";
import React, { useContext, useState } from "react";
import style from "../../styles/module-styles/search.module.scss";
import { CiSearch } from "react-icons/ci";
import { LogicContx } from "../contextes/LogicContext";
import Link from "next/link";
const Serach = () => {
  const [show, setShow] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const { items } = useContext(LogicContx);

  return (
    <>
      <div className={style.serach} onClick={() => setShow(!show)}>
        <CiSearch />
        <input
          type="text"
          placeholder="Search products"
          onChange={(e) => setInputVal(e.target.value)}
        />
        <ul
          id="item-popover"
          className={`${!show ? style.hide : null} ${style.popover}`}
        >
          {show
            ? items.map((itm, i) => {
                if (itm?.title.includes(inputVal)) {
                  return (
                    <Link href={`home/${i + 1}`}>
                      <li>
                        <img src={itm.image} alt={itm.category} />
                        <p>{itm.title}</p>
                        <span>{itm.price}$</span>
                      </li>
                    </Link>
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
