import React from 'react'
import Navbar from './components/Navbar'
import MyAvatar from './components/MyAvatar'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import Timeline from './components/Timeline'
import Footer from './components/Footer'


const App: React.FC = () => {
  
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <MyAvatar />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='timeline'>
        <Timeline />
      </section>
      <section id='works'>
        <Works />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default App;