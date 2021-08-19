import { Box, Card, CardContent, IconButton, makeStyles, Typography } from '@material-ui/core'
import { Person } from '@material-ui/icons';
import React from 'react'

const useStyles=makeStyles(theme=>({
    root:{
        transition:'all .3s ease-in-out',
        '& .iconbtn':{
            color:theme.palette.primary.dark
        },
        '&:hover':{
            '& .iconbtn':{
                color:'white'
            },
            backgroundColor:theme.palette.primary.dark,
            color:'white'
        },
        '& h3':{
            fontSize:'20px'
        }
    },

}))
function ChooseCard({title,details}) {
    const classes=useStyles();
    return (
        <Card className={classes.root} style={{height:'100%'}}>
            <CardContent style={{textAlign:'center'}}>
                <IconButton className='iconbtn' color='inherit'  ><Person style={{fontSize:"50px"}}/></IconButton>
                <Box component='h3' mt={0} textAlign='center'>{title}</Box>
                <Typography variant='body' color='textSecondary'>{details}</Typography>
            </CardContent>
        </Card>
    )
}

export default ChooseCard
