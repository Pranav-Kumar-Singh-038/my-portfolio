import React from 'react';

export function Navbar() {
    return (
        <div className="absolute z-10 w-screen flex justify-between items-center bg-stone-700 h-20 px-6">
            <a className="z-10" href="#">
                <div className="text-2xl z-10 text-stone-300">
                    <div className='z-10 flex gap-2'>Pranav<div className='text-purple-500'> Kumar Singh</div></div>
                </div>
            </a>
            <div className="flex gap-8 items-center text-stone-400 z-10">
                <a href="#"><div className=" hover:text-white underline-animation z-10">Home</div></a>
                <a href="#"><div className="hover:text-white underline-animation z-10">About</div></a>
                {/* <a href="#about"><div className="hover:text-white underline-animation z-10">Experience</div></a> */}
                <a href="#"> <div className="hover:text-white underline-animation z-10">Skills</div></a>
                <a href="#"><div className="hover:text-white underline-animation z-10">Projects</div></a>
                <a href="#"><div className="hover:text-white underline-animation z-10">Education</div></a>
                {/* <a href="#"><div className="hover:text-white underline-animation z-10">Contact</div></a> */}
            </div>

        </div>
    )
}