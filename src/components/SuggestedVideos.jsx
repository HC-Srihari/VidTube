import React, { useEffect, useState } from 'react'
import SuggestesVidsContainer from './SuggestesVidsContainer'
import { useSelector } from 'react-redux'
import { YOUTUBE_API_KEY } from '../constants/config';
import { useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import PageNotFound from './PageNotFound'

function SuggestedVideos({videoId}) {
  
  const [response,setResponse ] = useState([])
  let categoryId = useSelector((state)=>(state.video.categoryId));
  const navigate = useNavigate()
  if(categoryId===''){
    categoryId=1
  }

  const getRecommendedVideos = async () => {
  try {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&videoCategoryId=${categoryId}&key=${YOUTUBE_API_KEY}`;
    const data = await fetch(url);
    if (!data.ok) {
      throw new Error('Failed to fetch recommended videos');
    }
    const json = await data.json();
    // console.log(json);
    setResponse(json.items);
  } catch (error) {


    try {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&videoCategoryId=10&key=${YOUTUBE_API_KEY}`;
    const data = await fetch(url);
    if (!data.ok) {
      throw new Error('Failed to fetch recommended videos');
    }
    const json = await data.json();
    // console.log(json);
    setResponse(json.items);
    } catch (error) {
      
      console.error('Error fetching recommended videos:', error);
      navigate('/')
    }
  }
};


  useEffect(()=>{
    getRecommendedVideos()
  },[videoId,categoryId])

  
  


  return (
    <ErrorBoundary fallback={<PageNotFound />}>

    <div className='w-full px-1 bg-gray-100 rounded-lg my-2'>
      <h1 className=' p-2 my-2  text-md bg-gray-200 rounded-lg inline-block min-w-min'>Recommended Videos : </h1>
      <div id='recommendedVideos' className=' h-full max-h-80 sm:max-h-auto  overflow-y-scroll sm:overflow-visible '>

      {response && response.map((item)=>(

      <SuggestesVidsContainer key={item.id} data={item}/>

      ))}
      </div>
    </div>
    </ErrorBoundary>
      
     
  )
}

export default SuggestedVideos
