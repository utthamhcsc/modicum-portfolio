import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, Chip, colors, Fab, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
const useStyles=makeStyles(theme=>({
    title:{
        
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:colors.grey[200],
        '& h5':{
            fontSize:'28px',
        color:theme.palette.primary.dark,
        }
    },
imagebox:{
    
    backgroundPosition:'center center',
    backgroundSize:'cover',
    overflow:'hidden',
    '& .demo':{
        transition:'transform .3s ease-in-out',
        transform:'translateY(100%)'
    },
    '&:hover .demo':{
        transform:'translateY(0)'
    }
}

}))
function ProjectPageCard() {
    const data = [
        {
        "companyname" : "BAR MAGICS",
        "compdesc_1" :"We understand that the society needs responsible and courteous bartenders for which we convey knowledge and values with hands on training and a space to polish their skills before stepping out into the world of bartending. ",
        "compdesc_2" :" ",
        "compdesc_3" :" ",
        "compcatogary" : "Bartending",
        "compimg" : "",
        "URL" : "http://www.barmagics.com/",
        "techUsed":"WordPress",
        },
        {
          "companyname" : "RUDHRA SOLAR",
          "compdesc_1" :" The eco-friendly products of RSAIPL shall not only go a long way in helping global efforts in conserving the environment but also helps customers contribute to green and clean technology.",
          "compdesc_2" :" ",
          "compdesc_3" :" ",
          "compcatogary" : "Solar Industry",
          "compimg" : " ",
          "URL" : "http://rudhrasolar.com/",
          "techUsed":"HTML5,CSS3,bootstrap 3 & 4,Javascript, PHP",
        },
        {
          "companyname" : "RUDHRA LITE",
          "compdesc_1" :"Rudhra Lite is a young and innovative Lighting Company who has started manufacturing and marketing IP rated lighting systems which match the aesthetics and quality norms of the best lighting fixtures available in Indian markets.",
          "compdesc_2" :" ",
          "compdesc_3" :" ",
          "compcatogary" : " LED Lightings.",
          "compimg" : "",
          "URL" : " http://rudhralite.com/",
          "techUsed":"WordPress",
          },
          {
            "companyname" : "Fundwaste Recycling Application",
            "compdesc_1" :" •	With the contribution of this application recycling companies and manufacturing companies will be able to explore together new opportunities for waste reduction and recycling through user driven innovation.",
            "compdesc_2" :" ",
            "compdesc_3" :" ",
            "compcatogary" : "Recycling companies can easily identify the collected garbage data and payment data.",
            "compimg" : " ",
            "URL" : "",
            "techUsed":"React Native, React JS , Java",
          },
          {
            "companyname" : "PKMNC TRANSPORTS",
            "compdesc_1" :"We provide cab facilities for the companies which would like to hire a cab for the transportation facility of its employees. ",
            "compdesc_2" :" ",
            "compdesc_3" :" ",
            "compcatogary" : "Transport Industry",
            "compimg" : "",
            "URL" : "https://play.google.com/store/apps/details?id=com.pkcabservice",
            "techUsed":"Ionic 3, Angular 5 & 6, Typescript, Aws Lambda Function Using Java",
            },
            {
              "companyname" : "IBRO's Trading Pvt ltd",
              "compdesc_1" :" Medhire are established in 2018 are engaged in manufacturing a high-quality range of Hospital Accessories. All offered products are manufactured using high-quality resources",
              "compdesc_2" :" ",
              "compdesc_3" :" ",
              "compcatogary" : "E-Commerce",
              "compimg" : " ",
              "URL" : "http://test.modicumtechnologies.com/",
              "techUsed":" Angular 5 & 6, Typescript, Aws Lambda Function Using Java.",
            },
            {
              "companyname" : "SN INFOSYSTEMS",
              "compdesc_1" :" Creative Software Development, Research & Development Team that spotlights on conveying arrangements utilizing the latest Innovation.",
              "compdesc_2" :" ",
              "compdesc_3" :" ",
              "compcatogary" : " Medical Equipment Suppliers.",
              "compimg" : " ",
              "URL" : "http://sninfosystems.modicumtechnologies.com",
              "techUsed":" HTML5,CSS3,Javascript, Jquery , PHP.",
            },
            {
              "companyname" : "AMRUTHA ACADEMY",
              "compdesc_1" :"It is an educational institution website which includes courses offered by the institution and on filling of application form.",
              "compdesc_2" :" ",
              "compdesc_3" :" ",
              "compcatogary" : "  Educational Institution.",
              "compimg" : " ",
              "URL" : "http://amruthaacademy.modicumtechnologies.com",
              "techUsed":"HTML5, CSS3, JavaScript, JQuery, PHP.",
            },
            {
              "companyname" : "CK INFRA EQUIPMENT PRIVATE LIMITED",
              "compdesc_1" :"Provides services such as Batching Plant Service, Concrete Pump Service, Boom Pump Service, Line Pump Service and Placing Boom Service in the industry.",
              "compdesc_2" :" ",
              "compdesc_3" :" ",
              "compcatogary" : " Infrastructure Service Provider",
              "compimg" : " ",
              "URL" : "http://modicumtechnologies.com/CK/",
              "techUsed":" WordPress",
            },
            {
              "companyname" : "FOCUS ADVANCE GEAR",
              "compdesc_1" :" To explore and provide Electrical and Electronics engineering solutions and Electricals Supporting products to meet client requirements as per our sales & services,",
              "compdesc_2" :" ",
              "compdesc_3" :" ",
              "compcatogary" : " Electrical and Electronics engineering solutions.",
              "compimg" : " ",
              "URL" : "http://modicumtechnologies.com/fas/",
              "techUsed":" WordPress",
            },
            {
              "companyname" : "iCHICKEN",
              "compdesc_1" :" This is an e-Commerce mobile application . It is a online meat ordering system. It overcomes the disadvantages of traditional queueing system. ",
              "compdesc_2" :" ",
              "compdesc_3" :" ",
              "compcatogary" : "e-Commerce Mobile application.",
              "compimg" : " ",
              "URL" : " IBROS Trading Pvt Ltd.",
              "techUsed":"Angular 2, ionic2, PHP, HTML, CSS, JavaScript",
            },
            {
              "companyname" : "USA TOURS & TRAVELS",
              "compdesc_1" :" Offering online booking of  travel services of the highest quality, combining our energy and enthusiasm, with our years of experience. ",
              "compdesc_2" :" ",
              "compdesc_3" :" ",
              "compcatogary" : "Travel Website.",
              "compimg" : " ",
              "URL" : "http://usatoursandtravels.modicumtechnologies.com",
              "techUsed":"HTML5,CSS3,Javascript, Jquery , PHP",
            },
          
      ]
    return (
        <>
        <Box my={2}/>
     <Grid container spacing={5}>
         {data.map((item,index)=><Grid key={'p'+index} item xs={12} sm={6}><ProjectCard data={item}/></Grid>)}
         </Grid>
         </>
    )
}

