import React from 'react'
import {Box, Card, CardActionArea, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
const useStyles=makeStyles(theme=>({
    root:{position:'relative',overflow:'hidden',
'&:hover #details':{top:0,left:0,right:0,bottom:'16px',zIndex:99}
},

    details:{
       
        width:'100%',
      
        transition:'top .3s ease-in',
        backgroundColor:"rgba(0,0,0,.9)",
        position:'absolute ',
        top:'110%',
        left:0,
        bottom:'16px',
        right:0,
        zIndex:'-99 ',
    }


}))
function ServiceCard({title,details}) {
    const history=useHistory();
    const classes=useStyles();
    const goToServicePage=()=>history.push('/services')
    return (
        <Box position='relative' pb={2} className={classes.root} >
        <Card variant='outlined'  style={{
           
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
            <Box  p={0} m={0} textAlign='center'>
                <b>{title}</b>
            </Box>
            </CardActions>
        
        </Card>
        <Card id="details" className={classes.details} style={{
            
             margin:'0 auto',
             maxWidth:'300px'}}>
            <CardActionArea  onClick={goToServicePage}>
        <CardContent>
            <Typography color='secondary' paragraph  variant='h6'>{title}</Typography>
            <Typography color='secondary' >{details}</Typography>
        </CardContent>
        
        </CardActionArea>
        </Card>
       
        </Box>
    )
}

export default ServiceCard
