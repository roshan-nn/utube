import React from 'react'

const VideoCard = ({info}) => {
    if(!info) return null;
    console.log(info);
    const { snippet, statistics} = info;
    const { channelTitle, title, thumbnails} = snippet;

  return (
    <div className='p-2 m-2 shadow-lg w-72'>
        <img className='rounded-lg' alt="thumbnail" src= {thumbnails.medium.url}></img>
        <ul>
            <li className='py-2 font-bold '>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views </li>
        </ul>
    </div>
  )
}

export default VideoCard