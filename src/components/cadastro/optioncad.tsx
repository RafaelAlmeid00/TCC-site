import { Box, Button, ButtonGroup, Card, Link, Typography } from "@mui/material";
import colors from "../../assets/colors";
import Exit from "../buttonexit";

export default function OptionsCad() {

    const buttons = [
        {text: "Escolas", route: "/areaescolas"},
        {text: "Empresas", route: "/areaempresas"},
        {text: "Usuário", route: "/cadastro"}
    ]
return (
    <>
    <Exit previousRoute={'/'}/>
    <Box sx={{
        height: '87vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
    <Card sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '35%',
        boxShadow: '1px 1px 10px 1px',
        flexDirection: 'column',
        mt: '-60px',
        borderRadius: 6
    }}>
        <Typography
          component="h2"
          sx={{
            fontFamily: 'Franklin Gothic Demi Cond',
            fontWeight: 'bold',
            fontSize: '50px',
            background: 'linear-gradient(to right, #0fcd88 52%, #1976d2 50%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
          }}>EasyPass</Typography>
          <Typography sx={{
            fontSize: '16px',
            fontWeight: 'bold',
            mt: '30px',
            mb: '30px',
            }}>
            Acessar como:
            </Typography>
    <ButtonGroup orientation="vertical" variant="outlined">
        {buttons.map((buttons, index) => (
            <Link href={buttons.route}>
            <Button sx={{
                height: '60px',
                width: '200px',
                fontWeight: 'bold',
                fontSize: '16px',
                '&:hover': {
                    border: '2px solid',
                    borderColor: colors.sc,
                }
            }}>
                {buttons.text}
            </Button>
            </Link>
        ))}
    </ButtonGroup>   
    </Card>
    </Box>
    </>
)
}