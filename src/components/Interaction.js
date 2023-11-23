import React from 'react'

import { HiOutlineVideoCamera } from "react-icons/hi";
import { MdMicNone } from "react-icons/md";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { PiWechatLogo } from "react-icons/pi";
import { IoExitOutline } from "react-icons/io5";

import { FaFaceSmileBeam } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { GiSoundWaves } from "react-icons/gi";

import teacher from "../images/teacher.jpg"
import student from "../images/student.jpg"

const Interaction = () => {

    const menuItems = [
        { id: 1,label: "Cam", icon: <HiOutlineVideoCamera style={{ fontSize: "25px" }} /> },
        { id: 2,label: "Mic", icon: <MdMicNone style={{ fontSize: "25px" }} />  },
        { id: 3,label: "Share", icon: <FaRegShareFromSquare style={{ fontSize: "25px" }} />  },
        { id: 4,label: "Chat", icon: <PiWechatLogo style={{ fontSize: "25px" }} />  },
        { id: 5,label: "Leave", icon: <IoExitOutline style={{ fontSize: "25px"}} />  },
      ];
  return (
    <div className=" md:w-[18%] flex flex-col gap-5 items-center">
        <div className="flex md:flex-col gap-5">
            <div className="relative cursor-pointer">
                <img src={student} alt='student' className="md:w-48 w-36 rounded-2xl" />
                <label className="absolute left-0 bottom-0 bg-slate-200 py-1 px-5 rounded-r-[50px] rounded-b-[50px] font-bold  ">Ridha</label>
                <div className="absolute right-5 top-4 flex gap-2 bg-slate-200 py-1 px-2 rounded-2xl">
                    <FaFaceSmileBeam style={{color: "yellow", backgroundColor: "black", borderRadius: "18px"}}/>
                    <FaPlus/>
                </div>
            </div>
            <div className="relative cursor-pointer">
                <img src={teacher} alt='teacher' className="md:w-48 w-36 rounded-2xl"/>
                <label className="absolute left-0 bottom-0 bg-slate-200 py-1 px-5 rounded-r-[50px] rounded-b-[50px] font-bold  ">Ms. Kaur</label>
                {/* <GiSoundWaves style={{position: "absolute", top: "15px", left: "15px", fontSize: "30px", color: "slate"}}/> */}
                <div className="absolute left-5 top-3 text-4xl text-slate-300">
                    <GiSoundWaves/>
                </div>
            </div>
        </div>
        

        
        
        
        
        
        <div className=" flex flex-wrap gap-5 mx-5 " >
        {menuItems.map((item) => (
            <div key={item.id} className="">
                <div className={` p-2 rounded-xl ${ item.label === "Leave" ? "bg-cyan-600 text-white" : "bg-slate-200" }`}>{item.icon}</div>
                <p className="font-bold">{item.label}</p>
            </div>
        ))}
        </div>
        
        
    </div>
  )
}

export default Interaction