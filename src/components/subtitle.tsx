import Typography from "@mui/material/Typography";
import colors from "../assets/colors";

// componente para o título com frase
export default function Subtitle() {
return (
    <Typography sx={{
        fontSize: '30px',
        display: "flex",
        flexDirection: "row",
        ml: '110px',
        color: colors.tc,
        fontWeight: 'bold',
    }}>Viage com a <Typography 
    component="span"
    sx={{
        fontWeight: 'bold',
        fontSize: '30px',
        ml: '10px',
        background: 'linear-gradient(to right, #0fcd88 50%, #1976d2 50%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
    }}>EasyPass</Typography>
    </Typography>
);
}