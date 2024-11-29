import React, { useState } from "react";
import { RiMapPin2Line, RiCloseLine, RiMenuLine } from "react-icons/ri";
import { AiOutlinePhone } from "react-icons/ai";
import { MdMailOutline } from "react-icons/md";
import { LiaUserCircle } from "react-icons/lia";
import { TbHomeCheck } from "react-icons/tb";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="h-[40px] w-full bg-primary text-white flex-row justify-between md:flex hidden">
        <div className="flex flex-row py-2 px-4 md:px-20">
          <RiMapPin2Line className="text-xl mr-2" />
          <p className="text-sm font-normal truncate">
            Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>

        <div className="flex flex-row py-2 pr-4 md:pr-16">
          <AiOutlinePhone className="text-xl mr-1" />
          <p className="text-sm font-normal pr-4">+90123 45 67</p>
          <MdMailOutline className="text-xl ml-2 mr-2" />
          <p className="text-sm font-normal">mail@mail.com</p>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="h-[80px] w-full flex items-center justify-between px-4 md:px-[120px] relative">
        {/* Desktop Links */}
        <div className="hidden md:flex gap-4 items-center">
          <span className="bg-[#4361EE4D]/30 text-black-text font-medium hover:bg-primary hover:text-white px-3 py-2 rounded-[50px] cursor-pointer transition">
            Home
          </span>
          <span className="text-black-text cursor-pointer font-medium hover:bg-primary hover:text-white px-2 py-2 rounded-[50px]">About</span>
          <span className="text-black-text cursor-pointer font-medium hover:bg-primary hover:text-white px-2 py-2 rounded-[50px]">Listings</span>
          <span className="text-black-text cursor-pointer font-medium hover:bg-primary hover:text-white px-2 py-2 rounded-[50px]">Services</span>
          <span className="text-black-text cursor-pointer font-medium hover:bg-primary hover:text-white px-2 py-2 rounded-[50px]">Blogs</span>
        </div>

        {/* Logo */}
        <div className="flex items-center shrink-0">
          <div className="w-[40px] h-[40px] rounded-full bg-primary flex items-center justify-center">
            <TbHomeCheck className="text-2xl text-white cursor-pointer" />
          </div>
          <span className="text-lg font-semibold pl-3 cursor-pointer">Logo</span>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-text-black-text font-medium text-base flex items-center gap-2 cursor-pointer">
            <LiaUserCircle className="text-2xl" />
            Login/Register
          </span>
          <button className="bg-primary text-white px-6 py-2 rounded-full  flex items-center gap-2">
            <TbHomeCheck className="text-xl" />
            Add Listing
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-10 absolute right-10">
          {isOpen ? (
            <RiCloseLine className="text-3xl text-black-text" />
          ) : (
            <RiMenuLine className="text-3xl texttext" />
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed right-0 top-24 flex flex-col items-start justify-start gap-8 bg-black/80 p-12 w-1/2 h-[calc(100vh-6rem)] border-l border-gray-800 md:hidden z-40">
            <div className="flex flex-col gap-4">
              <span className="bg-primary px-4 py-2 rounded-full text-white hover:bg-primary hover:text-white text-center">
                Home
              </span>
              <span className="text-white text-center">About</span>
              <span className="text-white text-center">Listings</span>
              <span className="text-white text-center">Services</span>
              <span className="text-white text-center">Blogs</span>
              <span className="text-white font-medium text-base flex items-center gap-2 justify-center">
                <LiaUserCircle className="text-2xl" />
                Login/Register
              </span>
              <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-[#4361EE4D]/30 hover:text-black-nav flex items-center gap-2 justify-center">
                <TbHomeCheck className="text-xl" />
                Add Listing
              </button>
            </div>
          </div>
        )}
        
      </div>
    </>
  );
};

export default Navbar;
