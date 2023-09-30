import React, { useContext, useState, useEffect } from "react";
import {
    Box,
    Card,
    Container,
    Typography,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import ModalContext from "../../../context/modalcontext";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Balancer from "react-wrap-balancer";
import colors from "../../../assets/colors";
import PortraitIcon from '@mui/icons-material/Portrait';
import { DocumentData } from "../../interfaces";

export default function Docs() {
    const { verify, themes } = useContext(ModalContext);
    const fundo = themes.palette.background.default;
    const { userData } = React.useContext(ModalContext);
    const [documentList, setDocumentList] = useState([{}]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (userData) {
            if (userData.user_status == "ativo") {
                setStatus("Aprovado")
            } else if (userData.user_status == "analise") {
                setStatus("Em análise")
            }
        }
    }, [])

    useEffect(() => {
        if (userData) {
            const documents: DocumentData[] = [
                {
                    title: "Registro Geral - Frente",
                    status: status ? status : (userData.user_RGFrente ? "Enviado" : "Não enviado"),
                    hint: "Para enviar esse documento acesse nosso aplicativo.",
                    icon: <AssignmentIcon sx={{ fontSize: 60 }} />,
                },
                {
                    title: "Registro Geral - Verso",
                    status: status ? status : (userData.user_RGTras ? "Enviado" : "Não enviado"),
                    hint: "Para enviar esse documento acesse nosso aplicativo.",
                    icon: <AssignmentIcon sx={{ fontSize: 60 }} />
                },
                {
                    title: "Selfie de Reconhecimento",
                    status: status ? status : (userData.user_FotoRec ? "Enviado" : "Não enviado"),
                    hint: "Para enviar esse documento acesse nosso aplicativo.",
                    icon: <PortraitIcon sx={{ fontSize: 60 }} />
                },
            ];

            setDocumentList(documents);
        }
    }, [status]);



    return (
        <Box
            id="section1"
            sx={{
                mt: "9.5vh",
                height: "90.5vh",
                width: "80vw",
                float: "right",
                background: verify ? fundo : "white",
                position: "relative",
                overflow: "hidden",
                overflowY: "scroll",
            }}
        >
            <Container
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                    float: "left",
                    mt: 3,
                }}
            >
                <TuneIcon
                    sx={{
                        mr: 2,
                        color: verify ? "white" : "black",
                    }}
                />
                <Typography
                    sx={{
                        color: verify ? colors.sc : colors.tc,
                        fontSize: "25px",
                        fontWeight: 700,
                    }}
                >
                    Documentos - {userData ? userData.user_nome : ''}
                </Typography>
            </Container>
            <Container
                sx={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    mb: "10vh"

                }}
            >
                <Typography
                    sx={{
                        width: "90%",
                        color: verify ? "white" : "black",
                        fontSize: 12,
                        fontWeight: 600,
                        textAlign: "left",
                        mt: 5,
                        mb: 3
                    }}
                >
                    Abaixo estão os documentos que você deve nos enviar. Todas as cópias
                    devem ser coloridas, frente e verso, legíveis, sem desfoque e sem
                    cortes. Após anexar todos os documentos, clique no botão "Enviar
                    documentos para Análise" para concluir o envio.
                </Typography>
                {documentList.map((doc, index) => (
                    <Card
                        key={index}
                        sx={{
                            mt: 2,
                            width: "80%",
                            display: "flex",
                            flexDirection: "row",
                            padding: 3,
                            height: "90px",
                        }}
                    >
                        <Container
                            sx={{
                                width: "10%",
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                            }}
                        >
                            {doc.icon}
                        </Container>
                        <Container
                            sx={{
                                width: "65%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                                gap: 1,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 18,
                                    fontWeight: "bold",
                                }}
                            >
                                {doc.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 12,
                                    color: doc.status === "Enviado" ? "green" : "red",
                                }}
                            >
                                {doc.status}
                            </Typography>
                            <Balancer>
                                <Typography
                                    sx={{
                                        opacity: 0.6,
                                        fontSize: 10,
                                    }}
                                >
                                    {doc.hint}
                                </Typography>
                            </Balancer>
                        </Container>
                    </Card>
                ))}
            </Container>
        </Box>
    );
}