import { Box, Container, Typography } from "@mui/material";
import ModalContext from "../../context/modalcontext";
import React from "react";
import { Balancer } from "react-wrap-balancer";
import { BtnHome } from "../btns";
import colors from "../../assets/colors";
import MenuLateral from "./menu/menulateral";
import MenuSistema from "./menu/menusistema";

export default function AlertConta() {
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    
    const fundo = themes.palette.background.default
    return(
        <>
            <MenuSistema />
            <MenuLateral />
            <Box
                id="section1"
                sx={{
                    height: '100vh',
                    width: '80vw',
                    float: "right",
                    background: verify ? fundo : 'white',
                    position: "relative",
                    overflow: "hidden",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center', // Centralizar verticalmente
                }}
            >
                <Container
                    sx={{
                        width: '60%',
                        textAlign: 'center', // Centralizar horizontalmente
                    }}
                >
                    <Balancer>
                        <Typography variant="h5" gutterBottom sx={{
                            color: verify ? colors.sc : colors.tc,
                            fontSize: '25px',
                            fontWeight: 'bold'
                        }}>
                            Bem-vindo à nossa plataforma!
                        </Typography>
                        <Typography sx={{
                            mb: 3, color: verify ? 'white' : 'black', fontWeight: 600}}>
                            Parece que sua conta ainda precisa ser ativada. Não se preocupe, estamos aqui para ajudar. Clique no botão abaixo ou vá até a aba de documentos em seu perfil pela página inicial e envie os documentos necessários para a ativação da sua conta.
                        </Typography>
                        <BtnHome
                            name={"Documentos"}
                            route={"/sistema/documentos"}
                            cl={verify ? colors.pm : "white"}
                            bc={verify ? 'white' : undefined}
                            bch={verify ? 'white' : undefined}
                            vis={undefined}
                            mb={undefined}
                        />
                    </Balancer>
                </Container>
            </Box>
        </>
    )
}