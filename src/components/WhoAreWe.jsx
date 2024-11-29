import React from 'react'
import { BsHouse } from "react-icons/bs";
import { TbUserHexagon } from "react-icons/tb";

const WhoAreWe = () => {
  return (
    <div className="container mx-auto px-8 md:px-[100px] py-16 relative"> 
  {/* Gradient Ball */}
  <div className="hidden md:block absolute -z-10 top-[0%] left-[0%] w-[80px] h-[80px] bg-gradient-to-b from-[#4361EE] to-transparent rounded-full opacity-30" />
  
  <div className="flex flex-col items-start lg:flex-row gap-12">
    {/* Left Content */}
    <div className="flex-1 flex flex-col order-2 lg:order-1">
          <h2 className="text-blue-text uppercase text-lg font-medium mb-4 leading-[29.1px] tracking-[0.15em] text-left">
            WHO ARE WE
          </h2>
          <h1 className="text-4xl w-full md:text-4xl text-black-text  font-semibold mb-6">
            Assisting individuals in<br />
            locating the appropriate<br />
            real estate.
          </h1>
          <p className="text-gray-text font-normal text-base mb-12 max-w-lg">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it
          </p>

          {/* Images for mobile  */}
          <div className="lg:hidden block order-2 relative px-4 mb-12 ">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-1 row-span-2 ">
                <img 
                  src="/images/house6.jpg" 
                  alt="Modern house exterior" 
                  className="rounded-3xl w-full mt-10 object-cover h-[300px] md:h-[580px] "
                />
              </div>
              <div className="col-span-1 space-y-4">
                <img 
                  src="/images/house7.jpg" 
                  alt="Bedroom interior" 
                  className="rounded-3xl w-full object-cover md:h-[277px]"
                />
                <img 
                  src="/images/house8.jpg" 
                  alt="Living room" 
                  className="rounded-3xl w-full object-cover md:h-[200px]"
                />
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-4 order-3">
            <div className="group flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg max-w-lg hover:bg-blue-text hover:text-white">
              <div className="p-4 rounded-xl group-hover:bg-white">
                <BsHouse className="w-14 h-14 lg:w-12 lg:h-12 text-blue-text group-hover:text-blue-text-light" />
              </div>
              <div>
                <h3 className="text-blue-text text-xl font-medium group-hover:text-white">
                  Lorem ipsum has been the
                </h3>
                <p className="text-gray-text font-normal text-base group-hover:text-white pt-3">
                  when an unknown printer took a galley
                </p>
              </div>
            </div>

            <div className="group flex items-center gap-4 bg-white p-6 rounded-[30px] shadow-lg max-w-lg hover:bg-blue-text hover:text-white">
              <div className="p-4 rounded-xl group-hover:bg-white">
                <TbUserHexagon className="w-14 h-14 lg:w-12 lg:h-12 text-blue-text group-hover:text-blue-text-light" />
              </div>
              <div>
                <h3 className="text-blue-text text-xl font-medium group-hover:text-white">
                  Lorem ipsum has been the
                </h3>
                <p className="text-gray-text font-normal text-base group-hover:text-white pt-3">
                  when an unknown printer took a galley
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Grid - desktop */}
        <div className="flex-1 relative px-4 hidden lg:block order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-1 row-span-2">
              <img 
                src="/images/house6.jpg" 
                alt="Modern house exterior" 
                className="rounded-3xl w-full object-cover mt-10 md:h-[550px] transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-black/50"
              />
            </div>
            <div className="col-span-1 space-y-4">
              <img 
                src="/images/house7.jpg" 
                alt="Bedroom interior" 
                className="rounded-3xl w-full object-cover h-[277px] transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-black/50"
              />
              <img 
                src="/images/house8.jpg" 
                alt="Living room" 
                className="rounded-3xl w-full object-cover h-[200px] transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-black/50"
                
              />
              <div className="relative bottom-[35px] right-[-100px] w-[60px] h-[60px] bg-gradient-to-b from-[#4361EE] to-transparent rounded-full opacity-30" />
            </div>
          </div>
          
          
          
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;