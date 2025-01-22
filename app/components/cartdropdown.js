'use client'
import React, { useState, useRef, useEffect } from "react";

import { IoCartOutline } from "react-icons/io5";
import ReactDOM from "react-dom";

const CartDropdown = () => {
    const [cartDropdown, setCartDropdown] = useState(false);
    const [cartDropdownPosition, setCartDropdownPosition] = useState({top:0, left:0})
    const cartIconRef = useRef(null)


    const handleMouseEnter =() => {
        if(cartIconRef.current) {
            const rect= cartIconRef.current.getBoundingClientRect();
            setCartDropdownPosition({top: rect.bottom + window.scrollY+15, left: rect.left + window.scrollX-25})
        }
        setCartDropdown(true);
    }

    const handleMouseLeave = () => {
        setCartDropdown(false);
    }

    const cartDropdownContent = cartDropdown && (<div className="absolute top-14 left-10 w-fit bg-white border shadow-lg" 
    style={{top: cartDropdownPosition.top, left: cartDropdownPosition.left}}>

        <div
            className="absolute w-0 h-0"
            style={{top: '-10px', left: '35px', borderLeft:'10px solid transparent', borderRight:'10px solid transparent', borderBottom: '10px solid white'}}>
        </div>

        <ul className="flex flex-col text-black text-xl text-nowrap px-2">
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Item 1</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer text-nowrap">Item-1</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Item 3</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Item 4</li>
        </ul>
    </div>)

    return(<div className="relative cursor-pointer w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={cartIconRef}>
        <div className='cursor-pointer'><IoCartOutline/></div>
        {cartDropdown && ReactDOM.createPortal(cartDropdownContent, document.body)}
    </div>)
}

export default CartDropdown;