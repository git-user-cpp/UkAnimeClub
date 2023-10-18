import React, { useState } from 'react'
import Titles from './Titles'
import {BsBookmarkStarFill} from 'react-icons/bs'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Autoplay} from 'swiper/modules'
import {Movies} from '../../Data/MoviesData'
import {FaHeart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Rating from './Stars'
import {BsCaretRightFill, BsCaretLeftFill} from 'react-icons/bs'

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

const TopRated = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const classNames = 'hover:bg-dry transitions text-small rounded w-8 h-8 flex-colo bg-subMain text-white';

  return (
    <div className='my-16'>
      <Titles title='Top Rated' Icon={BsBookmarkStarFill}/>
      <div className='mt-10'>
        <Swiper 
          navigation={{nextEl, prevEl}}
          slidesPerView={2} 
          spaceBetween={40} 
          autoplay={{delay: 1000, disableOnInteraction: false}} 
          speed={2000} 
          loop={true} 
          modules={[Navigation, Autoplay]}
        >
          {
            Movies.map((movie, index) => (
              <SwiperSlide key={index}>
                <div className='p-4 hovered border border-border bg-dry rounded-lg overflow-hidden'>
                  <img 
                    src={movie?.image} 
                    alt={movie?.image} 
                    className='w-full h-80 object-cover rounded-lg'
                  />
                  <div className='transitions px-4 gap-6 hoveres text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0 rounded-lg'>
                    <button className='w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white'>
                      <FaHeart/>
                    </button>
                    <Link to={movie.name} className='font-semibold text-xl trancuted line-clamp-2'>
                      {movie.name}
                    </Link>
                    <div className='flex gap-2 text-star'>
                      <Rating value={movie.rating}/>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className='w-full px-1 flex-rows gap-6 pt-12'>
          <button className={classNames} ref={(node) => setPrevEl(node)}>
            <BsCaretLeftFill/>
          </button>
          <button className={classNames} ref={(node) => setNextEl(node)}>
            <BsCaretRightFill/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopRated