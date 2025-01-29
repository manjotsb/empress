import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import {CartProvider} from './components/cartcontext';
import Loading from './components/loading'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Empress",
  description: "Online Jewelry Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          {/* <Loading/> */}
          <header className="sticky top-0 left-0 z-50"><Navbar/></header>
          {children}
          <footer><Footer/></footer>
        </CartProvider>
      </body>
    </html>
  );
}
