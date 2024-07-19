import React from 'react';
import { useState,useEffect } from 'react';
const Image = ({ photoUrl }) => {
  const [load, setload] = useState(false)
  const [nextphoto, setnextphoto] = useState(null)

  useEffect(() => {
    if(nextphoto){ //if nextphoto comes then 
      const img = new Image()
      img.src=nextphoto;   //in img.src put that nextphoto 
      setload(false)   
      setphotoUrl(nextphoto) //previous photo triggering next photo
    }
  }, [nextphoto]);

  const setphotoUrl=(url)=>{
    setload(false) //loading the next photo
    setnextphoto(url)  //url is nextphoto
  }
  return (
    <div>
     
      {photoUrl && (
         <>
        <img src={photoUrl} alt="Random Nature Photos" className={`w-screen h-screen z-0 object-cover fixed inset-0 transition-opacity duration-1000 ${load?'opacity-100':'opacity-0 '}`} onLoad={()=>setload(true)}/>
        {!load&&(
          <div className="flex justify-center z-50 fixed  top-0 bg-black text-white w-20 ">Loading...</div>
        )}
        
        </>
      )}
      
    </div>
  );
};

export default Image;

