import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import ProjectPageCard from './ProjectPageCard'
const useStyles=makeStyles(theme=>({}))
export default function PortFolio() {
    return (
        <Box maxWidth='80%' margin='0 auto'>
        <h1>Our Projects</h1>  
        <Categories/>
        <ProjectPageCard />  
            
        </Box>
    )
}

const Categories=()=>{
    const category=['All','Website','Mobile Apps','ERP Softwares','UI/UX Design'];
  return  <Box display='flex'>
       <Box mr={1}>
        Categories:
        </Box> 
        {category.map(item=><Box style={{cursor:'pointer'}} key={item} mx={1}>
        {item}
        </Box> )} 
     </Box>   

}
