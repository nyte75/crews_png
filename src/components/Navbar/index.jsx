import React, { useState } from 'react'
import { Typography, AppBar, CssBaseline,Toolbar, Button} from '@material-ui/core';
import { Menu, Close } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import './Navbar.css';

const useStyles = makeStyles({
    appBar:{
        position: 'absolute',
        background: 'rgba(163, 176, 189, 0.3)',
        border: 0,
        borderRadius: 3,
        color: 'white',
        fontSize: 18,
        padding: '0 30px',
    },
    toolBar:{
        width: '90%',
        margin: 'auto'
    },
    linkStyle:{
      color: '#ffffff',
      textDecoration: 'none',
    },
    
})
const Index = () => {
    const classes = useStyles()
    const [toggleMenu, setToggleMenu] = useState(false)

    const Nav = () => (
    <div>
            <Link to="/" className={classes.linkStyle} >
              <Button color='inherit'>
                HOME
              </Button>
            </Link>
            <Link to="/impacts" className={classes.linkStyle} >
              <Button color='inherit'>
                IMPACTS
              </Button>
            </Link>
            <Link to="/resources" className={classes.linkStyle} >
               <Button color='inherit'>
                  RESOURCES
                </Button>
            </Link>
            <Link to="/news" className={classes.linkStyle} >
              <Button color='inherit'>
                NEWS
              </Button>
            </Link>
    </div>
  )
  return (
    <div>
        <CssBaseline />
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Typography variant="p" style={{flexGrow:1}}>CREWS PNG</Typography>
            <Nav />
            <>
              {toggleMenu
                ?<Close size={27} onClick={() => setToggleMenu(false)}/>
                :<Menu size={27} onClick={() => setToggleMenu(true)}/>
              }
              {toggleMenu && (
                <div className={classes.mobile}>
                  <Nav />
                </div>
              )}
            </>
          </Toolbar>
        </AppBar>
    </div>
  )
  
}

export default Index
