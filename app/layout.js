import { Inter } from "next/font/google";
import "./styles/global-style.scss";
import FirebseAuthContext from "./components/contextes/FirebseAuthContext.jsx";
import LogicContext from "./components/contextes/LogicContext.jsx";
import CartFav from "./components/CartFav";
import Popup from "./components/Popup";
import FirebaseFirestoreContext from "./components/contextes/FirebaseFirestoreContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "SwiftShop",
  description: "SwiftShop the best place to buy your clothes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LogicContext>
          <FirebseAuthContext>
            <FirebaseFirestoreContext>
              {children}
              <CartFav />
              <Popup />
              <Toaster />
            </FirebaseFirestoreContext>
          </FirebseAuthContext>
        </LogicContext>
      </body>
    </html>
  );
}
