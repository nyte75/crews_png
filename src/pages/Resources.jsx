import React from 'react'
import { Typography } from '@material-ui/core';
import { Navbar } from '../components'
import './Pages.css';
const Resources = () => {
    return (
        <div className="root">
            <div className="toor">
                <Navbar/>
                <div className="main">
                    <Typography variant="h3">Resources</Typography>
                </div>
            </div>
        </div>
    )
}

export default Resources
