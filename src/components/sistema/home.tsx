import { Alert, AlertTitle, Box, Card, Container, Divider, Skeleton, Typography } from "@mui/material";
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
import Loading from "../loading";
import { Deccode } from "../../routes";

function Homesistema() {
    const [userData] = React.useState(Deccode());
    const [modal, setModal] = React.useState(false)
    const [card, setCard] = React.useState(Boolean)
    const [load, setLoad] = React.useState(true)
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default
    const [alert, setAlert] = React.useState(false); // Novo estado para o alert
    const token = localStorage.getItem('token')
    const [dataCard, setDataCard] = React.useState('')
    const [val, setVal] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [active, setActive] = React.useState(Boolean)
    const navigate = useNavigate()
    const [pag, setPag] = React.useState(false)

    console.log(userData)

    const handlePag = () => {
        setPag(true)
    }

    const handleClosePag = () => {
        setPag(false)
    }

    const buttonshome = [
        { name: 'Histórico do Cartão' },
        { name: 'Recarregar Cartão', void: handlePag },
        { name: 'Cancelar Cartão' }
    ]

    React.useEffect(() => {

        if (!userData) {
            return <Loading />;
        }

        console.log(userData.user_status);

        if (userData.user_status == "ativo") {
            setActive(false)
        } else if (userData.user_status == "inativo") {
            setActive(true)
        } else {
            setActive(true)
            navigate("/cadastro")
        }

        console.log(active);

    }, [active, navigate, userData])


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
        async function SearchVal() {
            try {
                console.log('ta indo');
                console.log(token);

                const response = await axios.post('http://localhost:3344/validation', {
                    user_CPF: userData.user_CPF,
                    token: token
                });
                console.log(response);
                console.log('ta indo');
                console.log(response);

                if (response.data[0]) {
                    const Cards = response.data[0]
                    setDataCard(Cards)
                    console.log(response)
                    console.log(Cards);
                    setLoad(false)
                    setCard(true)
                    console.log(val);
                } else {
                    console.log('deu merda rapeize')
                    setLoad(false)
                    setCard(false)
                }
            } catch (error) {
                console.log(error);
                console.log(error.message);

            }
        }
        SearchVal()
    }, [token])

    console.log(modal)
    console.log(load)
    console.log(active)
    console.log(alert)

    React.useEffect(() => {
        async function handleAttCard() {
            try {
                const response = await axios.post('http://localhost:3344/pagamento/verify', {
                    params: {
                        idcli: userData.user_idcli,
                        dataCard
                    }
                }, {
                    headers: {
                    'authorization': token
                    }
            })
                console.log(response);

            } catch (error) {
                console.log(error);
            }
        }
        handleAttCard()
    }, [dataCard, token, userData.user_idcli])


    return (
        <>
            {pag && <Pag onClose={handleClosePag}/>}
            {alert && <PedidosAberto />}
            {modal ? (active ? <AlertConta /> : <Pedido userData={userData} onCloseModal={handleModalClose} onAlertChange={handleAlertChange} />):
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
                    {active && <Alert severity={'warning'} sx={{ width: '100%', padding: 3, gap: 2 }}>
                        <AlertTitle>Ative sua conta!</AlertTitle>
                        <div style={{ marginBottom: 10 }}>Para ativar sua conta, envie seus documentos:</div>
                        <BtnHome name={"Documentos"} route={"/sistema/documentos"} cl={verify ? colors.pm : "white"} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} vis={undefined} mb={undefined} />
                    </Alert>}

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
                            Controle de Cartão - {userData.user_nome}
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
                            <BtnHome name={buttons.name} ml='1vw' mr='1vw' cl={verify ? colors.pm : "white"} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} fun={buttons.void} route={""} />
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
                            val.map((card) => (
                                <>
                                    <Card
                                        key={card.val_id} // É importante definir uma chave única para cada elemento do map
                                        sx={{
                                            width: "80%",
                                            height: '15vh',
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "row",
                                            boxShadow: verify ? '1px 0px 3px white' : '2px 0px 5px 1px rgba(0, 0, 0, 0.6)',
                                            cursor: 'pointer',
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
                                            <Container>
                                                <Typography >{card.val_onibus}</Typography>
                                            </Container>
                                            <Container>
                                                <Typography >{card.val_horario}</Typography>
                                            </Container>
                                            <Container>
                                                <Typography >{card.val_gasto}</Typography>
                                            </Container>
                                        </Container>
                                    </Card>
                                    <br />
                                </>
                            )))}
                    </Container>

                </Box>
            }
        </>
    )
}

export default Homesistema