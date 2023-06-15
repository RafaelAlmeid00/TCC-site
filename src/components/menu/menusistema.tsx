import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Box, Card, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {useEffect, useState } from 'react';
import Loading from '../loading';

export default function MenuSistema() {
    console.log(localStorage);
    const userJson = localStorage.getItem('user');
    const userData = userJson ? JSON.parse(userJson) : null;
        const navigate = useNavigate()

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
            width: '100%',
            display: 'flex',
            flexDirection: 'row'
        }}>
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
                        }}
                    >
                        EasyPass
                    </Typography>
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

                    <Container sx={{
                        width: '250px', 
                        float: 'right',
                        mr: -50,
                    }}>
                        <Box sx={{
                            height: '60px',
                            background: 'transparent',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            }}>
                            <motion.div
                                variants={cardVariants}
                                whileHover="hover" // Aplica as animações ao passar o mouse
                            >
                                <NotificationsIcon sx={{ 
                                    width: '40px',
                                    float: 'left',
                                    height: '30px', 
                                    color: 'black', 
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
                                Olá {userData ? userData.user_nome.split(' ')[0] : ''}!
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
                        </Box>
                    </Container>
                    
                    <Container 
                    onClick={() => navigate('/Sistema/Perfil')}
                    sx={{
                        float: 'right',
                        width: '208px',
                        height: '50px',
                        mr: 10,
                    }}>
                        <Card 
                        sx={{
                            mt: 0.55,
                            height: '40px',
                            background: 'rgba(255, 255, 255, 0.35)',
                            borderRadius: '20px',
                            '&:hover': { 
                                cursor:'pointer',
                                boxShadow: '0px 0px 2px 1px',
                            }
                        }}>
                            <AccountCircleIcon sx={{
                                width: '50px',
                                height: '40px',
                            }} />
                            <Typography sx={{
                                float: 'right',
                                mr: 2.25,
                                height: '40px',
                                fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: '18px',
                            display: 'flex',
                            alignItems: 'center',
                            textAlign: 'center',
                            color: '#FFFFFF',
                            }}>
                                Meu Perfil
                            </Typography>
                        </Card>
                    </Container>
                </Toolbar>
            </Container>
        </AppBar>
    )
}