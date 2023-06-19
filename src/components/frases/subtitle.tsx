import Typography from "@mui/material/Typography";
import theme from "../../assets/theme";

// componente para o título com frase
export default function Subtitle() {
    return (
        <Typography sx={{
            fontSize: { xs: '5vw', sm: '10w', md: '2vw', lg: '2vw', xl: '3vw' },
            display: "flex",
            flexDirection: "row",
            ml: '110px',
            color: "white",
            fontWeight: 'bold',
            [theme.breakpoints.down('sm')]: {
                margin: '0 auto',
                textAlign: 'center'
            },
        }}>Viaje com a <Typography
            component="span"
            sx={{
                fontWeight: 'bold',
                fontSize: { xs: '5vw', sm: '10vw', md: '2vw', lg: '2vw', xl: '3vw' },
                ml: '10px',
                background: 'linear-gradient(to right, #0fcd88 50%, white 50%)',
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
            }}>EasyPass</Typography>
        </Typography>
    );
}