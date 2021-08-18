import React from 'react'
import {Box, Card, CardActionArea, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
const useStyles=makeStyles(theme=>({
    root:{position:'relative',overflow:'hidden',
'&:hover #details':{top:0,left:0,right:0,zIndex:99,display:'block'}
},

    details:{
        display:'none',
        width:'100%',
        height:'100%',
        transition:theme.transitions.easing.easeInOut,
        backgroundColor:"lightgray",
        position:'absolute ',
        top:'110%',
        zIndex:'-99 ',
    }


}))
function ServiceCard() {
    const history=useHistory();
    const classes=useStyles();
    const goToServicePage=()=>history.push('/services')
    return (
        <Box position='relative' pb={2} className={classes.root} >
        <Card style={{
            
             margin:'0 auto',
             maxWidth:'300px'}}>
            
        <CardContent
          
          style={{
            height:'250px',  
            
            backgroundImage:'url("assets/img/home.jpg")',
              backgroundPosition:'center center',
              objectfit:'contain',
              backgroundSize:'cover'}}
        />
        <CardActions style={{justifyContent:'center'}}>
            <Box component='h2' p={0} m={0} textAlign='center'>
                Service
            </Box>
            </CardActions>
        
        </Card>
        <Card id="details" className={classes.details} style={{
             margin:'0 auto',
             maxWidth:'300px'}}>
            <CardActionArea style={{height:'100%'}} onClick={goToServicePage}>
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
