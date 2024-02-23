import React from 'react'
import { timeAgo } from '../calculations/calculation';
import {ThumbsUp,ThumbsDown} from 'lucide-react'

function CommentSection({data}) {
    const {id} = data
    const {snippet}= data
    const {textDisplay}= snippet
    const {authorProfileImageUrl} = snippet
    const {authorDisplayName} = snippet
    const {likeCount,updatedAt} = snippet

    const commentedTime = timeAgo(updatedAt)

  return (
    <div className='shadow-md rounded-lg my-3 overflow-hidden bg-gray-100'>
  <div id={id} className='flex m-2 p-2 '>
    <img src={authorProfileImageUrl} className='rounded-full w-8 h-8 mt-2' alt="user_profile" />
    <div className='flex-col ml-2'>
      <div className='flex items-center'>

      <div className='text-sm sm:text-md font-semibold'>{authorDisplayName}</div>
      <p className='text-xs ml-1 '>{commentedTime}</p>
      </div>
      <div className='text-sm sm:text-md overflow-hidden overflow-ellipsis'>
        <p className='py-1 pl-2 '>{textDisplay}</p>
      </div>
    </div>
  </div>
  <div className='flex items-center ml-5'>
  <div className='mx-2 flex items-center font-semibold text-lg'>
    <ThumbsUp className='w-4 h-4 mr-1' /> 
    <p className=''>{likeCount}</p>
  </div>
  <div className='mx-2'> <ThumbsDown className='w-4 h-4' /> </div>
</div>

</div>

  )
}

export default CommentSection
