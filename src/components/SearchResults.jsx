import React, { useEffect, useState } from 'react'
import SearchResultLayout from './SearchResultLayout'
import { useParams } from 'react-router-dom'
import {useSelector } from 'react-redux'
import { YOUTUBE_API_KEY } from '../constants/config'
import {ErrorBoundary} from 'react-error-boundary'
import VideoNotFoundError from './VideoNotFoundError'

function SearchResults() {
    const query  = useParams()
    // console.log(query);

    const searchQuery = useSelector((state)=>(state.video.searchQuery))

    const [response,setResponse] = useState(null)

    // const [imageUrl,setImageUrl] = useState(null)
    // const [title,setTitle]  = useState(null)
    // const [channelName,setChannelName] = useState(null)
    // const [views,setViews] = useState(null)
    // const [channelId,setChannelId] = useState(null)
    // const [videoId,setVideoId] = useState(null)

    const getResultQuery = async()=>{
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&key=${YOUTUBE_API_KEY}`
        const data = await fetch(url);
        const json = await data.json();

        // console.log(json);
        setResponse(json.items)
    }

    useEffect(()=>{
        getResultQuery()
    },[searchQuery])

  return (
    <>
        <div className='flex-col max-h-screen justify-center items-center  mx-auto overflow-y-scroll'>
            <ErrorBoundary  fallback={<VideoNotFoundError/>}>

            {response && response.map((item)=>(
                item.id.kind === 'youtube#video' &&
                <SearchResultLayout key={item.etag} result={item} />
            ))}
            </ErrorBoundary>
        </div>
    </>

    
  )
}

export default SearchResults
