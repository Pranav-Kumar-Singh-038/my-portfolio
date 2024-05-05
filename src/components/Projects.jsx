import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const container = {
        hidden: { opacity: 0, scale: 1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    const projectData = [
        {
            id: 1,
            name: "Fight",
            description: "Fight game I made using vanilla javascript",
            imageUrl: "https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713273907/Screenshot_from_2024-04-16_18-50-08_c7ktjx.png",
            source: "https://github.com/Pranav-Kumar-Singh-038/Fight",
            demo: "https://fight-pranavkumarsingh.netlify.app/"
        },
        {
            id: 2,
            name: "Frontend Dukan",
            description: "Frontend implementation of the UI design shared by Dukan Company's CTO",
            imageUrl: "https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713273907/Screenshot_from_2024-04-16_18-50-52_zjsq5u.png",
            source: "https://github.com/Pranav-Kumar-Singh-038/dukan-app-ui?tab=readme-ov-file",
            demo: "https://dukan-app-ui.netlify.app/"
        },
        {
            id: 3,
            name: "Commercial Portfolio",
            description: "A Portfolio for business and service providers built using react. ",
            imageUrl: "https://res.cloudinary.com/dxwlsrgwj/image/upload/v1714910804/Screenshot_from_2024-05-05_17-36-14_uoo8n6.png",
            source: "https://github.com/Pranav-Kumar-Singh-038/react-portfolio",
            demo: "https://main--commercial-portfolio.netlify.app/"
        },
        {
            id: 4,
            name: "My Portfolio",
            description: "My Portfolio I made using react.",
            imageUrl: "https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713274940/Screenshot_from_2024-04-16_19-12-05_t8zrlv.png",
            source: "https://github.com/Pranav-Kumar-Singh-038/my-portfolio",
            demo: "https://pranav-kumar-singh.netlify.app/"
        },
    ];

    return (
        <div className="bg-stone-900 w-full h-screen pt-24 " id="projects">
            <div className='z-10 flex w-full justify-center text-5xl gap-2 mb-12 text-white'>My<div className='text-purple-500'> Projects</div></div>
            <motion.div ref={ref} variants={container} initial="hidden" animate={isInView ? "visible" : "hidden"} className="bg-stone-900 flex flex-wrap justify-center items-start px-6 sm:px-12 md:px-24 lg:px-48 xl:px-72 overflow-auto w-full">
                {projectData.map(project => (
                    <motion.div key={project.id} variants={item}  className="flex flex-col z-10 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/2 p-4">
                        <div className="bg-stone-800 hover:bg-stone-700 text-white  p-2 rounded-lg shadow-lg">
                            <img src={project.imageUrl} alt={project.name} className="w-full h-48 object-cover rounded transition-all duration-300 ease-in-out lg:hover:h-64" />
                            <h3 className="text-lg font-bold mt-2">{project.name}</h3>
                            <div className="flex justify-between pr-4">
                                <p className="text-stone-400">{project.description}</p>
                                <div className="flex justify-around gap-2 ">
                                    <a href={project.source} className="hover:text-blue-500">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>
                                    </a>
                                    <a href={project.demo} className="hover:text-blue-500">
                                        <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z" fill="currentColor"></path><path d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z" fill="currentColor"></path><path d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z" fill="currentColor"></path><path d="M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z" fill="currentColor"></path></svg>
                                    </a>
                                </div>

                            </div>

                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
