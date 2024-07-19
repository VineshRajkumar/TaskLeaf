import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from './Navbar2'
const Social = ({socialButton}) => {
    const [socialdecide, setsocialdecide] = useState(false)
    useEffect(() => {
        setsocialdecide(socialButton)
        
    }, [socialButton])
  return (
    <div className=' fixed top-0 left-0 w-full h-full overflow-y-auto'>
      {socialdecide && 
      <div className='max-w-sm my-8 h-[90VH] mx-auto bg-black text-white relative z-50 max-lg:h-[105vh] max-sm:h-[85vh] max-sm:overflow-y-auto '>
        <div >
        <p className='text-2xl font-bold flex justify-center py-6'>About TaskLeaf</p>
        <p className='pl-12 pr-7 text-base'>Welcome to TaskLeaf, where tasks bloom into achievements! TaskLeaf is your ultimate companion for organizing tasks, boosting productivity, and achieving your goals with ease.</p>
        </div>
        <div>
            <p className='text-2xl font-bold flex justify-center py-5'>Our Mission:</p>
            <p className='pl-12 pr-7 text-base'>At TaskLeaf, our mission is to empower individuals and teams to accomplish more every day. Whether you're a professional managing projects or a student organizing assignments, TaskLeaf is here to support your journey towards success.</p>
        </div>
        <div>
            <p className='text-2xl font-bold flex justify-center py-5'>Contact Us:</p>
            <p className='pl-12 pr-7 text-base'>Have questions or feedback? We'd love to hear from you! Contact our team at <span className='text-blue-500 cursor-pointer'>contact@taskleaf.com</span> or follow us on social media for updates.</p>

        </div>
        <div className='text-lg font-semibold px-12 py-3 ' >Thank you for choosing TaskLeaf!!</div>
        <div className='text-lg font-semibold px-20 max-[320px]:px-14 '>Built with ❤️ By Vinesh</div>
    </div>
      }
    </div>
  )
}

export default Social
