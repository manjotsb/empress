'use client'
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";

export default function Home() {
  return (
    <main>
      <Navbar/>
    </main>
  );
}
