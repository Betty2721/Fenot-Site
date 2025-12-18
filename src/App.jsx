import React from 'react'
import Navbar from "./components/Navbar";
import Hero from './Home/Hero';
import About from './Home/About';
import Programs from './Home/Programs';
import TeamMembers from './Home/TeamMembers';
import NewsLetter from './Home/NewsLetter';
import Footer from './Home/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <TeamMembers />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default App
