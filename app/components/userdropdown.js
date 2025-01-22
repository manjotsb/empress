'use client'
import React, { useState, useRef, useEffect } from "react";

import ReactDOM from "react-dom";
import { FiUser } from "react-icons/fi";

const UserDropdown = () => {
    const [userDropdown, setUserDropdown] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({top:0, left:0})
    const userIconRef = useRef(null)


    const handleMouseEnter =() => {
        if(userIconRef.current) {
            const rect= userIconRef.current.getBoundingClientRect();
            setDropdownPosition({top: rect.bottom + window.scrollY+15, left: rect.left + window.scrollX-50})
        }
        setUserDropdown(true);
    }

    const handleMouseLeave = () => {
        setUserDropdown(false);
    }

   
    return(<div className="relative cursor-pointer w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={userIconRef}>
        <div className='cursor-pointer'><FiUser/></div>
        {userDropdown && ReactDOM.createPortal(<div className="absolute top-14 left-10 w-fit bg-white border shadow-lg" 
    style={{top: dropdownPosition.top, left: dropdownPosition.left}}>

        <div>
        <div
            className="absolute w-0 h-0"
            style={{top: '-10px', left: '57px', borderLeft:'10px solid transparent', borderRight:'10px solid transparent', borderBottom: '10px solid white'}}>
        </div>
        </div>

        <ul className="flex flex-col text-black text-xl text-nowrap px-2">
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Sign In</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">My Orders</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer text-nowrap">Account Settings</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Saved Items</li>
        </ul>
    </div>, document.body)}
    </div>)
}

export default UserDropdown;