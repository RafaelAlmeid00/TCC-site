
import { Box } from '@mui/material'

import Exit from '../../components/buttonexit.tsx'
import CompleteCadEscola from '../../components/cadastro/Cadastroescola/dadosescola.tsx'
import CompleteCad2Escola from '../../components/cadastro/Cadastroescola/endereço.tsx'
import { Fade } from 'react-awesome-reveal';
import ModalContext from "../../context/modalcontext";
import React from "react";
import '../../App.css'

function CadallEscola() {
    const { hasEntered } = React.useContext(ModalContext);

    return (
        <>
            <Exit previousRoute={'/Opcoes'} />
            <Box sx={{
                backgroundColor: "#F0F0FF",
                height: "80vh",
                width: "65vw",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: 5,
                boxShadow: "0px 0px 10px 4px rgba(0, 0, 0, 0.4)",
                display: "flex",
                flexDirection: "row",
            }}>
                <Fade cascade damping={0.2} triggerOnce={hasEntered}>
                <CompleteCadEscola/>
                <CompleteCad2Escola/>
                </Fade>
            </Box>
        </>
    )
}

export default CadallEscola

