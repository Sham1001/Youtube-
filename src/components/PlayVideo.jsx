import React, { useEffect, useState } from 'react';
import video1 from "../assets/video.mp4";
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';
import share from '../assets/share.png';
import save from '../assets/save.png';
import jack from '../assets/jack.png';
import user_profile from '../assets/user_profile.jpg';
import moment from "moment"



function PlayVideo({videoId}) {
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
  const count_converter=(views)=>{
    if(views>=1000000){
        return Math.floor(views/1000000)+"M"
    }
    else if(views>=1000){
        return Math.floor(views/1000)+"K"
    }
    else{
        return views
    }
}

 const [apiData , setApiData] = useState()

 const videoIdApi = async()=>{
  try{ const fetchApi = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
  const response = await fetch(fetchApi)
  const result = await response.json()
 //  console.log(result.items)
  return setApiData(result.items[0])}
  catch(err){
    console.log(err)
  }
  

}
const [channel,setChannel] =  useState(null)
const channelInfo = async()=>{
  try{const fetchApi1 = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
  const response = await fetch(fetchApi1)
  const result = await response.json()
  // console.log(result.items)
  return setChannel(result.items[0])}
  catch(err){
    console.log(err)
  }
  

}

const [comment,setComment] =  useState(null)
const commenntInfo = async()=>{
  try{const fetchApi2 = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`
  const response = await fetch(fetchApi2)
  const result = await response.json()
  // console.log(result.items)
  return setComment(result.items)}
  catch(err){
    console.log(err)
  }
  

}


 useEffect(()=>
  {
    videoIdApi()
  }
 ,[videoId])


 useEffect(()=>
  {
    channelInfo()
  }
 ,[apiData])

 useEffect(()=>
  {
    commenntInfo()
  }
 ,[videoId])
  return (
    <div>
      
      {/* Left Section: Main Video + Info */}
      <div className="flex flex-col space-y-6 p-4">
        {/* <video src={video1} controls autoPlay className="w-full rounded-xl shadow-md" /> */}
        <iframe className="h-128 rounded-2xl" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div>
          <h1 className="text-xl font-semibold mb-2">
            {apiData?apiData.snippet.localized.title:""}
          </h1>
          <div className="flex justify-between text-sm text-gray-600">
            <p>{count_converter(apiData?apiData.statistics.viewCount:"")} views• {moment(apiData?apiData.snippet.publishedAt:"").fromNow()}</p>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 hover:opacity-75">
                <img src={like} alt="Like" className="w-5 h-5" />
                <span>{count_converter(apiData?apiData.statistics.likeCount:"")}</span>
              </button>
              <button className="flex items-center space-x-1 hover:opacity-75">
                <img src={dislike} alt="Dislike" className="w-5 h-5" />
                <span></span>
              </button>
              <button className="flex items-center space-x-1 hover:opacity-75">
                <img src={share} alt="Share" className="w-5 h-5" />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-1 hover:opacity-75">
                <img src={save} alt="Save" className="w-5 h-5" />
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>

        <hr />

        {/* Channel Info */}
        <div className="flex justify-between items-start">
          <div className="flex items-start space-x-4">
            <img src={channel?channel.snippet.thumbnails.default.url:"Channel"} alt="Channel" className="w-12 h-12 rounded-full" />
            
            <div>
              <p className="font-semibold"> {apiData?apiData.snippet.channelTitle:""}</p>
              <p>{count_converter(channel?channel.statistics.subscriberCount:"")} Subscriber</p>
              <p className="text-sm text-gray-600 line-clamp-3">  {apiData?apiData.snippet.description:"NO Desceiption"}</p>
              
            </div>
          </div>
          <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded hover:bg-red-700">
            Subscribe
          </button>
        </div>

        <hr />

        {/* Comments Section */}
        <div>
          <p className="font-medium mb-4">Comments {count_converter(apiData?apiData.statistics.commentCount:"")}</p>
          {comment?comment.map((comments,index)=>
          {
            const c = comments.snippet.topLevelComment.snippet
            return(
          <div key={index} className="flex space-x-4 mb-4">
          <img src={c.authorProfileImageUrl} alt="User" className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="font-semibold">
              {c.authorDisplayName} <span className="text-sm text-gray-500 font-normal ml-2">{moment(c.publishedAt).fromNow()}</span>
            </h3>
            <p className="text-sm text-gray-800">
              {c.textDisplay}
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <img src={like} alt="Like" className="w-4 h-4" />
              <span className="text-sm">{c.likeCount}</span>
              <img src={dislike} alt="Dislike" className="w-4 h-4 ml-4" />
            </div>
          </div>
        </div>)}
          ):""
          }
          
        </div>
      </div>

      
    </div>
  );
}

export default PlayVideo;
