import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Box } from '@material-ui/core'
import ProjectCard from './ProjectCard'

function Index() {
    return (
        <Box maxWidth='90%' margin='0 auto'>
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Box component='h1' textAlign='center'>
                    Projects
                </Box>
                <Box component='h3' textAlign='center' px={4}>
                The development team of Modicum is equipped with proper human resources specialized in different system development tasks.
                </Box>
          
          </Grid>

          {Array(3).fill(0).map((item,index)=><Grid id={item+index} item xs={12} md={4}>
          <ProjectCard/>
          </Grid>
              
          )}
          
        </Grid>
        </Box>
    )
}

export default Index
