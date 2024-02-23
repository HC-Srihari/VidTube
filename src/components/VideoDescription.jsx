import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY } from '../constants/config';
import ChannelInfoContainer from './ChannelInfoContainer';
import { formatYouTubeLikes,formatYouTubeViews, timeAgo } from '../calculations/calculation';
import { useDispatch } from 'react-redux';
import { setCategoryId } from '../store/videoSlice';



function VideoDescription({videoId}) {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('')
    const [viewCount,setViewCount] = useState(0);
    const [likeCount,setLikeCount] = useState(0);
    const [published,setPublished] = useState(null)
    // const [categoryId,setCategoryId] = useState(null)

    const dispatch  = useDispatch()

    const getVideoData = async ()=>{
        // const vidId = videoId
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${YOUTUBE_API_KEY}`
        const data = await fetch(url);
        const json = await data.json();
        // console.log(json);

        // setCategoryId(json.items[0].snippet.categoryId)
        setTitle(json.items[0].snippet.title)
        setDescription(json.items[0].snippet.localized.description)
        setLikeCount(json.items[0].statistics.likeCount)
        setViewCount(json.items[0].statistics.viewCount)
        setPublished(json.items[0].snippet.publishedAt)


        const categoryId = json.items[0].snippet.categoryId
        
         // update the category id
         dispatch(setCategoryId(categoryId))
        
    }   
    useEffect(()=>{
        getVideoData();
    },[videoId])



   const views = formatYouTubeViews(viewCount);
   const likes = formatYouTubeLikes(likeCount);
   const publishedAgo =timeAgo(published)
  
    
    

  return (
    <div className=' col-span-8'>
        <h1 className='text-md sm:text-3xl font-bold m-2 py-4'>{title}</h1>
        <ChannelInfoContainer/>
        <div id='description' className='bg-gray-200 rounded-lg my-3 max-h-[300px] overflow-auto'>
            <div className='flex'>
                <h1 className='px-4 font-bold py-4'>{views} | {likes} likes  | {publishedAgo}</h1>
            </div>
            <div className='max-h-1/3 overflow-y-auto sm:h-auto'>

            <p className='p-2 text-sm sm:text-md  text-wrap'>{description}</p>
            </div>
        </div>
      
    </div>
  )
}

export default VideoDescription
