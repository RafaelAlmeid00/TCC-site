import { Box, Typography, CircularProgress } from "@mui/material";

function Loading() {

    return (
        <Box sx={{
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
