import React from 'react'
import {FiUser} from 'react-icons/fi'
import {Mobile} from '../../Assets'

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

const Promos = () => {
  return (
    <div className='my-20 py-10 md:px-20 px-8 bg-dry rounded-lg'>
      <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
        <div className='flex lg:gap-10 gap-6 flex-col'>
          <h1 className='xl:text-3x1 text-xl capitalize font-medium leading-relaxed'>
            Download Anime & Watch Offline <br/> Enjoy On Your Mobile
          </h1>
          <p className=' text-text text-sm xl:text-base leading-6 xl:leading-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, doloremque!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, doloremque!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, doloremque!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, doloremque!
          </p>
          <div className='flex gap-4 md:text-lg text-sm'>
            <div className='flex-colo bg-black text-subMain px-6 py-3 rounded font-bold'>
              HD 4K
            </div>
            <div className='flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded font-bold'>
              <FiUser/> 2K
            </div>
          </div>
        </div>
        <div>
          <img src={Mobile} alt="Mobile app" className='w-full object-contain rounded-lg' />
        </div>
      </div>
    </div>
  )
}

export default Promos