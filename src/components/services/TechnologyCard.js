import { Box, Icon, makeStyles, Paper, Typography } from '@material-ui/core'
import { Person } from '@material-ui/icons'
import React from 'react'
const useStyles=makeStyles((theme)=>({
root:{
    flex:'1',
    width:'80%',
    margin:'20px auto',
    display:'grid',
    gap:"20px",
    gridTemplateColumns:'repeat(5,1fr)',
    [theme.breakpoints.down('md')]:{
        gridTemplateColumns:'repeat(4,1fr)',
   
    },
    [theme.breakpoints.down('sm')]:{
        gridTemplateColumns:'repeat(2,1fr)',
   
    }
},
paper:{
    padding:'20px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    transition:'all .3s ease-in-out',
    '&:hover':{
        color:'white',
        backgroundColor:'black'
    }
}
}))
function TechnologyCard() {
    const classes=useStyles();
    return (
        <Box className={classes.root}>
        {Array(10).fill(0).map((item,index)=><Paper className={classes.paper} key={'caer'+index} variant='outlined'>
            <Person/>
            <Typography variant='h6'>React</Typography>
            <Typography variant='caption'  color='textSecondary'>React</Typography>
        </Paper>)}
        
        </Box>
    )
}

export default TechnologyCard

