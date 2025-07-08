import { motion } from "motion/react"
export const Header=()=>{
    return(
        <div className="min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden" style={{backgroundImage:"url('/header_img.png')"}} id="Header">
            <motion.div initial={{opacity:0,y:100}} transition={{duration:1.5}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
                <h2 className="text-0.5xl sm:text-8xl md:text-[60px] inline-block max-w-1xl font-semibold pt-20">Explore homes that aligns your dream and budget</h2>
                <div className="space-x-5 mt-16">
                    <a href="#Predict" className="border border-white px-8 py-3 rounded">Predict</a>
                    <a href="#Contact" className="bg-blue-400 px-8 py-3 rounded">Contact us</a>
                </div>
            </motion.div>
        </div>
    )
}