import React from 'react'
import menu_icon from "../assets/menu.png"
import logo from "../assets/logo.png"
import search_icon from "../assets/search.png"
import upload_icon from "../assets/upload.png"
import notification_icon from "../assets/notification.png"
import more_icon from "../assets/more.png"
import profile_icon from "../assets/jack.png"
import { useSidebar } from "../context/CollapseBar.jsx"
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom"

export const NavBar = ({search,setSearch}) => {
  const navigate = useNavigate()
  const { toggleCollapsed } = useSidebar()
  const clean = (e)=>{
    e.preventDefault()
    if(search.trim()){
      navigate(`/search/${search}`)
    }
    console.log(search)
  }

  return (
    <nav className="flex flex-wrap justify-between items-center shadow-md bg-white p-4 gap-4">
      {/* Left: Menu + Logo */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <img
          className="w-6 h-6 cursor-pointer"
          onClick={toggleCollapsed}
          src={menu_icon}
          alt="menu_icon"
        />
        <Link to={`/`}>
          <img className="h-6 cursor-pointer" src={logo} alt="logo_icon" />
        </Link>
      </div>

      {/* Center: Search */}
      <form  onSubmit={clean}  className="flex items-center border border-gray-300 rounded-2xl px-4 py-1 flex-grow max-w-md mx-auto w-full sm:w-1/2">
        <input
          className="flex-grow outline-none bg-transparent text-gray-700"
          type="text"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search..."
          
        />
        
       <button><img className="w-5 h-5 cursor-pointer" src={search_icon} alt="search_icon" /></button>
        
      </form>

      {/* Right: Action Icons */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <img className="w-6 h-6 cursor-pointer" src={upload_icon} alt="upload_icon" />
        <img className="w-6 h-6 cursor-pointer" src={more_icon} alt="more_icon" />
        <img className="w-6 h-6 cursor-pointer" src={notification_icon} alt="notification_icon" />
        <img className="w-6 h-6 cursor-pointer rounded-full" src={profile_icon} alt="jack_icon" />
      </div>
    </nav>
  )
}
