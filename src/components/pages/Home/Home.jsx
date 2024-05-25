import React from 'react'
import Header from '../../../Layouts/LayoutsHome/Header.jsx'
import About from '../../../Layouts/LayoutsHome/About.jsx'
import TopScoreHP from '../../../Layouts/LayoutsHome/TopScoreHP.jsx'
import './Home.css'


const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <TopScoreHP />
    </div>
  )
}

export default Home