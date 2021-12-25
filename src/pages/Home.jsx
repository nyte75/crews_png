import React from 'react';
import { Typography, Grid, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import { Navbar } from '../components';


const useStyles = makeStyles({
  root : {
    background : 'rgb(45, 55, 78);',
  },
  toor: {
    width: '85%',
    margin: 'auto',
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
const Home = () => {
  const classes = useStyles()
  return (
    <div className = {classes.root}>
      <div className= {classes.toor}>
        <Navbar />
        <main className={classes.main}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <Typography variant="h2" >Climate Risk and Early Warning Systems</Typography>
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

export default Home;
