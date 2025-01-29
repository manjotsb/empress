'use client'
import { useState, useEffect } from "react"
import { Ring } from "@uiball/loaders";
import Image from "next/image";
import Logo from '../src/empress_logo.png'

export default function Loading() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.body.style.overflow='hidden';

        const timer= setTimeout(() =>{
            setLoading(false);
            document.body.style.overflow='';
        },3000);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow='';
        }
    },[])

    if (!loading) return null;

    return(
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-black/95 z-50">
            <div className="relative w-[150px] h-[150px] flex items-center justify-center">
                <Image src={Logo} width={80} height={80} alt="Logo" className="animate-pulse mb-2"/>
                <div className="absolute w-full h-full flex items-center justify-center">
                    <Ring size={140} lineWeight={2} speed={2} color="#f7c942"/>
                </div>
            </div>
        </div>
    )
}