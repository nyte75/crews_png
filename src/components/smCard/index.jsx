import React, {useState, useEffect} from 'react'
import { Card, CardContent, CardActions,CardMedia } from '@material-ui/core';
import Img from '../../assests/images/shringan.png';
const index = () => {
    return (
        <div>
            <Card>
                <CardMedia image={Img}/>
                <CardContent>
                    <h3>Here we are dont turn away now</h3>
                </CardContent>
            </Card>
        </div>
    )
}

export default index
