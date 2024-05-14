import React from 'react'
import Header from '../../../layouts/LayoutsHome/Header.jsx'
import About from '../../../layouts/LayoutsHome/About.jsx'
import Startgame from '../../../layouts/LayoutsHome/Startgame.jsx'
import TopScoreHP from '../../../layouts/LayoutsHome/TopScoreHP.jsx'


const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Startgame />
      <TopScoreHP />
    </div>
  )
}

export default Home