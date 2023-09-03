import { AppBar, Button, Container, Typography, Toolbar, Divider } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import HomeIcon from '@mui/icons-material/Home';
import StyleIcon from '@mui/icons-material/Style';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import colors from "../../../assets/colors";
import React from "react";
import ModalContext from "../../../context/modalcontext";

export default function MenuPerfil() {
    const navigate = useNavigate();

    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default

    const btnsmenu = [
        { title: 'Informações Pessoais', route: 'dados', icon: <DisplaySettingsIcon /> },
        { title: 'Endereço', route: 'endereco', icon: <HomeIcon /> },
        { title: 'Documentos', route: 'documentos', icon: <StyleIcon /> },
        { title: 'Viagens', route: 'viagens', icon: <DirectionsBusIcon /> },
        { title: 'Extrato Pagamentos', route: 'extrato', icon: <AccountBalanceIcon /> },
        { title: 'Compras', route: 'compras', icon: <LocalMallIcon /> }

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
                                    mt: 1
                                }} />
                            )}
                            <Button
                                onClick={() => navigate(`/Sistema/${btn.route}`)}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    my: 1,
                                    mr: 3,
                                    mb: '3px',
                                    position: 'relative',
                                    ml: '24px',
                                    mt: 2,
                                    color: verify ? colors.sc : 'black',
                                    whiteSpace: 'nowrap', // Prevent wrapping of text
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