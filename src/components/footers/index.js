import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {
  AppBar,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography, TextField
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  
}));
export default (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Footer1 logo={props.logo}/>
      <Footer2 />
    </Box>
  );
};

const Footer1 = () => {
  const service={
title:'Services',
links:['Website Development',
  'Mobile Application Development',
  'ERP Software and Application Development',
  'Artificial Intelligence and Machine learning',
  'IOT Solutions',
 'Cloud Data Solutions',
  'UX/UI Designing',
  'E-Commerce Services']
  }

const support={
  title:'Support',
  links:['Get Support',
    'Contact',
    'Our Portfolio',
    'Privacy Policy',
    'Pricing']
}  
  return <AppBar position="relative" style={{padding:'20px 0',borderBottom:'2px solid #f1f1f1'}}>
    <Container maxWidth='lg'>
      <Grid container spacing={4}>
      <Grid item xs={12} sm={4} >
        <Box component='img' src='assets/logos/logo.png' width='120px' height='50px' objectfit='contain'/>
          <Box bgcolor='white' maxWidth='300px' my='20px'>
            <TextField
            fullWidth
            placeholder='Email Here'
             variant='outlined'
              InputProps={{endAdornment:<MailOutlineIcon/>}}
            />
          </Box>
          <Box display='flex' my={2}>
            <Box py={1} px={2} mx={2} bgcolor='lightGray'>whatsapp</Box>
            <Box py={1} px={2} bgcolor='lightGray'>+91-8861129756</Box>
          </Box>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography variant='h5' style={{paddingBottom:'24px',paddingTop:'10px'}}>{service.title}</Typography>
        {service.links.map(item=><Box key={item} display='block' component='small' style={{lineHeight:'24px'}}>{item}</Box>)}
      </Grid>
      <Grid item xs={12} sm={2}>
      <Typography variant='h5' style={{paddingBottom:'24px',paddingTop:'10px'}}>{support.title}</Typography>
        {support.links.map(item=><Box key={item} display='block' component='small' style={{lineHeight:'24px'}}>{item}</Box>)}
     
      </Grid>
      <Grid item xs={12} sm={3}>
      <Typography variant='h5' style={{paddingBottom:'15px',paddingTop:'10px'}}>{'Follow Us'}</Typography>
     
      <IconButton><FacebookIcon color='secondary'/></IconButton>
          <IconButton><TwitterIcon color='secondary'/></IconButton>
          <IconButton><LinkedInIcon color='secondary'/></IconButton>
          <IconButton><InstagramIcon color='secondary'/></IconButton>
          <IconButton><YouTubeIcon color='secondary'/></IconButton>
      </Grid>
      </Grid>
    </Container>
  </AppBar>
 };

const Footer2 = () => {

  return (
    <AppBar position="relative">
      <Container maxWidth='lg'>
        <Grid container justifyContent='space-around'>
          <Grid item xs={12} sm={4} >
        <Box display='flex' marginTop='10px'  justifyContent='center' alignItems='center'>
        
          <Box display='grid' style={{placeItems:'center'}} height='40px' width='40px' bgcolor='white' borderRadius='50%' marginRight='15px'>
          <PhoneIcon color='disabled'/>
          </Box>
          <Box >
            <Typography variant='h6'>Contact Us</Typography>
            <Typography variant='subtitle1'>+91-8861129756</Typography>
            </Box>
        </Box>
        </Grid>
        <Grid  item xs={12} sm={4} >
        <Box display='flex' marginTop='10px' justifyContent='center' alignItems='center'>
        
          <Box height='40px' width='40px' bgcolor='white' borderRadius='50%' marginRight='15px' display='grid' style={{placeItems:'center'}}><MailIcon color='disabled'/></Box>
          <Box >
            <Typography variant='h6'>Email</Typography>
            <Typography variant='subtitle1'>info@modicumtechnogies.com</Typography>
            </Box>
        </Box>
        </Grid>
        <Grid item xs={12} sm={4}  >
        <Box display='flex' marginTop='10px'  justifyContent='center' alignItems='center'>
        
          <Box display='grid' style={{placeItems:'center'}} height='40px' width='40px' bgcolor='white' borderRadius='50%' marginRight='15px'>
          <RoomIcon color='disabled'/>
          </Box>
          <Box>
            <Typography variant='h6'>Address</Typography>
            <Typography variant='subtitle1'>#363, 19th Main Road,<br/>
1st Block, Rajajinagar Bangalore - 560010</Typography>
            </Box>
        </Box>
        </Grid>
        </Grid>
      </Container>      
    </AppBar>
  );
};
