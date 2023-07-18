
import { Box } from '@mui/material'
import CompleteCad from '../../components/cadastro/dadosuser.tsx'
import CompleteCad2 from '../../components/cadastro/endereço.tsx'
import Exit from '../../components/buttonexit.tsx'
import { Fade } from 'react-awesome-reveal';
import ModalContext from "../../context/modalcontext";
import React from "react";
import '../../App.css'

function Cadall() {
    const { hasEntered } = React.useContext(ModalContext);


    return (
        <>
            <Exit previousRoute={'/Cadastro'} />
            <Box sx={{
                backgroundColor: "#F0F0FF",
                height: "80vh",
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
                <CompleteCad2 />
                </Fade>
            </Box>
        </>
    )
}

export default Cadall

