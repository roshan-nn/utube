import React from 'react'
import Sidebar from './Sidebar'

import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex w-full'>
      <div className='w-[20%] '>
         <Sidebar />
      </div>
         <div className='w-[80%]'>
           <Outlet/>
         </div>
   
   
     
    </div>
  )
}

export default Body