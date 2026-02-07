import React from 'react'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
  return (
    <div>WatchPage</div>
  )
}

export default WatchPage   