import { Box, Grid, makeStyles, Typography,Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Dcard from './Dcard'
const useStyles=makeStyles((theme)=>({
    root:{
        flex:'1',
        width:'80%',
        margin:'20px auto',
        display:'grid',
        gap:"20px",
        gridTemplateColumns:'repeat(6,1fr)',
        
      
    
    },
    paper:{
        padding:'20px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        position:'relative',
        transition:'all .3s ease-in-out',
        '&:after':{
            content:'""',
            height:'25px',
            width:'25px',
            display:'block',
            position:'absolute',
            backgroundColor:'inherit',
            transform:'rotate(45deg)',
            bottom:'-5px',
            display:'none',
            zIndex:2
        },
        '&:hover':{
            '&:after':{display:"block"},
            color:'white',
            backgroundColor:'black'
        },
        '&.active':{
            '&:after':{display:"block"},
            color:'white',
            backgroundColor:'black'
        }

    },
    desc:{
        width:'80%',
        margin:'20px auto',
        padding:'20px'
    }
    }))
function index() {
    const [index,setIndex]=useState(0)
    const classes=useStyles();
    const content=[
        {
            title:'Discover',
            description:'Through intensive design research and strategic analysis. We identify your business issues,priorities and objectives discover inspires and guides design and deliver.'
        },{
            title:'Define',
            description:' The beginning of the project we spend the time understanding your business needs and defining your objectives form this preliminary research we put together the project scope document that all stakeholders agree and commit to.'
        },{
            title:'Design',
            description:'Here is where we produce a range of design approaches and concepts to more fully address the clients challange. The concept are reviewed,tested,refined and crafted into a focused design direction.'
        },{
            title:'Develop',
            description:'We are experts at bringing synergy between aesthetic design and strong coding by combinning the inter face,content and graphics with the underlying system frame.'
        },{
            title:'Deploy',
            description:' We are experts at bringing synergy between aesthetic design and strong coding by combinning the inter face,content and graphics with the underlying system frame.'
        },
        {
            title:'Deliver',
            description:'In this phase we specify document and deliver project details to the client for implementation or we get involved directly in the production process both guarantee the accurate translation of ideas into reality.'
        },
    ]

    const moveToNext=()=>{
        setIndex(i=>(i<5)?(i+1):0)
    }
    useEffect(()=>{
        setTimeout(moveToNext,4000);
    },[index])
    return (
        <>
        <Box mt={4} className='section__title' component='h1' textAlign='center'>Our 6D Process</Box>
        <Box className={classes.root}>
            {content.map((i,d)=><Dcard key={'caerws'+d} data={i} index={d} active={index} classes={classes}/>)}
        
        
        </Box>
        {  <Paper className={classes.desc} variant='outlined' style={{}}>
        <Grid container spacing={10}>
        <Grid item xs={12} sm={6}>
        <Typography  variant='h4'>
                {content[index]?.title}
            </Typography>
            <Typography  color="textSecondary">
                {content[index]?.description}
            </Typography>

        </Grid> 
        <Grid item xs={12} sm={6}>
            <Box style={{backgroundImage:'url(assets/img/home.jpg)',backgroundPosition:"center",minHeight:'200px',width:'100%',objectFit:'contain',backgroundSize:'100%'}}/>
        </Grid> 
        </Grid>
        </Paper>}
       </> 
    )
}

export default index
