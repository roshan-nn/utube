import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button name="Music" />
        <Button name="Live"/>
        <Button name="sports"/>
         <Button name="News"/>
          <Button name="Cooking"/>
           <Button name="World"/>
           <Button name ="God"/>

    </div>
  )
}

export default ButtonList