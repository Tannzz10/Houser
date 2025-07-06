import { useEffect, useState } from 'react';
import { projectsData, assets } from '../assets/assets';
// import left_arrow from '../assets/left_arrow.svg';
// import right_arrow from '../assets/right_arrow.svg';
export const Projects=()=>{
const [currentindex,setcurrentindex]= useState(0);
const [cardstoshow,setcardstoshow] = useState(1);
useEffect(()=>{
const updatecardtoshow=()=>{
    if(window.innerWidth>=1024){
        setcardstoshow(projectsData.length);
    }else{
        setcardstoshow(1)
    }
 };
    updatecardtoshow();
    window.addEventListener('resize', updatecardtoshow);
    return()=> window.removeEventListener('resize',updatecardtoshow);

},[])
const nextproject=()=>{
    setcurrentindex((previndex)=> (previndex+1)% projectsData.length)
}
const prevproject=()=>{
    setcurrentindex((previndex)=> previndex===0 ? projectsData.length -1:previndex-1)
}
    return(
        <div className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="Projects">
            <h1 className="text-2xl sm:text-4xl font-semibold mb-2 text-center">Projects <span className="underline underline-offset-4 decoration-2 under font-light">Completed</span></h1>
            <p className="text-center text-gray-700 mb-8 max-w-80 mx-auto">Building dreams into reality</p>
            {/* slider buttons */}
            <div className="flex justify-end items-center mb-8">
                <button onClick={prevproject} className='p-3 bg-gray-200 rounded mr-2'aria-label="previous  project">
                    <img src={assets.left_arrow} alt="previous" />
                </button>
                <button onClick={nextproject} className='p-3 bg-gray-200 rounded mr-2'aria-label="next project">
                    <img src={assets.right_arrow} alt="next" />
                </button>
            </div>
            {/* project slider container */}
            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform:`translateX(-${(currentindex*100)/cardstoshow}%)`}}>
                    {projectsData.map((project,index)=>(
                       <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                        <img src={project.image}alt={project.title} className='w-full h-auto mb-14'/>
                        <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                        <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                        <h2 className='text-xl font-semibold text-gray-700'>{project.title}</h2>
                        <p className='text-gray-500 text-sm'>
                            {project.price} <span className='px'></span> {project.location}
                        </p>

                        </div>
                        </div>
                       </div>
                    ))}
                </div>
            </div>
        </div>
    )
}