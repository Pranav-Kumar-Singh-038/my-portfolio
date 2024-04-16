import React from 'react';
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
    { name: 'HTML', icon: 'https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713260000/html-1_zeffre.svg' },
    { name: 'CSS', icon: 'https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713261949/css-3_ghvp4z.svg' },
    { name: 'JavaScript', icon: 'https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713261949/javascript-1_hedlhb.svg' },
    { name: 'TypeScript', icon: 'https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713261949/typescript_i70qww.svg' },
    { name: 'React', icon: 'https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713261950/react-1_yql9yu.svg' },
    { name: 'Next.js', icon: 'https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713261950/next-js_xomgjh.svg' },
    { name: 'Node.js', icon: 'https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713262892/nodejs-icon_mzmmye.svg' },
    { name: 'Git', icon: 'https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713261950/git-icon_moed39.svg' },
    { name: 'Tailwind', icon: 'https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713261951/tailwind-css-2_y94twq.svg' },
    { name: 'MongoDB', icon: 'https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713261950/mongodb-icon-1_gjbayy.svg' },
    { name: 'Redux', icon: 'https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713261951/redux_rgxodg.svg' },
    { name: 'Recoil', icon: 'https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713261956/recoil-js_p6votu.svg' },
    { name: 'Express', icon: 'https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713262892/expressjs-ar21_itah3o.svg' },
    { name: 'Framer Motion', icon: 'https://res.cloudinary.com/dxwlsrgwj/image/upload/v1713261957/framer-motion_codp6g.svg' }
];

const SkillCard = ({ skill }) => (
    <div className="px-4 pt-2 bg-stone-800 rounded-lg shadow-lg z-10">
        <img src={skill.icon} className='flex justify-center h-8 w-full'></img>
        <h5 className=" flex justify-center mb-2 mt-2 text-l tracking-tight text-stone-400">{skill.name}</h5>
    </div>
);

const SkillsComponent = () => {

    const ref = useRef(null)
    const isInView = useInView(ref)

    const transition = {
        duration: 0.05,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
            type: "tween",
            damping: 8,
            stiffness: 100,
            restDelta: 0.001
        }
    }


    return (
        <div className=" bg-stone-900 px-96 pb-16 ">
            <div className='z-10 flex w-full justify-center text-5xl gap-2 mb-16 text-white'>My<div className='text-purple-500'> Skills</div></div>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={transition}
                className="grid grid-cols-7 bg-stone-900 gap-4"
            >
                {skills.map(skill => (
                    <SkillCard key={skill.name} skill={skill} />
                ))}
            </motion.div>

        </div>
    );
};

export default SkillsComponent;
