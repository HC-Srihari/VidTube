import React from 'react'

function VideoPlayer({videoId}) {
  return (
    <div className='w-full text-sm'>
      <iframe className='w-full rounded-xl h-48 sm:h-[400px]' src={`https://www.youtube.com/embed/${videoId}?si=ilyNJDdp1Mp7SKnm&autoplay=1&showinfo=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

    </div>
  )
}

export default VideoPlayer
