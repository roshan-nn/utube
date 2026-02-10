import React from 'react'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
  return (
    <>
    <div className='flex flex-col'>
    <div>
       <iframe
        width="1200"
         height="600"
          src="https://www.youtube.com/embed/_ftGWxwvkfM?si=yjcFhvOLPpqo__n_"
           title="YouTube video player"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>

            </iframe>
    </div>
    <CommentsContainer />
    </div>
    </>
  )
}

export default WatchPage   