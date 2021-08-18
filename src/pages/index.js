import { Box } from '@material-ui/core'
import React, { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
const Home=lazy(()=>import('./home-page'))
const Portfolio=lazy(()=>import('./portfolio-page'))
const Service=lazy(()=>import('./service-page'))

const routes=[{
    path:'/',
    exact:true,
    component:Home
},
{
    path:'/projects',
    component:Portfolio
},
{
    path:'/services',
    component:Service
}

]
function Index() {
    return (
        <Box bgcolor='whitesmoke'>
        <Suspense fallback={<h1></h1>}>
        {routes.map((route,index)=><Route key={'route'+index} {...route}/>)}
        </Suspense>
        </Box>
    )
}

export default Index
