import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Box, Container, Typography } from '@material-ui/core'


function Index() {

    return (
        <Container maxWidth='lg'>
        <Grid container spacing={1} alignItems='stretch'>
            <Grid
              item
              xs={12}
            >
              <Box textAlign='center' fontSize='35px' py='30px'>
              Modicum provides one stop automated solution for your trade and industry. Depending on the size and field of your organization, we have different set of services to meet your requirements.
              </Box>    
            </Grid>
            
            <Grid
              item
              xs={12}
              md={6}
            >
              <Box
              width='80%'
              margin='0 auto'
              minHeight='500px'
              borderRadius='20px'
              style={{backgroundImage:'url("assets/img/home.jpg")',
              backgroundPosition:'center center',
              objectfit:'contain',
              backgroundAttachment:'fixed',
              backgroundSize:'cover'}}
              
              />  
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
            >
              <Box
              width='80%'
              margin='0 auto'
              minHeight='500px'
              >
                  <Box textAlign='center' my='20px' fontSize='20px' component={Typography} variant="h2">
                      About Us
                  </Box> 
                  <Typography paragraph color='textSecondary' variant="subtitle2" style={{textAlign:'justify'}}>
                  We are a small group of young professionals striving hard for the 
development of the organization. Modicum is a software services firm 
based in Bangalore. We have extensive experience in many diverse 
areas of software development.
</Typography> 
<Typography paragraph color='textSecondary' variant="subtitle2" style={{textAlign:'justify'}}>
Our staff of professionals will work with a wide array of platforms, 
languages, and tools in the course of our various projects.We built our 
solutions by closely learning our potential clientele and their 
expectations from our product. We know how to analyze this 
information and customize our offering to changing market needs.
</Typography>
<Typography paragraph color='textSecondary' variant="subtitle2" style={{textAlign:'justify'}}>
Modicum Is Focusing exclusively in high quality and cost-effective 
software development and implementation services.
</Typography>               
                  </Box>  
            </Grid>
        </Grid>
        </Container>
    )
}

export default Index
