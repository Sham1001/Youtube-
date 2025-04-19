import { useState, useEffect } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

function SideVideo({ categoryId }) {
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
  const [sideVideo, setSideVideo] = useState([])

  const count_converter = (views) => {
    if (views >= 1_000_000) {
      return Math.floor(views / 1_000_000) + 'M'
    } else if (views >= 1_000) {
      return Math.floor(views / 1_000) + 'K'
    } else {
      return views
    }
  }

  const fetchInfo = async () => {
    try {
      const fetchApi2 = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${API_KEY}&videoCategoryId=${categoryId}`
      const response = await fetch(fetchApi2)
      const result = await response.json()
      setSideVideo(result.items)
    } catch (err) {
      console.error('Failed to fetch videos:', err)
    }
  }

  useEffect(() => {
    fetchInfo()
  }, [categoryId])

  return (
    <div className="space-y-4 p-2 w-full">
      {sideVideo.map((video, index) => {
        const snippet = video.snippet
        const stats = video.statistics
        return (
          <Link
            to={`/video/${snippet.categoryId}/${video.id}`}
            key={index}
            className="flex space-x-3 hover:bg-gray-100 p-2 rounded-xl transition duration-200"
          >
            <img
              src={snippet.thumbnails.medium.url}
              alt={snippet.title}
              className="w-40 h-24 object-cover rounded-xl"
            />
            <div className="flex flex-col justify-between">
              <h2 className="text-sm font-medium line-clamp-2">{snippet.localized?.title || snippet.title}</h2>
              <p className="text-xs text-gray-600">{snippet.channelTitle}</p>
              <p className="text-xs text-gray-500">
                {count_converter(stats.viewCount)} views • {moment(snippet.publishedAt).fromNow()}
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default SideVideo
