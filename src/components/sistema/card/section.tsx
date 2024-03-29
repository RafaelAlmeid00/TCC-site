import { Box, Card, Container, Divider, Skeleton, Typography } from "@mui/material";
import colors from "../../../assets/colors";
import { BtnHome } from "../../btns";
import axios from "axios";
import Cartao from "../modal/card";
import ModalContext from "../../../context/modalcontext";
import React from "react";
import { motion } from "framer-motion";
import { CardData } from "../../interfaces";
import Pag from "../modal/pagamento";

export default function CardSection() {
    const [load, setLoad] = React.useState(true)
    const [loading, setLoading] = React.useState(true)
    const [dataCard, setDataCard] = React.useState<CardData | null>(null)
    const [dataCardCancel, setCardCancel] = React.useState<Array<Object> | null>()
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default
    const token = localStorage.getItem('token')
    const { userData } = React.useContext(ModalContext);
    const [pag, setPag] = React.useState(false)

    const handlePag = () => {
        setPag(true)
    }

    const handleClosePag = () => {
        setPag(false)
    }

    const buttonshome = [
        { name: 'Histórico do Cartão', route: '/Sistema/Viagens' },
        { name: 'Recarregar Cartão', onClick: handlePag },
        { name: 'Cancelar Cartão' }
    ]

    React.useEffect(() => {
        async function searchCard() {
            try {
                console.log('Iniciando a busca do cartão...');
                const response = await axios.post('https://easypass-iak1.onrender.com/card/enviados', {
                    user_CPF: userData && userData.user_CPF,
                    token: token
                });

                console.log('aaa', response.data);


                if (response.data && response.data.length > 0) {
                    if (response.data == "Sem pedidos" || response.data == "Sem cards ativos") {
                        setLoad(true);
                    } else {
                        console.log('Dados do cartão recebidos com sucesso:', response.data);
                        setDataCard(response.data[0]);
                        setLoad(false);
                    }

                } else {
                    console.log('Nenhum cartão encontrado.');
                    setLoad(true);
                }
            } catch (error) {
                console.error('Erro ao buscar o cartão:', error);
                setLoad(true);
            }
        }

        if (dataCard) {
            console.log('Os dados do cartão já foram recebidos.');
        } else {
            searchCard();
        }
    }, [userData]);

    React.useEffect(() => {
        async function SearchCardCancel() {
            try {
                console.log('ta indo');
                console.log(token);
                setLoading(true)

                const response = await axios.post('https://easypass-iak1.onrender.com/card/cancelados', {
                    user_CPF: userData && userData.user_CPF,
                    token: token
                });
                console.log('cancel', response);
                console.log('ta indo');

                if (response.data.length > 0) {
                    console.log('cancel', response.data);
                    console.log('cancel', dataCardCancel);
                    setCardCancel(response.data)
                    console.log('cancel', dataCardCancel);
                    setLoading(false)

                } else {
                    console.log('deu merda rapeize')
                    setLoading(false)
                }
            } catch (error) {
                console.log(error);
                setLoading(true)
            }
        }
        if (dataCardCancel && dataCardCancel != undefined) {
            console.log('já foi pego');
            console.log(dataCardCancel);
            console.log(dataCardCancel);
            setLoading(false)

        } else {
            SearchCardCancel()
        }
    }, [])

    console.log('datacard', dataCard);


    return (
        <>
            {pag && <Pag onClose={handleClosePag} load={dataCard} />}

            <Box id="section1" sx={{
                height: '100vh',
                width: '80vw',
                float: "right",
                background: verify ? fundo : 'white',
                position: "relative",
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
                        <BtnHome name={buttons.name} ml='1vw' mr='1vw' cl={verify ? colors.pm : "white"} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} fun={buttons.onClick} route={buttons.route} />
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
                        mb: 10,
                        padding: 5
                    }}>
                        {loading ? (
                            Array.from({ length: 4 }).map((_, _index) => (
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
                            dataCardCancel == undefined ? (
                                <Typography></Typography>
                            ) : (
                                dataCardCancel.map((card: any) => (
                                    <>
                                        <motion.div
                                            key={card.card_id}
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
                                                    Cartão de {card.card_tipo}
                                                </Typography>
                                            </Card>
                                        </motion.div>
                                    </>
                                ))))}
                    </Card>
                </Container>
            </Box>
        </>
    )
}