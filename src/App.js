import React from 'react';
import { Typography, AppBar, CssBaseline,Toolbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import './App.css';

const useStyles = makeStyles({
  root : {
    background : 'rgb(45, 55, 78);',
    
  },
  toor: {
    width: '85%',
    margin: 'auto',
  },
  appbar : {
    position: 'absolute',
    background: 'rgba(255, 255, 255, .3)',
    border: 0,
    borderRadius: 3,
    color: 'white',
    fontSize: 16,
    padding: '0 30px',
  },
  main : {
    height : '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
const App = () => {
  const classes = useStyles()
  return (
    <div className = {classes.root}>
      <div className= {classes.toor}>
        <CssBaseline />
        <AppBar className={classes.appbar }>
          <Toolbar>
            <Typography variant="p">CREWS PNG</Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.main}>
          <Typography variant="h4">Climate Risk and Early Warning Systems</Typography>
        </main>
        <main className={classes.main}>
          <Typography variant="h4">managing App</Typography>
        </main>
      </div>
      
    </div>
  )
}

export default App;