export default ProjectPageCard
const ProjectCard=({data})=>{
    const classes=useStyles();
    return <Paper elevation={0}>
        <Box minHeight='300px' className={classes.imagebox} style={{backgroundImage:'url("assets/img/home.jpg")',height:'100%',width:'100%'}}>
            <Box className='demo' minHeight='300px' display='grid'  style={{display:'grid',placeItems:'center',height:'100%',width:'100%',backgroundColor:'rgba(0,0,0,.4)'}}>
            <Button variant='contained' component='a' target='_blank' href={data?.URL}>Click Here To Visit</Button>
            </Box>
            </Box>
            <Box mb={2}pt={2} className={classes.title}>
                <Typography gutterBottom variant='h5'>{data.companyname}</Typography>
                <Typography gutterBottom>Project Category: {data?.compcatogary}</Typography>
             </Box> 
             <Box m={2}>
<Typography color='textSecondary' variant='subtitle2' gutterBottom><b>Description</b></Typography>
<Typography color='textSecondary' variant='caption' gutterBottom>
{data.compdesc_1}
</Typography>
<Typography color='textSecondary' variant='subtitle2' style={{display:'flex',flexWrap:'wrap',alignItems:'baseline'}}>
    <b style={{marginRight:'20px'}}>Technologies Used</b>
   {data.techUsed?.split(',')?.map(item=> <Box p={1}  component={Fab} size='small' variant='extended' style={{margin:'10px'}} ><small style={{padding:'8px 16px'}}>{item}</small></Box>
)}
    </Typography>              
                
                </Box>  
    </Paper>
}