import React from 'react'
import { Typography } from '@material-ui/core'
import { Navbar } from '../components'
const News = () => {
  return (
     <div className="root">
            <div className="toor">
                <Navbar/>
                <div className="main">
                    <Typography variant="h3">News</Typography>
                </div>
            </div>
        </div>
  )
}

export default News
