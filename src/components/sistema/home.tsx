import { Box, Card, Container, Skeleton, Typography } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import colors from "../../assets/colors";
import { motion } from "framer-motion";
import ModalContext from "../../context/modalcontext";
import React from "react";
import { BtnHome } from "../btns";
import Pedido from "./modal/pedidocard";
import { PedidosAberto } from "../errosvalidations";
import { Deccode } from "./FrontDecoded";
import axios from "axios";
import Cartao from "./modal/card";

function Homesistema() {
    const [modal, setModal] = React.useState(false)
    const [card, setCard] = React.useState(Boolean)
    const [load, setLoad] = React.useState(true)
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default
    const [alert, setAlert] = React.useState(false); // Novo estado para o alert
    const [userData] = React.useState(Deccode());
    console.log(Deccode());
    const token = localStorage.getItem('token')
    const [dataCard, setDataCard] = React.useState('')
    const [val, setVal] = React.useState([])
    const [loading, setLoading] = React.useState(true)


    const buttonshome = [
        { name: 'Histórico do Cartão' },
        { name: 'Recarregar Cartão' },
        { name: 'Cancelar Cartão' }
    ]

    const handleModalClose = () => {
        setModal(false);
    };

    const handleOpenModal = () => {
        setModal(true);
    };

    const handleAlertChange = (value) => {
        setAlert(value);
        setTimeout(() => {
            setAlert(false)
        }, 5000)
    };

    React.useEffect(() => {
        async function SearchCard() {
            try {
                console.log('ta indo');
                console.log(token);

                const response = await axios.post('http://localhost:3344/card/enviados', {
                    token: token
                });
                console.log(response);
                console.log('ta indo');

                if (response.data) {
                    console.log(response.data);
                    console.log(dataCard);
                    setDataCard(response.data[0])
                    console.log(dataCard);
                    setCard(true)
                    setLoad(false)
                    console.log(card);

                } else {
                    console.log('deu merda rapeize')
                    setCard(false)
                    setLoad(true)
                }
            } catch (error) {
                console.log(error);
                setCard(false)
                setLoad(true)
            }
        }
        SearchCard()
    }, [card, token])

    React.useEffect(() => {
        async function SearchVal() {
            try {
                console.log('ta indo');
                console.log(token);

                const response = await axios.post('http://localhost:3344/validation', {
                    token: token
                });
                console.log(response);
                console.log('ta indo');
                console.log(response);

                if (response.data) {
                    const Cards = response.data
                    setVal(Cards)
                    console.log(response)
                    console.log(Cards);
                    console.log(val);
                    setLoading(false)
                } else {
                    console.log('deu merda rapeize')
                }
            } catch (error) {
                console.log(error);

            }
        }
        SearchVal()
    }, [token, val])


    return (
        <>
            {alert && <PedidosAberto />}
            {modal ? <Pedido userData={userData} onCloseModal={handleModalClose} onAlertChange={handleAlertChange} /> :
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
                            <BtnHome name={buttons.name} ml='1vw' mr='1vw' cl={verify ? colors.pm : "white"} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} fun={undefined} route={""} />
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
                                    ml: 13
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

                    <Container sx={{
                        mt: 10,
                        width: '80%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
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
                                mb: 2
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
