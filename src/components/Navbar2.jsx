import React from 'react'
import { useState,useEffect } from 'react'

const Navbar = ({photoUrl,onPhotoUrlChange, taskButton,socialButton }) => {
    const [colorblack, setcolorblack] = useState(null)
    const [fetchimage, setfetchimage] = useState(false)
    // const handleClick = (iconName) => {
    //     setcolorblack(iconName)
    // };
    const toggleClick = (iconName)=>{
      if(iconName==='priority'||iconName==='group'){
        setcolorblack(iconName);
        setfetchimage(false)
        if (iconName === 'priority') {
          taskButton(true);
        }
        else{
          taskButton(false)
        }
        if (iconName === 'group') {
          socialButton(true); 
        }
        else{
          socialButton(false); 
        }
      }
      else{
        
        setcolorblack((previcon)=> (previcon===iconName?null:iconName)) //if previcon===iconName this means if the previcon is again iconName (if i click once iconName ==iconName but if i click one more time then latest iconName is also iconName so the previcon will also be iconName thats why this will chnage to null then now if we again click previcon will not be iconName it will be null so it again changes to iconName like that )
        setfetchimage(!fetchimage);
      }
    };
    //if prev is iconName and if i swtich to task or social 
    
    const fetchrandomphoto=()=>{
      if(fetchimage){
      fetch(`https://api.unsplash.com/photos/random?query=nature&orientation=landscape&count=1&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`)
      .then(response=>{  //part of the code is written to handle errors that might occur during the HTTP request made 
        if(!response.ok){
          throw new Error('Network response was not ok')
        }
        return response.json();
      })
      .then(data=>{
        if(data && Array.isArray(data)&& data.length>0){//data checks if is zero or not then , Array.isArray(data) checks if it is a array or not and data.length>0 checks if at leat one value is coming 
          const newPhotoUrl = data[0].urls.raw;
          onPhotoUrlChange(newPhotoUrl);
        }
        else{
          console.log("No Photos Found")
        }  
      })
      .catch(error=>{
        console.log('Error Fetching Photos',error);
      })
    }
    };
    useEffect(() => {
      fetchrandomphoto();
    }, [fetchimage])
    
    
  return (
    <div>
  {/* <!-- Desktop Navbar --> */}
  <div className="container mx-4 fixed top-20 z-50 max-sm:hidden">
    <div className="box bg-slate-50 border border-gray-300 border-opacity-50 rounded-2xl flex flex-col shadow-md z-50 h-[50vh] justify-start items-center pt-10 gap-y-[5vh] my-7 w-full max-w-48 max-lg:max-w-16">
      
      <div className={`flex items-center justify-evenly cursor-pointer font-bold text-xl hover:bg-gray-200 border-2 rounded-2xl hover:rounded-2xl hover:w-fit hover:px-6 hover:py-3 px-6 py-3 max-lg:max-w-14 max-lg:px-3 max-lg:hover:px-3 ${colorblack==='priority'?'bg-black text-white hover:bg-gray-900 cursor-pointer':''}`} onClick={()=>{toggleClick('priority'); }}>
        <span class="material-symbols-outlined text-4xl max-lg:text-3xl">priority</span>
        <span className=' ml-2 max-lg:hidden'>TASKS</span>
      </div>

      <div className={`flex items-center justify-evenly cursor-pointer font-bold text-xl hover:bg-gray-200 border-2 rounded-2xl hover:rounded-2xl hover:w-fit hover:px-4 hover:py-3 px-4 py-3 max-lg:max-w-14 max-lg:px-[1px] max-lg:hover:px-[1px] ${colorblack==='hide_image'?'bg-black text-white hover:bg-gray-900 cursor-pointer ':''}`} onClick={()=>{toggleClick('hide_image')}}>
        <span className="material-symbols-outlined text-4xl px-2 max-lg:text-3xl">{colorblack === 'hide_image' ? 'imagesmode' : 'hide_image'}</span>
        <span className='max-lg:hidden'>IMAGE</span>
      </div>

      <div className={`flex items-center justify-evenly cursor-pointer font-bold text-xl hover:bg-gray-200 border-2 rounded-2xl hover:rounded-2xl hover:w-fit hover:px-4 hover:py-3 px-4 py-3 max-lg:max-w-14 max-lg:px-[1px] max-lg:hover:px-[1px] ${colorblack==='group'?'bg-black text-white hover:bg-gray-900 cursor-pointer':''}`} onClick={()=>{toggleClick('group'); }}>
        <span class="material-symbols-outlined text-4xl px-3 max-lg:text-3xl">group</span>
        <span className='-ml-1 max-lg:hidden'>ABOUT</span>
      </div>
      
    </div>
  </div>

  {/* <!-- Mobile Navbar --> */}
  <div className="container left-20 fixed bottom-0 z-50 w-[40vh] max-sm:block hidden max-[375px]:fixed max-[375px]:left-11 max-[320px]:left-8 ">
    <div className="box bg-slate-50 border border-gray-300 border-opacity-50 rounded-2xl flex justify-around shadow-md z-50 h-10 items-center py-2 w-full">
      
      <div className={`flex items-center justify-center cursor-pointer font-bold text-xl hover:bg-gray-200 border-2 rounded-2xl hover:rounded-2xl hover:w-fit px-4 py-2 max-sm:max-w-14 max-sm:h-10 ${colorblack==='priority'?'bg-black text-white hover:bg-gray-900 cursor-pointer':''}`} onClick={()=>{toggleClick('priority'); }}>
        <span class="material-symbols-outlined text-3xl">priority</span>
      </div>

      <div className={`flex items-center justify-center cursor-pointer font-bold text-xl hover:bg-gray-200 border-2 rounded-2xl hover:rounded-2xl hover:w-fit px-4 py-2 max-sm:max-w-14 max-sm:h-10  ${colorblack==='hide_image'?'bg-black text-white hover:bg-gray-900 cursor-pointer ':''}`} onClick={()=>{toggleClick('hide_image')}}>
        <span className="material-symbols-outlined text-3xl">{colorblack === 'hide_image' ? 'imagesmode' : 'hide_image'}</span>
      </div>

      <div className={`flex items-center justify-center cursor-pointer font-bold text-xl hover:bg-gray-200 border-2 rounded-2xl hover:rounded-2xl hover:w-fit px-4  max-sm:max-w-14 max-sm:h-10  ${colorblack==='group'?'bg-black text-white hover:bg-gray-900 cursor-pointer':''}`} onClick={()=>{toggleClick('group'); }}>
        <span class="material-symbols-outlined text-3xl">group</span>
      </div>
      
    </div>
  </div>
</div>

  )
}

export default Navbar