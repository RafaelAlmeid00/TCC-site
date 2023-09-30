import { Card, Container, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ModalContext from "../../../context/modalcontext";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Cartao({dataCard}: any) {
    const [isBalanceVisible, setIsBalanceVisible] = React.useState(false);
    const { verify } = React.useContext(ModalContext);
    const navigate = useNavigate()

    const handleVisibilityToggle = () => {
        setIsBalanceVisible((prevValue) => !prevValue);
    };
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
                mb: 10
            }}>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    style={{ x: 100, height: '100%', width: '7vw' }}
                >
                    <Card onClick={handleCard}
                    sx={{
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
            </Container>
        </>
    )
}