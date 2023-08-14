import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Login from '../assets/login.png'
import { Link } from '@mui/material';



const settings = ['Student' , 'Company','Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = [
    {
      id:1,
      name:'home',
    },
    {
      id:2,
      name:'about',
    },
    {
      id:3,
      name:'contact',
    }
  ];

  return (
    <AppBar position="static" sx={{background:'white'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{cursor:'pointer'}}>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA4CAMAAABqpkCcAAABnlBMVEX///+R2Pg+QJX/8RL/9QD/9BHFux8ArfD/9wDsLjfvUjIAq+//9xAAr/C/wSCV2viN2v2J2P9AN5DrIzguMpm7t603Opf/+wDCv04qQZoAAAD27fbx5RfIvx7j2Rrc0ht60PZUwvO1rSFqyvXszszuxS7twVP21ADSyB3ovITryb++tiL7+f/rvEHpwUi/uKiXkSintM6OzvnntnXLr4zjvVg2ufHEt5v2zRXhwmLQvonov5auvMP/AAD4qx7ywl+9u5q5skbuzKPtyXvpxK+ooSXVvn22tLWWwenSsnvx3+b53gCstMWeu91ghL1/ueJKWKJadrVubH+ZlGqEgXRRZqsgJpymoV96eHjwfiv3vhhGR44ACp6wq13tci30tB/sjiUegspgXoUSGpsrZbPynyfwdgDnrDPqXSnrVQ4Tmd10l8WSdm3FnkmujFogIzl7bCC5R1TeJULLLE8+r89GpNujpMibgx4LEjDNzc0ZFxmcmqPHfpKKf6ubhJXXRkJiYWIsKy1iRi66nCTKlihPTCs6NiJfWyUACTZfWkR7zWaQAAAGGklEQVRIiYWWjV/TRhjH29xdE9ZkSUshKEkuTSgJBtpYIARUUEoEKYITBoJKfZnvm8PpXnyb003n/us9l6SlvLg9n0/bS3rf/J7nd5e7y2SOxuDQfGO4EoZhZbgxPzR4TI+jyMKwgzDGIgQhGCNneOH/wOURB2NCCNIM6lINQRNIZ3z5v3RGmjFCdeq7Oct19SjnMhQ3R76odyrEBBHX863Is5BuUepaok9FQwMuPHUsMzoOD9U0ouvIcynVDAPpWs7IadT1DIQIGh89JrsxAYmuZiFkxeWwfiR+jmtEkcXqGzuS5WAFIOr6kR4DuB3sAowhKNKIUBk8AhHiWx7S4PmYONWL52t9tamLVWYpk3apr4uHsNExQaQ5y4iZcOZ0XWlH/fRM7JGRo65LhLHu2sYFUY8Ml3lcWQQkux8ALlZgPDQ3QpQI412WI1HXLRchwemrdyMpWO9zmFWGb4ioMwCDjkgN1yBIqC4dZWJuqSrASFKLik67tBFBMyKwCV86RqgtdwlDQoaP2jkuN4ll5USEJwpfYFgUJjB4ErmouZxaASMC6V06KCTL8kEM1CBJLREbdIhOwYjJLiXZNOVyUGY/XdgkPB5GLa5sQTB0mBDO0r6IyefLssQHcjnPK/uSSw5BORBbAKoq6JZH8GI7PyUwZUmSyulHtgOz/c8iJmC2UGUJIkMnuJrmJyt5PrAlnpdYwA+Q+WwqV6hilPMJpDiEqQWur6RSUA90C2wzdkOxg7zEl2U7FVuBCalRPJSZh7I8oZJKBTz0gxTbtciyEoBePkjFKpjmqDCfaWDDQ8JULCXb8GTePui4bEq8lE9uKlOCZulCI1MloojQ5YSSyzxvHoRYqSzJJMXLCMHKVc1UCLyoYZygIkF6RyAWYGc+drIQEgORSiYkVBemGSUHEp/fT69rbsAA8lLALgvTWNNQmAmRrwkzcYLgXtDpaZbtstnByrwU+6jMqJ6vMSoXqbWkrDSN1Jhu4Sw8j/VRampkgVYFWVToU+I/uqRkm5e63GRiPKP6BGpBXcNY82LKzHd3y8bUvh8muG/GlOfhYRgvGACWoRnET0udsPMs7I4lMDXZfFRqxNVxA+YG9RBzQwYP5QRZW+WKSXCrawnH/oRGYQZFLsyNIaRFCJyH9ykpS167Uipy/f0cx76KpStrclJYAH8XpmGzQUOZUQe5HoyyHKRD8k2J9b+63s/1b2wwtvQtzHk2axgVur7owKI4J1hGc4mlAJSc5YoM2twY2Ly+ubW1ybAiV49NBOqyYxnCHFsMMTUws0NmKXBcrOQasKfAx73GMK5YT+pSpjSYhmxJHA3V7R14UxQbXtwrXBLX1wdubN7Yunk9veaAgqlSqOzsqmG8ap9RW9s7K2y8pNViqjXgMi2DDiRaXHEV3lU7u7Jza1Y9kyy9YevW7qSShRl6u5hK3VkfuMvdvXnzTlvsO7YQKJPbt1o76eJ7pnWvdf+sYsKbnGpdowbSqAYut7UeS7KpnL3fujc7396HHjzsbc3W2ezoiIFW6e5+XSBlZ+utVu/DB529aDl0eu5NF8B7Ke3VvzFQ4kpbW6Xksgg1S4XGbI8Tdp0hFh71tNQpOx9IjxOx0pYL1IULCVW8LQV5e0LY6Xm00L1ZNtTdJq7Z8H4kWP96FwUQLN413NxVGwc35oa6PYsmCvIT6XF/qVTa/P6HEtf/9OkmtAF6IhcmSGtbnT60m/+4p7Yc3Fg694R/MQDx7KcT3Innz1nzhfTzuV8auNlSf/3t5QHq2qvXI3C8EHZ637z9fRbiXUy9Y83f377pbcFWiUbOvvrjAPXy5KvXC45Amr09PT29ED0xlTThTkgE59Tr9ycXD6YI3OvBOSGm4kioNHpDdW4QemQOB9xbvPrhz6/a8Rx8eNa5+uvD1cXFI0qZPv/jp72/P7/3vm5H5EedtvfP5497nz7564eo86ooqqqG4MiksmDfBjuPxlcGMUQB2hcOUxhBEHHP8yEiX/Qjy9eo5YEk3ICjEgQ+nkJiRC3oF0UinEYjUfR9I7JyViSi4ymBJMHOyFryC8cq1dLF+FYcwmGqpueODb37vr6V9v4XtQ32+2ETJckAAAAASUVORK5CYII=" alt="logo"  />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 53,
              ml:2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.01rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Training & Placement Cell, Manit Bhopal
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((pages) => (
                <MenuItem  key={pages.id}  onClick={handleCloseNavMenu}>
                  <Typography   textAlign="center" variant='h6'  color="black" sx={{

                    fontWeight:700
                    

                  }}>
                    <Link to={pages.name}>{pages.name}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((pages) => (
              <Button
                key={pages.id}
                onClick={handleCloseNavMenu}
                
                sx={{ my: 2, fontWeight:400,  color: 'black', display: 'block' }}
              >
              <Link to={pages.name} >{pages.name}</Link>
              </Button>
            ))}
          </Box>

{/* <div className='w-full h-10 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between '>
    
      <div className='flex items-center gap-6'>
        <ul className='flex items-center gap-6'>
     <li className='text-base text-black font-bold hover:text-green-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
     <li className='text-base text-black font-bold hover:text-green-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
      <li className='text-base text-black font-bold hover:text-green-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
      <li className='text-base text-black font-bold hover:text-green-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
      <li className='text-base text-black font-bold hover:text-green-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
        </ul>
     
    
      </div>
      </div> 
      
    </div> */}
    

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

                <img src={Login} alt="login" height='35' />

              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>

              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;