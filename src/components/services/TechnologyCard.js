import { Box, Icon, makeStyles, Paper, Typography } from '@material-ui/core'
import { Person } from '@material-ui/icons'
import React from 'react'
import { FaAws, FaJava, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { RiFlutterFill } from "react-icons/ri";
import { SiMicrosoftazure,SiMongodb,SiMysql } from "react-icons/si";
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
    textAlign:'center',
    padding:'20px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    transition:'all .4s ease-in-out',
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
        {data.map((item,index)=><Paper className={classes.paper} key={'caer'+index} variant='outlined'>
            <Box height='50px' width='50px' mb={1}>{item.icon}</Box>
            <Typography style={{whiteSpace:'nowrap'}} gutterBottom><b>{item.title}</b></Typography>
        
            <Typography variant='caption'  color='textSecondary'>{item.subTitle}</Typography>
        </Paper>)}
        
        </Box>
    )
}
const data=[
    {
        icon:<FaReact fontSize='3rem'/>,
        title:'React JS',
        subTitle:'WebSite Development'
    },
    {
        icon:<FaReact fontSize='3rem'/>,
        title:'React Native',
        subTitle:'Mobile App Development'
    },
    {
        icon:<RiFlutterFill fontSize='3rem'/>,
        title:'Flutter',
        subTitle:'Mobile|WebSite Development'
    },
    {
        icon:<FaJava fontSize='3rem'/>,
        title:'Java',
        subTitle:'Framework SpringBoot'
    },
    {
        icon:<FaNodeJs fontSize='3rem'/>,
        title:'Node JS',
        subTitle:'Framework Express JS'
    },
    {
        icon:<FaAws fontSize='3rem'/>,
        title:'Server-AWS',
        subTitle:'Server Maintanance & Hosting'
    },
    {
        icon:<SiMysql fontSize='3rem'/>,
        title:'MySql',
        subTitle:'Database Management System'
    },
    {
        icon:<SiMongodb fontSize='3rem'/>,
        title:'Mongo  DB',
        subTitle:'Database Management System'
    },
    {
        icon:<SiMicrosoftazure fontSize='3rem'/>,
        title:'Microsoft  Azure',
        subTitle:'AI,ML,IOT & Cloud Data Solution'
    },
    {
        icon:<FaPython fontSize='3rem'/>,
        title:'Python',
        subTitle:'AI and ML'
    }
]

export default TechnologyCard

