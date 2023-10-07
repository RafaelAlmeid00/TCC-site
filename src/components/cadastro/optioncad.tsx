import colors from "../../assets/colors";
import Exit from "../buttonexit";
import ModalContext from "../../context/modalcontext";
import React from "react";
import { Box, Button, ButtonGroup, Card, Link, Typography } from "@mui/material";

export default function OptionsCad() {

    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default


    const buttons = [
        { text: "Empresarial", route: "/cadastro/empresa" },
        { text: "Usuário", route: "/cadastro" }
    ]
    return (
        <>
            <Exit previousRoute={'/'} />
            <Box sx={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: verify ? fundo : 'white',
            }}>
                <Card sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: {
                        xs: "80%", // (7.5 / 1200) * 600
                        sm: "80%", // (7.5 / 1200) * 900
                        md: "80%", // (7.5 / 1200) * 1200
                        lg: "80%",
                        xl: "80%", // Manter o mesmo tamanho de lg para xl
                    },
                    width: {
                        xs: "80vw", // (7.5 / 1200) * 600
                        sm: "60vw", // (7.5 / 1200) * 900
                        md: "50vw", // (7.5 / 1200) * 1200
                        lg: "35vw",
                        xl: "35vw", // Manter o mesmo tamanho de lg para xl
                    },
                    boxShadow: "0px 0px 10px 4px rgba(0, 0, 0, 0.4)",
                    flexDirection: 'column',
                    mt: -30,
                    borderRadius: 6
                }}>
                    <Typography
                        component="h2"
                        sx={{
                            fontFamily: 'Franklin Gothic Demi Cond',
                            fontWeight: 'bold',
                            fontSize: {
                                xs: "7vw", // (7.5 / 1200) * 600
                                sm: "4.5vw", // (7.5 / 1200) * 900
                                md: "4vw", // (7.5 / 1200) * 1200
                                lg: "3vw",
                                xl: "3vw", // Manter o mesmo tamanho de lg para xl
                            },
                            background: verify ? 'linear-gradient(to right, #0fcd88 52%, #ffffff 50%)' : '#0fcd88',
                            '-webkit-background-clip': 'text',
                            '-webkit-text-fill-color': 'transparent',
                        }}>EasyPass</Typography>
                    <Typography sx={{
                        fontSize: {
                            xs: "3vw", // (7.5 / 1200) * 600
                            sm: "2vw", // (7.5 / 1200) * 900
                            md: "1.5vw", // (7.5 / 1200) * 1200
                            lg: "1vw",
                            xl: "1vw", // Manter o mesmo tamanho de lg para xl
                        },
                        fontWeight: 'bold',
                        mt: '30px',
                        mb: '30px',
                    }}>
                        Acessar como:
                    </Typography>
                    <ButtonGroup orientation="vertical" variant="outlined">
                        {buttons.map((buttons, index) => (
                            <Link href={buttons.route} key={index}>
                                <Button sx={{
                                    height: {
                                        xs: "5.5vh", // (7.5 / 1200) * 600
                                        sm: "6vh", // (7.5 / 1200) * 900
                                        md: "7vh", // (7.5 / 1200) * 1200
                                        lg: "8vh",
                                        xl: "8vh", // Manter o mesmo tamanho de lg para xl
                                    },
                                    width: {
                                        xs: "25.5vw", // (7.5 / 1200) * 600
                                        sm: "20vw", // (7.5 / 1200) * 900
                                        md: "18vw", // (7.5 / 1200) * 1200
                                        lg: "15vw",
                                        xl: "15vw", // Manter o mesmo tamanho de lg para xl
                                    },
                                    fontWeight: 'bold',
                                    fontSize: {
                                        xs: "2.5vw", // (7.5 / 1200) * 600
                                        sm: "1.5vw", // (7.5 / 1200) * 900
                                        md: "1.2vw", // (7.5 / 1200) * 1200
                                        lg: "1vw",
                                        xl: "1vw", // Manter o mesmo tamanho de lg para xl
                                    },
                                    '&:hover': {
                                        border: '2px solid',
                                        borderColor: colors.sc,
                                    },
                                    mt: 0.5,
                                    mb: 0.5
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