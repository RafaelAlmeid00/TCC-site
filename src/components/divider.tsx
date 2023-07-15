import { Box, Container } from "@mui/material";

export default function Divider() {
    return(
        <>
            <Box sx={{
                height: '100%',
                width: '0px',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                float: 'left',
            }}>
                <Container sx={{
                    borderLeft: '2px solid black',
                    width: '100%',
                    height: '50%'
                }}>
                </Container>
            </Box>
        </>
    )
}