import React from 'react'
import Titles from './Titles'
import {FaFilm} from 'react-icons/fa'
import Movie from './Movie'
import { Movies } from '../../Data/MoviesData'

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

const PopularMovies = () => {
  return (
    <div className='my-16'>
      <Titles title='Popular Anime' Icon={FaFilm}/>
      <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
        {
          Movies.slice(0, 8).map((movie, index) => (
            <Movie key={index} movie={movie}/>
          ))
        }
      </div>
    </div>
  )
}

export default PopularMovies