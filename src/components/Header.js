import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

const Header = () => {
  return (
    <div className="w-[87%] h-[8%] left-[10%] top-[2%] flex justify-between items-center absolute ">
        <div className="flex gap-3">
            <div className="bg-slate-200 p-3 text-gray-400 rounded-xl">
                <FaAngleLeft/>
            </div>
            <h1 className="text-3xl font-bold">Basic Mathematics 101</h1>
        </div>
        <div className="flex gap-5">
            <div className="flex items-center gap-2">
                <div className="bg-teal-700 text-white p-3 rounded-[50px] ">
                    <IoCall/>
                </div>
                
                <p className="font-bold">Call Teacher</p>
            </div>
            <div className="flex items-center gap-2">
                <div className="bg-orange-400 text-white p-3 rounded-[50px]">
                    <BiSupport/>
                </div>
                
                <p className="font-bold">Support</p>
            </div>
        </div>
    </div>
  )
}

export default Header