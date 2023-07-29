import { Box, Typography, CircularProgress } from "@mui/material";
import ModalContext from "../context/modalcontext";
import React from "react";

function Loading() {
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default

    return (
        <Box sx={{
            background: verify ? fundo : 'white',

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
        }}>
        <CircularProgress />
        <Typography variant="h6" sx={{
            marginTop: 2,
        }}>
            Carregando...
        </Typography>
        </Box>
    );
}

export default Loading;
