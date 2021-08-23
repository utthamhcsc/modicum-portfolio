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
function TestimonialCard({data={}}) {
     const classes=useStyles();
    return (
        <Paper className={classes.paper} elevation={0}  style={{minHeight:'200px',height:'100%',width:'100%'}}>
           <ProfileCard data={data} classes={classes}/>
            <Box mx={3} flex='1' >
                    <Box component='h3' className={classes.review}>Client Reviews</Box>
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Box p={0}  m={0} component='h3'>{data.companyname}</Box>
                        <Box p={0}  m={0}>⭐⭐⭐⭐⭐</Box>
                     </Box>  
                     <Box mt={3} mb={3} component={Divider}/>
                     <Typography style={{padding:'20px'}} color='textSecondary'>
                     
<strong style={{fontSize:'20px'}}>“</strong>
{data.Experience}
<strong style={{fontSize:'20px'}}>”</strong>
                         </Typography> 
        </Box>
        </Paper>
    )
}

const ProfileCard=({classes,data})=>{
  return  <Box 
    zIndex='4'
    width='300px'
    position='relative'
    textAlign='center'
    >
        <Box overflow='visible' margin='0 auto' height='350px' width='60%' className={classes.bgcolor}/>
        <Box boxShadow='1px 1px 3px 0 rgba(60,60,60,.2)' bgcolor='white' position='absolute' top={'20px'} width='300px' padding='20px'>
                <Box height='200px'
                
                style={{backgroundImage:`url(${data.image?data.image:'assets/img/home.jpg'})`,
                backgroundPosition:'center',
                backgroundSize:'100%',
                objectFit:'contain',
                objectPosition:'top 50%'
            }}
                />
                <Typography variant="h6" color="initial" style={{fontSize:'17px',fontWeight:800,marginTop:'14px'}}>{data.clientname}</Typography>
                <Typography color="textSecondary" style={{fontSize:'13px',fontWeight:800}}>{data.Designation}</Typography>
                
                </Box> 
                
    </Box>    
}
export default TestimonialCard
