"use client"
import React, { useContext, useEffect, useState } from "react"
import ProductInfo from "./ProductInfo.jsx"
import { LogicContx } from "@/app/components/contextes/LogicContext.jsx"

const page = ({ params }) => {
  const { setItemDetails } = useContext(LogicContx)
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const api = await fetch(
          `https://fakestoreapi.com/products/${params.id}`
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
      <ProductInfo />
    </>
  )
}

export default page
