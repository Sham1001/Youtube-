import React from 'react'
import PlayVideo from '../components/PlayVideo'
import SideVideo from '../components/SideVideo'
import {useParams} from 'react-router-dom'

export const Video = () => {

  const {categoryId,videoId} = useParams()
  return (
    <div className="flex flex-col lg:flex-row px-0 mx-auto max-w-[1440px]">
    <div className="w-full lg:w-[65%]">
      <PlayVideo videoId={videoId} />
    </div>
    <div className="w-full lg:w-[35%] px-4 lg:px-0">
      <SideVideo categoryId={categoryId}/>
    </div>
  </div>
  
  );
};

