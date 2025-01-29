'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import UserDropdown from './userdropdown';
import CartDropdown from './cartdropdown';
import EmpressLogo from '../src/empress_logo.png';
import SearchDropdown from './searchdropdown';
import WishlistDropdown from './wishlistdropdown';
import { IoCallOutline } from 'react-icons/io5';

export default function Navbar() {
  const router1 = useRouter();
  const [scrolledIntro, setScrolledIntro] = useState(false);

  const navigateTo = (path: string) => {
    router1.push(path);
  };

  const handleScroll = () => {
    const introHeight = document.getElementById('introduction').offsetHeight;

    if (window.scrollY > introHeight) {
      setScrolledIntro(true);
    }
    else {
      setScrolledIntro(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])

  return (
    <div className={`py-2 transition-colors duration-300 ${scrolledIntro ? 'bg-blue-900 text-white' : 'bg-white text-black'}`}>
      <nav className="flex justify-between items-center px-4 h-[60px]">
        {/* Contact Us */}
        <div
          className="flex items-center cursor-pointer hover:bg-gray-200 py-2 rounded-full"
          onClick={() => navigateTo('/pages/contact')} // Navigate to the contact page
        >
          <IoCallOutline size={22} className='mx-2' />
        </div>

        {/* Empress Logo */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => navigateTo('/')}
        >
          <Image src={EmpressLogo} width={80} height={80} alt="Empress Logo" />
        </div>

        {/* Icons Section */}
        <div className="flex items-center text-xl space-x-10 mx-2">
          <SearchDropdown />
          <div
            className="cursor-pointer"
            onClick={() => navigateTo('/pages/wishlist')}
          >
            <WishlistDropdown />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => navigateTo('/pages/accounts')}
          >
            <UserDropdown />
          </div>
          <div
            className="cursor-pointer"
          >
            <CartDropdown />
          </div>
        </div>
      </nav>
    </div>
  );
}
