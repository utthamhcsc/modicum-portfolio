import React, { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
const Home=lazy(()=>import('./home-page'))
const Portfolio=lazy(()=>import('./portfolio-page'))
const Service=lazy(()=>import('./service-page'))

const routes=[{
    path:'/',
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
        <Suspense fallback={<h1>Loading....</h1>}>
        {routes.map(route=><Route {...route}/>)}
        </Suspense>
    )
}

export default Index
