import { useState } from 'react'
import './App.css'
import {NavBar} from "./components/NavBar.jsx"
import {Routes,Route} from 'react-router-dom'
import {Home} from "./page/Home.jsx"
import {Video} from "./page/Video.jsx"
import {SidebarProvider} from "./context/CollapseBar.jsx"
import Search from './page/Search.jsx'

function App() {
  const [count, setCount] = useState(0)

  const [search,setSearch] = useState("")

  return (
    <>
    <SidebarProvider>
      
       <NavBar setSearch={setSearch} search={search}/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/video/:categoryId/:videoId" element={<Video/>} />
        <Route path ="/search/:query" element={<Search/>} />
       </Routes> 
    </SidebarProvider>
    </>
  )
}

export default App
