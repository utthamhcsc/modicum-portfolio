import { Box, Radio, Typography } from '@material-ui/core'
import React from 'react'

export default function ({classes}) {
    return (
        <>
                      <Box flex='6' className='item image'   minHeight='400px' borderRight='2px solid black'>
                <Box position='relative' style={{paddingTop:'80px',paddingRight:'32px'}} height='100%'>
                    <div className={classes.bg}  style={{
             '--light':'url("assets/img/22.jpg")',
             '--dark':'url("assets/img/23.jpg")' ,           
              backgroundPosition:'center center',
              objectfit:'contain',
              height:'100%',
              width:'100%',
              backgroundSize:'cover'}}/>
              <Box className='radio' bgColor='#FFFFF' zIndex='2' position='absolute' top={'80px'} right={'-12px'}>
                  <Radio color='primary' style={{backgroundColor:'white',margin:'0',padding:'0'}} checked={true}/>
              </Box>
                    </Box>
                </Box>
                <Box flex='6' className='item text' >
                    <Box style={{paddingTop:'80px',paddingLeft:'32px'}}>
                        <h2 style={{marginTop:'0'}}>Cloud Data Solutions</h2>
                   <Typography color='textSecondary' style={{textAlign:'justify'}}> 
                   <b style={{textAlign:'center'}}>What is Cloud – based solution..??</b>
                   <br/>
A cloud solution is virtual infrastructure to provide remote 
working access to software, applications, server and data center 
through the internet connection. Using the cloud support, 
business organizations do not require to invest a hefty amount 
on, in house computing infrastructure and applications. Also 
cloud storage keeps the large pile of your company data and 
files within easy reach from any location.
<br/>
<br/>
<b>Our cloud consulting ensures Continuity Of business</b>
<br/>
As a cloud consultant, we make every possible effort to help you 
continue your business operations at such a crucial juncture. 
Here, we deal in offering cloud solution service that helps 
companies carry on the working procedures despite being in 
self-isolated condition. Rely on the service to encourage a new 
way of working remotely and let the communication, 
engagement, and business purpose still operational.
</Typography>
                    </Box>
                </Box> 
        </>
    )
}

