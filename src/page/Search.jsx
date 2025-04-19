import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import moment from "moment"

function Search({ search }) {
    const [searchData, setSearchData] = useState([])
    const {query} = useParams()
    const count_converter = (views) => {
        if (views >= 1000000) return Math.floor(views / 1000000) + "M"
        if (views >= 1000) return Math.floor(views / 1000) + "K"
        return views
      }
    const fetchsearch = async () => {
        try {
            const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
            const searchApi = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${encodeURIComponent(query)}&key=${API_KEY}`
            const response = await fetch(searchApi)
            // console.log(search)
            const data = await response.json()
            // console.log(data)
            // return setSearchData(data.items)
            const videoId = data.items.map((item)=> item.id.videoId).join(',')

            const videoInfo = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`)
            const videoData = await videoInfo.json();
            setSearchData(videoData.items);
            console.log(videoData)
        }
        catch (err) {
            console.log(err)
        }


    }

    useEffect(() => {
        fetchsearch()

    },
    [query]
    );


    return (
        
        <div className="flex flex-col space-y-6 pt-20 px-4 md:px-16 lg:px-32 w-full">
        {
          searchData.length!==0?searchData.map((searches, index) => (
            <Link to={`/video/${searches.snippet?.categoryId || searchData.snippet}/${searches.id}`}
              className="flex flex-col sm:flex-row gap-4 hover:bg-gray-200 transition-all duration-200 rounded-2xl p-4"
              key={index}
            >
              {/* Thumbnail */}
              <div className="flex-shrink-0">
                <img
                  className="rounded-2xl w-full sm:w-[300px] h-auto aspect-video object-cover"
                  src={searches.snippet.thumbnails.high.url}
                  alt="video thumbnail"
                />
              </div>
      
              {/* Video Details */}
              <div className="flex flex-col justify-between space-y-2 sm:space-y-1">
                <h2 className="text-base font-semibold line-clamp-2 text-gray-900">
                  {searches.snippet.title}
                </h2>
                <p className="text-sm text-gray-600">{count_converter(searches.statistics.viewCount)} • {moment(searches.snippet.publishedAt).fromNow()}</p>
                {/* <p>{searches.statistics.description}</p> */}
                <p className="text-sm text-gray-700">{searches.snippet.channelTitle}</p>
              </div>
            </Link>
          ))

          :<div className='flex  justify-center'>
            <h1 className='text-2xl  text-center font-medium'>NO VIDEO</h1></div>
        }
      </div>
      
    )
}

export default Search