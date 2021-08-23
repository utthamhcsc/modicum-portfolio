import { Box, Radio, Typography } from '@material-ui/core'
import React from 'react'

export default function ({classes}) {
    return (
        <>
                      <Box flex='6' className='item image'    minHeight='400px' borderRight='2px solid black'>
                <Box position='relative' style={{paddingTop:'80px',paddingRight:'32px'}} height='100%'>
                    <div className={classes.bg}  
                    style={{
                        '--light':'url("assets/img/14.jpg")',
                    '--dark':'url("assets/img/15.jpg")' ,
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
                    <Box height='100%' style={{paddingTop:'80px',paddingLeft:'32px'}}>
                        <h2 style={{marginTop:'0'}}>ERP Softwares and
Application Development</h2>
                   <Typography color='textSecondary' style={{textAlign:'justify'}}> 
                   Modicum Technologies Pvt Ltd is an all-rounder adaptive 
software company that provides an on premise solution to the 
enterprises. The software offers customizable and fully featured 
modules to various industries. It will handle all the major and 
minor business aspects for you.
<br/><br/>
It offers different affordable license pricing based on users and 
features. It is known to provide fast and detailed results to make 
your business manageable and productive.
<br/>
<br/>
<b>Main Features:</b>
<br/>
1. Hospital, Clinic and Lab Management System<br/>
2. Inventory<br/>
3. Purchasing<br/>
4. Quality Management Solutions<br/>
5. CRM
</Typography>
                    </Box>
                </Box> 
        </>
    )
}

