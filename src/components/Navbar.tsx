import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const Navbar: React.FC = () => {
  return (
    <>
    <div className="mx-auto">
      <AppBar
        color='default'
        position='static'
        style={{ alignItems: 'center'}}
      >
        <Toolbar>
          <AnchorLink href='#about' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button>
              ABOUT
            </Button>
          </AnchorLink>
          <AnchorLink href='#works' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button color='inherit'>
              WORKS
            </Button>
          </AnchorLink>
          <AnchorLink href='#timeline' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button>
              TIMELINE
            </Button>
          </AnchorLink>
          <AnchorLink href='#skills' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button color='inherit'>
              SKILLS
            </Button>
          </AnchorLink>
          <AnchorLink href='#contact' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button color='inherit'>
            CONTACT
            </Button>
          </AnchorLink>
        </Toolbar>
      </AppBar>
      </div>
    </>
  );
}

export default Navbar;