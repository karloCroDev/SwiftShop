import React from "react";
import Navbar from "../components/navbar/Navbar";
import style from "../styles/module-styles/404.module.scss";
import Link from "next/link";
const page = () => {
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.childContainer}>
          <h2>
            Uh, oh it seems you are on a wrong page, please return to main page
          </h2>
          <Link href={"/"}>
            <button>Go back to main page</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
