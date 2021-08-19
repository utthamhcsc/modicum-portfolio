import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, colors, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
const useStyles=makeStyles(theme=>({
    title:{
        
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:colors.grey[200],
        '& h5':{
            fontSize:'28px',
        color:theme.palette.primary.dark,
        }
    },
imagebox:{
    
    backgroundPosition:'center center',
    backgroundSize:'cover',
    overflow:'hidden',
    '& .demo':{
        transition:'transform .3s ease-in-out',
        transform:'translateY(100%)'
    },
    '&:hover .demo':{
        transform:'translateY(0)'
    }
}

}))
function ProjectPageCard() {
   
    return (
        <>
        <Box my={2}/>
     <Grid container spacing={5}>
         {Array(6).fill(0).map((item,index)=><Grid key={'p'+index} item xs={12} sm={6}><ProjectCard/></Grid>)}
         </Grid>
         </>
    )
}

export default ProjectPageCard
const ProjectCard=()=>{
    const classes=useStyles();
    return <Paper elevation={0}>
        <Box minHeight='300px' className={classes.imagebox} style={{backgroundImage:'url("assets/img/home.jpg")',height:'100%',width:'100%'}}>
            <Box className='demo' minHeight='300px' display='grid'  style={{display:'grid',placeItems:'center',height:'100%',width:'100%',backgroundColor:'rgba(0,0,0,.4)'}}>
            <Button variant='contained'>Click Here To Visit</Button>
            </Box>
            </Box>
            <Box mb={2}pt={2} className={classes.title}>
                <Typography gutterBottom variant='h5'>Bar Magics</Typography>
                <Typography gutterBottom>Project Category: Bar Tending</Typography>
             </Box> 
             <Box m={2}>
<Typography color='textSecondary' variant='subtitle2' gutterBottom><b>Description</b></Typography>
<Typography color='textSecondary' variant='caption' gutterBottom>
We understand that the society needs responsible and courteous bartenders  for which we convey knowledge and values with hands on training and a space to polish their skills before stepping out into the world of bartending.</Typography>
<Typography color='textSecondary' variant='subtitle2' style={{display:'flex',flexWrap:'wrap',alignItems:'baseline'}}>
    <b style={{marginRight:'20px'}}>Technologies Used</b>
    <Avatar variant='rounded' style={{margin:'10px'}} ><small style={{padding:'8px 16px'}}>html</small></Avatar>
    <Avatar variant='rounded' style={{margin:'10px'}} ><small style={{padding:'8px 16px'}}>css</small></Avatar>
    <Avatar variant='rounded' style={{margin:'10px'}} ><small style={{padding:'8px 16px'}}>JS</small></Avatar>
    <Avatar variant='rounded' style={{margin:'10px'}} ><small style={{padding:'8px 16px'}}>java</small></Avatar>
   
    </Typography>              
                
                </Box>  
    </Paper>
}