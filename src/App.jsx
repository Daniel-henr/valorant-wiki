import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Banner from './components/banner'
import About from './components/about'
import Agent from './components/agent'
import Rank from './components/rank'
import Competitive from './components/competitive'
import Footer from './components/footer'
import { ScrollReveal } from './js/scroll-reveal'


function App() {
  const [count, setCount] = useState(0)
  useEffect(() =>{
    ScrollReveal()
  }, [])

  return (
    <>

      <header>
        <Navbar />
      </header>

      <section className="banner " id='banner'>
        <Banner />
      </section>

      <section className='about ' id="about">
        <About />
      </section>

      <section className="agent" id="agent">
        <Agent />
      </section>

      <section className="rank" id="rank">
        <Rank />
      </section>

      <section className="competitive" id="competitive">
        <Competitive />
      </section>

      <footer>
        <Footer />
      </footer>

    </>

  )
}

export default App
