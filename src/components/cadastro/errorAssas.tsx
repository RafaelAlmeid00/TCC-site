import ReactDOM from "react-dom";
import React from 'react'
import { Box, Container, Link, Typography } from "@mui/material";
import ModalContext from "../../context/modalcontext";
import Balancer from "react-wrap-balancer";
import { useNavigate } from "react-router-dom";
import theme from "../../assets/theme";

export default function PortalAsaas() {
    const { verify } = React.useContext(ModalContext);
    const [countdown, setCountdown] = React.useState(20);
    const navigate = useNavigate()

    React.useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            navigate('/');
        }, countdown * 1000);

        const countdownInterval = setInterval(() => {
            if (countdown > 0) {
                setCountdown(countdown - 1);
            }
        }, 1000);

        return () => {
            clearTimeout(redirectTimeout);
            clearInterval(countdownInterval);
        };
    }, [countdown]);


    return ReactDOM.createPortal(
        <>
            <Box sx={{
                background: verify ? '#121212' : '#F0F0FF',
                height: "80vh",
                width: "75vw",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: 5,
                boxShadow: "0px 0px 10px 4px rgba(0, 0, 0, 0.4)",
                display: "flex",
                flexDirection: "column",
                [theme.breakpoints.down('md')]: {
                    height: "60vh",
                }
            }}>
                <Container sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    mt: 10,
                    gap: 5
                }}>
                    <Balancer style={{
                        marginTop: 10
                    }}>
                        <Typography component='span' sx={{
                            fontSize: {
                                xs: '2.5vw',  // (7.5 / 1200) * 600
                                sm: '2vw',  // (7.5 / 1200) * 900
                                md: '2vw',  // (7.5 / 1200) * 1200
                                lg: '1vw',
                                xl: '1vw',  // Manter o mesmo tamanho de lg para xl
                            },
                            textAlign: 'center',
                            color: verify ? 'white' : 'black',
                        }}>
                            Parece que seus dados não são válidos para criar sua conta Asaas para efutar recargas online. Entre em contato conosco pela  <Link href='https://easypass-app.onrender.com/Contatos' sx={{
                                cursor: 'pointer',
                                textDecoration: 'none',
                                textDecorationLine: 'underline'
                            }} > página de contatos</Link>
                        </Typography>
                    </Balancer>
                    <Balancer style={{
                        marginTop: 10
                    }}>
                        <Typography component='span' sx={{
                            color: verify ? 'white' : 'black',
                            fontSize: {
                                xs: '2.5vw',  // (7.5 / 1200) * 600
                                sm: '2vw',  // (7.5 / 1200) * 900
                                md: '2vw',  // (7.5 / 1200) * 1200
                                lg: '1vw',
                                xl: '1vw',  // Manter o mesmo tamanho de lg para xl
                            },
                        }}>
                            Iremos lhe redirecionar para a Página principal do site em {countdown} segundos.
                        </Typography>
                    </Balancer>
                </Container>
            </Box>
        </>,
        document.getElementById("asaas") as Element
    )
}