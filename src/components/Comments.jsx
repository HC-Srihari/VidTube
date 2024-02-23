import React, { useEffect, useState } from 'react'
import CommentSection from './CommentSection';
import { YOUTUBE_API_KEY } from '../constants/config';


function Comments({videoId}) {
    const [response,setResponse]=useState([])

    // const vidId = videoId
    const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${YOUTUBE_API_KEY}`

    const getCommentsData = async ()=>{
        const data = await fetch(url);
        const json = await data.json()
        // console.log(json);
        setResponse(json.items)
        // console.log(response.items[0].snippet.topLevelComment);
  
  
    }
    useEffect(()=>{
        getCommentsData()
    },[videoId])

   
    

    
  return (
    <div className='col-span-8 p-2  rounded-md bg-gray-100'>
    <h1 className='font-semibold p-2 m-2 text-md sm:text-xl'>Comments : </h1>
    <div id='comments' className=' h-full max-h-96 md:max-h-full sm:max-h-auto lg:max-h-auto overflow-y-auto md:overflow-visible'>
      

      { response.length && response.map((comment)=>(
            <CommentSection key={comment.id} data={comment.snippet.topLevelComment}/>

      ))}
    
      
    </div>
    </div>
  )
}

export default Comments
