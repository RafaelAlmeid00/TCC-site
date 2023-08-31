import React from "react";
import ReactDOM from "react-dom";
import { Card, Container, Divider, Link, Typography } from "@mui/material";
import { Deccode } from "../FrontDecoded";
import { Balancer } from "react-wrap-balancer";
import { Block, CheckCircle, Clear } from "@mui/icons-material";

function Not() {
    const [userData] = React.useState(Deccode());

    const alerts = [
        { title: "Conta Aprovada", text: "Parabéns, o setor de análise aprovou sua conta", link: "Saiba mais", icon: <CheckCircle sx={{fontSize: 35}} /> },
        { title: "Conta Recusada", text: "Infelizmente, o setor de análise recusou sua conta", link: "Saiba mais", icon: <Clear sx={{ fontSize: 35 }} /> },
        { title: "Conta Cancelada", text: "Infelizmente, o setor de análise cancelou sua conta", link: "Saiba mais", icon: <Block sx={{ fontSize: 35 }} /> },
    ]

    return ReactDOM.createPortal(
        <Card
            sx={{
                zIndex: 4,
                width: '30%',
                height: 'auto',
                position: "absolute",
                top: '35%',
                left: '40.5%',
                transform: 'translate(-50%, -50%)',
            }}
        >
                <Container sx={{ width: '100%', height: 'auto'}}>
                    <Typography variant="h6" sx={{ mt: 3, mb: 3, fontWeight: 'bold', textAlign: 'left' }}>
                    Alertas
                </Typography>
                <Divider />
                </Container>
                <Container
                    sx={{
                        overflowY: "auto",
                    }}
                >
                    {alerts.map((alert, index) => (
                        <Container key={index}>
                            <Container
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "10px 0",
                                }}
                            >
                                <Container sx={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    {alert.icon}
                                </Container>
                                <Container sx={{ width: "80%" }}>
                                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                            {alert.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontSize: 11, opacity: 0.5 }}>
                                            {alert.text}
                                        </Typography>
                                        <Link href={alert.link}>{alert.link}</Link>
                                </Container>
                            </Container>
                            {index < alerts.length - 1 && <Divider />} {/* Adiciona Divider exceto para o último alerta */}
                        </Container>
                    ))}

                </Container>
        </Card>,
        document.getElementById("not-root")
    );
}

export default Not;
