import React from 'react'
import { Swiper, SwiperSlide } from 'swiper'

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
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{delay: 4000, disableOnInteraction: false}}
        className='w-full xl:h-96 bg-dry lg:h-64 h-48'
      >

      </Swiper>
    </div>
  )
}

export default Banner