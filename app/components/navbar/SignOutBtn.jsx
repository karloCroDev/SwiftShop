"use client";
import React, { useContext } from "react";
import { AuthContext } from "../contextes/FirebseAuthContext.jsx";
import { GoSignOut } from "react-icons/go";

const SignOutBtn = () => {
  const { authName, signOutUsr } = useContext(AuthContext);

  return authName !== "" ? (
    //Wanted to have some custom svg because it looks nicer
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Flat Line"
      viewBox="0 0 24 24"
      className="sign-out"
      onClick={signOutUsr}
    >
      <path
        d="m18 9 3 3-3 3"
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
      <path
        d="m13 9 3 3-3 3M16 12H7"
        data-name="primary"
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
      <path
        d="M14 19v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1"
        data-name="primary"
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
    </svg>
  ) : (
    <h1></h1> //Could have played with styles but this is the simplest way
  );
};

export default SignOutBtn;
