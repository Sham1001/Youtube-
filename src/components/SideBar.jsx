import React from "react";
import { useSidebar } from "../context/CollapseBar";
import Home from "../assets/home.png";
import game_icon from "../assets/game_icon.png";
import automobiles from "../assets/automobiles.png";
import sports from "../assets/sports.png";
import entertainment from "../assets/entertainment.png";
import tech from "../assets/tech.png";
import music from "../assets/music.png";
import blogs from "../assets/blogs.png";
import news from "../assets/news.png";
import jack from "../assets/jack.png";
import simon from "../assets/simon.png";
import tom from "../assets/tom.png";
import megan from "../assets/megan.png";
import cameron from "../assets/cameron.png";

export const SideBar = ({ category,setCategory }) => {
  const { isCollapsed } = useSidebar();
  console.log(category)

  return (
    <div
      className={`bg-white shadow-lg h-full p-4 transition-all duration-300 
      flex flex-col gap-0.5 lg-${isCollapsed ? "w-20 gap-3.5" : "w-60"}`} 
    >
      {/* Navigation Section */}
      <div className="space-y-2" >
        <div onClick={()=>setCategory(0)} className={`flex items-center cursor-pointer gap-3 p-2 hover:bg-gray-100 rounded-lg transition-all ${category === 0 ? "border border-red-900 bg-red-50" : ""}` }>
          <img src={Home} alt="Home" className="w-6 h-6 " />
          {!isCollapsed && <p className="text-gray-700" >Home</p>}
        </div>

        <div onClick={()=>setCategory(20)} className={`flex items-center cursor-pointer gap-3 p-2 hover:bg-gray-100 rounded-lg transition-all ${category === 20 ? "border border-red-900 bg-red-50" : ""}`}>
          <img src={game_icon} alt="Gaming" className="w-6 h-6" />
          {!isCollapsed && <p className="text-gray-700" >Gaming</p>}
        </div>

        <div onClick={()=>setCategory(2)} className={`flex items-center cursor-pointer gap-3 p-2 hover:bg-gray-100 rounded-lg transition-all ${category === 2 ? "border border-red-900 bg-red-50" : ""}`}>
          <img src={automobiles} alt="Automobiles" className="w-6 h-6" />
          {!isCollapsed && <p className="text-gray-700" >Automobiles</p>}
        </div>

        <div onClick={()=>setCategory(17)} className={`flex items-center cursor-pointer gap-3 p-2 hover:bg-gray-100 rounded-lg transition-all ${category === 17 ? "border border-red-900 bg-red-50" : ""}`}>
          <img src={sports} alt="Sports" className="w-6 h-6" />
          {!isCollapsed && <p className="text-gray-700" >Sports</p>}
        </div>

        <div onClick={()=>setCategory(24)} className={`flex items-center cursor-pointer gap-3 p-2 hover:bg-gray-100 rounded-lg transition-all ${category === 24 ? "border border-red-900 bg-red-50" : ""}`}>
          <img src={entertainment} alt="Entertainment" className="w-6 h-6" />
          {!isCollapsed && <p className="text-gray-700"  >Entertainment</p>}
        </div>

        <div onClick={()=>setCategory(28)} className={`flex items-center cursor-pointer gap-3 p-2 hover:bg-gray-100 rounded-lg transition-all ${category === 28 ? "border border-red-900 bg-red-50" : ""}`}>
          <img src={tech} alt="Tech" className="w-6 h-6" />
          {!isCollapsed && <p className="text-gray-700"  >Tech</p>}
        </div>

        <div onClick={()=>setCategory(10)} className={`flex items-center cursor-pointer gap-3 p-2 hover:bg-gray-100 rounded-lg transition-all ${category === 10 ? "border border-red-900 bg-red-50" : ""}`}>
          <img src={music} alt="Music" className="w-6 h-6" />
          {!isCollapsed && <p className="text-gray-700">Music</p>}
        </div>

        <div onClick={()=>setCategory(22)} className={`flex items-center cursor-pointer gap-3 p-2 hover:bg-gray-100 rounded-lg transition-all ${category === 22 ? "border border-red-900 bg-red-50" : ""}`}>
          <img src={blogs} alt="Blogs" className="w-6 h-6" />
          {!isCollapsed && <p className="text-gray-700" >Blogs</p>}
        </div>

        <div onClick={()=>setCategory(25)} className={`flex items-center cursor-pointer gap-3 p-2 hover:bg-gray-100 rounded-lg transition-all ${category === 25 ? "border border-red-900 bg-red-50" : ""}`}>
          <img src={news} alt="News" className="w-6 h-6" />
          {!isCollapsed && <p className="text-gray-700"  >News</p>}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300" />

      {/* Subscriptions Section */}
      <h3 className={`text-gray-800 font-semibold ${isCollapsed ? "hidden" : ""}`}>
        Subscribed
      </h3>

      <div className="space-y-2">
        <div className="flex items-center cursor-pointer gap-3 p-2 hover:bg-gray-100 rounded-lg transition-all">
          <img src={jack} alt="jack" className="w-8 h-8 rounded-full" />
          {!isCollapsed && <p className="text-gray-700">PewDiePie</p>}
        </div>

        <div className="flex items-center cursor-pointer gap-3 p-2 hover:bg-gray-100 rounded-lg transition-all">
          <img src={simon} alt="simon" className="w-8 h-8 rounded-full" />
          {!isCollapsed && <p className="text-gray-700">MrBeast</p>}
        </div>

        <div className="flex items-center cursor-pointer gap-3 p-2 hover:bg-gray-100 rounded-lg transition-all">
          <img src={tom} alt="tom" className="w-8 h-8 rounded-full" />
          {!isCollapsed && <p className="text-gray-700">Tom</p>}
        </div>

        <div className="flex items-center cursor-pointer gap-3 p-2 hover:bg-gray-100 rounded-lg transition-all">
          <img src={megan} alt="megan" className="w-8 h-8 rounded-full" />
          {!isCollapsed && <p className="text-gray-700">Megan</p>}
        </div>

        <div className="flex items-center cursor-pointer gap-3 p-2 hover:bg-gray-100 rounded-lg transition-all">
          <img src={cameron} alt="cameron" className="w-8 h-8 rounded-full" />
          {!isCollapsed && <p className="text-gray-700">Cameron</p>}
        </div>
      </div>
    </div>
  );
};
