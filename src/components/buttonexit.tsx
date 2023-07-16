import { Box, IconButton, Typography } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useNavigate } from 'react-router-dom';
import ModalContext from "../context/modalcontext";
import React from "react";
interface ExitProps {
    previousRoute: string;
} 
function Exit(props: ExitProps) {
    const navigate = useNavigate()
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);

    const fundo = themes.palette.background.default

    function handleGoBack() {
        navigate(props.previousRoute);
    }

    return (
    <>
    <Box sx={{
        height: '15vh',
        background: verify ? fundo : 'white',
    }}>
        <IconButton
            title="Voltar"
            sx={{
            ml: '10px',
            mt: '10px',
            }}
            onClick={handleGoBack}
        >
            <KeyboardDoubleArrowLeftIcon
                sx={{
                color: verify ? 'white' : 'black',
                fontSize: '35px',
                }}
            /><Typography sx={{
                fontSize: '20px',
                }}>Voltar</Typography>
        </IconButton>
            </Box>
    </>
    );
}

export default Exit;
