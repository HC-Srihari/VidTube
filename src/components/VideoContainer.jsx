import React, { useState, useEffect } from 'react';
import { YOUTUBE_API_KEY } from '../constants/config';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { setCategoryId } from '../store/videoSlice';
import { setChannelId } from '../store/videoSlice';
import { convertDuration,timeAgo ,formatYouTubeViews} from '../calculations/calculation';
import VerifiedLogo from '../assets/verifiedLogo.png'

function VideoContainer({ response }) {
  if (!response) return null;
  
  const dispatch = useDispatch();
  const [logoUrl, setLogoUrl] = useState(null);
  const duration = convertDuration(response.contentDetails.duration)
  const published = timeAgo(response.snippet.publishedAt);
  const views = formatYouTubeViews(response.statistics.viewCount);
  // console.log(duration,published),views;

  useEffect(() => {
    const fetchChannelLogo = async () => {
      if (response) {
        const channelId = response.snippet.channelId;
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${YOUTUBE_API_KEY}`);
        const json = await data.json();
        const channelLogoUrl = json.items[0].snippet.thumbnails.default.url;
        setLogoUrl(channelLogoUrl);
        
      }
    };

    fetchChannelLogo();
  }, [response]);


  const handleCLick = ()=>{
    // console.log('id added');
      dispatch(setCategoryId(categoryId))
      dispatch(setChannelId(channelId))
  }

  const { title, channelTitle,channelId } = response.snippet;
  const { url, width, height } = response.snippet.thumbnails.medium;
  // const { viewCount } = response.statistics;
  const { id } = response;
  const {categoryId} = response.snippet;
  // console.log(categoryId);

  return (
    <Link className={ ` max-w-[${width}px] max-h-[${height}px]`} to={`/video/${id}`} onClick={()=> handleCLick()}>
      <div className='m-2 rounded-lg shadow-md font-sans'>
        <div className='relative'>
        <img width={width} height={height} className='rounded-lg' src={url} alt="thumbnail" />
           <div  className={` absolute bottom-0 right-0 px-2 py-1 m-2 rounded-lg bg-gray-800 text-white`}>
              <p>{duration}</p>
            </div>
        </div>
        <div className={`flex flex-row justify-between h-[${height}px]`} style={{ maxWidth: `${width}px` }}>
          {logoUrl && <img className='w-10 h-10 rounded-full mx-3 mt-4' src={logoUrl} alt="Channel logo" />}
          <div className='py-2 container'>
            <h1 className='font-bold h-12 overflow-hidden text-ellipsis' >{title}</h1>
            <div className='flex items-center'>

            <p className='font-semibold'>{channelTitle}</p>
            <img className='ml-2 mt-1 w-3 h-3' src={VerifiedLogo} alt="verifiedlogo" />
            </div>
            <p className='text-sm'>{views} • {published}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VideoContainer;
