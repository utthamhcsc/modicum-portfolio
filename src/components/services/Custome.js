import { Box, Radio, Typography } from '@material-ui/core'
import React from 'react'

export default function ({classes}) {
    return (
        <>
                      <Box flex='6' className='item text'    minHeight='400px' borderRight='2px solid black'>
                <Box position='relative' style={{paddingTop:'80px',paddingRight:'32px'}} height='100%'>
                    
              <h2 style={{marginTop:'0'}}>Custom Software
Development Services</h2>
                   <Typography color='textSecondary' style={{textAlign:'justify'}}>
                   Existing market competition requires a company to create
one-of-a-kind software intended to meet their customers’ 
unique demands. Off-the-shelf software available is generally 
designed for the mass public as a solution to the many different 
needs of its users. These, however, may not fit-in exactly with 
your existing system and processes and may cause delays due 
to training requirements involved. This situation calls for unique 
custom software development, keeping in mind each 
company’s infrastructure, branding, implementation, and core 
business processes.
<br/>
<br/>
We make every effort possible to understand your business. We 
construct a detailed blueprint of the custom software you need 
and design the best & most-suited solutions for your business. 
We maintain a holistic balance between customization and 
user-friendliness. Rigorous testing and post-implementation 
support is part of our package to ensure that your custom 
software development requirements are fully met. We can 
design, develop, integrate and test custom software across 
multiple systems and platforms.
<br/>
<br/>
We create secure and effective solutions that are a snug fit to 
your existing systems and processes, so that you spend less time 
in the orientation and more time in the upward movement. 
With our comprehensive custom software development 
solutions, you can do away with any secondary applications for 
various micro processes.
</Typography>
              <Box className='radio' bgColor='#FFFFF' zIndex='2' position='absolute' top={'80px'} right={'-12px'}>
                  <Radio color='primary' style={{backgroundColor:'white',margin:'0',padding:'0'}} checked={true}/>
              </Box>
                    </Box>
                </Box>
                <Box flex='6' className='item image' >
                    <Box style={{paddingTop:'80px',height:'100%',paddingLeft:'32px'}}>
                    <div className={classes.bg}  style={{
                        '--light':'url("assets/img/16.jpg")',
                        '--dark':'url("assets/img/17.jpg")' ,
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

