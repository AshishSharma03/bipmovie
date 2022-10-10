import { AppBar, Toolbar, Typography ,Box, Stack, Switch} from '@mui/material'
import React from 'react'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Link from '../../Mui/Link'


export  const LOGO =({flexG = 1})=>{
    return(
        <Box sx={{flexGrow:flexG}}>
        <Stack direction={"row"} alignItems={"center"}>
             <Box>
             <LiveTvIcon sx={{color:"red"}}/>
             </Box>
             <Typography sx={{fontSize:"20px",paddingLeft:"5px",fontWeight:"700",color:"#2E2E2E"}}>ZMovie</Typography>
        </Stack>
        </Box>
    )
}


function Navbar() {

  return (
        <AppBar position='sticky' sx={{background:"#ffffff",boxShadow:"none"}}>
                <Toolbar>
                  <Link href={'/'} noLinkStyle sx={{textDecoration:"none"}}>
                        <LOGO/>
                  </Link>
                        {/* <Switch aria-label='night mode' /> */}
                </Toolbar>
        </AppBar>
  )
}

export default Navbar