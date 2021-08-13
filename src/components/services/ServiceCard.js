import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import { Box, Card, CardActionArea, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core'
const useStyles=makeStyles(theme=>({
    root:{position:'relative',overflow:'hidden',
'&:hover #details':{top:0,zIndex:99}
},

    details:{
        width:'100%',
        height:'100%',
        transition:'all 4sec ease-in-out !important',
        backgroundColor:"lightgray",
        position:'absolute ',
        top:'110%',
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
        <CardActions style={{justifyContent:'center'}}>
            <Box component='h2' p={0} m={0} >
                Service
            </Box>
            </CardActions>
        
        </Card>
        <Card id="details" className={classes.details}>
            <CardActionArea style={{height:'100%'}}>
        <CardContent>
            <Typography paragraph variant='h2'>Details</Typography>
            <Typography paragraph>Details</Typography>
        </CardContent>
        
        </CardActionArea>
        </Card>
       
        </Box>
    )
}

export default ServiceCard
