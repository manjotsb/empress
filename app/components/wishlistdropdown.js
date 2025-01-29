'use client'
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import ReactDOM from "react-dom";
import BraceletExample from '../src/bracelet_ex.png'

const WishlistDropdown = () => {
    const routerWishlist = useRouter();
    const [wishlistDropdown, setWishlistDropdown] = useState(false);
    const [wishlistDropdownPosition, setWishlistDropdownPosition] = useState({top:0, left:0})
    const wishlistIconRef = useRef(null)
    const [dropdownTimer, setDropdownTimer]= useState(null);

    const navigateTo = (path) => {
        routerWishlist.push(path)
    }
    const handleMouseEnter =() => {
        if(wishlistIconRef.current) {
            const rect= wishlistIconRef.current.getBoundingClientRect();
            const windowWidth = window.innerWidth;
            const dropdownWidth = 300;

            
            let left = rect.left + window.scrollX - 25;
            if (left + dropdownWidth > windowWidth) {
                left = windowWidth - dropdownWidth -20
            }

            setWishlistDropdownPosition({top: rect.bottom + window.scrollY+15, left: left})
        }
        if (dropdownTimer) {
            clearTimeout(dropdownTimer)
        }
        setWishlistDropdown(true);
    }

    const handleMouseLeave = () => {
        const timer= setTimeout (() => {
            setWishlistDropdown(false)
        },200);

        setDropdownTimer(timer);
    }

    const wishlistDropdownContent = wishlistDropdown && (<div className="absolute top-14 left-10 w-fit bg-white border shadow-lg" 
    style={{top: wishlistDropdownPosition.top, left: wishlistDropdownPosition.left}}>

        <div
            className="absolute w-0 h-0"
            style={{top: '-10px', left: '35px', borderLeft:'10px solid transparent', borderRight:'10px solid transparent', borderBottom: '10px solid white'}}>
        </div>
        <div className="flex flex-col p-2 items-center justify-center">
            <WishlistItem/>
            <WishlistItem/>
            <WishlistItem/>
            <div className="group flex justify-center items-center w-fit p-2 my-1" onClick={() => navigateTo('/pages/wishlist')}>
                <button className="relative font-semibold">
                    View Wishlist
                    <span className="absolute left-0 bottom-[2px] h-[2px] w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                </button>
            </div>
        </div>
    </div>)

    return(<div className="relative cursor-pointer w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={wishlistIconRef}>
        <div className='flex flex-col justify-center items-center cursor-pointer' onClick={() => navigateTo('/pages/wishlist')}>
            <FaRegHeart size={20}/>
        </div>
        {wishlistDropdown && ReactDOM.createPortal(wishlistDropdownContent, document.body)}
    </div>)
}


const WishlistItem = () => {
    return(
        <div className="p-2 hover:bg-gray-200 cursor-pointer w-fit"><div className="flex flex-row">
                <div className="flex justify-center items-center p-2">
                    <Image src={BraceletExample} height={70} width={70} alt="Bracelet Example"/>
                </div>
                <div className="flex flex-col px-2">
                    <p className="text-wrap text-lg p-2">Lorem ipsum</p>
                    <h1 className="text-xl px-2">
                        $30
                    </h1>
                </div>
                </div>
        </div>
    )
}
export default WishlistDropdown;