import { Box, Button, Card, Container, Typography } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import colors from "../../assets/colors";
import { motion } from "framer-motion";
import ModalContext from "../../context/modalcontext";
import React from "react";
import { BtnHome } from "../btns";

function Homesistema() {
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default
    const userJson = localStorage.getItem('user');
    const userData = userJson ? JSON.parse(userJson) : null;

    const buttonshome = [
        {name: 'Histórico do Cartão'},
        {name: 'Recarregar Cartão'},
        {name: 'Cancelar Cartão'}
    ]

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
            }}>

                <Container sx={{
                    width: '100%',
                    backgound: 'red',
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
                    mt: 12
                }}>
                    {buttonshome.map((buttons, index) => (
                        <BtnHome name={buttons.name} ml='1vw' mr='1vw' route={buttons.route} cl={verify ? colors.pm : "white"} bc={verify && 'white'} bch={verify && 'white'} fun={undefined} />
                    ))}
                </Container>
                <Container sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'row',
                    mt: 6
                }}>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        style={{ x: 100 }}
                        >

                    <Card sx={{
                        width: '7vw',
                        height: '20vh',
                        boxShadow: '1px 1px 8px 1px',
                        cursor: 'pointer',
                        ml: 25
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
        </>
    )
}

export default Homesistema
