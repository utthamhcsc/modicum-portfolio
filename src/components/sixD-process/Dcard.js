import { Box, Grid, Icon, makeStyles, Paper, Typography } from '@material-ui/core'
import { Person } from '@material-ui/icons'
import React from 'react'

function Dcard({data,classes,active,index}) {
    const {title,description}=data;
     let isActive=active==index;
    return (
        <>
        <Paper className={`${classes.paper+ (+ isActive?' active':'')}`}  variant='outlined'>
            <Person/>
            <Typography variant='h6'>{title}</Typography>
        
            </Paper>
            
       </>
    )
}

export default Dcard

