import React from 'react'
import Header from '../../../Layouts/LayoutsHome/Header.jsx'
import About from '../../../Layouts/LayoutsHome/About.jsx'
import Startgame from '../../../Layouts/LayoutsHome/Startgame.jsx'
import TopScoreHP from '../../../Layouts/LayoutsHome/TopScoreHP.jsx'


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