import React, { useEffect, useState } from 'react';
import VideoContainer from './VideoContainer';
import HorizontalScroller from './HorizontalScroller';
import { YOUTUBE_API_KEY } from '../constants/config';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import PageNotFound from './PageNotFound';
import { setToggleFalse } from '../store/toggleSlice';

function HomeAllVideoContainer() {
  const dispatch = useDispatch();
  const [response, setResponse] = useState([]);
  const navigate = useNavigate();
  const [width, setWidth] = useState('');
  const sideBarFlag = useSelector((state) => state.toggle.toggleFlag);
  const categoryActive = useSelector((state) => state.video.categoryFlag);
  const categoryId = useSelector((state) => state.video.categoryId);

  useEffect(() => {
    if (categoryActive) {
      setCategoryQuery(`videoCategoryId=${categoryId}&`);
    } else {
      setCategoryQuery('');
    }
  }, [categoryActive, categoryId]);

  const [categoryQuery, setCategoryQuery] = useState('');

  const getAllVideos = async () => {
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&${categoryQuery}regionCode=IN&key=${YOUTUBE_API_KEY}`;
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error('Failed to fetch videos');
      }
      const json = await data.json();
      // console.log(json);
      setResponse(json.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
      navigate('/'); 
    }
  };

  useEffect(() => {
    getAllVideos();
    dispatch(setToggleFalse())

  }, [categoryQuery, navigate]);

  useEffect(() => {
    if (response.length) {
      // dispatch(addVideos(response));
    }
  }, [response, dispatch]);

  useEffect(() => {
    if (sideBarFlag) {
      setWidth('w-10/12');
    } else {
      setWidth('w-full');
    }
  }, [sideBarFlag]);

  return (
      <ErrorBoundary fallback={<PageNotFound />}>
    <div className={`flex h-screen -z-5 justify-evenly flex-wrap min-w-[${width}px] overflow-y-scroll `}>
      <div className='w-full'>
        <HorizontalScroller />
      </div>

        {response.map((item) => (
          <VideoContainer key={item.id} response={item} />
        ))}

    </div>
      </ErrorBoundary>
  );
}

export default HomeAllVideoContainer;
