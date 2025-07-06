import logo from '../assets/logo.svg';
import menu_icon from '../assets/menu_icon.svg';
import cross_icon from '../assets/cross_icon.svg'
import { useEffect, useState } from 'react';
export const Navbar = () => {
  const [showmobilemenu,setmobilemenu]=useState(false)
  useEffect(()=>{
   if(showmobilemenu){
    document.body.style.overflow='hidden'
   }
   else{
    document.body.style.overflow='auto'
   }
   return ()=>{
    document.body.style.overflow='auto'
   };
  },[showmobilemenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
          <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
          <a href="#Testimonals" className='cursor-pointer hover:text-gray-400'>Testimonals</a>
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Login</button>
        <img onClick={()=>setmobilemenu(true)} src={menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
      </div>
      {/* mobile menu */}
     <div className={
      `md:hidden ${showmobilemenu ? 'fixed w-full':'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`
     }>
      <div className='flex justify-end p-6 cursor-pointer'>
        <img  onClick={()=>setmobilemenu(false)} src={cross_icon} className='w-6' alt="" />
      </div>
       <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
        <a onClick={()=>setmobilemenu(false)}  href="Home" className='px-4 py-2 rounded-full inline-block'>Home</a>
         <a onClick={()=>setmobilemenu(false)}  href="About" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={()=>setmobilemenu(false)}  href="Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
           <a onClick={()=>setmobilemenu(false)}  href="Testimonals" className='px-4 py-2 rounded-full inline-block'>Testimonals</a>
      </ul>
     </div>
    </div>
  )
}
