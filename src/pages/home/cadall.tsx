
import { Box } from '@mui/material'
import CompleteCad from '../../components/cadastro/dadosuser.tsx'
import CompleteCad2 from '../../components/cadastro/endereço.tsx'
import Exit from '../../components/buttonexit.tsx'

function Cadall() {

    return (
        <>
            <Exit previousRoute={'/Cadastro'} />
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
                <CompleteCad />
                <CompleteCad2 />
            </Box>
        </>
    )
}

export default Cadall

