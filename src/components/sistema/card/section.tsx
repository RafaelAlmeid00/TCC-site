import { Box, Card, Container, Divider, IconButton, Skeleton, Typography } from "@mui/material";
import colors from "../../../assets/colors";
import { BtnHome } from "../../btns";
import axios from "axios";
import Cartao from "../modal/card";
import ModalContext from "../../../context/modalcontext";
import React from "react";
import { Deccode } from "../FrontDecoded";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function CardSection() {
    const [isBalanceVisible, setIsBalanceVisible] = React.useState(false);
    const [card, setCard] = React.useState(Boolean)
    const [load, setLoad] = React.useState(true)
    const [loading, setLoading] = React.useState(true)
    const [dataCard, setDataCard] = React.useState('')
    const [dataCardCancel, setCardCancel] = React.useState(Object)
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default
    const token = localStorage.getItem('token')
    const [userData] = React.useState(Deccode());
    console.log(Deccode());

    const buttonshome = [
        { name: 'Histórico do Cartão' },
        { name: 'Recarregar Cartão' },
        { name: 'Cancelar Cartão' }
    ]

    const handleVisibilityToggle = () => {
        setIsBalanceVisible((prevValue) => !prevValue);
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
                    setLoad(false)
                    console.log(card);

                } else {
                    console.log('deu merda rapeize')
                    setLoad(true)
                }
            } catch (error) {
                console.log(error);
                setLoad(true)
            }
        }
        SearchCard()
    }, [card, token])

    React.useEffect(() => {
        async function SearchCardCancel() {
            try {
                console.log('ta indo');
                console.log(token);

                const response = await axios.post('http://localhost:3344/card/cancelados', {
                    user_CPF: userData.user_CPF,
                    token: token
                });
                console.log(response);
                console.log('ta indo');

                if (response.data.length > 0) {
                    console.log(response.data);
                    console.log(dataCardCancel);
                    setCardCancel(response.data)
                    console.log(dataCardCancel);
                    setLoading(false)
                    console.log(card);

                } else {
                    console.log('deu merda rapeize')
                    setLoading(true)
                }
            } catch (error) {
                console.log(error);
                setLoading(true)
            }
        }
        SearchCardCancel()
    }, [card, token])

    return (
        <>
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
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'center',
                    mt: 7,
                    ml: 4.5
                }}>
                    {buttonshome.map((buttons) => (
                        <BtnHome name={buttons.name} ml='1vw' mr='1vw' cl={verify ? colors.pm : "white"} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} fun={undefined} route={""} />
                    ))}
                </Container>

                {
                    load ? 
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
                    : <Cartao dataCard={dataCard} />
                }

                <Divider sx={{
                    width: '80%',
                    margin: '0 auto'
                }} />

                <Container sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 5,
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
                            }}>Cartões cancelados: </Typography>
                        </Container>
                    </Card>

                    <Card sx={{
                        width: '80%',
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 5,
                        flexWrap: 'wrap',
                        mb: 10
                    }}>
                        {loading ? (
                            Array.from({ length: 4 }).map((_, index) => (
                                <Skeleton variant="rectangular" animation={"wave"} sx={{
                                    borderRadius: 2,
                                    width: '7vw',
                                    height: '20vh',
                                    mr: 5,
                                    ml: 5,
                                    mt: 5,
                                    mb: 5
                                }} />
                            ))
                        ) : (
                                dataCardCancel.map((card) => (
                                <>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.97 }}
                                            style={{ x: 100, height: '100%', width: '7vw' }}
                                        >
                                            <Card sx={{
                                                width: '7vw',
                                                height: '20vh',
                                                cursor: 'pointer',
                                                boxShadow: verify ? '1px 0px 4px 1px white' : '1px 1px 8px 1px',
                                            }}>
                                                <Typography component="span" sx={{
                                                    color: verify ? 'white' : 'black',
                                                    width: '100%',
                                                    height: '100%',
                                                    display: 'flex',
                                                    textAlign: 'center',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    '&:hover': {
                                                        color: '#0fcd88', // muda a cor da borda na animação
                                                    },
                                                }}>
                                                    Cartão de {dataCard.card_tipo}
                                                </Typography>
                                            </Card>
                                        </motion.div>
                                        <Container
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'start',
                                                alignItems: 'flex-start',
                                                ml: 15,
                                            }}
                                        >
                                            <Typography sx={{ color: verify ? 'white' : 'black' }}>
                                                Saldo do cartão: {isBalanceVisible ? `R$${dataCard.card_saldo}` : '•••••••••'}
                                                <IconButton onClick={handleVisibilityToggle} sx={{ ml: 0.5, mt: -1 }}>
                                                    {isBalanceVisible ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </Typography>
                                            <Typography sx={{ color: verify ? 'white' : 'black', mt: 2, mb: 2 }}>
                                                Validade do cartão: {dataCard.card_validade}
                                            </Typography>
                                            <Typography sx={{ color: verify ? 'white' : 'black' }}>
                                                Status do cartão: {dataCard.card_status}
                                            </Typography>
                                        </Container>
                                    <br />
                                </>
                            )))}
                    </Card>
                </Container>
            </Box>
        </>
    )
}