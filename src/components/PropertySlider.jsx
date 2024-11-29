import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PropertyCard = ({ price, title, address, beds, baths, image, tag, }) => {
  const getTagStyle = (type) => {
    switch(type) {
      case 'Popular':
        return 'bg-[#FFE1E1] text-[#FF1111] font-medium ' ;
      case 'New Listing':
        return 'bg-[#FFE1E1] text-[#119BFF] font-medium ';
      case 'Discounted Price':
        return 'bg-[#FFE1E1] text-[#00CE3A] font-medium ';
      default:
        return 'bg-[#FFE1E1] text-purple-600 font-medium';
    }
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-[450px] 2xl:h-[450px] xl:h-[470px]">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-[250px] cursor-pointer object-cover rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:scale-95 hover:shadow-xl hover:shadow-black/50"/>
          
            
            <span className={`absolute cursor-pointer bottom-4 left-4 px-4 py-2 rounded-full text-sm ${getTagStyle(tag)}`}>
            {tag}
          </span>
          
        
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-2xl font-semibold">${price.toLocaleString()}</h3>
        </div>
        <h4 className="text-xl font-medium mb-2">{title}</h4>
        <p className="text-gray-text  text-sm mb-4">{address}</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <IoBedOutline className="text-black-text " />
            <span className="text-black-text ">{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <LuBath className="text-black-text" />
            <span className="text-black-text">{baths} Bath</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PropertySlider = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const properties = [
    // For Sale Properties
    {
      price: 5970,
      title: 'Tranquil Haven in the Woods',
      address: '103 Wright CourtBurien, WA 98168',
      beds: 4,
      baths: 3,
      image: '/images/house9.jpg',
      tag: 'Popular',
      type: 'sell'
    },
    {
      price: 1970,
      title: 'Serene Retreat by the Lake',
      address: '1964 Jehovah Drive, VA 22408',
      beds: 3,
      baths: 2,
      image: '/images/house10.jpg',
      tag: 'New Listing',
      type: 'sell'
    },
    {
      price: 3450,
      title: 'Charming Cottage',
      address: '1508 Centennial Farm RoadHarlan, 51537',
      beds: 4,
      baths: 4,
      image: '/images/house11.jpg',
      tag: 'Discounted Price',
      type: 'sell'
    },
    {
      price: 4250,
      title: 'Modern City Apartment',
      address: '789 Urban Street, NY 10001',
      beds: 3,
      baths: 2,
      image: '/images/house12.jpg',
      tag: 'Popular',
      type: 'sell'
    },
    {
      price: 6150,
      title: 'Luxury Beachfront Villa',
      address: '321 Coastal Road, FL 33139',
      beds: 5,
      baths: 4,
      image: '/images/house1.jpg',
      tag: 'New Listing',
      type: 'sell'
    },
    // For Rent Properties
    {
      price: 99999999,
      title: 'Baykar N. T. Center',
      address: '456 City Center, CA 90012',
      beds: 256,
      baths: 180,
      image: '/images/house4.jpg',
      tag: 'For Rent',
      type: 'rent'
    },
    {
      price: 1800,
      title: 'Garden Apartment',
      address: '234 Park Ave, IL 60601',
      beds: 2,
      baths: 1,
      image: '/images/house2.jpeg',
      tag: 'For Rent',
      type: 'rent'
    },
    {
      price: 3200,
      title: 'Skyline Penthouse',
      address: '567 High Rise Blvd, TX 75001',
      beds: 3,
      baths: 2,
      image: '/images/house3.jpg',
      tag: 'For Rent',
      type: 'rent'
    },
    {
      price: 2500,
      title: 'Suburban Family Home',
      address: '890 Quiet Lane, MA 02108',
      beds: 4,
      baths: 3,
      image: '/images/house6.jpg',
      tag: 'For Rent',
      type: 'rent'
    },
    {
      price: 2500,
      title: 'Family Home Frontyard',
      address: '356 Loud Lane, LA 3558',
      beds: 2,
      baths: 1,
      image: '/images/house7.jpg',
      tag: 'For Rent',
      type: 'rent'
    }
  ];

  const filteredProperties = activeFilter === 'all' 
    ? properties 
    : properties.filter(property => property.type === activeFilter);

  return (
    <div className="container mx-auto md:px-[120px] px-8 py-8 sm:py-16">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8 mb-8">
        <div>
          <h2 className="text-blue-text uppercase text-base sm:text-lg font-medium mb-2">CHECKOUT OUR NEW</h2>
          <h1 className="text-3xl sm:text-4xl font-semibold">Latest Listed Properties</h1>
          <p className="text-gray-text mt-2 text-sm sm:text-base">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.
          </p>
        </div>
        <div className="flex flex-row justify-center  sm:flex-nowrap gap-8 sm:gap-4">
          <button 
            onClick={() => setActiveFilter('all')}
            className={`px-8 sm:px-8 py-3 sm:py-2 rounded-full transition-all text-sm sm:text-base ${
              activeFilter === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-white border border-primary hover:border-primary'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setActiveFilter('sell')}
            className={`px-7 sm:px-7 py-3 sm:py-2 rounded-full transition-all text-sm sm:text-base ${
              activeFilter === 'sell' 
                ? 'bg-primary text-white' 
                : 'bg-white border border-primary hover:border-primary'
            }`}
          >
            Sell
          </button>
          <button 
            onClick={() => setActiveFilter('rent')}
            className={`px-6 sm:px-6 py-3 sm:py-2 rounded-full transition-all text-sm sm:text-base ${
              activeFilter === 'rent' 
                ? 'bg-primary text-white' 
                : 'bg-white border border-primary hover:border-primary'
            }`}
          >
            Rent
          </button>

          
        </div>
        
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={false}  // Set to false
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 }
        }}
        className="property-swiper"
      >
        {filteredProperties.map((property, index) => (
          <SwiperSlide key={index}>
            <PropertyCard {...property} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div class="flex justify-center items-center ">
  <button class="bg-white text-primary px-8 py-3 rounded-3xl border border-primary sm:hidden hover:bg-primary hover:text-white">View More Properties</button>
  </div>
    </div>
  );
};

export default PropertySlider;