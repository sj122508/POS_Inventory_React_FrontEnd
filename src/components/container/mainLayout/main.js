import {useState} from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Header from './header/header'
import SideBar from './sideBar/sideBar'
import CssBaseline from '@mui/material/CssBaseline';
import Brand from '../brand/brand';

const HeaderSpace = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function Main() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

  return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header 
            isDrawerOpen = {isDrawerOpen}
            handleDrawerOpen={handleDrawerOpen}
        />
        <SideBar 
            isDrawerOpen = {isDrawerOpen}
            handleDrawerClose={handleDrawerClose}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <HeaderSpace />
        <Brand />
        </Box>

        
    </Box>
  )
}

export default Main