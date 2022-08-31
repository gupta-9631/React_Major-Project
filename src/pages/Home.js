import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Slider from '../Components/Slider'
import CategoryItem from '../Components/CategoryItem'
import Categories from '../Components/Categories'


const Home = () => {
  return (
    <div>
      <Announcement/>
     <Navbar/>
     <Slider/>
    
     <Categories/>
    
    </div>
  )
}

export default Home
