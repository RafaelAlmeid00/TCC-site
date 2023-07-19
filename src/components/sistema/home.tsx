import { Box, Card, Container, Typography } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import colors from "../../assets/colors";
import { motion } from "framer-motion";
import ModalContext from "../../context/modalcontext";
import React from "react";
import { BtnHome } from "../btns";
import Pedido from "./modal/pedidocard";
import { PedidosAberto } from "../errosvalidations";
import { Deccode } from "./FrontDecoded";

function Homesistema() {
    const [modal, setModal] = React.useState(false)
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default
    const [alert, setAlert] = React.useState(false); // Novo estado para o alert
    const [userData] = React.useState(Deccode());
    console.log(Deccode());
    

    const buttonshome = [
        {name: 'Histórico do Cartão'},
        {name: 'Recarregar Cartão'},
        {name: 'Cancelar Cartão'}
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
                        color: colors.tc,
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
                <Container sx={{
                    width: '100%',
                    height: 'auto',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'center',
                    float: "left",
                    mt: 6,
                }}>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        style={{ x: 100, height: '100%', width: '7vw' }}
                        >

                    <Card onClick={handleOpenModal} sx={{
                        width: '7vw',
                        height: '20vh',
                        cursor: 'pointer',
                            boxShadow: verify ? '1px 0px 4px 1px white' : '1px 1px 8px 1px',
                    }}>
                        <Typography variant="h3" sx={{
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
                        }}>
                            +
                        </Typography>
                    </Card>
                    </motion.div>
                </Container>
            </Box>
            }
        </>
    )
}

export default Homesistema
