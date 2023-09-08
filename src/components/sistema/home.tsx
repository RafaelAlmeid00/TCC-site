import { Alert, AlertTitle, Box, Card, Container, Divider, Icon, Skeleton, Typography } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import colors from "../../assets/colors";
import { motion } from "framer-motion";
import ModalContext from "../../context/modalcontext";
import React from "react";
import { BtnHome } from "../btns";
import Pedido from "./modal/pedidocard";
import { PedidosAberto } from "../errosvalidations";
import axios from "axios";
import Cartao from "./modal/card";
import { useNavigate } from "react-router-dom";
import AlertConta from "./AlertConta";
import Pag from "./modal/pagamento";
import { DirectionsBus } from "@mui/icons-material";
import Balancer from "react-wrap-balancer";
import { socket } from "./../../../socket.io/index";
import AlertaModal from "./alert";

function Homesistema() {
    socket.connect()

    const { userData } = React.useContext(ModalContext);
    const [modal, setModal] = React.useState(false)
    const [card, setCard] = React.useState(Boolean)
    const [load, setLoad] = React.useState(true)
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default
    const [alert, setAlert] = React.useState(false); // Novo estado para o alert
    const token = localStorage.getItem('token')
    const [dataCard, setDataCard] = React.useState([{}])
    const [val, setVal] = React.useState([{}])
    const [loading, setLoading] = React.useState(true)
    const [active, setActive] = React.useState(Boolean)
    console.log(active);
    const navigate = useNavigate()
    const [pag, setPag] = React.useState(false)

    React.useEffect(() => {
        if (localStorage.getItem('token')) {
            if (userData && userData.user_status == 'ativo') {
                setActive(false)
            } else {
                setActive(true)
            }
        } else {
            console.log('sem token')
        }

        console.log(active);

    }, [active, userData])

    console.log(userData)

    const handlePag = () => {
        setPag(true)
    }

    const handleClosePag = () => {
        setPag(false)
    }

    const handNav = () => {
        navigate('/Sistema/Viagens')
    }

    const buttonshome = [
        { name: 'Histórico do Cartão', void: handNav },
        { name: 'Recarregar Cartão', void: handlePag },
        { name: 'Cancelar Cartão' }
    ]

    const handleModalClose = () => {
        setModal(false);
    };

    const handleOpenModal = () => {
        console.log(active);

        if (active) {
            setModal(true);
        } else {
            navigate('/sistema/documentos')
        }
    };

    const handleAlertChange = (value) => {
        setAlert(value);
        setTimeout(() => {
            setAlert(false)
        }, 5000)
    };

    React.useEffect(() => {
        async function handleAttCard() {
            try {
                const response = await axios.post('http://localhost:3344/pagamento/verify', {
                    params: {
                        idcli: userData && userData.user_idcli,
                        dataCard
                    }
                }, {
                    headers: {
                        'authorization': token
                    }
                })
                console.log(response);

            } catch (error: any) {
                console.log(error.message);
            }
        }
        handleAttCard()
    }, [dataCard, token])

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

    const ViagemFeita = React.useMemo(() => [
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
    ], [DataSystem.Data, DataSystem.Hora]);

    React.useEffect(() => {
        if (ViagemFeita[0]) {
            setLoading(false)
            setVal(ViagemFeita)
        }
    }, [ViagemFeita])

    React.useEffect(() => {
        if (dataCard && dataCard.card_status) {
            setLoad(false)
            setCard(true)
        }
        function SearchVal() {

            setTimeout(() => {
                socket.emit("cardDetails", userData && userData.user_CPF, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            }, 5000);

            setTimeout(() => {
                socket.on('cardDetails', (data) => {
                    setLoad(false)
                    setCard(true)
                    console.log(data)
                    setDataCard(data[0])
                    setVal(data)
                    console.log(dataCard)
                })
            }, 5000);
        } 
        SearchVal()
        return () => {
            socket.off('cardDetails');
        }; 
    }, [card, dataCard, load, userData])

    return (
        <>
            {pag && <Pag onClose={handleClosePag} />}
            {alert && <PedidosAberto />}
            {modal ? (active ? <AlertConta /> : <Pedido userData={userData} onCloseModal={handleModalClose} onAlertChange={handleAlertChange} />) :
                <Box id="section1" sx={{
                    mt: '9.5vh',
                    height: '90.5vh',
                    width: '80vw',
                    float: "right",
                    background: verify ? fundo : 'white',
                    position: "relative",
                    overflow: "hidden",
                    overflowY: 'scroll'
                }}>
                    {active &&<AlertaModal nomeBtn={"Documentos"} rotaBtn={"/sistema/Documentos"} statusAlert={"warning"} textAlert={"Clique aqui para enviar seus documentos:"} titleAlert={"Ative sua conta!"} /> }

                    <Container sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'start',
                        alignItems: 'center',
                        float: 'left',
                        mt: 3
                    }}>
                        <TuneIcon sx={{
                            mr: 2,
                            color: verify ? 'white' : 'black'
                        }} />
                        <Typography sx={{
                            color: verify ? colors.sc : colors.tc,
                            fontSize: '25px',
                            fontWeight: 700
                        }}>
                            Controle de Cartão - {userData ? userData.user_nome : ''}
                        </Typography>
                    </Container>
                    <Container sx={{
                        width: '100%',
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'start',
                        alignItems: 'center',
                        mt: 12,
                        ml: 4.5
                    }}>
                        {buttonshome.map((buttons) => (
                            <BtnHome name={buttons.name} ml='1vw' mr='1vw' cl={verify ? colors.pm : "white"} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} fun={buttons.void} route={buttons.route} />
                        ))}
                    </Container>

                    {
                        load ? (
                            <Container
                                sx={{
                                    width: '60%',
                                    height: 'auto',
                                    flexDirection: 'row',
                                    justifyContent: 'start',
                                    alignItems: 'center',
                                    float: 'left',
                                    mt: 6,
                                    ml: 13,
                                    mb: 10
                                }}
                            >
                                <Skeleton variant="rectangular" animation={"wave"} sx={{
                                    borderRadius: 2,
                                    width: '7vw',
                                    height: '20vh'
                                }} />
                            </Container>
                        ) : (
                            card ? (
                                <Cartao dataCard={dataCard} />
                            ) : (
                                <Container
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        flexDirection: 'row',
                                        justifyContent: 'start',
                                        alignItems: 'center',
                                        float: 'left',
                                        mt: 6,
                                        mb: 10
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.97 }}
                                        style={{ x: 100, height: '100%', width: '7vw' }}
                                    >
                                        <Card
                                            onClick={handleOpenModal}
                                            sx={{
                                                width: '7vw',
                                                height: '20vh',
                                                cursor: 'pointer',
                                                boxShadow: verify ? '1px 0px 4px 1px white' : '1px 1px 8px 1px',
                                            }}
                                        >
                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    color: 'black',
                                                    width: '100%',
                                                    height: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    '&:hover': {
                                                        color: '#0fcd88', // muda a cor da borda na animação
                                                    },
                                                }}
                                            >
                                                +
                                            </Typography>
                                        </Card>
                                    </motion.div>
                                </Container>
                            )
                        )
                    }

                    <Divider sx={{
                        width: '80%',
                        margin: '0 auto'
                    }} />

                    <Container sx={{
                        mt: 5,
                        width: '80%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        mb: 3
                    }}>
                        <Card
                            sx={{
                                width: "90%",
                                height: '15vh',
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "row",
                                boxShadow: verify ? '1px 0px 3px white' : '2px 0px 5px 1px rgba(0, 0, 0, 0.6)',
                                cursor: 'pointer',
                                mt: 2,
                                mb: 5
                            }}
                        >
                            <Container
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "row",
                                }}
                            >
                                <Typography sx={{
                                    fontSize: 18,
                                    fontWeight: 'bold'
                                }}>Histórico recente do cartão: </Typography>
                            </Container>
                        </Card>
                        {loading ? (
                            Array.from({ length: 4 }).map((_, index) => (
                                <Skeleton key={index} variant="rounded" width={'80%'} height={'10vh'} sx={{
                                    mt: 2, mb: 2
                                }} />
                            ))
                        ) : (
                            val.slice(0).map((card, index) => (
                                <Container
                                    key={index}

                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
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
                                            boxShadow: '0 0 5px rgba(0, 0, 0, 0.6)',
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            padding: 3,
                                        }}>
                                            <DirectionsBus sx={{
                                                fontSize: 30,
                                                color: verify ? colors.sc : colors.pm
                                            }} />
                                        </Icon>
                                        <Container sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: '100%'
                                        }}>
                                            <Balancer>
                                                <Typography variant="body1" sx={{ fontSize: 12, textAlign: 'center', mt: 2, color: verify ? 'white' : 'black' }}>
                                                    {card.Onibus}
                                                </Typography>
                                            </Balancer>
                                        </Container>
                                    </Container>
                                    <Divider orientation="vertical" variant="middle" flexItem sx={{
                                        ml: 5,
                                        mr: 5
                                    }} />

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
                                            <Typography variant="body1" sx={{ fontSize: 15, fontWeight: 'bold', textAlign: 'left', color: verify ? 'white' : 'black' }}>
                                                Data:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontSize: 12, textAlign: 'left', ml: 1, color: verify ? 'white' : 'black' }}>
                                                {card.Data}
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
                                            <Typography variant="body1" sx={{ fontSize: 15, fontWeight: 'bold', textAlign: 'left', color: verify ? 'white' : 'black' }}>
                                                Horário:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontSize: 12, textAlign: 'left', ml: 1, color: verify ? 'white' : 'black' }}>
                                                {card.Hora}
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
                                            <Typography variant="body1" sx={{ fontSize: 15, fontWeight: 'bold', textAlign: 'left', color: verify ? 'white' : 'black' }}>
                                                Passagem:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontSize: 12, textAlign: 'left', ml: 1, color: verify ? 'white' : 'black' }}>
                                                {card.Passagem}
                                            </Typography>
                                        </Container>
                                    </Container>
                                </Container>
                            )))}
                    </Container>

                </Box>
            }
        </>
    )
}

export default Homesistema