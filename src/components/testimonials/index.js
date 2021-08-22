import { Box, IconButton } from '@material-ui/core'
import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import React from 'react'
import TestimonialCard from './TestimonialCard'

function Index() {
    return (
        <Box my={6} maxWidth='80%' margin='20px auto'>
            <Box mb={6} component='h1' textAlign='center'>
                What People Say About Brand
            </Box>
            <Box 
            maxHeight='300px' 
            height='300px' 
            display='flex'
            alignItems='center'
            >
            <Box>
                <IconButton>
                <ArrowLeft/>
                </IconButton>
                </Box>
                <Box flex='1'>
                    <TestimonialCard/>
                </Box>
                <Box>
                <IconButton>
                    <ArrowRight/>
                    </IconButton>
                </Box>
                </Box>
        </Box>
    )
}

export default Index
