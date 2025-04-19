import { useState, createContext,useContext } from "react";

export const SidebarContext  = createContext()

export const SidebarProvider = ({children})=>{
    const [isCollapsed, setIsCollapsed] = useState(false)
    const toggleCollapsed = ()=>
        setIsCollapsed(!isCollapsed)
    
    return (
        <SidebarContext.Provider value={{isCollapsed,toggleCollapsed}}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar  = () => useContext(SidebarContext)