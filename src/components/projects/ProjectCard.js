import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import { Box, Card, CardActionArea, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
const useStyles=makeStyles(theme=>({
    root:{position:'relative',overflow:'hidden',
'&:hover #details':{bottom:0,zIndex:99}
},

    details:{
        width:'100%',
        transition:'bottom .3s ease-in-out !important',
        backgroundColor:"lightgray",
        position:'absolute ',
        bottom:'-10%',
        left:0,
        right:0,
        zIndex:'-99 ',
    }


}))
function ProjectCard() {
    const history=useHistory();
    const classes=useStyles();
    const goToProjectPage=()=>history.push('/projects')
    return (
        <Box position='relative' className={classes.root} >
        <Card variant='outlined' style={{minHeight:'300px',
        objectFit:'cover',
        padding:0,margin:'0 auto',
            maxWidth:'300px'}}
        
       >
        <CardActionArea onClick={goToProjectPage}>    
        <CardContent
          
          style={{
            height:'300px',  
            backgroundImage:'url("assets/img/home.jpg")',
              backgroundPosition:'center center',
              objectfit:'contain',
              backgroundSize:'cover'}}
        />
        <CardActions style={{justifyContent:'center',width:'100%'}} id="details" className={classes.details}>
            <Box component='h2' p={0} m={0} >
                Project
            </Box>
            </CardActions>
        </CardActionArea>
        </Card>
        </Box>
    )
}

export default ProjectCard
