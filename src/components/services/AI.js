import { Box, Radio, Typography } from '@material-ui/core'
import React from 'react'

export default function ({classes}) {
    return (
        <>
                      <Box flex='6' className='item text'    minHeight='400px' borderRight='2px solid black'>
                <Box position='relative' style={{paddingTop:'80px',paddingRight:'32px'}} height='100%'>
                   
                <h2 style={{marginTop:'0'}}>Artificial Intelligence
Machine learning</h2>
                   <Typography color='textSecondary' style={{textAlign:'justify'}}>
                   Take your business to the next level with intelligence on 
historical & real-time data.
<br/>
<br/>
The world is getting smarter, and automation has grasped all 
the attention. AI and ML are the critical aspects of making your 
application work smarter and faster. Every enterprise is investing 
in this to get accurate and better results. It facilitates data which 
can be easily later studied for a better future. Both AI and ML are 
disciplines of Data Science. Both artificial intelligence and 
machine learning go hand in hand.
<br/>
<br/>
We can predict business problems before they happen with 
Artificial Intelligence services & Machine Learning services. 
</Typography>
 <Box className='radio' bgColor='#FFFFF' zIndex='2' position='absolute' top={'80px'} right={'-12px'}>
                  <Radio color='primary' style={{backgroundColor:'white',margin:'0',padding:'0'}} checked={true}/>
              </Box>
                    </Box>
                </Box>
                <Box flex='6' className='item image'>
                    <Box style={{paddingTop:'80px',height:'100%',paddingLeft:'32px'}}>
                  
                    <div className={classes.bg}  style={{
                        '--light':'url("assets/img/20.jpg")',
                        '--dark':'url("assets/img/21.jpg")' ,
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

