"use client";
//This component is made only to reman Main.jsx as server component
import React, { useContext, useEffect } from "react";
import { LogicContx } from "./contextes/LogicContext";

const Passer = ({ products }) => {
  const { items, setItems } = useContext(LogicContx);
  useEffect(() => {
    setItems(products); //I only need to render it once
    console.log(products);
  }, []);
  return null;
};

export default Passer;
