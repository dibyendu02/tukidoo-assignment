import React from 'react'
import { CgMenuLeft } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
import { SlSpeedometer } from "react-icons/sl";
import { LuClipboardCheck } from "react-icons/lu";
import { GoEye } from "react-icons/go";
import { MdPeopleAlt } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";

import logo from "../images/logo.png"
import profile from "../images/profile.png"

const SideNavbar = () => {
  return (
    <div className=" w-[7%] h-[100vh] bg-gray-200 flex flex-col items-center justify-between pt-2 pb-10 absolute">
        <div className="flex flex-col gap-5 items-center cursor-pointer">
            <img src={logo} alt="logo" className="w-16" />
            <CgMenuLeft style={{fontSize: "30px"}}/>
            <div className="flex flex-col gap-10 pt-5 items-center text-gray-400">
                <div className="relative">
                  <IoNotificationsOutline style={{fontSize: "26px", color: "black"}}/>
                  <div className="w-3 h-3 bg-red-500 border-gray-200 border-solid border-2 rounded-md absolute top-0 right-0"></div>    
                </div>
                
                <SlSpeedometer style={{fontSize: "26px"}}/>
                <LuClipboardCheck style={{fontSize: "26px"}}/>
                <GoEye style={{fontSize: "26px"}}/>
                <MdPeopleAlt style={{fontSize: "26px"}}/>
                <IoStatsChartSharp style={{fontSize: "26px"}}/>
            </div>
        </div>
        <div>
            <img src={profile} alt="profile" className="w-12 rounded-[50%]" />
        </div>
        
    </div>
  )
}

export default SideNavbar