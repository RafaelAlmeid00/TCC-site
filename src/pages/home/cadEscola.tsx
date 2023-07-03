
import { Box } from '@mui/material'

import Exit from '../../components/buttonexit.tsx'
import CompleteCadEscola from '../../components/cadastro/Cadastroescola/dadosescola.tsx'
import CompleteCad2Escola from '../../components/cadastro/Cadastroescola/endereço.tsx'

function CadallEscola() {

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
                <CompleteCadEscola/>
                <CompleteCad2Escola/>
            </Box>
        </>
    )
}

export default CadallEscola

