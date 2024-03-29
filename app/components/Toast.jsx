// "use client";
// import React, { useEffect, useState } from "react";
// import style from "../styles/module-styles/toasts.module.scss";
// import { IoMdCheckmark } from "react-icons/io";
// import { IoClose } from "react-icons/io5";

// const Toast = ({ show, state, text }) => {
//   //This is my own toast component, but after this I am using library only soooo please don't do this again in future....
//   const [animate, setAnimate] = useState("");
//   const [display, setDisplay] = useState(show);

//   useEffect(() => {
//     setTimeout(() => {
//       setAnimate("animateContainer");
//     }, 250);
//     setTimeout(() => {
//       setDisplay("fade");
//     }, 5000);
//   }, []);
//   return (
//     <>
//       <div
//         className={`${style.toastContainer} ${style[animate]} ${
//           display ? null : style["fade"]
//         }`}
//         onClick={() => {
//           setDisplay("fade");
//           setDisplay(false);
//         }}
//       >
//         <div className={style.signContainer}>
//           {state ? (
//             <IoMdCheckmark className={style.icon} />
//           ) : (
//             <IoClose className={`${style.icon} ${style.red}`} />
//           )}
//         </div>
//         <h3>{text}</h3>
//       </div>
//     </>
//   );
// };

// export default Toast;

//Use this in some seperate project or make this as cool effect
//I used toastify to make toasts
