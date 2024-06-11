import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar/Navbar'
import TitleCards from '../components/Navbar/TitleCards/TitleCards'
import Footer from '../components/Navbar/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
<Navbar />
      <div className="hero">
        <img src="./hero_banner.jpg" alt="" className='banner'/>
        <div className="hero-cap">
          <img src="./hero_title.png" alt="" className='cap'/>
          <p>Discovering his ties to a secret ancient order, a young
living in modern Istanbul embarks on a quest to save the
city from an immortal enemy.</p>
<div className="hero-btns">
  <button className='btn'><img src="./play_icon.png" alt="" />Play</button>
  <button className='btn dark-btn'><img src="./info_icon.png" alt="" />More Info</button>
</div>
<TitleCards />
        </div>
      </div>
<div className="more-card">
<TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
<TitleCards title={"Only on Netflix"}category={"popular"} />
<TitleCards title={"Upcoming"} category={"upcoming"}/>
<TitleCards title={"Top Pics for You"} category={"now_playing"} />
  


</div>
<Footer />
    </div>
  )
}
 
export default Home
