import { Box, Container, Typography } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import colors from "../../assets/colors";

function Homesistema() {

    const userJson = localStorage.getItem('user');
    const userData = userJson ? JSON.parse(userJson) : null;

    return (
        <>
        <Box sx={{
            mt: '10vh',
            ml: '30vh',
            height: '89.99vh'
        }}>
            <Container sx={{
                width: '70%',
                backgound: 'red',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                float: 'left', 
                mt: 3               
            }}>
                <TuneIcon sx={{
                    mr: 2
                }}/>
                <Typography sx={{
                    color: colors.tc,
                    fontSize: '25px',
                    fontWeight: 700
                }}>
                    Controle de Cartão - {userData.user_nome}
                </Typography>
            </Container>
        </Box>
        </>
    )
}

export default Homesistema
