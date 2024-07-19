import React from 'react'

const Navbar = () => {
  return (
    <div >
      <div className="container mx-4 z-50 fixed top-0 ">
        <div className="box bg-slate-50 border border-gray-300 border-opacity-50 rounded-2xl flex justify-start items-center  h-16 my-7 w-full max-w-48  shadow-md z-50 max-lg:max-w-16 max-sm:max-w-10 max-sm:h-11 max-sm:fixed max-sm:top-0 max-sm:left-0 max-[426px]:hidden">
          <div className='flex items-center '>
            <button className='logo p-1 ml-1  hover:bg-gray-200 hover:rounded-2xl hover:w-fit ' >
              <img src='https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3521676-2945120.png?f=webp' className='w-10 '></img> 
            </button>
          </div>
          <div className='font-bold text-xl mx-2 hover:bg-gray-200 hover:rounded-2xl hover:w-fit hover:p-3 hover:-mx-1 max-lg:hidden '>Task Leaf</div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
