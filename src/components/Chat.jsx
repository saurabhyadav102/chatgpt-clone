import React, {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import run from '../config/Api';
import ReactMarkdown from 'react-markdown';
import CopyTextToClipboard from './Copy';
function Chat() {
  const location=useLocation();
  const[message,setmessage]=useState([]);
  const [input,setinput]=useState("");
  const {name="buddy"}=location.state||{};
  useEffect(()=>{
      const welcomemessage={
          id:new Date(),
          role:"bot",
          content:`Hi ${name} ! I'm Thinkbot. how can I assist you today?`,
      };
      setmessage([welcomemessage]);
      
  },[])
  const handle=async()=>{
    if(!input.trim())return;
    const usermessage={ id:new Date(),role:'user',content:input};

    setmessage(premsg=>[...premsg,usermessage]);
    setinput("");
    try {
      const response =await run(input);
      const botmessage={id:new Date(),role:'bot',content:response}
      setmessage(premsg=>[...premsg,botmessage]);
    }
    catch(error){
      console.log("error fetching response :" ,error);
      const errorMessage = {
        id: new Date(),
        role: "bot",
        content: "Oops! Something went wrong. Please try again.",
      };
      setmessage((prevMessages) => [...prevMessages, errorMessage]);
    }
    }
  
  return (
    <div className='h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex '>
        <div className='h-screen w-2/12 border-gray-600 p-5 bg-gray-900 shadow-gray-800'></div>
        <div className='h-screen w-10/12 border-gray-600 flex items-center justify-center flex-col'>
        <div className="h-8/10 w-9/10 bg-gray-900 shadow-xl rounded-2xl  font-sans p-5  break-words whitespace-normal overflow-y-scroll custom-scrollbar">
      
        {
  message.map((msg) => (
    <div
      key={msg.id}
      className={`p-3 mb-2 rounded-lg ${
        msg.role === "bot"
          ? "bg-gray-700 text-white text-left overflow-auto"
          : "bg-gray-800  text-sky-300 text-right  text-xl"
      }`}
    >
      {msg.role === "bot" ? (
       <div className=" flex items-center justify-between p-1 rounded-md">
       
       <img src="bots.webp" className="h-8 rounded-full" alt="Bot" />
       
      
       <img 
         src="copy.png" 
         alt="Copy" 
         className="h-6 w-6 opacity-0 hover:opacity-100 transition-opacity duration-500 cursor-pointer hover:scale-105" 

         onClick={()=>{CopyTextToClipboard(msg.content)
          }
         }
       />
     </div>
        
      ) : (
        <img src="user.png" className="h-8" alt="User" />
      )}
      <ReactMarkdown>{msg.content}</ReactMarkdown>
    </div>
  ))
}
 
         </div>


           <div className="h-16 w-11/12 border-2 border-gray-800 mt-4 flex items-center rounded-lg overflow-hidden ">

  <input
    type="text"
    placeholder="Ask your question"
    className="flex-grow px-4 py-2 text-white border-none focus:outline-none"
    value={input}
    onChange={(e)=>setinput(e.target.value)}
  />
  
  <button onClick={handle}
  className="bg-gray-800 text-white px-4 py-2 rounded-2xl font-medium hover:bg-gray-900 focus:outline-none mr-2">
    Send
  </button>
</div>

           

        </div>
    </div>
  )
}

export default Chat
