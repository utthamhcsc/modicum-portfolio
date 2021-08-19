import { Box, makeStyles, Radio, Typography } from '@material-ui/core'
import React from 'react'
import AI from './AI';
import ApplicationDevelopment from './ApplicationDevelopment';
import CloudDataSolutions from './CloudDataSolutions';
import Custome from './Custome';
import Erp from './ErpSolutions';
import Hms from './Hms';
import IotSolutions from './IotSolutions';
import MobileApplication from './MobileApplication';
import WebDevelopment from './WebDevelopment';
const useStyles=makeStyles(theme=>({
    root:{
        display:"grid",
        //gap:'20px',
        gridTemplateColumns:'1fr 1fr',
        [theme.breakpoints.down('md')]:{
            justifyContent:'center',
            gridTemplateColumns:'1fr',
            '& .radio':{
                display:'none'
            },
            '& .item,& .item>*':{
                width:'100%',
                padding:'10px !important',
                border:'none !important'
            },
            '& image':{order:1},
            '& text':{order:2}
       
        }

    },

    bg:{backgroundImage:'var(--light)',transition:'all .3s ease-in-out',
'&:hover':{
    backgroundImage:'var(--dark)'
}
}
}))
function ServicesTimeLine() {
    const classes=useStyles();
    return (
        <Box maxWidth='80%' margin='0 auto' textAlign='center'>
            <Box mb={0} py={1} px={4} borderRadius='5px' border='2px solid black' component='h1' display='inline-block'>What We Do</Box>
            <Box className={classes.root}>
            <WebDevelopment classes={classes}/>
            <MobileApplication classes={classes}/>
            
            <Erp classes={classes}/>
            <Custome classes={classes}/>
            <Hms classes={classes}/>
            <AI classes={classes}/>
            
            <CloudDataSolutions classes={classes}/>
            
            <IotSolutions classes={classes}/>
            
            
            </Box>
        </Box>
    )
}

export default ServicesTimeLine
