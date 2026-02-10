import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from './Utils/appSlice';

const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
  return (
    <div className='grid grid-flow-col p-5 pt-3 m-2 shadow-md shadow-slate-400'>  
    <div className='flex justify-around col-span-1 w-[20%]'>
        <img 
        onClick={() => toggleMenuHandler()}
        className='w-10 cursor-pointer' src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png'/>
    </div>  
    <div className='pt-3 object-fit: contain w-30%]'>
        <a href='/'>
        <img className='w-32 h-20' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnEXQdAa-3ljX26kSoD1zDIGZnVP6Wyy4wJg&s'/>
        </a>
    </div>
    <div className='col-span-10  w-[50%] justify-items-center justify-center'>
        <input className='w-[90%]' type='text' />
        <button>Search</button>
        </div>
   <div className='col-span-1 p-5 m-2 w-[10%]'>
     <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-Gh6uC11b9BUzfJ1OAuC3MgwwQdOLZL7PA&s"/>

    </div>
    </div>
        
  )
}

export default Head;