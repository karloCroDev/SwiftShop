import React from "react"
import Navbar from "./components/Navbar.jsx"
import Popup from "./components/Popup.jsx"
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"
import CartFav from "./components/CartFav.jsx"

const page = () => {
  return (
    <>
      <Navbar />
      <main className="navbarExcluded">
        <Main />
        <Popup />
      </main>
      <CartFav />
      <Footer />
    </>
  )
}

export default page
