import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearchHeartFill, BsFillEmojiHeartEyesFill } from 'react-icons/bs'
import { RiUserReceived2Fill } from 'react-icons/ri'
import { Logo } from '../../Assets/'

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

const Navbar = () => {
  const hover = "hover:text-subMain transitions text-white"
  const Hover = ({isActive}) => (isActive ? 'text-subMain' : hover);

  return (
    <>
      <div className="bg-main shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
          <div className="col-span-1 lg:block hidden">
            <Link to="/UkAnimeClub">
              <img src={Logo} alt="logo" className='w-full h-12 object-contain' />
            </Link>
          </div>
          <div className="col-span-3">
            <form className='w-full text-sm bg-dryGray rounded flex-btn gap-4'>
              <button type='submit' className='bg-subMain w-12 flex-colo h-12 rounded text-white'>
                <BsSearchHeartFill/>
              </button>
              <input type="text" placeholder="Search anime" className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black" />
            </form>
          </div>
          <div className="col-span-3 font-medium text-md hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
            <NavLink to="/anime" className={Hover}>
              Anime
            </NavLink>
            <NavLink to="/about_us" className={Hover}>
              About Us
            </NavLink>
            <NavLink to="/contact_us" className={Hover}>
              Contact Us
            </NavLink>
            <NavLink to="/login" className={Hover}>
              <RiUserReceived2Fill className='w-8 h-8'/>
            </NavLink>
            <NavLink to="/favorite" className={Hover}>
              <BsFillEmojiHeartEyesFill className='w-6 h-6'/>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar