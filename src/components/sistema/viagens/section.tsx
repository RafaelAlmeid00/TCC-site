import React, { useContext, useState, useEffect } from "react";
import {
    Box,
    Card,
    Container,
    Divider,
    Icon,
    Typography,
} from "@mui/material";
import ModalContext from "../../../context/modalcontext";
import { DirectionsBus } from "@mui/icons-material";
import { Balancer } from "react-wrap-balancer";

export default function Viagens() {
    const { verify, themes } = useContext(ModalContext);
    const fundo = themes.palette.background.default;

    function traduzirMes(prefixoIngles: string): string | null {
        const mesesTraduzidos: { [key: string]: string } = {
            Jan: 'Janeiro',
            Feb: 'Fevereiro',
            Mar: 'Março',
            Apr: 'Abril',
            May: 'Maio',
            Jun: 'Junho',
            Jul: 'Julho',
            Aug: 'Agosto',
            Sep: 'Setembro',
            Oct: 'Outubro',
            Nov: 'Novembro',
            Dec: 'Dezembro',
        };

        const mesTraduzido = mesesTraduzidos[prefixoIngles];

        return mesTraduzido || null;
    }

    function traduzirDiaDaSemana(diaSemanaIngles: string): string | null {
        const diasSemanaTraduzidos: { [key: string]: string } = {
            Sun: 'Domingo',
            Mon: 'Segunda-feira',
            Tue: 'Terça-feira',
            Wed: 'Quarta-feira',
            Thu: 'Quinta-feira',
            Fri: 'Sexta-feira',
            Sat: 'Sábado',
        };

        const diaTraduzido = diasSemanaTraduzidos[diaSemanaIngles];

        return diaTraduzido || null;
    }

    function obterDataEHoraAtual(): string {
        const dataAtual = new Date();
        const diaSemana = dataAtual.toLocaleDateString('en-US', { weekday: 'short' });
        const mes = dataAtual.toLocaleDateString('en-US', { month: 'short' });
        const dia = dataAtual.getDate();
        const ano = dataAtual.getFullYear();
        const hora = String(dataAtual.getHours()).padStart(2, '0');
        const minutos = String(dataAtual.getMinutes()).padStart(2, '0');
        const segundos = String(dataAtual.getSeconds()).padStart(2, '0');

        const mêsBR = traduzirMes(mes)
        const semanaBR = traduzirDiaDaSemana(diaSemana)

        const dataEHoraAtual = {
            Data: `${semanaBR} - ${dia}, ${mêsBR}, ${ano}`,
            Hora: `${hora}:${minutos}:${segundos}`,
        }

        return dataEHoraAtual;
    }

    const DataSystem = obterDataEHoraAtual();
    console.log(DataSystem.Data);
    console.log(DataSystem.Hora);

    const ViagemFeita = [
        { Onibus: 260, Rota: 'Santo Agostinho x Caieras', Data: DataSystem.Data, Hora: DataSystem.Hora, Passagem: '5.00', Cartão: 'Estudante' },
        { Onibus: 260, Rota: 'Santo Agostinho x Caieras', Data: DataSystem.Data, Hora: DataSystem.Hora, Passagem: '15.00', Cartão: 'Estudante' },
        { Onibus: 260, Rota: 'Santo Agostinho x Caieras', Data: DataSystem.Data, Hora: DataSystem.Hora, Passagem: '4.00', Cartão: 'Vale-Transporte' },
        { Onibus: 260, Rota: 'Santo Agostinho x Caieras', Data: DataSystem.Data, Hora: DataSystem.Hora, Passagem: '3.40', Cartão: 'Estudante' },
        { Onibus: 260, Rota: 'Santo Agostinho x Caieras', Data: DataSystem.Data, Hora: DataSystem.Hora, Passagem: '4.20', Cartão: 'Vale-Transporte' },
        { Onibus: 260, Rota: 'Santo Agostinho x Caieras', Data: DataSystem.Data, Hora: DataSystem.Hora, Passagem: '5.00', Cartão: 'Estudante' },
        { Onibus: 260, Rota: 'Santo Agostinho x Caieras', Data: DataSystem.Data, Hora: DataSystem.Hora, Passagem: '5.00', Cartão: 'Estudante' },
        { Onibus: 260, Rota: 'Santo Agostinho x Caieras', Data: DataSystem.Data, Hora: DataSystem.Hora, Passagem: '6.00', Cartão: 'Vale-Transporte' },
        { Onibus: 260, Rota: 'Santo Agostinho x Caieras', Data: DataSystem.Data, Hora: DataSystem.Hora, Passagem: '9.10', Cartão: 'Vale-Transporte' },
        { Onibus: 260, Rota: 'Santo Agostinho x Caieras', Data: DataSystem.Data, Hora: DataSystem.Hora, Passagem: '3.70', Cartão: 'Estudante' },
        { Onibus: 260, Rota: 'Santo Agostinho x Caieras', Data: DataSystem.Data, Hora: DataSystem.Hora, Passagem: '5.00', Cartão: 'Vale-Transporte' },
    ]

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
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    float: "left",
                    mt: 3,
                    gap: 10
                }}
            >
                <Card sx={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: verify ? '0px 0px 4px 0px white' : '0px 0px 8px 1px rgba(0, 0, 0, 0.6)',
                }}>
                    <Container sx={{
                        width: '30%',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 5,
                        flexDirection: 'column',
                        marginLeft: 5,
                        marginRight: 5,
                    }}>
                        <Icon sx={{
                            borderRadius: '50%',
                            border: '1px solid transparent',
                            boxShadow: '0 0 5px rgba(0, 0, 0, 0.8)',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 10,
                            opacity: 0.6,
                        }}>
                            <DirectionsBus sx={{
                                fontSize: 100
                            }} />
                        </Icon>
                        <Container sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: '100%'
                        }}>
                            <Balancer>
                                <Typography variant="body1" sx={{ fontSize: 18, textAlign: 'center', mt: 3 }}>
                                    {ViagemFeita[0].Onibus}
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: 12, textAlign: 'center', mt: 1 }}>
                                    {ViagemFeita[0].Rota}
                                </Typography>
                            </Balancer>
                        </Container>
                    </Container>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Container sx={{
                        width: '70%',
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        flexDirection: 'column',
                        padding: 5,
                        marginLeft: 5,
                        marginRight: 5,
                        gap: 2
                    }}>
                        <Container sx={{
                            display: "flex",
                            flexDirection: 'row',
                            alignItems: "center",
                        }}>
                            <Typography variant="body1" sx={{ fontSize: 18, textAlign: 'left' }}>
                                Data:
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: 14, textAlign: 'left', ml: 1 }}>
                                {ViagemFeita[0].Data}
                            </Typography>
                        </Container>
                        <Divider variant="middle" sx={{
                            width: '75%'
                        }} />
                        <Container sx={{
                            display: "flex",
                            flexDirection: 'row',
                            alignItems: "center",
                        }}>
                            <Typography variant="body1" sx={{ fontSize: 18, textAlign: 'left' }}>
                                Horário:
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: 14, textAlign: 'left', ml: 1 }}>
                                {ViagemFeita[0].Hora}
                            </Typography>
                        </Container>
                        <Divider variant="middle" sx={{
                            width: '75%'
                        }} />
                        <Container sx={{
                            display: "flex",
                            flexDirection: 'row',
                            alignItems: "center",
                        }}>
                            <Typography variant="body1" sx={{ fontSize: 18, textAlign: 'left' }}>
                                Passagem:
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: 14, textAlign: 'left', ml: 1 }}>
                                {ViagemFeita[0].Passagem}
                            </Typography>
                        </Container>
                        <Divider variant="middle" sx={{
                            width: '75%'
                        }} />
                        <Container sx={{
                            display: "flex",
                            flexDirection: 'row',
                            alignItems: "center",
                        }}>
                            <Typography variant="body1" sx={{ fontSize: 18, textAlign: 'left' }}>
                                Cartão:
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: 14, textAlign: 'left', ml: 1 }}>
                                {ViagemFeita[0].Cartão}
                            </Typography>
                        </Container>
                    </Container>
                </Card>

                    <Container
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            width: '100%',
                            height: 'auto',
                            gap: 1
                        }}>
                    {ViagemFeita.slice(1, 11).map((viagem, index) => (
                        <Card
                            key={index}

                            sx={{
                                width: "80%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: verify ? '0px 0px 4px 0px white' : '0px 0px 4px 0px rgba(0, 0, 0, 0.6)',
                            }}>
                    
                    <Container 
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: '30%',
                        padding: 3,
                        flexDirection: 'column',
                        marginLeft: 5,
                        marginRight: 5,
                    }}>
                        <Icon sx={{
                            borderRadius: '50%',
                            border: '1px solid transparent',
                            boxShadow: '0 0 5px rgba(0, 0, 0, 0.8)',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 3,
                            opacity: 0.6,
                        }}>
                            <DirectionsBus sx={{
                                fontSize: 30
                            }} />
                        </Icon>
                        <Container sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: '100%'
                        }}>
                            <Balancer>
                                <Typography variant="body1" sx={{ fontSize: 12, textAlign: 'center', mt: 2 }}>
                                    {viagem.Onibus}
                                </Typography>
                            </Balancer>
                        </Container>
                    </Container>
                    <Divider orientation="vertical" variant="middle" flexItem sx={{
                        ml: 5,
                        mr: 5
                    }}/>

                    <Container sx={{
                        width: '70%',
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        flexDirection: 'column',
                        padding: 5,
                        marginLeft: 5,
                        marginRight: 5,
                        gap: 2
                    }}>
                        <Container sx={{
                            display: "flex",
                            flexDirection: 'row',
                            alignItems: "center",
                        }}>
                            <Typography variant="body1" sx={{ fontSize: 15, textAlign: 'left' }}>
                                Data:
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: 12, textAlign: 'left', ml: 1 }}>
                                {viagem.Data}
                            </Typography>
                        </Container>
                        <Divider variant="middle" sx={{
                            width: '75%'
                        }} />
                        <Container sx={{
                            display: "flex",
                            flexDirection: 'row',
                            alignItems: "center",
                        }}>
                            <Typography variant="body1" sx={{ fontSize: 15, textAlign: 'left' }}>
                                Passagem:
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: 12, textAlign: 'left', ml: 1 }}>
                                {viagem.Passagem}
                            </Typography>
                        </Container>
                    </Container>
                        </Card>
                    ))}
                    
                    </Container>
            </Container>
        </Box>
    );
}