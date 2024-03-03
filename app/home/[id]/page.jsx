"use client"
import React, { useContext, useEffect, useState } from "react"
import ProductInfo from "./ProductInfo.jsx"
import { LogicContx } from "@/app/components/contextes/LogicContext.jsx"
import Navbar from "@/app/components/Navbar.jsx"
const page = ({ params }) => {
  const { setItemDetails } = useContext(LogicContx)
  useEffect(() => {
    console.log(params)
    const getUserInfo = async () => {
      try {
        const api = await fetch(
          `https://fakestoreapi.com/products/${params.id}` //I wanted to use this because I could easily just pass data using props or smth like that but I wanted to show that id could be used too! Note this much worse version that I have done
        )
        const data = await api.json()
        console.log(data)
        setItemDetails(data)
      } catch (error) {
        console.error(error)
      }
    }
    getUserInfo()
  }, [])
  return (
    <>
      {/* <h1>Title: {item.title}</h1> */}
      <Navbar />
      <ProductInfo />
    </>
  )
}

export default page
