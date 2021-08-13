import { Box, Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'

function ChooseCard({title,details}) {
    return (
        <Card style={{height:'100%'}}>
            <CardContent>
                <Box component='h1'>{title}</Box>
                <Typography>{details}</Typography>
            </CardContent>
        </Card>
    )
}

export default ChooseCard
