import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
function Motion() {
    const[name,setname]=useState("")
    const navigate=useNavigate()
    const handle=()=>{
        if(!name.trim()){
          alert("🚨 Please Enter Your Name! 😊");
        }
        else{
          navigate('/Chat',{state:{name}});
        
        }

       
    }
  return (
    <div className='min-h-screen bg-gradient-to-b from-sky-800 to-sky-200 text-white flex flex-col  justify-center items-center py-6'>
        <div className='flex items-center justify-center mb-4 animate-bounce '>
        <i className='text-6xl text-blue-400 '>
             <img src="Think-icon.webp" alt="" className='rounded-full h-24' />
        </i>
        </div>
        <div className='text-4xl font-bold text-center animate-slideIn '>Think BOT</div>
        <div className='text-lg text-center mt-2  mb-8 text-gray-300 animate-pulse'>Your AI-Powered conversational compaion </div>
        <input
  type="text"
  placeholder="Enter your Name"
  className="mb-6 mt-10  p-3 rounded-lg border-0 border-b-2 border-gray-300 bg-gray-50 text-gray-700 placeholder-gray-400 hover:border-b-indigo-500 focus:outline-none focus:border-b-indigo-500 transition-all"
  value={name}
    onChange={(e)=>setname(e.target.value)} 
/>

        <button className='bg-sky-400 text-white px-6 py-3 text-lg font-semibold rounded-xl shadow-lg hover:bg-sky-500 hover:scale-105 focus:ring-blue-300 focus:outline-none ' onClick={handle} >Start</button>
     
    </div>
  )
}

export default Motion
