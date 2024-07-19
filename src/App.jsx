import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Image from './components/Image'
import Tasks from './components/Tasks'
import Social from './components/Social'
function App() {

  const [photoUrl, setphotoUrl] = useState(null)
  const [task, setTask] = useState(false)
  const [social, setsocial] = useState(false)
  const handlePhototUrlChange=(newPhotoUrl)=>{
    setphotoUrl(newPhotoUrl);
  }
  const handletaskchange=(status)=>{
    setTask(status)
  }
  const handleSocialchange=(status)=>{
    setsocial(status)
  }
  return (
    <>
    
    <Navbar/>
    <Navbar2 photoUrl={photoUrl} onPhotoUrlChange={handlePhototUrlChange} taskButton={handletaskchange} socialButton={handleSocialchange}/>
    <div className=''>
      <Image photoUrl={photoUrl}/>
      <Tasks taskButton={task}/>
      <Social socialButton={social}/>
      {(!task && !social) && (
      <div className="flex flex-col justify-center items-center h-screen   ">
      <img src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D' className='-z-30 object-cover w-screen h-screen' />
      
      <div className='text-5xl font-serif font-sem pb-36 -z-10 fixed text-white bg-black pr-11 pl-8 pt-5 max-sm:text-3xl max-[320px]:text-xl '>Welcome to TaskLeaf</div>
      <div className='text-sm -z-10 fixed text-white bottom-80 max-[320px]:text-[10px] '>🌟 Click on Tasks: To get started organizing your tasks.</div>
      <div className='text-sm -z-10  text-white fixed bottom-72 max-[320px]:text-[10px]'>🌟 Click on Image: Change the background images.</div>
      
      </div>
      )}
    </div>

    
    


    </>
  )
}

export default App
