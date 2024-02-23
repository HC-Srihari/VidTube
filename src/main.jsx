import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SideBar from './components/SideBar.jsx'
import HomeAllVideoContainer from './components/HomeAllVideoContainer.jsx'
import VideoDisplayPage from './components/VideoDisplayPage.jsx'
import PageNotFound from './components/PageNotFound.jsx'
import SearchResults from './components/SearchResults.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:(
          <div className='flex mt-2'>
            <SideBar/>
            <HomeAllVideoContainer/>
          </div>
        )
      },
      {
        path:'video/:id',
        element:(
          <VideoDisplayPage/>
        )
      },
      {
        path:'/search/:query',
        element:(
          <div className='flex mt-2'>
            <SideBar/>
            <SearchResults/>
          </div>
        )
      },
      {
        path:'/*',
        element:<PageNotFound/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
