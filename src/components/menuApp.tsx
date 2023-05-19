import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import React, { useContext, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { openModal } from "../redux/actions";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

export default function MenuApp(props: any) {
  const [showCad, setShowCad] = React.useState(true)

    const pages = [
      {name: 'Quem Somos', route: '/EasyPass'},
      {name: 'Aplicativo', route: '/App'},
      {name: 'Servicos', route: '/Servicos'},
      {name: 'Contatos', route: '/Contatos'},
    ];
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const dispatch = useDispatch();
    const handleOpen = () => dispatch(openModal());
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const navigate = useNavigate();
    const handleNavigate = (route: any) => {
      handleCloseNavMenu()
      navigate(route);
    };

    console.log(showCad);
    

    return (
    <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
          variant="h4"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 20,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Franklin Gothic Demi Cond',
            fontWeight: 'bold',
            textDecoration: 'none',
            background: 'linear-gradient(to right, #0fcd88 52%, white 50%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            } }
        >
        EasyPass
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
            {pages.map((page) => (
              <MenuItem key={page.route} onClick={() => handleNavigate(page.route)}>
                <Typography textAlign="center" sx={{
                  position: 'relative',
                  '&:hover': {
                  '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  borderBottom: '2px solid #0fcd88',
                  bottom: '-2px',
                  left: 0
          }
        }       
                }}>{page.name}</Typography>
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
            fontSize: 35,
            color: 'inherit',
            fontFamily: 'Franklin Gothic Demi Cond',
            fontWeight: 'bold',
            textDecoration: 'none',
            background: 'linear-gradient(to right, #0fcd88 50%, white 50%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
          }}
        >
          EasyPass
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page.route}
              onClick={() => handleNavigate(page.route)}
              sx={{ my: 2, mr: 3, color: 'white', fontFamily: 'Helvetica',
              position: 'relative',
              display: 'inline-block',
              '&::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              height: '2px',
              borderBottom: '2px solid #0fcd88',
              transform: 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'transform 0.3s ease',
            },
            '&:hover::after': {
              transform: 'scaleX(1)',
            },
            }}
            >
              {page.name}
            </Button>
          ))}
        </Box>

        {showCad ? <Box sx={{ flexGrow: 0, marginRight: 13 }}>
          <Button variant="contained" href="/cadastro" sx={{
            color: 'white',
            marginRight: 1,
            border: '2px solid transparent', // adiciona a borda inicialmente
            transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
            '&:hover': {
            border: '2px solid #0fcd88', // muda a cor da borda na animação
            },
          }}>
          Cadastrar
          </Button>
        </Box> :
        <Box sx={{ flexGrow: 0, marginRight: 13 }}>
          <IconButton>
            <Button variant="contained" href="/Perfil" sx={{
              color: 'white',
              marginRight: 1,
              border: '2px solid transparent', // adiciona a borda inicialmente
              transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
              '&:hover': {
              border: '2px solid #0fcd88', // muda a cor da borda na animação
              },
            }}><AccountCircleIcon sx={{mr: '10px'}} /> Perfil</Button>
        </IconButton>
      </Box>}
      </Toolbar>
    </Container>
  </AppBar>
    )
}