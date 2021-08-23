import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { TextField, InputAdornment } from '@material-ui/core';
import {Mail,Person} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  animate:{
    

  
  //width: '80%',
  //color: 'rgb(255, 255, 255)',
  animationFillMode: 'both',
  animationDuration: '2000ms',
  animationDelay: '200ms',
  animationIterationCount: 1,
  opacity: 1,
  animationName: 'slide'
  },
  section: {
    overflow:'hidden',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundBlendMode:'darken',
    backgroundAttachment:'fixed',
    mixBlendMode:'darken',
    position:'relative',
    
    backgroundColor: 'rgba(0,0,0,.8)',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    
    clipPath: 'ellipse(90% 90% at 50% 10%)',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(14),
    },
    // border:'5px solid '+theme.palette.primary.dark,
    // borderTop:0,
    // borderBottomWidth:'10px',
    // borderBottomLeftRadius:'28%',
    // borderBottomRightRadius:'28%',
    '&:before':{
      // content:'""',
      // width:'100%',
      // height:'100%',
      // position:'absolute',
      // top:'-20%',
      // borderRadius:'35%',
      // transform:'scale(1.5)',
      // borderBottom:'10px solid '+theme.palette.primary.dark
    }
  },
  description: {
    color: theme.palette.background.secondary
  },
  primaryAction: {
    color:'#ffff !important',
    backgroundColor:'rgba(255,255,255,.3)',
    borderRadius:'5px',
    marginRight: theme.spacing(2),
    transition:'all .3s ease-in',
    '& .MuiInputBase-root':{
      color:'inherit'
    },
    '& *::placeholder':{
      color:'white'
    },
    '&:hover':{
      '& .MuiInputBase-root':{
        color:'#'
      },
      color:'#000',
      backgroundColor:'rgba(255,255,255)'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    }
  },
  secondaryAction: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const heading=[{
    title1:'We Built Softwares',
    title2:'Innovative | Top Quality | On Time'
  },
  {
    title1:'  We Deliver Unique Creative Design',
    title2:' Think | Design | Execute'
  },
  {
    title1:'   We Create Custom Application ',
    title2:'  Analyze | Code | Develop'
  }
]

const [index,setIndex]=useState(0);
const nextItem=()=>{
  if(index<heading.length-1){
    setIndex(index=>index+1)
  }else{
    setIndex(0)
  }
}
useEffect(()=>{
  setTimeout(nextItem,6000)
},[index])

  const content = {
    'header-p1': 'We Deliver Creative Unique Design',
    'header-p2': 'Would you like to start a project with us?',
    'description1': 'Modicum is focusing exclusively in high quality and cost-effective software ',
    'description2': 'development and implementation services.',
    'primary-action': 'Action',
    'secondary-action': 'Get Started',
    'pattern': 'assets/img/home.jpg',
    ...props.content
  };

  return (
    <section id='home' className={classes.section} style={{ backgroundImage: `url("${content['pattern']}")` }}>
      <Container maxWidth="md">
        <Box textAlign="center" color="common.white">
          <Typography key={heading[index]?.title1}  className={classes.animate} variant="h2" component="h2" gutterBottom={true}>
            <Typography style={{whiteSpace:'nowrap',fontSize:50,fontWeight:'normal'}}  variant="h2" component="p">{heading[index]?.title1} </Typography>
            <Typography style={{whiteSpace:'nowrap',fontSize:50}}   variant="h2" component="p"><b>{heading[index]?.title2}</b> </Typography>
       </Typography>
          <Box my={10}/>
          <Container maxWidth="md">
          
          <Typography variant="h5" style={{whiteSpace:'nowrap',fontSize:35}} gutterBottom >{content['header-p2']}</Typography>
          
            <Typography variant="body" color="textSecondary" gutterBottom  className={classes.description}>{content['description1']}</Typography>
            <Typography variant="body" color="textSecondary" paragraph={true} className={classes.description}>{content['description2']}</Typography>
          </Container>
          <Box mt={3}>
            <TextField  InputProps={{endAdornment:
              <InputAdornment color='inherit' position="end">
                <Person  color='inherit'/>
              </InputAdornment>
            }}  size='small' placeholder='FullName...' variant='outlined' className={classes.primaryAction}/>
            <TextField size='small'InputProps={{endAdornment:
              <InputAdornment color='inherit' position="end">
                <Mail color='inherit'/>
              </InputAdornment>
            }} placeholder='Email/Phone...' variant='outlined' className={classes.primaryAction}/>
            <Button variant="contained" color="primary" className={classes.secondaryAction}>{content['secondary-action']}</Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}