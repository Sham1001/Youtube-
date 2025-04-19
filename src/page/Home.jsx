import React, { useState } from 'react'
import { SideBar } from '../components/SideBar'
import Feed from '../components/Feed'

export const Home = () => {
  const [category,setCategory] = useState(0);
  return (
    <div className="flex h-[calc(100vh-68px)]"> {/* 64px = height of your NavBar */}
      {/* Sidebar stays fixed and scroll-free */}
      <div className="sticky top-0 h-full">
        <SideBar category={category} setCategory={setCategory} />
      </div>

      {/* Main content scrolls */}
      <div className="flex-1 overflow-y-auto">
        <Feed category={category}/>
      </div>
    </div>
  );
};
