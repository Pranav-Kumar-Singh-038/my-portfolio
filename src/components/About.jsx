export function About() {
    return (
        <div className="transition-all duration-500 ease-in-out bg-stone-900 flex flex-col justify-center pt-24 pb-8" id='about'>
            <div className='z-10 flex justify-center text-5xl gap-2 text-white pb-8'>About<div className='text-purple-500'> Me</div></div>
            <p className="transition-all duration-500 ease-in-out text-lg  text-stone-300 text-center mx-auto w-11/12 sm:w-3/4 md:w-1/2 lg:w-2/5">I began my programming adventure during my academic years. Initially, making a 2-D platformer game piqued my interest, which led me to delve deeply into JavaScript. This experience helped me craft numerous dynamic applications, continuously honing my abilities and fostering a true passion for coding.
                <br></br>
                <br></br>
                Over time, I evolved from focusing solely on frontend development to becoming passionate about full-stack development, first immersing myself in React before delving into the complexities of the MERN stack (MongoDB, Express.js, React, Node.js). While not coding, I enjoy reading books and spending quality time with family and friends. 
                <br></br>
                <br></br>
                Currently, I am learning Next.js, TypeScript, and exploring Docker. This perfectly aligns with my dedication to continuous learning and keeping abreast of the rapidly changing programming landscape.
            </p>
        </div>
    )
}