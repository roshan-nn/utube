import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from './Utils/chatSlice';
import { generateRandomName } from './Utils/helper';

const LiveChat = () => {
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Lorem Ipsum Dolor",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, [dispatch]); // ✅ FIX HERE

  return (
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 overflow-y-scroll'>
      {ChatMessages.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
