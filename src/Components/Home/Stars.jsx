import React from 'react'
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'

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


const Rating = ({value}) => {
  return (
    <>
        <span>
            {
                value >= 1 ? (<FaStar/>) : value >= 0.5 ? (<FaStarHalfAlt/>) : (<FaRegStar/>)
            }
        </span>
        <span>
            {
                value >= 2 ? (<FaStar/>) : value >= 1.5 ? (<FaStarHalfAlt/>) : (<FaRegStar/>)
            }
        </span>
        <span>
            {
                value >= 3 ? (<FaStar/>) : value >= 2.5 ? (<FaStarHalfAlt/>) : (<FaRegStar/>)
            }
        </span>
        <span>
            {
                value >= 4 ? (<FaStar/>) : value >= 3.5 ? (<FaStarHalfAlt/>) : (<FaRegStar/>)
            }
        </span>
        <span>
            {
                value >= 5 ? (<FaStar/>) : value >= 4.5 ? (<FaStarHalfAlt/>) : (<FaRegStar/>)
            }
        </span>
    </>
  )
}

export default Rating