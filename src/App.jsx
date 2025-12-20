import React from 'react'
import Navbar from "./components/Navbar";
import Hero from './Home/Hero';
import About from './Home/About';
import Programs from './Home/Programs';
import Counter from './Home/Counter'
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
      <Counter />
      <TeamMembers />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default App
