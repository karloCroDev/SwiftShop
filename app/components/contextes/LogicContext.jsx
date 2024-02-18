"use client"
import React, { createContext, useRef, useState } from "react"

export const LogicContx = createContext()

const LogicContext = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false)
  const [closeCart, setCloseCart] = useState(false)

  const [itemDetails, setItemDetails] = useState({})

  //CartFavContainerToAppend

  return (
    <>
      <LogicContx.Provider
        value={{
          showPopup,
          setShowPopup,
          closeCart,
          setCloseCart,
          itemDetails,
          setItemDetails,
        }}
      >
        {children}
      </LogicContx.Provider>
    </>
  )
}

export default LogicContext
