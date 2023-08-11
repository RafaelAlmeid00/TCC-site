import { Box, TextField } from "@mui/material";

export default function Msg() {
    return(
        <>
        <Box sx={{
            width: "100%",
            height: "10vh",
            backgroundColor: "pink",
        }}>
            <TextField variant="outlined" color="success" label='Digite sua Mensagem...' sx={{
                width: '70vw',
                marginTop:'10px'
            }} />
        </Box>
        </>
    )
}