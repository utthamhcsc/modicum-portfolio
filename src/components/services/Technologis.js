import { Box, colors, Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import ServicesTimeLine from './ServicesTimeLine';
import TechnologyCard from './TechnologyCard';
const useStyles=makeStyles(theme=>({
title:{
    paddingTop:'35px',
    fontSize: '32px',
  fontWeight: 'bold',
  color: '#c45102'

},
subtitle:{
    color:colors.grey[600],
    borderBottom:'2px solid '+colors.grey[600]
}

}))
function Technologis() {
    const classes=useStyles();
    const content={
        heading:'FUTURE-READY',
        subtitle:'Ready To be Technical Partner in every Sectors',
        subtitle1:'Technology Vision 2021: Leaders wanted',
        subtitle2:'Check out what programming languages, database systems, and platforms we use to complete projects for our tech.'
    }
    return (
        <Box maxWidth='80%' pt={10} mt={-10} display='flex' flexDirection='column' alignItems='center' bgcolor='#f5f5f5' margin='0 auto'>
            <Typography className={classes.title} >{content['heading']}</Typography>
            <Typography className={classes.subtitle}>{content['subtitle']}</Typography>
            <Box my={2}/>
            <Typography  variant='body2'><b>{content['subtitle1']}</b></Typography>
            <Typography variant='body1' color='textSecondary'><small>{content['subtitle2']}</small></Typography>
            <Box my={2}/>
            <TechnologyCard/>
            <Box my={2}/>
         </Box>   
    )
}

export default Technologis
