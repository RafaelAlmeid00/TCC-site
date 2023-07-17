import { AppBar, Button, Container, Typography, Toolbar, Divider } from "@mui/material";
import React from "react";
import { useNavigate } from 'react-router-dom';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsIcon from '@mui/icons-material/Directions';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import colors from "../../../assets/colors";
import ModalContext from "../../../context/modalcontext";

export default function MenuLateral() {
    const navigate = useNavigate();
    const handleNavigate = (route: string) => {
        navigate(`/Sistema/${route}`);
    };
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default

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
                background: verify ? fundo : 'white',
                boxShadow: verify ? '1px 0px 3px white' : '2px 0px 6px rgba(0, 0, 0, 0.6)',
                zIndex: 1
            }}
        >
            <Container maxWidth="xl" sx={{
                mt: '9vh'
            }} >
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
                                    listStyleType: 'none',
                                    mt: 2
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
                                    color: verify ? colors.sc : 'black',
                                    display: 'flex', // Adicionado para permitir alinhar verticalmente o ícone
                                    alignItems: 'center', // Adicionado para alinhar verticalmente o ícone
                                    '&:hover': {
                                        background: '#e9e9e9e9',
                                        '& svg': {
                                            fill: verify ? 'black' : colors.sc,
                                        },
                                        '& .MuiTypography-root': {
                                            color: verify ? 'black' : colors.sc,
                                        }
                                    },
                                }}
                            >
                                {btn.icon}
                                <Typography
                                    sx={{
                                        ml: '5px',
                                        fontSize: '14px',
                                        color: verify ? colors.sc : 'black',
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
