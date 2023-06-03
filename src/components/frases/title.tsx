import Typography from "@mui/material/Typography";

// componente para o título com frase
export default function Title({ textColor, textSize, title, children}) {
return (
    <>
    <Typography sx={{ color: textColor, fontSize: textSize, mt: "50px", ml: "100px", fontWeight: 'bold', }}>
    {title}
    </Typography>
    {children}
    </>
);
}