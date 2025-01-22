'use client'
import React, {use, useState} from "react";
import Image from "next/image";
import UserDropdown from "./userdropdown";
import CartDropdown from "./cartdropdown";
import { IoMdMore } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import SideBar from "./sidebar";
import EmpressLogo from '../src/empress_logo.png'

import { LifeBuoy,
    Receipt,
    Boxes,
    Package,
    UserCircle,
    BarChart3,
    LayoutDashboard,
    Settings,
 } from "lucide-react";

export default function Navbar(){
    const [click, setClick] = useState(false);
    const [sideBar, setSideBar] = useState(false);

    const handleSideBar = () => {
        setSideBar(!sideBar)
    }

    const handleClick = () => {
        setClick(!click)
        handleSideBar()
    }

    const closeSideBar = () => {
        setSideBar(false);
        setClick(false)
    }

    return(
        <main className="p-4 relative">

            {sideBar && 
            <SideBar closeSidebar={closeSideBar}/>}
            
            <nav className="flex justify-between items-center px-8">

                <div className="flex shrink-0">
                    <Image src={EmpressLogo} width={150} height={150} alt="Empress Logo"/>
                </div>

                <div className="flex justify-center items-center space-x-10 text-4xl">
                    <UserDropdown/>

                    <CartDropdown/>

                    <div onClick={handleClick} className=' cursor-pointer'>
                        {click ? <IoIosClose/> : <IoMdMore/>}
                    </div>
                </div>
            </nav>

        </main>
    )
}