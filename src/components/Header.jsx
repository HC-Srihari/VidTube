import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { setToggleFlag } from '../store/toggleSlice'
import { setSearchQuery } from '../store/videoSlice'
import { Link, useNavigate } from 'react-router-dom'
import { setCategoryFlagFalse } from '../store/videoSlice'
import Hamburger from '../assets/hamburgerMenu.png'
import AddVideoLogo from '../assets/addVideoLogo.png'
import NotificationLogo from '../assets/notificationsLogo.png'
import ProfileLogo from '../assets/profileLogo.png'
import YoutubeLogo from '../assets/youTubeLogo.png'
import { Search } from 'lucide-react'


function Header() {
  const dispatch = useDispatch()

  const [value,setValue] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e)=>{

      e.preventDefault();
      // console.log('form submitted');
      dispatch(setSearchQuery(value))
      navigate(`/search/${value}`)
      setValue('')

  }
  const handleClick = ()=>{
    dispatch(setCategoryFlagFalse())
  }

  return (
    <div className='z-10 sticky top-0 bg-gray-100 shadow-lg grid  grid-flow-col py-2'>
        <div className='grid-cols-3 flex'>
        <button onClick={()=> dispatch(setToggleFlag())} >
        <img className='w-10 h-10 mx-2' src={Hamburger} alt="hamburger menu" />
        </button>
        <Link to={'/'} onClick={()=>handleClick()}>
        <button>
        <img className='w-32 h-8 mx-2 pt-2 hidden sm:block ' src={YoutubeLogo} alt="YT logo" />
        </button>
        </Link>
        </div>

        <form className='flex grid-cols-8 mr-2' onSubmit={handleSubmit}>
            <input onChange={(e)=>(setValue(e.target.value))} value={value} className='rounded-l-full w-full px-4 py-2 border border-gray-500' type="text" />
            <button className='rounded-r-full px-4 py-2 border border-gray-500'><Search/> </button>
        </form>

        <div className='grid-cols-1  justify-end hidden sm:flex '>

        <img className='w-8 h-8 mx-4 cursor-pointer ' src={AddVideoLogo} alt="add video" />
        <img className='w-8 h-8 mx-4 cursor-pointer' src={NotificationLogo} alt="notification logo" />
        <img className='w-8 h-8 mx-4 cursor-pointer' src={ProfileLogo} alt="profile logo" />
      
        </div>
    </div>
  )
}

export default Header
