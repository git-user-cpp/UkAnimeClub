import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../Assets';

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

const Footer = () => {
  const Links = [
    {
      title: "Company",
      links: [
        {
          name: "Home",
          link: "/UkAnimeClub",
        },
        {
          name: "About Us",
          link: "/about_us",
        },
        {
          name: "Contact Us",
          link: "/contact_us",
        },
        {
          name: "Anime",
          link: "/anime",
        }
      ]
    },
    {
      title: "Top Categories",
      links: [
        {
          name: "Action",
          link: "#",
        },
        {
          name: "Romantic",
          link: "#",
        },
        {
          name: "Drama",
          link: "#",
        },
        {
          name: "Legendary",
          link: "#",
        }
      ]
    },
    {
      title: "My Account",
      links: [
        {
          name: "Dashboard",
          link: "/dashboard",
        },
        {
          name: "Favorite",
          link: "/favorite",
        },
        {
          name: "Profile",
          link: "/profile",
        },
        {
          name: "Change Password",
          link: "/password",
        }
      ]
    },
  ];

  return (
    <div className="bg-dry py-4 border=t-2 border-black">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
          {
            Links.map((link, index) => (
              <div key={index} className='col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0'>
                <h3 className='text-md lg:leading-7 font-medium mb-4 sm:mb5 lg:mb-6 pb-0.5'>
                  {link.title}
                </h3>
                <ul className=' text-sm flex flex-col space-y-3'>
                  {
                    link.links.map((text, index) => (
                      <li key={index} className='flex items-baseline'>
                        <Link to={text.link} className='text-border inline-block w-full transitions hover:text-subMain'>
                          {text.name}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }

          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <Link to="/">
              <img src={Logo} alt="logotype" className='w-60' />
            </Link>
            <p className=' leading-7 text-sm text-border mt-3'>
              Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Officiis, illo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer