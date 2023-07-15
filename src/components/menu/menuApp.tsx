import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/actions";
import { useNavigate } from 'react-router-dom';
import theme from '../../assets/theme';
import Image from '../../assets/logo.png';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ModalContext from '../../context/modalcontext';
import { Btn } from '../btns';
import colors from '../../assets/colors';
import { Drawer } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

export default function MenuApp(props: any) {
  const [showCad, setShowCad] = React.useState(true)
  const { darkMode, setDarkMode } = React.useContext(ModalContext);

  const toggleDarkMode = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    setDarkMode(!darkMode);
  };
  const pages = [
    { name: 'Home', route: '/#' },
    { name: 'Quem Somos', route: '/EasyPass' },
    { name: 'Aplicativo', route: '/App' },
    { name: 'Servicos', route: '/Servicos' },
    { name: 'Contatos', route: '/Contatos' },
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
    <>
    <AppBar sx={{
      position: 'sticky',
      top: '0',
      left: '0',
      width: '100vw',
    }}>
      <Container>
        <Toolbar sx={{
          width: {
            xs: '100vw',  // (7.5 / 1200) * 600
            sm: '100vw',  // (7.5 / 1200) * 900
            md: '100vw',  // (7.5 / 1200) * 1200
            lg: '90vw',
            xl: '80vw',
          }
        }}>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 10,
              fontFamily: 'Franklin Gothic Demi Cond',
              fontWeight: 'bold',
              textDecoration: 'none',
              background: 'linear-gradient(to right, #0fcd88 52%, white 50%)',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              display: 'flex',
              [theme.breakpoints.down('lg')]: {
                display: 'none',
              },
              fontSize: '30px'
            }}
          >
            EasyPass
          </Typography>

            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
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
            </Box>
            <Drawer
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
              sx={{
                '& .MuiDrawer-paper': {
                  width: '100%',
                },
              }}
            >
              <Box
                sx={{
                  width: 250,
                  height: '100%',
                  p: 2,
                }}
              >
                <IconButton onClick={handleCloseNavMenu}>
                  <CloseIcon />
                </IconButton>
                {pages.map((page) => (
                  <MenuItem
                    key={page.route}
                    onClick={() => handleNavigate(page.route)}
                    sx={{
                      mt: 3,
                      mb: 3,
                      '&:hover': {
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          width: '100%',
                          borderBottom: '2px solid #0fcd88',
                          bottom: '-2px',
                          left: 0,
                        },
                      },
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={{
                        position: 'relative',
                        fontSize: {
                          xs: "4vw",
                        },
                      }}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
              <Typography
                noWrap
                sx={{
                  mb: 10,
                  fontFamily: 'Franklin Gothic Demi Cond',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  background: 'linear-gradient(to right, #0fcd88 51%, white 50%)',
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                  display: 'flex',
                  fontSize: '30px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                EasyPass
              </Typography>
            </Drawer>
          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' },
              [theme.breakpoints.down('md')]: {
                alignItems: 'center',
                justifyContent: 'center',
              },
              mr: 6,
              ml: 8,
              
            }}>
            <a href="/">
              <img src={Image} style={{
                height: '4vh',
                width: '7vw',
              }}></img>
            </a>
          </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex' },
          }}>
            {pages.map((page) => (
              <Button
                key={page.route}
                onClick={() => handleNavigate(page.route)}
                sx={{
                  my: 2, mr: 3, color: 'white', fontFamily: 'Helvetica',
                  position: 'relative',
                  display: 'inline-block',
                  fontSize: {
                    xs: '1vh',  // (7.5 / 1200) * 600
                    sm: '1.7vh',  // (7.5 / 1200) * 900
                    md: '2vh',  // (7.5 / 1200) * 1200
                    lg: '2vh',
                    xl: '2vh',  // Manter o mesmo tamanho de lg para xl
                  },
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

          <Box sx={{ flexGrow: 0, 
              [theme.breakpoints.up('md')]: {
                marginRight: 13
              },
              [theme.breakpoints.down('md')]: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
              [theme.breakpoints.only('sm')]: {
                flexGrow: 1
              },
              [theme.breakpoints.down('sm')]: {
                marginLeft: -2,
              },
          }}>
            <Btn name="Cadastrar" route="/opcoes" cl={darkMode ? colors.pm : "white"} bc={darkMode && 'white'} bch={darkMode && 'white'} />
          </Box>
          
          <IconButton sx={{'&:hover': { color: colors.sc }, mr: 15,
            [theme.breakpoints.down('md')]: {
              display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            float: 'none',
            mr: 0
              },
              [theme.breakpoints.only('sm')]: {
                flexGrow: 1
              },
        }} onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>

      <AppBar sx={{
        position: 'sticky',
        top: '0',
        left: '0',
        width: '100vw',
        display: 'none',
        [theme.breakpoints.only('sm')]: {
          display: 'block'
        },
      }}>
        <Container>
          <Toolbar sx={{
            width: {
              xs: '100vw',  // (7.5 / 1200) * 600
              sm: '100vw',  // (7.5 / 1200) * 900
              md: '100vw',  // (7.5 / 1200) * 1200
              lg: '90vw',
              xl: '80vw',
            }
          }}>
            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' },
              mr: 10,
                [theme.breakpoints.only('sm')]: {
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexGrow: 'none'
                }, }}>
                {pages.map((page) => (
                  <Button
                    key={page.route}
                    onClick={() => handleNavigate(page.route)}
                    sx={{
                      my: 2, mr: 3, color: 'white', fontFamily: 'Helvetica',
                      position: 'relative',
                      display: 'inline-block',
                      fontSize: {
                        xs: '1vh',  // (7.5 / 1200) * 600
                        sm: '1.7vh',  // (7.5 / 1200) * 900
                        md: '2vh',  // (7.5 / 1200) * 1200
                        lg: '2vh',
                        xl: '2vh',  // Manter o mesmo tamanho de lg para xl
                      },
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
              </Box>
            </Toolbar>
            </Container>
            </AppBar>
    </>
  )
}