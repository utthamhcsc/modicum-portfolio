import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Box, Fab, makeStyles, TextField, Typography } from '@material-ui/core'
const useStyles=makeStyles(theme=>({
    root:{
        padding:'40px 0px'
    },
contact:{
    textAlign:'center',
    width:'100%',
    margin:'0 auto',
    borderRadius:'6px',
    padding:'10px 30px',
    backgroundColor:'#f9f9f9',
    maxWidth:'500px',
    '& >*':{
margin:'10px 0'
    }
}
}))
function ContactUs() {
    const classes=useStyles();
    const content={
        title1:`${'would u like to start a project with us?'}`,
        title2:`${'Modicum is focusing exclusively in high quality and cost-effective software development and implementation services.'}`
    }
    return (
        <Box maxWidth='90%' margin='0 auto' id='contactus' my={5} pt={2}>
              
        <Grid container spacing={3} justifyContent='center'>
          <Grid item xs={12} sm={6} style={{textAlign:'center'}}>
              <Typography variant='h4'  paragraph style={{display:'inline-block'}}>{content.title1}</Typography>
              <Typography variant='subtitle2'  color='textSecondary' style={{display:'inline-block'}}>{content.title2}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} >
           <form className={classes.contact}> 
          <TextField label='Full Name' fullWidth size='small'/>
          <TextField label='Email' fullWidth size='small'/>
          <TextField label='Phone Number' fullWidth size='small'/>
          <Fab size='small' variant='extended' color='primary'>Get Started</Fab>
          </form>
        </Grid>
        </Grid>
     
        </Box> 
    )
}

export default ContactUs
