import React from 'react'
import { useSelector } from 'react-redux'


const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    console.log(isMenuOpen)
  return (
    <div className='flex-col items-center justify-center p-5'>
        {
            isMenuOpen?(
                
                <div className='col-span-1'>
        <h1 className='pt-10 font-bold'>Subscriptions</h1>
        <ul>
            <li> Sports </li>
            <li> Music </li>
            <li> Videos </li>
        </ul>
        
        <h2 className='pt-2 font-bold'> Watch Later </h2>
        <ul>
            <li> Music </li>
            <li> Trending </li>
            <li> Sports </li>
            
            </ul>
            
             <h2 className='pt-2 font-bold'> Saved videos </h2>
        <ul>
            <li> Music </li>
            <li> Trending </li>
            <li> Sports </li>
            
            </ul>
            
            
    </div>
            ):(
                null
            )
        }
   
    </div>
  )
}

export default Sidebar