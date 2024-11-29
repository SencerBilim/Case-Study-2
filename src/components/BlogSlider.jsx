import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BlogCard = ({ date, month, title, description, image }) => {
  return (
    <div className="rounded-3xl overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-[220px] object-cover rounded-3xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-95 hover:shadow-xl hover:shadow-black/50"/>
        <div className="absolute top-0 left-10 bg-white rounded-b-lg px-3 py-1 flex flex-col items-center">
          <span className="text-lg font-semibold">{date}</span>
          <span className="text-sm font-normal">{month}</span>
        </div>
      </div>
      <div className="py-4 md:p-6">
        <h3 className="text-xl text-white font-semibold mb-3">{title}</h3>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

const BlogSlider = () => {
  const blogs = [
    {
      date: "28",
      month: "Nov",
      title: "Top 10 Home Buying Mistakes to Avoid",
      description: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
      image: "/images/blog1.jpg"
    },
    {
      date: "08",
      month: "Nov",
      title: "How to Stage Your Home for a Quick Sale",
      description: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
      image: "/images/blog2.jpg"
    },
    {
      date: "26",
      month: "Oct",
      title: "5 Tips for First-Time Home Sellers",
      description: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
      image: "/images/blog3.jpg"
    },
    {
      date: "13",
      month: "May",
      title: "5 Tips for How to Make a Website",
      description: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
      image: "/images/blog4.jpg"
    }
  ];

  // Separate rendering for mobile and desktop
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="bg-primary py-8 md:py-16">
      <div className="container mx-auto px-8 md:px-[120px]">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-white uppercase text-base md:text-lg font-medium mb-2 md:mb-4">WHAT'S TRENDING</h2>
          <h1 className="text-white text-3xl md:text-4xl font-semibold">Latest Blogs & Posts</h1>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col gap-6">
          {blogs.slice(0, 3).map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{
              el: '.blog-pagination',
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className} bg-white opacity-50 w-12 h-1 rounded-full"></span>`;
              },
            }}
            className="mb-12"
          >
            {blogs.map((blog, index) => (
              <SwiperSlide key={index}>
                <BlogCard {...blog} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev absolute left-[-60px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center">
            <IoIosArrowBack className="text-2xl" />
          </button>
          <button className="swiper-button-next absolute right-[-60px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center">
            <IoIosArrowForward className="text-2xl" />
          </button>

          <div className="blog-pagination flex justify-center gap-2 mt-8"></div>
        </div>
        <div className='pt-5 pb-5'>
            <button class="bg-white text-primary px-8 py-3 rounded-3xl font-medium sm:hidden ">View more blogs</button>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;