import React, { useState } from 'react'
import Titles from './Titles'
import {BsBookmarkStarFill} from 'react-icons/bs'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Autoplay} from 'swiper/modules'
import {Movies} from '../../Data/MoviesData'

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

  return (
    <div className='my-16'>
      <Titles title='Top Rated' Icon={BsBookmarkStarFill}/>
      <div className='mt-10'>
        <Swiper 
          navigation={{nextEl, prevEl}}
          slidesPerView={2} 
          spaceBetween={40} 
          autoplay={{delay: 1000, disableOnInteraction: false}} 
          speed={1000} 
          loop={true} 
          modules={[Navigation, Autoplay]}
        >
          {
            Movies.map((movie, index) => (
              <SwiperSlide key={index}>
                <div className='p-4 border border-border bg-dry rounded-lg overflow-hidden'>
                  <img 
                    src={movie?.image} 
                    alt={movie?.image} 
                    className='w-full h-80 object-cover rounded-lg'
                  />
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default TopRated