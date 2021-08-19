import { Box, Radio, Typography } from '@material-ui/core'
import React from 'react'

function WebDevelopment({classes}) {
    return (
        <>
                      <Box className='item image' flex='6'    minHeight='400px' borderRight='2px solid black'>
                <Box position='relative' style={{paddingTop:'80px',paddingRight:'32px'}} height='100%'>
                    <div className={classes.bg}  style={{
                        '--light':'url("assets/img/weblight.jpg")',
                        '--dark':'url("assets/img/webdark.jpg")' ,
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
                <Box  flex='6' className='item text' >
                    <Box style={{paddingTop:'80px',paddingLeft:'32px'}}>
                        <h2 style={{marginTop:'0'}}>Website Development</h2>
                   <Typography color='textSecondary' style={{textAlign:'justify'}}> In today’s world of technology, it is essential for every business to 
have a website. A website acts as an excellent online marketing 
tool and platform for your business. It allows customers to learn 
about the type of products/services your business has to offer 
and how. We are an IT company based in Bangalore offering 
high-quality website development services to help your 
business go digital. We collaborate with you to understand your 
brand, goals and the requirements of your company before 
developing your website.
<br/>
<br/>
We have successfully completed several website development 
projects for businesses in India, UK and Russia. We use popular 
platforms, keeping up with latest technologies and best 
practices to deliver high-class results. Our website development 
services span across all genres like e-commerce, small business 
websites, large business websites, brand websites, mobile 
websites, and portals.
<br/>
<br/>
Furthermore, to render the best solution for our clients, we 
provide post-implementation support once the website is up 
and running.
</Typography>
                    </Box>
                </Box> 
        </>
    )
}

export default WebDevelopment
