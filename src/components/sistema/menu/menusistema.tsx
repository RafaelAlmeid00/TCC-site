import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Box, Button, Card, IconButton, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ModalContext from '../../../context/modalcontext';
import React from 'react';
import colors from '../../../assets/colors';
import theme from '../../../assets/theme';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Deccode } from '../FrontDecoded';

export default function MenuSistema() {
    console.log(localStorage);
    const userData = Deccode();
    console.log(userData);
    
    const navigate = useNavigate()
    const { darkMode, setDarkMode } = React.useContext(ModalContext);

    const toggleDarkMode = () => {
        const newTheme = darkMode ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        setDarkMode(!darkMode);
    };

    const cardVariants = {
        hover: {
            scale: 1.05, // Aumenta o tamanho em 10%
            y: [0, 5, 0], // Movimento de flutuação para cima e para baixo
            transition: {
                y: {
                    repeat: Infinity, // Repete a animação infinitamente
                    duration: 1,
                },
            },
        },
    };

    return (
        <AppBar sx={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            display: 'flex',
            flexDirection: 'row',
            height: 'auto'
        }}>
            <Container sx={{
                width: '100%',
                height: '100%'
            }}>
                <Toolbar disableGutters>
                    <Box sx={{
                        width: '50%',
                        height: '100%',
                        float: 'left',
                    }}>
                        <Typography
                            variant='h4'
                            component='a'
                            noWrap
                            href='/#'
                            sx={{
                                fontFamily: 'Franklin Gothic Demi Cond',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                background: 'linear-gradient(to right, #0fcd88 52%, white 50%)',
                                '-webkit-background-clip': 'text',
                                '-webkit-text-fill-color': 'transparent',
                            }}
                        >
                            EasyPass
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'end',
                        flexDirection: 'row',
                        width: '50%',
                        height: '100%',
                        float: 'left',
                    }}>
                        <Container sx={{
                            height: '60px',
                            background: 'transparent',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 'auto'
                        }}>
                            <motion.div
                                variants={cardVariants}
                                whileHover="hover" // Aplica as animações ao passar o mouse
                            >
                                <NotificationsIcon sx={{
                                    width: '40px',
                                    float: 'left',
                                    height: '30px',
                                    color: darkMode ? 'white' : 'black',
                                    mr: 1,
                                    '&:hover': {
                                        cursor: 'pointer',
                                    }
                                }} />
                            </motion.div>
                            <Typography sx={{
                                height: '100px',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                fontSize: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                textAlign: 'center',
                                color: '#FFFFFF',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}>
                                Olá {userData.user_nome.split(' ')[0]}!
                                <Typography sx={{
                                    fontSize: '11px',
                                    color: 'rgba(255, 255, 255, 0.35)',
                                    '&:hover': {
                                        cursor: 'pointer',
                                    }
                                }}>
                                    Veja suas notificações aqui.
                                </Typography>
                            </Typography>
                        </Container>

                        <Container
                            onClick={() => navigate('/Sistema/Perfil')}
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 'auto'
                            }}>
                            <Button
                                variant='contained'
                                sx={{
                                    width: {
                                        xs: '15vw',
                                        sm: '15vw',
                                        md: '10vw',
                                        lg: '10vw',
                                        xl: '10vw',
                                    },
                                    fontSize: {
                                        xs: '2vw',  // (7.5 / 1200) * 600
                                        sm: '1.5vw',  // (7.5 / 1200) * 900
                                        md: '1.2vw',  // (7.5 / 1200) * 1200
                                        lg: '1vw',
                                        xl: '1vw',  // Manter o mesmo tamanho de lg para xl
                                    },
                                    height: {
                                        xs: '7vh',  // (7.5 / 1200) * 600
                                        sm: '7vh',  // (7.5 / 1200) * 900
                                        md: '6vh',  // (7.5 / 1200) * 1200
                                        lg: '6vh',
                                        xl: '6vh',  // Manter o mesmo tamanho de lg para xl
                                    },
                                    background: darkMode ? 'white' : undefined,
                                    color: darkMode ? colors.pm : "white",
                                    border: '2px solid transparent', // adiciona a borda inicialmente
                                    transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        cursor: 'pointer',
                                        border: '2px solid #0fcd88', // muda a cor da borda na animação
                                        background: darkMode ? 'white' : undefined,
                                    }
                                }}
                                startIcon={<AccountCircleIcon sx={{
                                    width: '2vw',
                                    height: '5vh',
                                }} />}
                            >
                                Perfil
                            </Button>
                        </Container>

                        <Container sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 'auto'
                        }}>
                            <IconButton sx={{
                                '&:hover': { color: colors.sc },
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
                        </Container>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}