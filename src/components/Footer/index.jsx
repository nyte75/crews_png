import React from 'react'
import { Typography, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        background: '#fff',
    },
})
const Index = () => {
    const classes = useStyles()

    return (
        <div>
            <Grid container spacing={2} className={classes.root}>
                <Grid item xs={12} md={6}>
                    <Typography variant='h3'>Hello</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography variant='h3'>World</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Index
