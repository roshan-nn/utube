import React from 'react'

const ChatMessage = ({name, message}) => {
    console.log(name, "nam");
    console.log(message, "mess");
  return (
    <div className='flex items-center shadow-sm'>
        <img
        className='h-8'
        alt="user"
        src="https://yt4.ggpht.com/ytc/AIdro_mudJBOukNXf6EwU9s9qkSmrQeXVMInDb6nJZWhI4Ee75BBlCMMDWOLtD2fTJpyUniYrg=s32-c-k-c0x00ffffff-no-rj"
        />
        <span className='px-3 font-bold'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage