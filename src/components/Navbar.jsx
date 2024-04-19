import React, { useState, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

        const isSmallScreen = () => window.innerWidth < 768; 

        useLayoutEffect(() => {
            function updateSize() {
                if (!isSmallScreen()) {
                    setIsOpen(false); 
                }
            }
            window.addEventListener('resize', updateSize);
            updateSize();
        }, []);

    const menuVariants = {
        open: { opacity: 1, height: "auto" },
        closed: { opacity: 0, height: 0 }
    };

    return (
        <div className="fixed z-50 w-screen bg-stone-900 flex justify-between items-center h-20 transition-all duration-500 ease-in-out">
            <div className="flex items-center justify-between w-full px-4 md:px-8">
                <a className="z-10" href="#">
                    <div className="text-xl md:text-2xl lg:text-4xl z-10 text-stone-300 transition-all duration-500 ease-in-out">
                        <div className='z-10 flex gap-2 md:pl-2 lg:pl-4 transition-all duration-500 ease-in-out'>Pranav<div className='text-purple-500'> Kumar Singh</div></div>
                    </div>
                </a>
                <div className="md:hidden lg:hidden z-20">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg className="w-8 h-8 text-stone-200" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="flex flex-col bg-stone-900 absolute top-full w-full left-0 z-10 p-4"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <a href="#home" className="text-stone-300 hover:text-white underline-animation mb-2">Home</a>
                        <a href="#about" className="text-stone-300 hover:text-white underline-animation mb-2">About</a>
                        <a href="#skills" className="text-stone-300 hover:text-white underline-animation mb-2">Skills</a>
                        <a href="#projects" className="text-stone-300 hover:text-white underline-animation">Projects</a>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="hidden md:flex gap-2 md:gap-6 lg:gap-8 items-center text-stone-200 z-10 pr-4 md:pr-8 lg:pr-16 text-xl transition-all duration-500 ease-in-out">
                <a href="#home"><div className="hover:text-white underline-animation z-10">Home</div></a>
                <a href="#about"><div className="hover:text-white underline-animation z-10">About</div></a>
                <a href="#skills"> <div className="hover:text-white underline-animation z-10">Skills</div></a>
                <a href="#projects"><div className="hover:text-white underline-animation z-10">Projects</div></a>
            </div>
        </div>
    );
}
