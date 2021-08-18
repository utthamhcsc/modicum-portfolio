import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundBlendMode:'darken',
    backgroundAttachment:'fixed',
    mixBlendMode:'darken',
    position:'relative',
   
    backgroundColor: 'rgba(0,0,0,.8)',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(22),
      paddingBottom: theme.spacing(22),
    },
   // border:'5px solid '+theme.palette.primary.dark,
    borderTop:0,
    // borderBottomWidth:'10px',
    // borderBottomLeftRadius:'28%',
    // borderBottomRightRadius:'28%',
    '&:before':{
      // content:'""',
      // width:'100%',
      // height:'100%',
      // position:'absolute',
      // top:'-20%',
      // borderRadius:'35%',
      // transform:'scale(1.5)',
      // borderBottom:'10px solid '+theme.palette.primary.dark
    }
  },
  description: {
    color: theme.palette.background.secondary
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    }
  },
  secondaryAction: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }
  }
}));

export default function Header(props) {
  const classes = useStyles();

  const content = {
    'header-p1': 'Our Service',
    'header-p2': '',
    'description': 'Modicum is focusing exclusively in high quality and cost-effective software development and implementation services.',
    'primary-action': 'Action',
    'secondary-action': 'Action',
    'pattern': 'assets/img/home.jpg',
    ...props.content
  };

  return (
    <section id='home' className={classes.section} style={{ backgroundImage: `url("${content['pattern']}")` }}>
      <Container maxWidth="md">
        <Box textAlign="center" color="common.white">
          <Typography variant="h2" component="h2" gutterBottom={true}>
            <Typography  variant="h2" component="span">{content['header-p1']} </Typography>
            <Typography variant="h2" component="span">{content['header-p2']}</Typography>
          </Typography>
          <Container maxWidth="sm">
            <Typography variant="subtitle1" color="textSecondary" paragraph={true} className={classes.description}>{content['description']}</Typography>
          </Container>
          {/* <Box mt={3}>
            <Button variant="contained" color="secondary" className={classes.primaryAction}>{content['primary-action']}</Button>
            <Button variant="outlined" color="secondary" className={classes.secondaryAction}>{content['secondary-action']}</Button>
          </Box> */}
        </Box>
      </Container>
    </section>
  );
}