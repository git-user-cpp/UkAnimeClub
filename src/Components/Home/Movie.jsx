import React from 'react'
import {Link} from 'react-router-dom'
import {FaHeart} from 'react-icons/fa'

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

const Movie = ({movie}) => {
  return (
    <div className='border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden'>
      <Link to={`${movie?.name}`} className='w-full'>
        <img src={`${movie?.image}`} alt={movie?.image} className='w-full h-64 object-cover'/>
      </Link>
      <div className='absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3'>
        <h3 className='font-semibold truncate'>{movie?.name}</h3>
        <button className='w-9 h-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md bg-subMain text-white'>
          <FaHeart/>
        </button>
      </div>
    </div>
  )
}

export default Movie