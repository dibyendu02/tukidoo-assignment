import React from 'react'

import { HiOutlineVideoCamera } from "react-icons/hi";
import { MdMicNone } from "react-icons/md";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { PiWechatLogo } from "react-icons/pi";
import { IoExitOutline } from "react-icons/io5";

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
    <div className="w-[15%] h-[70%] top-[22%] left-[10%] flex flex-col gap-5 items-center  absolute">
        <img src={student} alt='student' className="w-48 rounded-2xl" />
        <img src={teacher} alt='teacher' className="w-48 rounded-2xl"/>
        
        
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