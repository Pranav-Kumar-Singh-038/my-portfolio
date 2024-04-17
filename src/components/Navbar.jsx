import React from 'react';

export function Navbar() {
    return (
        <div className="fixed z-50 w-screen bg-stone-900 flex justify-between items-center h-20 transition-all duration-500 ease-in-out">
            <a className="z-10" href="#">
                <div className="text-xl md:text-2xl lg:text-4xl z-10 text-stone-300 transition-all duration-500 ease-in-out">
                    <div className='z-10 flex gap-2 md:pl-2 lg:pl-4 transition-all duration-500 ease-in-out'>Pranav<div className='text-purple-500'> Kumar Singh</div></div>
                </div>
            </a>
            <div className="flex gap-2 md:gap-6 lg:gap-8 items-center text-stone-200 z-10 pr-4 md:pr-8 lg:pr-16 text-xl transition-all duration-500 ease-in-out">
                <a href="#home"><div className=" hover:text-white underline-animation z-10">Home</div></a>
                <a href="#about"><div className="hover:text-white underline-animation z-10">About</div></a>
                <a href="#skills"> <div className="hover:text-white underline-animation z-10">Skills</div></a>
                <a href="#projects"><div className="hover:text-white underline-animation z-10">Projects</div></a>
            </div>

        </div>
    )
}