import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

const Header = () => {
  const handlePhoneNumberClick = () => {
    const phoneNumber = "1234567890";
    const telUrl = `tel:${phoneNumber}`;

    if (window.location.href !== telUrl) {
      window.location.href = telUrl;
    } else {
      console.log(
        "Unable to initiate a phone call. Please dial the number manually."
      );
    }
  };
  const handleSupportClick = () => {
    const emailAddress = "support@gmail.com";
    const subject = "support";
    const body = "Body of the email";

    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };
  return (
    <div className="w-[87vw]  flex justify-between items-center">
      <div className="flex gap-3">
        <div className="bg-slate-200 p-3 text-gray-400 rounded-xl flex justify-center items-center cursor-pointer">
          <FaAngleLeft />
        </div>
        <h1 className=" text-lg md:text-3xl font-bold">Basic Mathematics 101</h1>
      </div>
      <div className="flex gap-5">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handlePhoneNumberClick}
        >
          <div className="bg-teal-700 text-white p-3 rounded-[50px] ">
            <IoCall />
          </div>

          <p className="font-bold hidden md:block">Call Teacher</p>
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleSupportClick}
        >
          <div className="bg-orange-400 text-white p-3 rounded-[50px]">
            <BiSupport />
          </div>
          <p className="font-bold hidden md:block">Support</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
