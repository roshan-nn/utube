import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch } from 'react-redux';
import { addMessage } from './Utils/chatSlice';

const LiveChat = () => {
 const dispatch = useDispatch();

   const ChatMessages = use
    useEffect(() => {
      const i=  setInterval(() => {
       
        console.log("API Polling");

        dispatch(
            addMessage({
            name: "Akshay Saini",
            message: "Lorem Ipsum Dolor"
        })
    )
      }, 2000)

        return () => clearInterval(i);
    }, []);
  return (
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100'>
      <ChatMessage
       name="Akshay saini"
        message="This is namaste React Live" 
      />
       <ChatMessage
        name="tom"
         message="This is namaste React Live" 
         />
        <ChatMessage 
        name="ben"
         message="This is namaste React Live" 
         />

         <ChatMessage
          name="ann"
           message="This is namaste React Live"
            />
    </div>

    
  )
}

export default LiveChat