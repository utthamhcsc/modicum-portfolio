import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Box } from '@material-ui/core'
import ChooseCard from './ChooseCard'


function Index() {
    return (
        <Box maxWidth='90%' margin='0 auto'>
        <Grid container spacing={4} alignItems='stretch' justifyContent='center'>
            <Grid item xs={12}>
                <Box component='h1' textAlign='center'>
                Why Choose Us
                </Box>
                <Box component='h4' color='gray' textAlign='center'>
                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                </Box>
          
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box
            height='100%'
            minHeight='200px'
                style={{backgroundImage:'url("assets/img/home.jpg")'}}
            />
          </Grid>
          <Grid item container xs={12} sm={9} spacing={4} justifyContent='center' alignItems='stretch'>
          <Grid item xs={12} sm={6}>
              <ChooseCard title='User Friendly Experience' details='We deliver a website which is compactable to all kind devices with a smooth browser experience. Our web developer main focus is on client success through the user, search engine friendly.'/>

</Grid>
<Grid item xs={12} sm={6}>

<ChooseCard title='Affordable Pricing' details='jksdWe provide cost-effective solutions to our clients based on business requirements and budget.Our focus is to build a long term relationship with the client who year after year put their trust with us.'/>
          </Grid>
          <Grid item xs={12} sm={6}>
          <ChooseCard title='Promote Brand Awareness' details='Modicum ensures that your brands meet all the mobility specifications. The android or iOS mobile application that we design will correctly fit any business model.'/>
          </Grid>
          <Grid item xs={12} sm={6}>
          <ChooseCard title='In TIme Delivery' details='Our highly skilled designers and developers have experience in latest technologies who can understand the client requirements and deliver the services within the deadline.'/>
          </Grid>
          </Grid>
          
              
         
          
        </Grid>

        </Box>
    )
}

export default Index
