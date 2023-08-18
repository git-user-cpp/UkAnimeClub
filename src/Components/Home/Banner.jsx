import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Movies } from '../../Data/MoviesData'
import 'swiper/css/bundle'
import 'swiper/css/autoplay'
import { FaCalendarAlt, FaHeart } from 'react-icons/fa'
import { BiTime } from 'react-icons/bi'

/*   
Copyright 2023 Andrew Kushyk

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const Banner = () => {
  return (
    <div className="relative w-full">
      <Swiper
        direction='vertical'
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{delay: 4000, disableOnInteraction: false}}
        className='w-full 
          xl:h-96 
          bg-dry 
          lg:h-64 h-48'
      >
        {
          Movies.slice(0, 6).map((movie, index) =>(
            <SwiperSlide key={index}>
              <img
                src={movie.image}
                alt={movie.name}
                className=' w-full 
                  h-full 
                  object-cover'
              />
              <div 
                className="absolute
                  linear-bg
                  xl:pl-52 
                  sm:pl-32 
                  pl-8 
                  top-0 
                  bottom-0 
                  right-0 
                  left-0 
                  flex 
                  flex-col 
                  justify-center 
                  lg:gap-8
                  md:gap-5
                  gap-4"
              >
                <h1 className=' xl:text-4xl
                  truncate 
                  capitalize 
                  font-sans 
                  sm:text-2xl 
                  text-xl 
                  font-bold'
                >
                  {movie.name}
                </h1>
                <div className="flex
                  gap-5
                  items-center
                  text-dryGray"
                >
                  <div className="flex
                    items-center
                    gap-2"
                  >
                    <span className='text-sm font-medium'>
                      {movie.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2"
                  >
                    <FaCalendarAlt className='text-subMain w-3 h-3' />
                    <span className='text-sm font-medium'>
                      {movie.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-2"
                  >
                    <BiTime className='text-subMain w-3 h-3' />
                    <span className='text-sm font-medium'>
                      {movie.time}
                    </span>
                  </div>
                </div>
                <div className="flex
                  gap-5
                  items-center
                  text-dryGray"
                >
                  <Link to={movie.name}
                    className="bg-subMain 
                    hover:text-main 
                    transitions 
                    text-white 
                    px-8 
                    py-3 
                    rounded 
                    font-bold 
                    sm:text-sm 
                    text-xs
                    items-center"
                  >
                    Watch
                  </Link>
                  <button className="bg-white 
                    hover:text-subMain 
                    hover:bg-main
                    transitions 
                    text-white 
                    px-4 
                    py-3 
                    rounded 
                    text-sm 
                    bg-opacity-30">
                    <FaHeart />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Banner