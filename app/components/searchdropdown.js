'use client'
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { IoSearch } from "react-icons/io5";

const SearchDropdown = () => {
    const [searchDropdown, setSearchDropdown] = useState(false);

    const handleMouseClick =() => {
        setSearchDropdown((prev) => !prev);
    }

   
    return(<div className="relative cursor-pointer inline-block" >
        <div className='flex flex-col justify-center items-center cursor-pointer' onClick={handleMouseClick}>
            <IoSearch size={22}/>
        </div>
        {searchDropdown &&
                ReactDOM.createPortal(
                    <div className="relative flex justify-center align-middle">
                        <div
                        className="absolute flex flex-row align-middle bg-white px-4 py-3 w-1/2 border shadow-lg z-50 rounded-xl">

                            <div className="flex justify-center items-center mx-2">
                                <IoSearch size={30} className="text-gray-600"/>
                            </div>
                            <input type="text" placeholder="Search..." className="w-full p-2 rounded outline-none focus:ring-0"/>
                        </div>
                    </div>,
                    document.body
                )}
    </div>)
}

export default SearchDropdown;