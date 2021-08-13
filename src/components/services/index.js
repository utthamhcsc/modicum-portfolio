import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Box } from '@material-ui/core'
import ServiceCard from './ServiceCard'

function Index() {
    return (
        <Box maxWidth='90%' margin='0 auto'>
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Box component='h1' textAlign='center'>
                    Services
                </Box>
                <Box component='h3' textAlign='center'>
                Software Support for all types of buisnesses
                </Box>
          
          </Grid>

          {Array(6).fill(0).map((item,index)=><Grid id={item+index} item xs={12} md={4}>
          <ServiceCard/>
          </Grid>
              
          )}
          
        </Grid>
        </Box>
    )
}

export default Index
