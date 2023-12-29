import { Inter } from "next/font/google"
import "./styles/global-style.scss"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}