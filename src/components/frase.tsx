import Typography from "@mui/material/Typography";

// componente para o título com frase
export default function Frase({ textColor, textSize, frase }) {
return (
    <Typography sx={{ color: textColor, fontSize: textSize, mt: "100px", ml: "100px" }}>
    {frase}
    </Typography>
);
}