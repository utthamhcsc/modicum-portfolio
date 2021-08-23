import { Box, IconButton } from '@material-ui/core'
import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import React, { useState } from 'react'
import TestimonialCard from './TestimonialCard'

function Index() {
const [index,setIndex]=useState(0)
const moveToNext=()=>{
setIndex(i=>(i<(data.length-1))?i+1:0)
}
const moveToPrevious=()=>{
    setIndex(i=>(i>0)?i-1:data.length-1)
}
    return (
        <Box my={6} maxWidth='80%' margin='20px auto'>
            <Box className='section__title' mb={6} component='h1' textAlign='center'>
                What People Say About Brand
            </Box>
            <Box 
            maxHeight='300px' 
            height='300px' 
            display='flex'
            alignItems='center'
            >
            <Box>
                <IconButton onClick={moveToPrevious}>
                <ArrowLeft/>
                </IconButton>
                </Box>
                <Box flex='1'>
                    <TestimonialCard data={data[index]}/>
                </Box>
                <Box>
                <IconButton onClick={moveToNext}>
                    <ArrowRight/>
                    </IconButton>
                </Box>
                </Box>
        </Box>
    )
}

export default Index

const data = [
    {
    "companyname" : "Infocus Data Solutions",
    "clientname": "Shrihari",
    "Designation": "Founder",
    "Experience": "Engagement with Modicum technologies is going strong with 1+ years now.Mobile application developers are very skilful, dedicated and are always enthusiastic to learn new things.We were able to deliver and exceed expectations with our clients every time.Very happy working with Nagaraj and team across multiple projects. Would recommend services from Modicum technologies. ",
    "image": 'assets/img/infocus.jpg'
    },
    {
      "companyname" : "Flywheel Embedded Research Pvt Ltd ",
      "clientname": "Sharanbasava",
      "Designation": "Founder",
      "Experience": "This has really been impressive work and we are amazed by short turnaround. In fact, we have got some very good reviews about the creative design as well. I am sure I would be very local about my feedback for your organization.",
      "image": 'assets/img/flywheel.jpg' 
  
      
      },
      {
        "companyname" : "KVJ Soft ",
        "clientname": "Naveen",
        "Designation": "Founder",
        "Experience": "My experience with Modicum Technologies has been amazing during the building of Prototype for couple of my customers. The support exhibited was beyond my expectations & the team with whom I had interaction had lot of patience to get the work done by working without any time constraints.",
        "image": 'assets/img/naveen.png' 
  
        },
        {
          "companyname" : "Prayukti Software Technologies ",
          "clientname": "Jegannath",
          "Designation": "Founder",
          "Experience": "",
          "image": '' 
  
          },
          {
            "companyname" : "IBRO's Trading Pvt ltd",
            "clientname": "SanjeevSagar",
            "Designation": "Founder",
            "Experience": "A pleasure to work with it. The project was actually delivered ahead of schedule. Regular scrum calls were clear and efficient. On budget and ahead of schedule. We will definitely work with them again.",
            "image": 'assets/img/ibros.jpg' 
  
            },
            {
              "companyname" : "Funky Brand Pvt Ltd ",
              "clientname": " Prabhakar Patil",
              "Designation": "Founder",
              "Experience": "Modicum Technologies has worked with us over the years on Web Designing and Mobile application development. The creative team is extremely talented, reliable and their passion is contagious.",
              "image": 'assets/img/prabakar.jpeg' 
  
              },
              {
                "companyname" : "Squirrel Seva Softtech  ",
                "clientname": "Shivanand Hanji",
                "Designation": "Founder",
                "Experience": "",
                "image": '' 
  
                },
                {
                  "companyname" : "Event Bartending Pvt Ltd",
                  "clientname": "  James Nicolas",
                  "Designation": "Co-Founder",
                  "Experience": "Working with MODICUM was an absolute pleasure. We are extremely happy with the results of our app and you have built. The team manage to understand every minor detail and tweak without repetition or mistake. We will enjoy working together again in the near future.",
                  "image": '' 
  
                  },
                  {
                    "companyname" : "SN INFO Systems ",
                    "clientname": "Shivraj",
                    "Designation": " Co-Founder",
                    "Experience": "I really appreciate the team’s effort. It has been a pleasure to see this project become a reality. My hope is that the website will then stand as a testament to all of the effort invested in it by so many people. Thank you again for all of your support and assistance.",
                    "image": '' 
  
                    },
  ]