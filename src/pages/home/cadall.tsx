
import { Box, Container } from '@mui/material'
import CompleteCad from '../../components/cadastro/dadosuser.tsx'
import Exit from '../../components/buttonexit.tsx'
import { Fade } from 'react-awesome-reveal';
import ModalContext from "../../context/modalcontext";
import React from "react";
import '../../App.css'

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
                zIndex: -1
            }}>
            <Container sx={{
                height: {
                    xs: "80%", // (7.5 / 1200) * 600
                    sm: "80%", // (7.5 / 1200) * 900
                    md: "80%", // (7.5 / 1200) * 1200
                    lg: "80%",
                    xl: "80%", // Manter o mesmo tamanho de lg para xl
                },
                width: {
                    xs: "70vw", // (7.5 / 1200) * 600
                    sm: "70vw", // (7.5 / 1200) * 900
                    md: "70vw", // (7.5 / 1200) * 1200
                    lg: "50vw",
                    xl: "50vw", // Manter o mesmo tamanho de lg para xl
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
                paddingLeft: 5
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

