import React from "react";
import style from "../../styles/module-styles/navbar.module.scss";
import { CiSearch } from "react-icons/ci";

const Serach = () => {
  return (
    <>
      <CiSearch />
      <input
        type="text"
        placeholder="Search products"
        popovertarget="item-popover"
      />
      <div id="item-popover" popover className=""></div>
    </>
  );
};

export default Serach;
