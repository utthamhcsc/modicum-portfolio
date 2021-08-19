import { Box, Radio, Typography } from '@material-ui/core'
import React from 'react'

export default function ({classes}) {
    return (
        <>
                      <Box flex='6' className='item text'    minHeight='400px' borderRight='2px solid black'>
                <Box position='relative' style={{paddingTop:'80px',paddingRight:'32px'}} height='100%'>
                        <h2 style={{marginTop:'0'}}>Mobile Application Development</h2>
                   <Typography color='textSecondary' style={{textAlign:'justify'}}>
                   The mobile revolution is a game changer for many industries. It has opened up several new opportunities and ushered ease of doing business. In fact, embracing a mobile-first approach has benefited organizations by reducing wastage, increasing efficiency, and reducing lead time.
                   <br/><br/>
We have skilled, innovative & experienced iOS application developers who work towards developing apps that can deliver the desired results. We ensure maximum user engagement and customer satisfaction. Our team of experts make use of technologies such as React JS, React Native, Ionic, Java and Node JS to ensure powerful apps to help your enterprise establish a connection with customers.
<br/><br/>
We develop iOS and Android apps with varying levels of complexities for all possible domains; Business and Entertainment, Educational, Social Networking, Health, Travel and others. We utilize agile methodology to craft and customize an iOS and Android app totally based on your
requirements and needs.
</Typography>
                    
 
              <Box className='radio' bgColor='#FFFFF' zIndex='2' position='absolute' top={'80px'} right={'-12px'}>
                  <Radio color='primary' style={{backgroundColor:'white',margin:'0',padding:'0'}} checked={true}/>
              </Box>
                    </Box>
                </Box>
                <Box flex='6' className='item image' >
                <Box style={{paddingTop:'80px',paddingLeft:'32px',height:'100%'}}>
                   
                <div className={classes.bg}  style={{
                    '--light':'url("assets/img/12.jpg")',
                    '--dark':'url("assets/img/13.jpg")' ,
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

