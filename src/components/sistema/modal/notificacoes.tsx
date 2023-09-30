import React from "react";
import ReactDOM from "react-dom";
import { Card, Container, Divider, Link, Typography } from "@mui/material";
import { Block, CheckCircle, Clear } from "@mui/icons-material";

function Not() {
    const [alerts] = React.useState([
        { title: "Conta Aprovada", text: "Parabéns, o setor de análise aprovou sua conta", link: "Saiba mais", icon: <CheckCircle sx={{ fontSize: 35 }} /> },
        { title: "Conta Recusada", text: "Infelizmente, o setor de análise recusou sua conta", link: "Saiba mais", icon: <Clear sx={{ fontSize: 35 }} /> },
        { title: "Conta Cancelada", text: "Infelizmente, o setor de análise cancelou sua conta", link: "Saiba mais", icon: <Block sx={{ fontSize: 35 }} /> },
        { title: "Conta Aprovada", text: "Parabéns, o setor de análise aprovou sua conta", link: "Saiba mais", icon: <CheckCircle sx={{ fontSize: 35 }} /> },
        { title: "Conta Recusada", text: "Infelizmente, o setor de análise recusou sua conta", link: "Saiba mais", icon: <Clear sx={{ fontSize: 35 }} /> },
        { title: "Conta Cancelada", text: "Infelizmente, o setor de análise cancelou sua conta", link: "Saiba mais", icon: <Block sx={{ fontSize: 35 }} /> },
    ]);

    return ReactDOM.createPortal(
        <Card
            sx={{
                zIndex: 4,
                width: '30%',
                height: '60vh',
                position: "fixed",
                top: '38%',
                left: '40.5%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column', // To make sure the content stacks from top to bottom
                justifyContent: 'flex-start', // Align content to the top
                alignItems: 'center', // Center horizontally
                overflow: 'hidden', // Hide any overflowing content
            }}
        >
            <Container sx={{ width: '100%', height: 'auto', flex: 'none' }}>
                <Typography variant="h6" sx={{ mt: 3, mb: 3, fontWeight: 'bold', textAlign: 'left' }}>
                    Alertas
                </Typography>
                <Divider />
            </Container>
            <Container
                sx={{
                    maxHeight: 'calc(60vh - 50px)', // Adjust for the title and divider height
                    overflowY: "auto",
                    width: '100%',
                    flex: 1, // Allow this section to take available vertical space
                }}
            >
                {alerts.length === 0 && (
                    <Typography variant="body1" sx={{ width: "100%", textAlign: 'center', fontWeight: 'bold', mt: 3, mb: 3 }}>Sem alertas por aqui!</Typography>
                )}
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
                        <Divider />
                    </Container>
                ))}

            </Container>
        </Card>,
        document.getElementById("not-root") as Element
        );
}

export default Not;
