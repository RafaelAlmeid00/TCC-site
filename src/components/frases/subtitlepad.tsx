import Typography from "@mui/material/Typography";
import { Balancer } from "react-wrap-balancer";
// componente para o subtítulo
export default function Subtitlepad({ sz, text, mt }) {
  return (
    <Balancer>
    <Typography sx={{ fontSize: sz, mt: mt, fontWeight: 'bold', ml: '30px', width: '420px', textAlign: 'left'}}>
      {text}
    </Typography>
    </Balancer>
  );
}