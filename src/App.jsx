import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomeScreen, AboutUs, NotFound, Movies, ContactUs } from './Screens'

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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen/>} />
      <Route path='/anime' element={<Movies/>} />
      <Route path='/contact_us' element={<ContactUs/>} />
      <Route path="/about_us" element={<AboutUs/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default App