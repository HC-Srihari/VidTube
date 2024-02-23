import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comments from './components/Comments'
import VideoDescription from './components/VideoDescription'
import VideoPlayer from './components/VideoPlayer'
import SuggestedVideos from './components/SuggestedVideos'


import Header from './components/Header'
import SideBar from './components/SideBar'
import HomeAllVideoContainer from './components/HomeAllVideoContainer'
import {Outlet, createBrowserRouter} from 'react-router-dom'




function App() {

  return (
   <div className='font-sans'>
     <Header/>
    {/* <div className='flex mt-2'>
      <SideBar/>
      <HomeAllVideoContainer/>
     </div> */}
     <Outlet/>
   
    {/* <div className='flex'>
      <div className='flex-col m-2 p-2'>
        <VideoPlayer/>
        <VideoDescription/>
        <Comments/>
      </div>
      <SuggestedVideos/>
    </div> */}
   
   </div>
  )
}

export default App
