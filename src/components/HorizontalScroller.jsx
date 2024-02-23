import React, { useEffect, useState } from 'react';
import { YOUTUBE_API_KEY } from '../constants/config';
import { useDispatch } from 'react-redux';
import { setCategoryFlag } from '../store/videoSlice';

function HorizontalScroller() {

  const [suggestions,setSuggestions]= useState([])
  const dispatch = useDispatch()
 

  const getSuggestions = async ()=>{
    const url = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=en_US&regionCode=IN&key=${YOUTUBE_API_KEY}`
      const data  = await fetch(url);
      const json = await data.json();
      // console.log(json);
      setSuggestions(json.items)
  }

  useEffect(()=>{
    getSuggestions()
  },[])


  const [position, setPosition] = useState(0);
  
  const handlePrevClick = () => {
    setPosition((prevPosition) => Math.max(prevPosition - 1, 0));
  };

  const handleNextClick = () => {
    setPosition((prevPosition) => Math.min(prevPosition + 1, suggestions.length - 1));
  };

  const handleCategoryButtonClick = (id)=>{
      dispatch(setCategoryFlag(id))
  }

  return (
    <div id='scrollbar'  className="relative ">
      <div className="overflow-x-auto mx-2">
        <div className="flex transition-transform duration-500 mt-2 mx-10" style={{ transform: `translateX(-${position * 20}%)` }}>
          {suggestions.map((item) => (
            <button   className=" cursor-pointer text-black active:bg-gray-600 active:text-white hover:bg-gray-300 flex-shrink-0 m-2 px-5 py-2 rounded-md bg-gray-200  mx-2" key={item.id} onClick={()=>(handleCategoryButtonClick(item.id))} >
              {item.snippet.title}
            </button>
          ))}
        </div>
      </div>
      <button className={`ml-2  rounded-full w-2 text-center justify-center text-2xl absolute top-1/2 left-0 transform -translate-y-1/2  pr-8 px-6 py-1 pb-2 mt-1 hover:bg-gray-700 bg-gray-800 text-white`} onClick={handlePrevClick}   >{'<'}</button>
      <button className={`mr-2 rounded-full w-2 text-center justify-center text-2xl absolute top-1/2 right-0 transform -translate-y-1/2 pr-8 mt-1 bg-gray-800 px-6 py-1 pb-2 hover:bg-gray-700  text-white `} onClick={handleNextClick}  >{'>'}</button>
    </div>
  );
}

export default HorizontalScroller;
