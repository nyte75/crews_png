import React from 'react';
import { Typography, Grid, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import { Navbar, Lgmap, Cardsm, Footer } from '../components';
import './Pages.css'

const grue  = {
  color1 : '#537892',
  color2 : '#a7b7c6',
  color3 : '#f3efdf',
  color4 : '#bdcfaa',
  color5 : '#8eae83',
  black : '#000',
}
const useStyles = makeStyles({
  title : {
    fontFamily: 'Bebas Neue',
    fontSize: 70,
    color: 'linear-gradient(90deg, rgba(139, 192, 74, 1) 0%, rgba(0, 150, 136, 1) 50%, rgba(63, 81, 181, 1) 100%)'
  },
  titleSm :{
    fontFamily: 'Oswald',
    fontWeight: 400,
  },
  desc: {
    fontSize : 15,
    color: grue.color3,
  }
})
const Home = () => {
  const classes = useStyles()
  return (
    <div className = "root">
      <div className= "toor">
        <Navbar />
        <main className="main">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <Typography variant="h2" className={classes.title}>Climate Risk and Early Warning Systems</Typography>
                 <Typography variant="h5" className={classes.titleSm}>Papua New Guinea</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="p" className={classes.desc}>
                  CREWS is a mechanism that funds Least Developed Countries (LDC) and Small Island Developing 
                  States (SIDS) for risk informed early warning services.<br/><br/>
                  In Papua New Guinea, CREWS builds the capacity of the national meteorological agency and 
                  strengthens its cooperation with key sectoral ministries, departments and other stakeholders 
                  for agriculture, disaster management, energy and infrastructure.
                </Typography>
              </Box>
            </Grid>
          </Grid>
         
        </main>
        <map className="main lg-map">
          <Lgmap />
        </map>
        <main className="main">
          <Cardsm />
        </main>
        <Footer />
      </div>
      
    </div>
  )
}

export default Home;
