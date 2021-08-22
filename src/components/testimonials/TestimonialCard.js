import { Box, Divider, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
const useStyles=makeStyles((theme)=>(
    {
bgcolor:{backgroundColor:theme.palette.primary.dark},
paper:{
    display:'flex'
},
review:{
    position:'relative',
    marginTop:'60px',
   marginBottom:'8px',
    '&:before':{
        content:'""',
        position:'absolute',
        zIndex:'1',
        top:'-13px',
        left:'-20%',
        marginBottom:'20px',
        width:'55%',
        height:'4px',
        backgroundColor:'black'
    }

}
    }
))
function TestimonialCard() {
     const classes=useStyles();
    return (
        <Paper className={classes.paper} elevation={0}  style={{minHeight:'200px',height:'100%',width:'100%'}}>
            <ProfileCard classes={classes}/>
            <Box mx={3} flex='1' >
                    <Box component='h3' className={classes.review}>Client Reviews</Box>
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Box p={0}  m={0} component='h3'>Infocus Pvt Ltd</Box>
                        <Box p={0}  m={0}>⭐⭐⭐⭐⭐</Box>
                     </Box>  
                     <Box mt={3} mb={3} component={Divider}/>
                     <Typography style={{padding:'20px'}} color='textSecondary'>
                     
<strong style={{fontSize:'20px'}}>“</strong>My experience with Modicum Technologies has been amazing during the building of Prototype for couple of my customers. The support exhibited was beyond my expectations & the team with whom I had interaction had lot of patience to get the work done by working without any time constraints.
<strong style={{fontSize:'20px'}}>”</strong>
                         </Typography> 
        </Box>
        </Paper>
    )
}

const ProfileCard=({classes})=>{
  return  <Box 
    zIndex='4'
    width='300px'
    position='relative'
    textAlign='center'
    >
        <Box overflow='visible' margin='0 auto' height='350px' width='60%' className={classes.bgcolor}/>
        <Box boxShadow='1px 1px 3px 0 rgba(60,60,60,.2)' bgcolor='white' position='absolute' top={'20px'} width='300px' padding='20px'>
                <Box height='200px'
                
                style={{backgroundImage:'url(assets/img/home.jpg)',
                backgroundPosition:'center',
                backgroundSize:'100%',
                objectFit:'contain',
            }}
                />
                <Typography variant="h6" color="initial" style={{fontSize:'17px',fontWeight:800,marginTop:'14px'}}>SriHari</Typography>
                <Typography color="textSecondary" style={{fontSize:'13px',fontWeight:800}}>Founder</Typography>
                
                </Box> 
                
    </Box>    
}
export default TestimonialCard
