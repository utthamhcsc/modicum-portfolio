import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Box, Container, Fab, Typography } from '@material-ui/core'


function Index() {

    return (
      <section id='aboutus'>
        <Container maxWidth='lg' >
        <Grid container spacing={1} alignItems='stretch'>
            <Grid
            
            
              item
              xs={12}
            >
              <Box style={{position:'relative',}}  height='100%' width='100%'>
              <Box  textAlign='center'   fontSize='35px' fontWeight='bolder' py='30px'>
              Modicum provides one stop automated solution for your trade and industry. Depending on the size and field of your organization, we have different set of services to meet your requirements.
              </Box>
              <Box className='modicum' />

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
              height='100%'
              minHeight='200px'
              borderRadius='20px'
              style={{backgroundImage:'url("assets/img/about.jpg")',
              backgroundPosition:'center center',
              objectfit:'contain',
              boxShadow:'2px 3px 7px rgba(0,0,0,.7)',
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
             
              >
                  <Box component='h1' fontSize='65px' className='section__title' textAlign='left'm={0} my='20px' >
                      About Us
                  </Box> 
                  <Typography style={{fontSize:'22px'}} paragraph color='textSecondary' variant="subtitle2" style={{textAlign:'justify'}}>
                  We are a small group of young professionals striving hard for the 
development of the organization. Modicum is a software services firm 
based in Bangalore. We have extensive experience in many diverse 
areas of software development.
</Typography> 
<Typography paragraph style={{fontSize:'22px'}} color='textSecondary' variant="subtitle2" style={{textAlign:'justify'}}>
Our staff of professionals will work with a wide array of platforms, 
languages, and tools in the course of our various projects.We built our 
solutions by closely learning our potential clientele and their 
expectations from our product. We know how to analyze this 
information and customize our offering to changing market needs.
</Typography>
<Typography paragraph style={{fontSize:'22px'}} color='textSecondary' variant="subtitle2" style={{textAlign:'justify'}}>
Modicum Is Focusing exclusively in high quality and cost-effective 
software development and implementation services.
</Typography>   
<Fab variant='extended' size='small' color='primary'>Learn More</Fab>            
                  </Box>  
            </Grid>
        </Grid>

        </Container>
        </section>
    )
}

export default Index
