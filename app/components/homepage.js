'use client'
import React from "react";
import Image from "next/image";
import ProductImg from '../src/product.png'
import ProfilePic from '../src/profile-pic.png'
import LandingBg from '../src/landing_page_bg.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FiTarget } from "react-icons/fi";
import { CiFaceSmile } from "react-icons/ci";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuWrench } from "react-icons/lu";
import { BiStore } from "react-icons/bi";
import { IoHammerOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

export default function HomePage() {
    const products = [
        {id:1, name:'Product 1', image:ProductImg, desc:'Elegant handcrafted bracelet.'},
        {id:2, name:'Product 2', image:ProductImg, desc:'Elegant handcrafted bracelet.'},
        {id:3, name:'Product 3', image:ProductImg, desc:'Elegant handcrafted bracelet.'},
        {id:4, name:'Product 4', image:ProductImg, desc:'Elegant handcrafted bracelet.'}
    ]


    return(<div className="container mx-auto">
        {/* Introduction Container */}
        <div id="introduction" className="flex flex-col text-white text-xl bg-no-repeat bg-cover bg-center justify-start items-center w-dvh h-[91vh] bg-black/20 bg-blend-overlay"
        style={{
            backgroundImage: `url(${LandingBg.src})`,
          }}>
            <h1 className="mt-[150px] p-4 text-7xl font-bold tracking-widest">EMPRESS</h1>
            <p className="w-1/2 text-center">Welcome to Empress! Discover handcrafted bracelets that add timeless elegance to any look. Find your perfect piece today!</p>
            <button className="group mt-[200px] px-6 py-3 bg-yellow-400 font-semibold text-gray-50 transition duration-300 ease-in-out cursor-pointer flex items-center justify-center relative overflow-hidden z-40">
                <div className="text-xl px-2 tracking-wider flex items-center transform transition-transform duration-300 ease-in-out group-hover:-translate-x-6 group-hover:scale-90">
                    <p>
                        Browse Collections
                    </p>
                </div>
                <div className="flex items-center justify-center w-12 h-full absolute right-[0px] transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 bg-white text-yellow-400">
                    <FaArrowRight/>
                </div>
            </button>
        </div>

        {/* Products Container */}
        <div className="flex flex-col bg-white text-black text-xl w-dvh h-[85vh] p-8 mt-10">
            <div className="flex items-start justify-start text-5xl font-semibold">
                <h1>Products</h1>
            </div>
            <div className="flex justify-center items-center m-auto">
                <div className="flex flex-col justify-center items-start w-1/4 h-full p-4 m-2">
                    <h1 className="py-2 text-2xl font-semibold">Bracelet 1</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    <div className="group flex justify-center items-center w-fit my-1">
                        <button className="relative text-lg text-medium text-blue-500">
                                See More
                            <span className="absolute left-0 bottom-[2px] h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </button>
                    </div>
                </div>
                <div className="w-42">
                    <Image src={ProductImg} width={300} height={300} alt="Product Image" />
                </div>
            </div>

        </div>

        {/* About Us Container */}
        <div className="flex flex-col bg-white text-black text-xl w-dvh h-[85vh] p-8 ">
            <div className="flex items-start justify-start text-5xl font-semibold my-10">
                <h1>About Us</h1>
            </div>
            <div className="flex flex-col justify-center items-start ">
                <div className="flex">
                    <div className="flex flex-col justify-start items-start border border-black p-6 m-6">
                        <div className="text-yellow-300 my-2">
                            <FiTarget size={66}/>
                        </div>
                        <p className="text-3xl font-semibold mt-1  text-blue-900">
                            Quality
                        </p>
                        <p className="py-2 text-blue-400">
                        Lorem ipsum dolor sit amet consectetur. Quisque leo et fringilla commodo. Mus tristique sit faucibus quisque vulputate.
                        </p>
                    </div>
                    <div className="flex flex-col justify-start items-start border border-black p-6 m-6">
                        <div className="text-yellow-300 my-2">
                            <CiFaceSmile size={65}/>
                        </div>
                        <p className="text-3xl font-semibold mt-1 text-blue-900">
                            Cost Friendly
                        </p>
                        <p className="py-2 text-blue-400">
                        Lorem ipsum dolor sit amet consectetur. Quisque leo et fringilla commodo. Mus tristique sit faucibus quisque vulputate.
                        </p>
                    </div>
                    <div className="flex flex-col justify-start items-start border border-black p-6 m-6">
                        <div className="text-yellow-300 my-2">
                            <HiOutlineBolt size={65}/>
                        </div>
                        <p className="text-3xl text-blue-900 font-semibold mt-1">
                            Fast Delivery
                        </p>
                        <p className="py-2 text-blue-400">
                        Lorem ipsum dolor sit amet consectetur. Quisque leo et fringilla commodo. Mus tristique sit faucibus quisque vulputate.
                        </p>
                    </div>
                </div>
                <div className="flex p-4">
                <div className="flex flex-col justify-start items-start border border-black p-6 m-6">
                        <div className="text-yellow-300 my-2">
                            <LuWrench size={65}/>
                        </div>
                        <p className="text-3xl text-blue-900 font-semibold mt-1">
                            Build Your Own
                        </p>
                        <p className="py-2 text-blue-400">
                        Lorem ipsum dolor sit amet consectetur. Quisque leo et fringilla commodo. Mus tristique sit faucibus quisque vulputate.
                        </p>
                    </div>
                <div className="flex flex-col justify-start items-start border border-black p-6 m-6">
                        <div className="text-yellow-300 my-2">
                            <BiStore size={65}/>
                        </div>
                        <p className="text-3xl text-blue-900 font-semibold mt-1">
                            In Store Feeling
                        </p>
                        <p className="py-2 text-blue-400">
                        Lorem ipsum dolor sit amet consectetur. Quisque leo et fringilla commodo. Mus tristique sit faucibus quisque vulputate.
                        </p>
                    </div>
                <div className="flex flex-col justify-start items-start border border-black p-6 m-6">
                        <div className="text-yellow-300 my-2">
                            <IoHammerOutline size={65}/>
                        </div>
                        <p className="text-3xl text-blue-900 font-semibold mt-1">
                            Build Your Own
                        </p>
                        <p className="py-2 text-blue-400">
                        Lorem ipsum dolor sit amet consectetur. Quisque leo et fringilla commodo. Mus tristique sit faucibus quisque vulputate.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Reviews Container */}
        <div className="flex flex-col bg-white text-black text-xl w-dvh h-[85vh] p-8 mt-28">
            <div className="flex items-start justify-start text-5xl font-semibold my-10">
                <h1>What Our Customer says</h1>
            </div>
            <div className="flex flex-col w-full justify-center items-center cursor-pointer">
                <div className="flex justify-between px-auto">
                    
                    <div className="bg-gray-200 mx-3">
                        <div className="p-4 text-2xl font-semibold">
                            <p>"Lorem ipsum dor sit met consectetur. Sit leo nulla pulvinar non id."</p>
                        </div>
                        <div className="flex p-4 items-center">
                            <div className="px-3">
                                <Image src={ProfilePic} height={50} width={50} alt="User Profile Pic"/>
                            </div>
                            <div >
                                <p className="font-semibold text-gray-600">
                                    Alexa
                                </p>
                                <p className="text-gray-500">
                                    12 Jan, 2025
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 mx-3">
                        <div className="p-4 text-2xl font-semibold">
                            <p>"Lorem ipsum dor sit met consectetur. Sit leo nulla pulvinar non id."</p>
                        </div>
                        <div className="flex p-4 items-center">
                            <div className="px-3">
                                <Image src={ProfilePic} height={50} width={50} alt="User Profile Pic"/>
                            </div>
                            <div >
                                <p className="font-semibold text-gray-600">
                                    Alexa
                                </p>
                                <p className="text-gray-500">
                                    12 Jan, 2025
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 mx-3">
                        <div className="p-4 text-2xl font-semibold">
                            <p>"Lorem ipsum dor sit met consectetur. Sit leo nulla pulvinar non id."</p>
                        </div>
                        <div className="flex p-4 items-center">
                            <div className="px-3">
                                <Image src={ProfilePic} height={50} width={50} alt="User Profile Pic"/>
                            </div>
                            <div >
                                <p className="font-semibold text-gray-600">
                                    Alexa
                                </p>
                                <p className="text-gray-500">
                                    12 Jan, 2025
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 mx-3">
                        <div className="p-4 text-2xl font-semibold">
                            <p>"Lorem ipsum dor sit met consectetur. Sit leo nulla pulvinar non id."</p>
                        </div>
                        <div className="flex p-4 items-center">
                            <div className="px-3">
                                <Image src={ProfilePic} height={50} width={50} alt="User Profile Pic"/>
                            </div>
                            <div >
                                <p className="font-semibold text-gray-600">
                                    Alexa
                                </p>
                                <p className="text-gray-500">
                                    12 Jan, 2025
                                </p>
                            </div>
                        </div>
                    </div>

                    
                </div>

                <div className="flex my-10">
                <div className="bg-gray-200 mx-3">
                        <div className="p-4 text-2xl font-semibold">
                            <p>"Lorem ipsum dor sit met consectetur. Sit leo nulla pulvinar non id."</p>
                        </div>
                        <div className="flex p-4 items-center">
                            <div className="px-3">
                                <Image src={ProfilePic} height={50} width={50} alt="User Profile Pic"/>
                            </div>
                            <div >
                                <p className="font-semibold text-gray-600">
                                    Alexa
                                </p>
                                <p className="text-gray-500">
                                    12 Jan, 2025
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-200 mx-3">
                        <div className="p-4 text-2xl font-semibold">
                            <p>"Lorem ipsum dor sit met consectetur. Sit leo nulla pulvinar non id."</p>
                        </div>
                        <div className="flex p-4 items-center">
                            <div className="px-3">
                                <Image src={ProfilePic} height={50} width={50} alt="User Profile Pic"/>
                            </div>
                            <div >
                                <p className="font-semibold text-gray-600">
                                    Alexa
                                </p>
                                <p className="text-gray-500">
                                    12 Jan, 2025
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div>

        </div>
    </div>)
}