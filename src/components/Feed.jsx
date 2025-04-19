import React, { useEffect, useState } from 'react'
import { useSidebar } from '../context/CollapseBar'
import { Link } from 'react-router-dom'
import moment from "moment"

function Feed({ category }) {
  const { isCollapsed } = useSidebar()
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY

  const view = (views) => {
    if (views >= 1000000) return Math.floor(views / 1000000) + "M"
    if (views >= 1000) return Math.floor(views / 1000) + "K"
    return views
  }

  const fetchApi = async () => {
    try {
      const catAPI_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`
      const API_BASE = category !== 0 ? `${catAPI_URL}&videoCategoryId=${category}` : catAPI_URL
      const response = await fetch(API_BASE)
      const result = await response.json()
      // if(result.length <= 0){
      //   return console.log("ye zero hai")
      // }
      // console.log(data)
      if (result.error) {
        const reason = result.error.errors[0].reason
        if (reason === 'quotaExceeded') {
          setError('YouTube API quota has been exceeded. Please try again later.')
        } else {
          setError('Error fetching videos: ' + result.error.message)
        }
        setData([])
      } else {
        setData(result.items)
        setError(null)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [category])

  return (
    <div
      className={`p-4 grid gap-6 ${
        isCollapsed
          ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'
          : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3'
      }`}
    >
      {data.map((item, index) => (
        <Link
          to={`video/${item.snippet.categoryId}/${item.id}`}
          key={index}
          className="flex flex-col gap-2 hover:bg-gray-100 p-2 rounded-xl"
        >
          <img
            className="rounded-2xl w-full aspect-video object-cover"
            src={item.snippet.thumbnails.high.url}
            alt="Try again"
          />
          <div>
            <h2 className="font-semibold text-sm line-clamp-2">
              {item.snippet.title}
            </h2>
            <h3 className="text-xs text-gray-700">{item.snippet.channelTitle}</h3>
            <p className="text-xs text-gray-600">
              {view(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Feed
