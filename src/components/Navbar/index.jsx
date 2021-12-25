import React from 'react'
import { Typography, AppBar, CssBaseline,Toolbar, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import './Navbar.css';

const useStyles = makeStyles({
    appBar:{
        position: 'absolute',
        background: 'rgba(92, 8, 8, 0.3)',
        border: 0,
        borderRadius: 3,
        color: 'white',
        fontSize: 14,
        padding: '0 30px',
    },
    toolBar:{
        width: '90%',
        margin: 'auto'
    },
})
const Index = () => {
    const classes = useStyles()
  return (
    <div>
        <CssBaseline />
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Typography variant="p" style={{flexGrow: 1}}>CREWS PNG</Typography>
            <Button color='inherit'>
              ABOUT
            </Button>
            <Button color='inherit'>
              IMPACTS
            </Button>
            <Button color='inherit'>
              RESOURCES
            </Button>
            <Button color='inherit'>
              NEWS
            </Button>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Index
