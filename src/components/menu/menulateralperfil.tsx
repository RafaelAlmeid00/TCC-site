import { AppBar, Button, Container, Typography, Toolbar, Divider } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import HomeIcon from '@mui/icons-material/Home';
import StyleIcon from '@mui/icons-material/Style';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import colors from "../../assets/colors";
import React from "react";

export default function MenuPerfil(props: any) {
    const navigate = useNavigate();
    const handleNavigate = (route: any) => {
        navigate(`/${route}`);
    };


    const btnsmenu = [
        { title: 'Minha Conta', route: 'sistema/Perfil', icon: <ManageAccountsIcon /> },
        { title: 'Informações Pessoais', route: 'sistema/Dados', icon: <DisplaySettingsIcon /> },
        { title: 'Endereço', route: 'sistema/Endereço', icon: <HomeIcon /> },
        { title: 'Cartões', route: 'sistema/Cartões', icon: <StyleIcon /> },
        { title: 'Viagens', route: 'sistema/Viajens', icon: <DirectionsBusIcon /> },
        { title: 'Extrato Pagamentos', route: 'sistema/Extrato', icon: <AccountBalanceIcon /> },
        { title: 'Compras', route: 'sistema/Compras', icon: <LocalMallIcon /> }

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
                                    mt: -0.5
                                }} />
                            )}
                            <Button
                                onClick={() => handleNavigate(btn.route)}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    my: 1,
                                    mr: 3,
                                    mb: '3px',
                                    position: 'relative',
                                    ml: '24px',
                                    mt: 2,
                                    color: 'black',
                                    '&:hover': {
                                        background: '#e9e9e9e9',
                                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
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
