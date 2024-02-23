import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch } from 'react-redux'
import { setChannelId } from '../store/videoSlice'
import { setVideoId } from '../store/videoSlice'
import { YOUTUBE_API_KEY } from '../constants/config'
import VerifiedLogo from '../assets/verifiedLogo.png'
import { timeAgo } from '../calculations/calculation'

function SearchResultLayout({result}) {

    const dispatch = useDispatch()

    const {videoId} = result.id
    const {channelId,title,description,thumbnails,channelTitle,publishedAt} = result.snippet

    const [logoUrl, setLogoUrl] = useState(null);
    const publishedAgo = timeAgo(publishedAt)


    useEffect(() => {
    const fetchChannelLogo = async () => {
      if (result) {
        const channelId = result.snippet.channelId;
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${YOUTUBE_API_KEY}`);
        const json = await data.json();
        const channelLogoUrl = json.items[0].snippet.thumbnails.default.url;
        setLogoUrl(channelLogoUrl);
        
      }
    };

    fetchChannelLogo();
  }, [result]);



    const handleClick = ()=>{
        dispatch(setChannelId(channelId));
        dispatch(setVideoId(videoId));
    }
  return (
    <Link to={`/video/${videoId}`} onClick={handleClick}  >

  
    <div className={`flex flex-col px-1 md:flex-row sm:h-auto w-[320px]  sm:w-screen rounded-xl my-4  bg-gray-100 `}>
      <img className='rounded-xl ' width={thumbnails.medium.width} height={thumbnails.medium.height} src={thumbnails.medium.url} alt="thumbnail" />
      
      <div className='flex flex-col pl-2 text-sm my-2'>
        <div className='overflow-hidden overflow-ellipsis max-w-screen'>
          <h1 className='sm:text-xl font-bold font-sans text-sm'>{title}</h1>
        </div>
        <div className='infocontainer font-sans '>

          <p className='font-sans'>{publishedAgo}</p>
        <div className='flex items-center py-1'>
          {logoUrl && <img className='w-6 h-6 rounded-full mr-2' src={logoUrl} alt="Channel logo" />}
          <p className='sm:text-lg font-semibold text-sm'>{channelTitle}</p>
          <img className='ml-2 mt-1 w-3 h-3' src={VerifiedLogo} alt="verifiedLogo" />
        </div>
        <div className={`overflow-hidden overflow-ellipsis text-wrap  `}>
          <p className='sm:text-md text-sm overflow-hidden overflow-ellipsis text-wrap'>{description}</p>
        </div>
        </div>
      </div>
    </div>
 


    
    </Link>
  )
}

export default SearchResultLayout
