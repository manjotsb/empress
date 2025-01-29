import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import EmpressLogo from '../src/empress_logo.png';
import Image from "next/image";


export default function Footer() {
    return(
        <div className="flex flex-row bg-blue-900 text-yellow-400 p-4 pb-[120px]">
            {/* Links Section  */}
            <div className="flex flex-col">
                <div className="w-15 m-2">
                    <Image src={EmpressLogo} width={70} height={70} alt="Empress Logo"/>
                </div>
                <div className="mx-4 py-2 cursor-pointer">
                    <button className="transition delay-150 duration-300 ease-in-out hover:scale-125">
                        <FaXTwitter size={25} />
                    </button>
                    <button className="transition delay-150 duration-300 ease-in-out hover:scale-125">
                        <FaInstagram size={25} className="mx-2.5"/>
                    </button>
                    <button className="transition delay-75 duration-200 ease-in-out hover:scale-125">
                        <FaYoutube size={25} className="mr-2.5"/>
                    </button>
                    <button className="transition delay-150 duration-300 ease-in-out hover:scale-125">
                        <FaLinkedin size={25} className="mr-2.5"/>
                    </button>
                </div>
            </div>

            {/* Use Cases Section  */}
            <div className="flex flex-col mx-20">
                <div className="py-4 font-semibold cursor-pointer">
                    Use Cases
                </div>
                <div className="flex flex-col cursor-pointer">
                    <p className="py-1">UI Design</p>
                    <p className="py-1">UX Design</p>
                    <p className="py-1">Wireframing</p>
                    <p className="py-1">Diagramming</p>
                    <p className="py-1">Brainstorming</p>
                    <p className="py-1">Online Whiteboard</p>
                    <p className="py-1">Team collaboration</p>
                </div>
            </div>

            {/* Use Cases Section  */}
            <div className="flex flex-col mx-10">
                <div className="py-4 font-semibold cursor-pointer">
                    Explore
                </div>
                <div className="flex flex-col cursor-pointer">
                    <p className="py-1">Design</p>
                    <p className="py-1">Prototyping</p>
                    <p className="py-1">Development features</p>
                    <p className="py-1">Design systems</p>
                    <p className="py-1">Collaboration features</p>
                    <p className="py-1">Design process</p>
                    <p className="py-1">FigJam</p>
                </div>
            </div>

            {/* Resources Section  */}
            <div className="flex flex-col mx-10 cursor-pointer">
                <div className="py-4 font-semibold ">
                    Resources
                </div>
                <div className="flex flex-col">
                    <p className="py-1">Blog</p>
                    <p className="py-1">Best practices</p>
                    <p className="py-1">Colors</p>
                    <p className="py-1">Color wheel</p>
                    <p className="py-1">Support</p>
                    <p className="py-1">Developers</p>
                    <p className="py-1">Resources binary</p>
                </div>
            </div>
        </div>
    )
}