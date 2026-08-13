import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyAvatar from './components/MyAvatar'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import Timeline from './components/Timeline'
import Videos from './components/Videos'
import Footer from './components/Footer'
import VideosPage from './components/VideosPage'
import WorksPage from './components/WorksPage'

const Home = () => (
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
    <section id='works'>
      <Works />
    </section>
    <section id='videos'>
      <Videos />
    </section>
    <section id='timeline'>
      <Timeline />
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
)

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/works" component={WorksPage} />
        <Route path="/videos" component={VideosPage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
