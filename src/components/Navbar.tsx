import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const Navbar: React.FC = () => {
  const history = useHistory()
  const location = useLocation()

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      history.push('/')
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <>
    <div className="mx-auto">
      <AppBar
        color='default'
        position='static'
        style={{ alignItems: 'center'}}
      >
        <Toolbar>
          <Button onClick={() => scrollToSection('about')}>
            ABOUT
          </Button>
          <Button color='inherit' onClick={() => history.push('/works')}>
            WORKS
          </Button>
          <Button color='inherit' onClick={() => history.push('/videos')}>
            VIDEOS
          </Button>
          <Button onClick={() => scrollToSection('timeline')}>
            TIMELINE
          </Button>
          <Button color='inherit' onClick={() => scrollToSection('skills')}>
            SKILLS
          </Button>
          <Button color='inherit' onClick={() => scrollToSection('contact')}>
            CONTACT
          </Button>
        </Toolbar>
      </AppBar>
      </div>
    </>
  );
}

export default Navbar;
