import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Box, Fab } from '@material-ui/core'
import ServiceCard from './ServiceCard'

function Index() {
    const data=[{
        title:'Website Development',
        details:'From image sliders to custom content elements and contact forms, Incubator theme is guaranteed to display properly on all major devices'
    },
    {
        title:'Mobile Application Development',
        details:'Modicum Technologies offers various web services with high quality,user friendly,customizable and affordable prices.'},
    {
        title:'ERP Softwares/ Application Development',
        details:'Our proficient mobile application developers build excellent mobile application architecture which makes your app living magic.' },
    {
        title:'Desktop Application Development',
        details:'We offer platform-specific and cross-platform desktop app development services to help you turn a solid software idea into a market sensation.'},
    {
        title:'E-Commerce Services',
        details:'Increase your product sales,get them online today by developing an ecommerce website,this is large impact on your business.'}
        ,{
            title:'Cloud Data Solutions',
            details:'A cloud solution is virtual infrastructure to provide remote working access to software, applications, server and data center through the internet connection'
        }

]
    return (
        <Box id='service' maxWidth='90%' margin='0 auto'>
        <Grid container spacing={4} justifyContent='center'>
            <Grid item xs={12}>
                <Box className='section__title' component='h1' textAlign='center' pt={2}>
                    Services
                </Box>
                <Box className='section__description' component='h4' color='gray' textAlign='center'>
                Software Support for all types of buisnesses
                </Box>
          
          </Grid>

          {data.map((item,index)=><Grid key={'service'+index} item xs={12} md={4} >
          <ServiceCard {...item}/>
          </Grid>
              
          )}
          
        </Grid>
        <Box textAlign='center' mt={3}>
        <Fab variant='extended' size='small' color='primary'>More Services</Fab>            
        </Box>
        </Box>
    )
}

export default Index
