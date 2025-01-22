'use client'
import React, { useState } from "react";
import { LuChevronFirst } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import Alicia from '../src/profile-pic.png'
import Image from "next/image";

export default function SideBar({closeSidebar}){
    const [signedIn, setSignedIn] = useState(true);

    const handleSignIn = () => {
        setSignedIn(!signedIn);
    }

    return(<div>
        <aside className="fixed top-0 right-0 h-screen w-1/4 bg-gray-50 shadow-sn border-l z-50">
            <nav className="h-full flex flex-col border-r bg-gray-50 shadow-sn">
                <div className="p-4 pb-2 flex justify-between items-center">

                    <button className="m-4 p-2 rounded-2xl bg-gray-900 hover:bg-gray-200 w-fit" onClick={closeSidebar}>
                        <LuChevronFirst className="text-white hover:text-black text-4xl"/>
                    </button>
                </div>

                <div className="flex justify-start items-center text-black text-2xl font-medium">
                    <ul className="w-full p-4">
                        <li className="hover:bg-gray-300 w-fit p-4 my-2 rounded-2xl ">The Collections</li>
                        <li className="hover:bg-gray-300 w-fit p-4 my-2  rounded-2xl">Custom Designs</li>
                        <li className="hover:bg-gray-300 w-fit p-4 my-2 rounded-2xl">New In</li>
                        <li className="hover:bg-gray-300 w-fit p-4 my-2  rounded-2xl">Design Your Own</li>
                        <li className="hover:bg-gray-300 w-fit p-4 my-2  rounded-2xl">Sale Items</li>
                    </ul>
                </div>

                {signedIn ?
                    <div className="mt-auto flex justify-center space-x-24 items-center text-black text-xl font-medium p-8 hover:bg-gray-300" onClick={handleSignIn}>
                        <div className="flex flex-col justify-start items-start">
                            <h1 className="ml-4 text-sm font-medium">Welcome,</h1>
                            <h1 className="ml-4 text-4xl font-bold">Alicia</h1>
                        </div>

                        <div className="flex shrink-0">
                            <Image src={Alicia} width={110} height={110} alt="Profile Pic"/>
                        </div>
                    </div> :                     
                    
                    <div className="mt-auto flex justify-between items-center text-black text-xl font-medium p-8 hover:bg-gray-300" onClick={handleSignIn}>
                        <FiUser size={40}/>
                        <h1 className="ml-4 text-xl font-medium">Sign In / Create Account</h1>
                    </div>}




            
            </nav>
        </aside>
    </div>);
}