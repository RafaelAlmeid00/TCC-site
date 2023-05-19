import Typography from "@mui/material/Typography";

// componente para o subtítulo
export default function Subtitlepad({ sz, text, mt }) {
  return (
    <Typography sx={{ fontSize: sz, mt: mt }}>
      {text}
    </Typography>
  );
}