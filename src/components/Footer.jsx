import React from 'react';
import { TbHomeCheck } from "react-icons/tb";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
    return (
      <div>
        {/* Main Footer */}
        <div className="bg-[#4361EE]/10">
          <div className="container mx-auto px-4 md:px-[120px]">
            {/* Mobile Footer */}
            <div className="flex flex-col items-center text-center md:hidden py-8">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <TbHomeCheck className="text-2xl text-white" />
                
              </div>
              
              <p className="text-[#808080] mt-6 max-w-[280px]">
                Lorem Ipsum has been the industry's standard dummy
              </p>
  
              <div className="mt- text-[#808080] space-y-2">


              <div className=" pt-6">
                  <p className="flex items-center gap-2">
                    <AiOutlinePhone className="h-6 w-6 text-[#808080]" />
                    <span>+90123 45 67</span>
                  </p>
                  <p className="flex items-center pt-4 gap-2">
                    <MdOutlineMail className="h-6 w-6 text-[#808080]" />
                    <span>mail@mail.com</span>
                  </p>
                </div>
                
              </div>
  
              <div className="w-full max-w-[280px] mt-8">
                <h3 className="font-semibold text-lg mb-4">Subscribe to our Newsletter!</h3>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 pr-12 rounded-[50px] border"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white h-10 w-10 rounded-[50px]">
                    <FaArrowRightLong className="absolute right-3 top-1/2 -translate-y-1/2" />
                  </button>
                </div>
              </div>
  
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us on</h4>
                <div className="flex gap-4">
                  <FaLinkedinIn className="text-primary h-6 w-6" />
                  <FaFacebookF className="text-primary h-6 w-6" />
                  <FaInstagram className="text-primary h-6 w-6" />
                </div>
              </div>
            </div>
  
            {/* Desktop Footer  */}
            <div className="hidden md:grid md:grid-cols-4 gap-8 h-[420px] py-16">
             
              {/* Logo Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <TbHomeCheck className="text-2xl text-white cursor-pointer" />
                  </div>
                  <span className="text-xl font-semibold">Rezilla</span>
                </div>
                <p className="text-black-text font-medium pt-4">
                  Lorem ipsum has been the industry standard dummy text
                </p>
                <div className="space-y-5 pt-6">
                  <p className="flex items-center gap-2">
                    <AiOutlinePhone className="h-6 w-6 text-black-text" />
                    <span>+90123 45 67</span>
                  </p>
                  <p className="flex items-center pt-4 gap-2">
                    <MdOutlineMail className="h-6 w-6 text-black-text" />
                    <span>mail@mail.com</span>
                  </p>
                </div>
              </div>
  
              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-lg mb-9 mt-4">Quick Links</h3>
                <ul className="space-y-2">
                  {['Home', 'About', 'Listings', 'Services', 'Blogs', 'Become a Agent'].map((link) => (
                    <li key={link} className="text-black-text font-normal hover:text-primary cursor-pointer">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
  
              {/* Discovery */}
              <div>
                <h3 className="font-semibold text-lg mb-9 mt-4">Discovery</h3>
                <ul className="space-y-2">
                  {['Canada', 'United States', 'Germany', 'Africa', 'India'].map((location) => (
                    <li key={location} className="text-black-text hover:text-primary cursor-pointer">
                      {location}
                    </li>
                  ))}
                </ul>
              </div>
  
              {/* Subscribe Section */}
              <div>
                <h3 className="font-semibold text-lg mb-5 mt-4">Subscribe to our Newsletter!</h3>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 pr-12 rounded-[50px] border focus:outline-none focus:border-primary"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white h-10 w-10 rounded-[50px]">
                    <FaArrowRightLong className="absolute right-3 top-1/2 -translate-y-1/2" />
                  </button>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Follow Us on</h4>
                  <div className="flex gap-4">
                    <a href="#" className="text-primary hover:text-primary/80">
                      <FaLinkedinIn className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-primary hover:text-primary/80">
                      <FaFacebookF className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-primary hover:text-primary/80">
                      <FaInstagram className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Black Footer */}
        <div className="bg-black px-4 md:px-[160px] 2xl:px-[120px] h-[50px] flex justify-center md:justify-between items-center">
          <p className="text-[#AAAAAA] text-sm md:text-base">© Company - All rights reserved</p>
          <div className="hidden md:flex text-[#AAAAAA] gap-6">
            <p className="cursor-pointer">Terms and Conditions</p>
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Disclaimer</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;