import { Box, Radio, Typography } from '@material-ui/core'
import React from 'react'

export default function ({classes}) {
    return (
        <>
                      <Box flex='6' className='item image'   minHeight='400px' borderRight='2px solid black'>
                <Box position='relative' style={{paddingTop:'80px',paddingRight:'32px'}} height='100%'>
                    <div className={classes.bg}  style={{
                        '--light':'url("assets/img/18.jpg")',
                        '--dark':'url("assets/img/19.jpg")' ,
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
                <Box flex='6' className='item text'>
                    <Box height='100%' style={{paddingTop:'80px',paddingLeft:'32px'}}>
                        <h2 style={{marginTop:'0'}}>Hospital Management System</h2>
                   <Typography color='textSecondary' style={{textAlign:'justify'}}> Modicum is a hospital management software with an 
integrated information system design to manage the 
administrative, financial, and clinical aspects of a hospital.
<br/>
<br/>
This encompasses paper-based information processing as well 
as the data processing system. Managing patient flow effectively 
is a real-time requirement. We have made this tricky process 
simple.
<br/>
<br/>
Reduces waiting time and enhances patient care by providing 
staff with accurate and timely patient information. All-in-one 
hospital or clinic management system that comes with 
integrated modules such as Appointment, Billing, OPD, IPD, 
Inventory, Pharmacy, Laboratory, Radiology, etc. modules.
</Typography>
                    </Box>
                </Box> 
        </>
    )
}

