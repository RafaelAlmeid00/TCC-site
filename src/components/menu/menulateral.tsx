import { AppBar, Button, Container, Typography, Toolbar, Divider } from "@mui/material";
import React from "react";
import { useNavigate } from 'react-router-dom';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsIcon from '@mui/icons-material/Directions';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import colors from "../../assets/colors";

export default function MenuLateral(props: any) {
    const navigate = useNavigate();
    const handleNavigate = (route: any) => {
        navigate(`/Sistema/${route}`);
    };

    const btnsmenu = [
        { title: 'Controle Cartão', route: 'card', icon: <ConfirmationNumberIcon /> },
        { title: 'Ônibus', route: 'onibus', icon: <DirectionsBusIcon /> },
        { title: 'Rotas', route: 'rotas', icon: <DirectionsIcon /> },
        { title: 'Loja', route: 'loja', icon: <ShoppingCartIcon /> },
        { title: 'SAC', route: 'SAC', icon: <LiveHelpIcon /> }
    ];

    return (
        <AppBar
            sx={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '20vw',
                height: '100%',
                marginTop: '10.3vh',
                background: '#FFFFFF',
                boxShadow: '2px 0px 6px rgba(0, 0, 0, 0.6)'
            }}
        >
            <Container maxWidth="xl" >
                <Toolbar disableGutters sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    mt: '25px',
                    
                }}>
                        {btnsmenu.map((btn, index) => (
                            <React.Fragment key={btn.route}>
                                {index > 0 && (
                                    <Divider variant="inset" component="li" sx={{
                                        width: '80%',
                                        borderBottom: '1px solid #ccc',
                                        margin: 0,
                                        alignSelf: 'center',
                                    }} />
                                )}
                                <Button
                                    onClick={() => handleNavigate(btn.route)}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        my: 2,
                                        mr: 3,
                                        mb: '3px',
                                        mt: '25px',
                                        position: 'relative',
                                        ml: '24px',
                                        color: 'black',
                                        '&:hover': {
                                            background: '#e9e9e9e9',
                                                
                                            '& svg': {
                                                fill: colors.sc, // Adicionado para mudar a cor do ícone
                                            },
                                            '& .MuiTypography-root': {
                                                color: colors.sc, // Adicionado para mudar a cor do texto
                                            }
                                        },
                                    }}
                                >
                                    {btn.icon}
                                    <Typography
                                        sx={{
                                            ml: '5px',
                                            fontSize: '14px',
                                            color: 'black',
                                            fontWeight: '600',
                                            
                                        }}
                                    >
                                        {btn.title}
                                    </Typography>
                                </Button>
                            </React.Fragment>
                        ))}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
