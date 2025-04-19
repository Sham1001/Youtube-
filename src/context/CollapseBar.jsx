import { useState, createContext,useContext,useEffect } from "react";

export const SidebarContext  = createContext()

export const SidebarProvider = ({children})=>{
    const [isCollapsed, setIsCollapsed] = useState(true)
    const toggleCollapsed = ()=>
        setIsCollapsed(!isCollapsed)

        useEffect(()=>
            {
                const handleResize=()=>{
                    setIsCollapsed(window.innerWidth<768)
                }
                handleResize()
                window.addEventListener('resize',handleResize)
                return ()=> window.removeEventListener('resize',handleResize)
            },
    [])
    
    return (
        <SidebarContext.Provider value={{isCollapsed,toggleCollapsed}}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar  = () => useContext(SidebarContext)