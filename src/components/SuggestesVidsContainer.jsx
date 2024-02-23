import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { setCategoryId } from '../store/videoSlice'
import { setChannelId } from '../store/videoSlice'
import { timeAgo,formatYouTubeViews } from '../calculations/calculation'
import VerifiedLogo from '../assets/verifiedLogo.png'


function SuggestesVidsContainer({data}) {

  const dispatch = useDispatch()

  const published = timeAgo(data.snippet.publishedAt);
  const views = formatYouTubeViews(data.statistics.viewCount);

  const {id} = data
  
  const {title,channelTitle,categoryId,thumbnails,channelId} = data.snippet;
  const {viewCount} = data.statistics

  const handleCLick = ()=>{
    // console.log('category added from suggestions');
    dispatch(setCategoryId(categoryId))
    dispatch(setChannelId(channelId))
    
  }
  
  return (
    <Link to={`/video/${id}`} onClick={()=> handleCLick()}>
    <div className={`flex my-3  rounded-lg `} style={{ maxHeight: `${thumbnails.default.height}px` }}>
  <img className={`w-2/5 rounded-lg`} src={thumbnails.medium.url} alt="thumbnail" />
  <div className='flex flex-col justify-between px-2 py-0.5'>
    <h1 className='h-1/2 overflow-hidden text-ellipsis  font-semibold'>{title}</h1>
    <p className='overflow-hidden text-sm font-semibold flex items-center '>{channelTitle}
    <img className='ml-1 w-3 h-3' src={VerifiedLogo} alt="verified logo" /></p>
    <p className='overflow-hidden text-ellipsis text-sm sm:text-md'>{views} • {published} </p>
  </div>
</div>

    </Link>
  )
}

export default SuggestesVidsContainer
