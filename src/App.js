import React from 'react';
import { Typography, AppBar, CssBaseline,Toolbar, Grid, Box} from '@material-ui/core';
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
  },
  desc: {
    fontSize: 18,
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
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Typography variant="h2">Climate Risk and Early Warning Systems</Typography>
                 <Typography variant="h5">Papua New Guinea</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="p" className={classes.desc}>
CREWS is a mechanism that funds Least Developed Countries (LDC) and Small Island Developing States (SIDS) for risk informed early warning services</Typography>
              </Box>
            </Grid>

          </Grid>
         
        </main>
        <main className={classes.main}>
          <Typography variant="h4">managing App</Typography>
        </main>
      </div>
      
    </div>
  )
}

export default App;
