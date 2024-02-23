import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { YOUTUBE_API_KEY } from '../constants/config';
import { formatYouTubeSubscribers } from '../calculations/calculation';

function ChannelInfoContainer() {
  const channelId = useSelector((state) => state.video.channelId);
  const [response, setResponse] = useState(null);

  const [title,setTitle] = useState(null)
  const [thumbnails,setThumbnails] = useState(null)
  const [subscriberCount,setSubscriberCount] = useState(null)

  const [isSubscribed,setIsSubscribed] = useState(false)
  

  useEffect(() => {
    const getChannelData = async () => {
      const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${YOUTUBE_API_KEY}`;
      const data = await fetch(url);
      const json = await data.json();
      setResponse(json);
      // console.log(json);
    };

    getChannelData();
  }, [channelId]);

  useEffect(()=>{
    if(response){
      // console.log(response);
      setTitle(response.items[0].snippet.title)
      setThumbnails(response.items[0].snippet.thumbnails)
      setSubscriberCount(response.items[0].statistics.subscriberCount)
    }
  },[response])

  const noOfSubscribers= formatYouTubeSubscribers(subscriberCount)
  

 
  return (
    
   <div className='flex justify-between p-2 my-2 rounded-3xl text-xl'>
  <div className='flex items-center'>
    <img className='w-10 sm:w-14 rounded-full h-10 sm:h-14' src={thumbnails?.default.url || ''} alt="channel logo" />
    <div className='flex flex-col ml-2'>
      <h1 className='font-semibold  text-sm sm:text-xl'>{title}</h1>
      <h1 className='text-sm font-semibold'>{noOfSubscribers}</h1>
    </div>
  </div>
  <div className='flex items-center justify-end'>
    <button className='hidden sm:block  py-2 px-4 sm:px-5 mr-2 text-white text-sm sm:text-lg bg-gray-900 rounded-full'>Join</button>
    <button onClick={()=>(setIsSubscribed(!isSubscribed))} className='py-2 px-4 sm:px-5 mr-2 text-white text-sm sm:text-lg bg-gray-900 rounded-full'>{isSubscribed?'Subsribed 🔔':'Subscribe'}</button>
  </div>
</div>

  );
}

export default ChannelInfoContainer;
