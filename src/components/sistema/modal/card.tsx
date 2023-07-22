import { Card, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ModalContext from "../../../context/modalcontext";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cartao({dataCard}) {
    const { verify } = React.useContext(ModalContext);
    const navigate = useNavigate()
    
    const handleCard = () => {
        navigate("/Sistema/Card")
    }
    
    return(
        <>
            <Container sx={{
                width: '100%',
                height: 'auto',
                display: 'flex', // Altera o display para flex
                flexDirection: 'row', // Itens ficarão lado a lado
                justifyContent: 'start',
                alignItems: 'center',
                mt: 6,
            }}>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    style={{ x: 100, height: '100%', width: '7vw' }}
                >
                    <Card onClick={handleCard} sx={{
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
                <Container sx={{
                    display: 'flex', // Define display para flex
                    flexDirection: 'column', // Itens ficarão em coluna abaixo um do outro
                    justifyContent: 'start',
                    alignItems: 'flex-start', // Alinha os textos à esquerda
                    ml: 15,
                }}>
                    <Typography sx={{ color: verify ? 'white' : 'black' }}>Saldo do cartão: R${dataCard.card_saldo}</Typography>
                    <Typography sx={{ color: verify ? 'white' : 'black', mt: 2, mb: 2 }}>Validade do cartão: {dataCard.card_validade}</Typography>
                    <Typography sx={{ color: verify ? 'white' : 'black' }}>Status do cartão: {dataCard.card_status}</Typography>
                </Container>
            </Container>

        </>
    )
}