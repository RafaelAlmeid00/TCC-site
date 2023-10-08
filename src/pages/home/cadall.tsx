
import { Box, Container } from '@mui/material'
import CompleteCad from '../../components/cadastro/dadosuser.tsx'
import Exit from '../../components/buttonexit.tsx'
import { Fade } from 'react-awesome-reveal';
import ModalContext from "../../context/modalcontext.tsx";
import React from "react";
import '../../App.css'
import theme from '../../assets/theme.tsx';

function Cadall() {
    const { hasEntered } = React.useContext(ModalContext);
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default

    return (
        <>
            <Exit previousRoute={'/Cadastro'} />
            <Box sx={{
                background: verify ? fundo : 'white',
                height: "85vh",
                width: "100vw",
                zIndex: -1,
               
            }}>
                <Container sx={{
                    height: {
                        xs: "80%", 
                        sm: "80%", 
                        md: "80%", 
                        lg: "80%",
                        xl: "80%", 
                    },
                    width: {
                        xs: "70vw",
                        sm: "70vw", 
                        md: "70vw", 
                        lg: "50vw",
                        xl: "50vw",
                    },
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: 5,
                    boxShadow: "0px 0px 10px 4px rgba(0, 0, 0, 0.4)",
                    display: "flex",
                    alignItems: 'center',
                    justifyContente: 'center',
                    flexDirection: "row",
                    flexGrow: 1,
                    gap: 2,
                    paddingRight: 5,
                    paddingLeft: 5,
                    [theme.breakpoints.down('md')]: {
                        height: "60vh",
                    }
                }}>
                    <Fade cascade damping={0.2} triggerOnce={hasEntered}>
                        <CompleteCad />
                    </Fade>
                </Container>
            </Box>
        </>
    )
}

export default Cadall

