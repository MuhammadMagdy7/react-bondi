import React from 'react'
import About from '../components/About/About';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Loading from '../components/Loading/Loading';
import Portfolio from '../components/Portfolio/Portfolio';
import Team from '../components/Team/Team';
import Tech from '../components/Tech/Tech';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const Home = () => {
  return (
    <div>
        <Loading />
        <Hero />
        <Portfolio />

            <About />
            <Team />
                <Tech />
                <Blog />
                <Footer />

        
    </div>
  )
}

export default Home

// <Route path='/a' element={}/>
// <Route path='/services' element={<Hero />}/>
// <Route path='/portfolio' element={<Portfolio />}/>
// <Route path='/about' element={<About />}/>
// <Route path='/contact' element={<Team />}/>