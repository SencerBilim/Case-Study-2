import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
      name: "Barbara D. Smith",
      image: "/images/testimonial1.jpg"
    },
    {
        text: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
        name: "James Franco",
        image: "/images/pp1.jpg"
      },
      {
        text: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
        name: "Tobey Maguire",
        image: "/images/pp2.jpg"
      },
      {
        text: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
        name: "John Doe",
        image: "/images/pp3.jpg"
      },
    // Add more testimonials
  ];

  return (
    <div className="bg-white w-full min-h-[700px] lg:h-[600px] py-8 px-8">
      <div className="container mx-auto px-4 md:px-[120px] relative">
        {/* Content wrapper */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          {/* Left side */}
          <div className="flex-1 max-w-full md:pt-[100px] lg:max-w-[496px]">
            <h2 className="text-blue-text uppercase leading-[29.1px] tracking-[0.15em]  lg:text-left text-lg font-medium mb-4">
              TESTIMONIALS
            </h2>
            <h1 className="text-3xl lg:text-[48px] text-black-text font-semibold leading-tight mb-6  lg:text-left">
              Look What Our<br className="hidden lg:block" /> Customers Say!
            </h1>
            <p className="text-black-text text-base font-normal lg:text-left mb-8 lg:mb-0">
              Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.
            </p>

            <div className="hidden lg:flex gap-14 mt-16">
              <button className="testimonial-prev w-12 h-12 rounded-full border border-primary flex items-center justify-center group hover:bg-primary hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-primary group-hover:text-white">
                  <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button className="testimonial-next w-12 h-12 rounded-full border border-primary flex items-center justify-center group hover:bg-primary hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-primary group-hover:text-white">
                  <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Testimonial slider */}
          <div className="w-full lg:absolute lg:top-16 lg:right-[120px] lg:max-w-[500px]">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: '.testimonial-prev',
                nextEl: '.testimonial-next'
              }}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className='p-6'>
                  <div className="bg-white flex flex-col justify-between rounded-3xl pt-[100px] p-8 h-[350px] shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
                    <img src="/images/quote.png" alt="quote" className="absolute left-12 top-12" />
                    <p className="text-black-text text-base font-medium lg:text-lg mb-8">{testimonial.text}</p>
                    <div className="flex items-center gap-4">
                      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                      <div className='flex flex-col lg:flex-row justify-between lg:gap-28'>
                        <h4 className="font-medium text-base lg:text-lg">{testimonial.name}</h4>
                        <div className="flex flex-row gap-1 mt-2 lg:mt-0">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 lg:w-5 lg:h-5 ${i < 4 ? 'text-yellow-400' : 'text-yellow-400/50'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;