import {Box, Card, Container, Divider, Icon, Skeleton, Typography } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import colors from "../../assets/colors";
import { motion } from "framer-motion";
import ModalContext from "../../context/modalcontext";
import React from "react";
import { BtnHome } from "../btns";
import Pedido from "./modal/pedidocard";
import { PedidosAberto, PerfilAtualizado, PerfilError } from "../errosvalidations";
import axios from "axios";
import Cartao from "./modal/card";
import { useNavigate } from "react-router-dom";
import AlertConta from "./AlertConta";
import Pag from "./modal/pagamento";
import { DirectionsBus } from "@mui/icons-material";
import Balancer from "react-wrap-balancer";
import { socket } from "./../../../socket.io/index";
import AlertaModal from "./alert";
import { CardData } from "../interfaces";

function Homesistema() {
    socket.connect()

    const { userData } = React.useContext(ModalContext);
    const [modal, setModal] = React.useState(false)
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default
    const [alert, setAlert] = React.useState(false); // Novo estado para o alert
    const token = localStorage.getItem('token')
    const [dataCard, setDataCard] = React.useState<CardData>()
    const [loading, setLoading] = React.useState(true)
    const navigate = useNavigate()
    const [pag, setPag] = React.useState(false)
    const [usos, setUsos] = React.useState([])
    const { alertatopo } = React.useContext(ModalContext)
    const [active, setActive] = React.useState(false)
    const [card, setCard] = React.useState(alertatopo.nomeBtn && true)
    const [load, setLoad] = React.useState(dataCard && dataCard.card_id ? false : true)
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    React.useEffect(() => {
        async function Verifytoken() {
            const urlParams = new URLSearchParams(window.location.search);
            const tokenemail = urlParams.get('token');
            const tokencel = urlParams.get('tokencel');

            if (tokenemail || tokencel) {
                try {
                    const response = await axios.post('https://easypass-iak1.onrender.com/user/validatetoken', {
                        token: tokenemail ? tokenemail : tokencel
                    })
                    if (response.data.valid) {
                        console.log('ta indo');

                        if (tokenemail) {
                            let updates = {
                                ['verifyemail']: '1'
                            }

                            try {
                                const response = await update(updates)
                                console.log(response);
                            } catch (error) {
                                console.log(error);
                            }

                        } else {
                            let updates = {
                                ['verifycel']: '1'
                            }

                            try {
                                const response = await update(updates)
                                console.log(response);
                            } catch (error) {
                                console.log(error);
                            }

                        }

                    } else {
                        location.reload()
                    }
                } catch (error) {
                    console.log(error);
                }
            }

        }
        Verifytoken()
    }, []);

    const update = async (updates: any) => {
        try {

            console.log(updates);

            await axios.post('https://easypass-iak1.onrender.com/user/update', {
                user_CPF: userData ? userData.user_CPF : '',
                updates,
            });
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 3000)
        } catch (error) {
            console.log(error);
            setOpen2(true)
            setTimeout(() => {
                setOpen2(false)
            }, 3000)
        }

    };

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

    const buttonshome = [
        { name: 'Histórico do Cartão', route: '/Sistema/Viagens' },
        { name: 'Recarregar Cartão', onClick: handlePag },
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

    const handleAlertChange = (value: any) => {
        setAlert(value);
        setTimeout(() => {
            setAlert(false)
        }, 5000)
    };

    React.useEffect(() => {
        async function handleAttCard() {
            try {
                const response = await axios.post('https://easypass-iak1.onrender.com/pagamento/verify', {
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
        if (alertatopo.nomeBtn) {
            console.log('ta em alert');

        } else {
            handleAttCard()
        }
    }, [dataCard, userData])

    React.useEffect(() => {
        if (dataCard && dataCard.card_id) {
            setLoad(false)
            setCard(true)
        }
        async function SearchCard() {
            try {
                console.log('ta indo');
                console.log(token);

                const response = await axios.post('https://easypass-iak1.onrender.com/card/enviados', {
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
                    setCard(true)

                } else {
                    console.log('deu merda rapeize')
                    setLoad(true)
                }
            } catch (error) {
                console.log(error);
                setLoad(true)
            }
        }
        if (alertatopo.nomeBtn) {
            console.log('ta em alert');
            setCard(false)
            setLoad(false)
        } else {
            SearchCard()
        }
    }, [userData])

    React.useEffect(() => {
        const handleUsos = async () => {
            try {
                const response = await axios.post('https://easypass-iak1.onrender.com/usos', {
                    user_CPF: userData ? userData.user_CPF : '',
                }, {
                    headers: {
                        'authorization': token
                    }
                })
                console.log(response);
                setUsos(response.data)
                console.log(usos);
                setLoading(false)

            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        }
        if (alertatopo.nomeBtn) {
            console.log('ta em alert');
            setLoading(false)
        } else {
            handleUsos()
        }
    }, [userData])


    console.log(alertatopo);
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', pag);


    return (
        <>
            {open && <PerfilAtualizado />}
            {open2 && <PerfilError />}
            {pag && <Pag onClose={handleClosePag} />}
            {alert && <PedidosAberto />}
            {modal && userData ? (
                active ? (
                    ''
                ) : (
                    <Pedido userData={userData} onCloseModal={handleModalClose} onAlertChange={handleAlertChange} />
                )
            ) : (
                null
            )}                
            <Box id="section1" sx={{
                height: '100vh',
                width: '80vw',
                float: "right",
                background: verify ? fundo : 'white',
                position: "relative",
            }}>
                {alertatopo && alertatopo.nomeBtn ? <AlertaModal nomeBtn={alertatopo.nomeBtn} rotaBtn={alertatopo.rotaBtn} statusAlert={alertatopo.statusAlert} textAlert={alertatopo.textAlert} titleAlert={alertatopo.titleAlert} /> : ''}

                <Container sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'center',
                    float: 'left',
                    mt: 3,
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
                        <BtnHome name={buttons.name} ml='1vw' mr='1vw' cl={verify ? colors.pm : "white"} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} fun={buttons.onClick} route={buttons.route} />
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
                    mb: 10
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
                        usos.length == undefined ? (
                            <Typography></Typography>
                        ) : (
                            usos.slice(0, 4).map((viagem: any, index) => (
                                <Container
                                    key={index}
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Container
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            width: '50%',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <Icon
                                            sx={{
                                                borderRadius: '50%',
                                                border: '1px solid transparent',
                                                boxShadow: '0 0 5px rgba(0, 0, 0, 0.6)',
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                padding: 3,
                                            }}
                                        >
                                            <DirectionsBus
                                                sx={{
                                                    fontSize: 30,
                                                    color: verify ? colors.sc : colors.pm
                                                }}
                                            />
                                        </Icon>
                                        <Container
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                width: '100%',
                                                flexDirection: 'column'
                                            }}
                                        >
                                            <Balancer style={{ width: '100%' }}>
                                                <Typography variant="body1" sx={{ fontSize: 13, fontWeight: 'bold', width: '100%', textAlign: 'center', mt: 2, color: verify ? 'white' : 'black' }}>
                                                    {viagem.route_num}
                                                </Typography>
                                            </Balancer>
                                            <Balancer style={{ width: '100%' }}>
                                                <Typography component="span" sx={{ fontSize: 11, width: '100%', textAlign: 'center', mt: 2, color: verify ? 'white' : 'black' }}>
                                                    {viagem.route_nome}
                                                </Typography>
                                            </Balancer>
                                        </Container>
                                    </Container>
                                    <Divider orientation="vertical" variant="middle" flexItem sx={{
                                        ml: 5,
                                        mr: 5
                                    }} />
                                    <Container
                                        sx={{
                                            width: '70%',
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start",
                                            flexDirection: 'column',
                                            padding: 5,
                                            marginLeft: 5,
                                            marginRight: 5,
                                            gap: 2
                                        }}
                                    >
                                        <Container
                                            sx={{
                                                display: "flex",
                                                flexDirection: 'row',
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography variant="body1" sx={{ fontSize: 15, fontWeight: 'bold', textAlign: 'left', color: verify ? 'white' : 'black' }}>
                                                Data:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontSize: 12, textAlign: 'left', ml: 1, color: verify ? 'white' : 'black' }}>
                                                {viagem.val_data}
                                            </Typography>
                                        </Container>
                                        <Divider variant="middle" sx={{
                                            width: '75%'
                                        }} />
                                        <Container
                                            sx={{
                                                display: "flex",
                                                flexDirection: 'row',
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography variant="body1" sx={{ fontSize: 15, fontWeight: 'bold', textAlign: 'left', color: verify ? 'white' : 'black' }}>
                                                Horário:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontSize: 12, textAlign: 'left', ml: 1, color: verify ? 'white' : 'black' }}>
                                                {viagem.val_horario}
                                            </Typography>
                                        </Container>
                                        <Divider variant="middle" sx={{
                                            width: '75%'
                                        }} />
                                        <Container
                                            sx={{
                                                display: "flex",
                                                flexDirection: 'row',
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography variant="body1" sx={{ fontSize: 15, fontWeight: 'bold', textAlign: 'left', color: verify ? 'white' : 'black' }}>
                                                Passagem:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontSize: 12, textAlign: 'left', ml: 1, color: verify ? 'white' : 'black' }}>
                                                {viagem.val_gasto}
                                            </Typography>
                                        </Container>
                                    </Container>
                                </Container>

                            ))))}
                </Container>

            </Box>
        </>
    )
}

export default Homesistema