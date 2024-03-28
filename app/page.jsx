import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Popup from "./components/Popup.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import CartFav from "./components/CartFav.jsx";

const page = () => {
  return (
    <>
      <Navbar />
      <main className="navbarExcluded">
        <Main />
      </main>
      {/* <CartFav /> */}
      <Footer />
    </>
  );
};

export default page;
