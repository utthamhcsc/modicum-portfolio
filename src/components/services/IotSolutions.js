import { Box, Radio, Typography } from '@material-ui/core'
import React from 'react'

export default function ({classes}) {
    return (
        <>
                      <Box flex='6' className='item text'   minHeight='400px' borderRight='2px solid black'>
                <Box position='relative' style={{paddingTop:'80px',paddingRight:'32px'}} height='100%'>
                <h2 style={{marginTop:'0'}}>IOT Solutions</h2>
                   <Typography color='textSecondary' style={{textAlign:'justify'}}> 
                   The Internet of Everything (IoT) has the potential to disrupt every 
business domain by offering advanced ways to connect, 
collaborate, and automate. Modicum Technologies Pvt Ltd strives 
to be your modern-day technology partner by offering advanced 
technological solutions in IoT. IoT creates an interconnected 
network across home/organization/factory, combining various 
devices and platforms to automate the processes, thereby 
reducing time and money.
<br/>
<br/>
Modicum’s modern, smart, and adaptable IoT solutions help you 
achieve high performance, increased connectivity, operational 
efficiency, and security. Our versatile and multi-faceted 
development experience in cloud, analytics, and sensor 
technologies make it easy for us to develop customized, scalable, 
and connected IoT ecosystem.
<br/>
<br/>
We build, deploy and maintain comprehensive Internet of Things 
solutions that accelerate the speed of real-time data transfer, 
reduce errors, eliminate manual tasks, automate redundant 
processes, and ensure accurate, apt, data-driven flow across the 
organization.
</Typography>
                  
              <Box className='radio' bgColor='#FFFFF' zIndex='2' position='absolute' top={'80px'} right={'-12px'}>
                  <Radio color='primary' style={{backgroundColor:'white',margin:'0',padding:'0'}} checked={true}/>
              </Box>
                    </Box>
                </Box>
                <Box flex='6' className='item image' >
                    <Box style={{paddingTop:'80px',height:'100%',paddingLeft:'32px'}}>
                    <div className={classes.bg}  style={{
                        '--light':'url("assets/img/24.jpg")',
                        '--dark':'url("assets/img/25.jpg")' ,
                        backgroundPosition:'center center',
              objectfit:'contain',
              height:'100%',
              width:'100%',
              backgroundSize:'cover'}}/>
             
                    </Box>
                </Box> 
        </>
    )
}

