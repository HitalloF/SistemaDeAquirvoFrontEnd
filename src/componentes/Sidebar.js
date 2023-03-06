import React from 'react'
import { SidebarData } from './SidebarData';
import "../App.css"
import { GiAutomaticSas } from "react-icons/gi";
function SideBar(){
    return <div className='Sidebar'>
        <ul className='SidebarList'>
        {SidebarData.map((val,key)=>{
        return (
            <li key={key}
            className="row"
            id={window.location.pathname == val.link ? "active" : "" }
            onClick={()=>{
                window.location.pathname = val.link;
            }}
            >
                <div id='icon'>{val.icon}</div><div id='title'>{val.title}</div></li>
        )
    })}
    </ul>
    <div className='marca'>
        <div className='logo'>
            <GiAutomaticSas/>
            <h2>ApertureTech</h2>
        </div>
    </div>
    </div>; 
}


export default SideBar