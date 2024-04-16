import React from 'react';

export function Navbar() {
    return (
        <div className="fixed z-50 w-screen flex justify-between items-center h-20">
            <a className="z-10" href="#">
                <div className="text-2xl z-10 text-stone-300">
                    <div className='z-10 flex gap-2 pl-4'>Pranav<div className='text-purple-500'> Kumar Singh</div></div>
                </div>
            </a>
            <div className="flex gap-8 items-center text-stone-400 z-10 pr-16 text-xl">
                <a href="#home"><div className=" hover:text-white underline-animation z-10">Home</div></a>
                <a href="#about"><div className="hover:text-white underline-animation z-10">About</div></a>
                <a href="#skills"> <div className="hover:text-white underline-animation z-10">Skills</div></a>
                <a href="#projects"><div className="hover:text-white underline-animation z-10">Projects</div></a>
            </div>

        </div>
    )
}