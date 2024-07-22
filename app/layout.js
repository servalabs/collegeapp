import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Find Group | Sign Up",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <footer style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          textAlign: "center",
          backgroundColor: "#181b1f",
          paddingTop: "6px",
          paddingBottom: "8px",
          color: "#fff",
          fontSize: "16px",
        }}>
          <span style={{float:"center"}}>created @ Tachyon(in beta release)</span>
          {process.env.SEC}
          <a href="">adljkbshav</a>
          {/* <Link style={{float:"right"}} href="/logout">logOut</Link> */}
        </footer>
      </body>
    </html>
  );
}
