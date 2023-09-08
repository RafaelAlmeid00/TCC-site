import { Box, Typography, CircularProgress, Container } from "@mui/material";
import ModalContext from "../context/modalcontext";
import React from "react";
import ReactDOM from 'react-dom';

function Loading() {
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default


    return ReactDOM.createPortal(
        <Box sx={{
            background: verify ? fundo : 'white',

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
        }}>
            <Container sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <CircularProgress />
                <Typography variant="h6" sx={{
                    marginTop: 2, color: verify ? 'white' : 'black'
                }}>
                    Carregando...
                </Typography>
            </Container>
        </Box>,
        document.getElementById('loading')
    );
}

export default Loading;
