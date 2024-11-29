import React from 'react';
import { CiSearch } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { IoIosArrowForward, IoIosArrowBack, IoIosOptions } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  const slides = [
    '/images/house1.jpg',
    '/images/house2.jpeg',
    '/images/house3.jpg',
    '/images/house4.jpg'
  ];

  return (
    <>
      {/* Background Gradient */}
      <div 
        className="absolute top-[40px] w-full h-[902px] z-[-1] hidden md:block"
        style={{
          borderRadius: "0 0 800px 800px",
          background: "linear-gradient(180deg, rgba(76, 201, 240, 0) 0%, rgba(67, 97, 238, 0.3) 100%)"
        }}
      />
      
      {/* Mobile Background */}
      <div 
        className="absolute top-[40px] w-full h-full z-[-1] md:hidden"
        style={{
          background: "linear-gradient(180deg, rgba(76, 201, 240, 0) 0%, rgba(67, 97, 238, 0.3) 100%)"
        }}
      />
      
      {/* Content Container */}
      <div className="container mx-auto">
 
  <div className="flex flex-col gap-8 px-8 lg:px-12 xl:px-[80px] py-8 xl:py-12 md:flex-row md:items-center md:justify-between relative">
    
    {/* Left Section */}
    <div className="flex-1 flex flex-col items-start relative z-10">
      <p className="text-[#4361EE] uppercase tracking-wide mb-4 text-left">REAL ESTATE</p>
      <h1 className="text-4xl lg:text-[48px] xl:text-[56px] 2xl:text-[64px] leading-tight font-bold mb-6 md:text-left">
        Find a perfect<br />
        home you love..!
      </h1>
      <p className="text-[#808080] mb-8 max-w-lg text-left">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
      </p>
      
      {/* Swiper Container */}
<div className="relative w-full max-w-[420px] lg:max-w-[480px] xl:max-w-[540px] overflow-hidden z-10 rounded-[1.5rem]">
  <Swiper
    modules={[Navigation, Pagination]}
    navigation={{
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    }}
    pagination={{
      el: '.swiper-pagination',
      clickable: true,
    }}
    className="relative"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <img
          src={slide}
          alt={`property-${index}`}
          className="w-full h-[200px] lg:h-[280px] xl:h-[340px] object-cover rounded-[1.5rem]"
        />
      </SwiperSlide>
    ))}
        <div className="swiper-button-prev absolute left-4 z-10 flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg cursor-pointer">
            <IoIosArrowBack className="text-gray-400" />
        </div>
            <div className="swiper-button-next absolute right-4 z-10 flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg cursor-pointer">
                <IoIosArrowForward className="text-gray-400" />
            </div>
            <div className="swiper-pagination absolute bottom-4"></div>
            </Swiper>
        </div>
            {/* Decorative Circle */}
            <div
                className="absolute w-[30px] lg:w-[40px] xl:w-[50px] h-[30px] lg:h-[40px] xl:h-[50px] bg-gradient-to-b from-[#4361EE] to-[#4361EE00] rounded-full transform rotate-[20deg] -z-10 left-[80%] xl:left-[35%] top-[45%] lg:top-[37%] lg:left-[47%] 2xl:left-[55%] 2xl:top-[40%]"
            />
            </div>

            {/* Search Panel */}
            <div className="bg-white rounded-3xl p-4 md:p-8 shadow-lg w-full md:w-[320px] lg:w-[360px] xl:w-[400px] mt-8 md:mt-0 z-10">
             <div className="flex justify-between px-4 mb-8 lg:mb-10 border-b">
                <button className="text-primary border-b-2 font-medium border-primary pb-2 px-2 text-sm lg:text-base">
                For Sale
                </button>
                <button className="text-gray-500 pb-2 font-medium px-2 text-sm lg:text-base">
                For Rent
                </button>
            </div>
            
            <div className="space-y-8 lg:space-y-10">
                <input
                type="text"
                placeholder="New York, San Francisco, etc"
                className="w-full p-3 border rounded-lg text-sm lg:text-base"
                />
                
                <select className="w-full p-3 border rounded-lg text-gray-500 text-sm lg:text-base">
                    <option>Select Property Type</option>
                    <option>Bungalow</option>
                </select>
                
                <select className="w-full p-3 border rounded-lg text-gray-500 text-sm lg:text-base">
                    <option>Select Rooms</option>
                    <option>1+1</option>
                    <option>2+1</option>
                </select>
                
                <button className="text-primary flex items-center gap-2 text-sm lg:text-base">
                  <IoIosOptions className='rotate-90'/>
                    Advance Search
                </button>
                
                <button className="w-full bg-primary text-white py-3 rounded-full flex items-center justify-center gap-2 text-sm lg:text-base">
                  <CiSearch className='text-2xl text-bold'/>
                    Search
                </button>
            </div>
        </div>
    </div>




        <div className="flex flex-col md:flex-row justify-center w-full px-4 md:px-0">
      <div className="flex flex-col pb-15 md:flex-row justify-between items-center w-full max-w-[710px] h-[250px] md:h-[100px] ">
        {/* Happy Customers */}
        <div className="flex items-center gap-2 px-5 py-5 w-80 rounded-[50px] bg-white shadow-lg transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-black/50">
          <div className="flex -space-x-4 ">
            <img 
              src="/images/pp1.jpg" 
              alt="Customer" 
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img 
              src="/images/pp2.jpg" 
              alt="Customer" 
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img 
              src="/images/pp3.jpg" 
              alt="Customer" 
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img 
              src="/images/pp4.jpg" 
              alt="Customer" 
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img 
              src="/images/pp5.jpg" 
              alt="Customer" 
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div className="w-10 h-10 rounded-full border-2 border-white bg-[#4361EE] flex items-center justify-center text-white text-sm ">
              +5
            </div>
          </div>
          <div>
            <p className="font-medium  text-black-text text-lg">72k+ Happy</p>
            <p className="text-black-text  font-medium text-lg">Customers</p>
          </div>
        </div>

       

        {/* New Listings */}
        <div className="flex items-center w-80 gap-4 shadow-lg px-8 py-5 rounded-[50px] bg-white transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-black/50">
          <img 
            src="/images/house5.jpg" 
            alt="House" 
            className="w-12 h-12 rounded-xl object-cover"
          />
          <div>
            <p className="text-black-text font-medium text-lg">200+ New</p>
            <p className="text-black-text font-medium text-lg">Listings Everyday!</p>
          </div>
        </div>
      </div>
    </div>


      </div>
    </>
  );
};

export default Hero;