import React from 'react';
import { Typography, AppBar, Card, CardActionArea, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core';
import './App.css';
const App = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="relative" sx={{ height: '10%' }}>
          <Toolbar>
            <Typography variant="h6">CREWS PNG</Typography>
          </Toolbar>
      </AppBar>
    </div>
  )
}

export default App;
