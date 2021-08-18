import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Box } from '@material-ui/core'
import ServiceCard from './ServiceCard'

function Index() {
    return (
        <Box id='service' maxWidth='90%' margin='0 auto'>
        <Grid container spacing={4} justifyContent='flex-end'>
            <Grid item xs={12}>
                <Box component='h1' textAlign='center' pt={2}>
                    Services
                </Box>
                <Box component='h4' color='gray' textAlign='center'>
                Software Support for all types of buisnesses
                </Box>
          
          </Grid>

          {Array(6).fill(0).map((item,index)=><Grid key={item+index} item xs={12} md={4} >
          <ServiceCard/>
          </Grid>
              
          )}
          
        </Grid>
        </Box>
    )
}

export default Index
