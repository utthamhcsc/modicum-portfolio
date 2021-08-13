import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import { Box, Card, CardActionArea, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core'
const useStyles=makeStyles(theme=>({
    root:{position:'relative',overflow:'hidden',
'&:hover #details':{bottom:0,zIndex:99}
},

    details:{
        width:'100%',
        transition:'all 4sec ease-in-out !important',
        backgroundColor:"lightgray",
        position:'absolute ',
        bottom:'110%',
        zIndex:'-99 ',
    }


}))
function ServiceCard() {
    const classes=useStyles();
    return (
        <Box position='relative' className={classes.root}>
        <Card style={{minHeight:'300px',padding:0}}>
            
        <CardContent
          
          style={{
            height:'300px',  
            backgroundImage:'url("assets/img/home.jpg")',
              backgroundPosition:'center center',
              objectfit:'contain',
              backgroundSize:'cover'}}
        />
        <CardActions style={{justifyContent:'center'}} id="details" className={classes.details}>
            <Box component='h2' p={0} m={0} >
                Project
            </Box>
            </CardActions>
        
        </Card>
        </Box>
    )
}

export default ServiceCard
