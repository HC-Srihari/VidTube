import React, { useEffect } from 'react'
import VideoPlayer from './VideoPlayer'
import VideoDescription from './VideoDescription'
import Comments from './Comments'
import SuggestedVideos from './SuggestedVideos'
import { useParams } from 'react-router-dom'
import SideBar from './SideBar'
import { useDispatch } from 'react-redux'
import { setToggleFalse } from '../store/toggleSlice'

function VideoDisplayPage() {
    const {id} = useParams();
    const dispatch = useDispatch()
    // console.log(id);
    useEffect(()=>{
      dispatch(setToggleFalse())
    },[])

  return (
    <div className='flex flex-col lg:flex-row'>
  <SideBar />
  <div className='firstsection lg:flex lg:flex-col p-1 lg:w-2/3'>
    <VideoPlayer videoId={id} />
    <VideoDescription videoId={id} />
    <Comments videoId={id} />
  </div>
  <div className='secondsection lg:flex lg:flex-col lg:w-1/3'>
    <SuggestedVideos videoId={id} />
  </div>
</div>



  )
}

export default VideoDisplayPage
