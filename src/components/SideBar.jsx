import React from 'react'
import {  Home, Youtube, SquareUserRound, History, PlaySquare, Clock, ThumbsUp, Settings, Flag, HelpCircle, MessageSquareWarning } from 'lucide-react'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ShortsLogo from '../assets/shortsLogo.png'

function SideBar() {
  const sideBarFlag= useSelector((state)=>state.toggle.toggleFlag)

  if(!sideBarFlag) return null

  return (
    <aside id='sidebar' className="fixed flex max-h-screen overflow-scroll w-3/5 z-10  top-14 left-0  sm:w-3/12 lg:w-2/12 flex-col overflow-y-auto border-r bg-white px-5  ">
     
      <div className=" flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-900 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to={'/'}
            >
              <Home className="h-5 w-5" aria-hidden="true"  />
              <span className="mx-2 text-sm font-medium ml-5">Home</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-900 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to={'/'}
            >
              <img className="h-8 w-8 rounded-full" src={ShortsLogo} aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Shorts</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-900 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to={'/'}
            >
              <Youtube className="h-5 w-5" aria-hidden="true"  />
              <span className="mx-2 text-sm font-medium ml-5">Subscriptions</span>
            </Link>
          </div>
          <div className="space-y-3 ">
            <hr />
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">
              You
            </label>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-900 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to={'/'}
            >
              <SquareUserRound className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Your Channel</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-900 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to={'/'}
            >
              <History className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">History</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-900 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to={'/'}
            >
              <PlaySquare className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Your Videos</span>
            </Link>
             <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-900 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to={'/'}
            >
              <Clock className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Watch Later</span>
            </Link>
             <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-900 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to={'/'}
            >
              <ThumbsUp className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Liked Videos</span>
            </Link>
          </div>

          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">
              Explore
            </label>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-900 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to={'/'}
            >
              <Settings className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Setings</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-900 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to={'/'}
            >
              <Flag className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Report History</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-900 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to={'/'}
            >
              <HelpCircle className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Help</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-900 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to={'/'}
            >
              <MessageSquareWarning className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Send Feedback</span>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  )
}

export default SideBar
