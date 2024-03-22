// import React, { useContext, useEffect, useState } from "react"
import ProductInfo from "./ProductInfo.jsx"
// import { LogicContx } from "@/app/components/contextes/LogicContext.jsx"
import Navbar from "@/app/components/Navbar.jsx"
const getUserInfo = async (item) => {
  try {
    const api = await fetch(`https://fakestoreapi.com/products/${item}`)
    return await api.json()
  } catch (error) {
    console.error(error)
  }
}
const page = async ({ params }) => {
  const data = await getUserInfo(params.id)

  return (
    <>
      {/* <h1>Title: {item.title}</h1> */}
      <Navbar />
      <ProductInfo
        image={data.image}
        title={data.title}
        description={data.description}
        price={data.price}
      />
    </>
  )
}

export default page
