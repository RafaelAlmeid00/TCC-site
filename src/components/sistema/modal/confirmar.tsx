import { Box, Button, Card, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import ModalContext from "../../../context/modalcontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Close } from "@mui/icons-material";

interface Props {
    onCloseModal: () => void;
}

export default function Excluir({ onCloseModal }: Props) {
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default
    const token = localStorage.getItem('token');
    const { userData } = React.useContext(ModalContext);
    const navigate = useNavigate()
    const data = userData ? userData.user_CPF : ''

     async function excl() {
        console.log(localStorage);

        try {
            await axios.post('https://easypass-iak1.onrender.com/user/delete', {
                user_CPF: data,
                token: token
            })
            console.log('ta indo');

            localStorage.removeItem('token')
            console.log(localStorage);

            navigate('/cadastro')
        } catch (err) {
            console.log(err);
        }
    }

    const handleModalClose = () => {
        onCloseModal();
    };

    return(
        <>
            <Box sx={{
                mt: -1,
                height: '120vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80vw',
                float: 'right',
                background: verify ? fundo : 'white',
            }}>
                <Card sx={{
                    height: '30%',
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    boxShadow: verify ? '1px 0px 4px 1px white' : '1px 1px 8px 1px',

                }}>
                    <Container sx={{
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'end',
                        mb: 3
                    }}>
                        <IconButton onClick={handleModalClose}>
                        <Close />
                    </IconButton>
                    </Container>
                    <Container sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}>
                        <Typography sx={{
                            fontSize: {
                                xs: '2.5vw',  // (7.5 / 1200) * 600
                                sm: '2vw',  // (7.5 / 1200) * 900
                                md: '2vw',  // (7.5 / 1200) * 1200
                                lg: '1vw',
                                xl: '1vw',  // Manter o mesmo tamanho de lg para xl
                            },
                            fontWeight: 'bold'
                        }}>
                            Deseja mesmo excluir essa conta?
                        </Typography>
                        <Typography component='span' sx={{
                            fontSize: {
                                xs: '2vw',  // (7.5 / 1200) * 600
                                sm: '1.2vw',  // (7.5 / 1200) * 900
                                md: '1vw',  // (7.5 / 1200) * 1200
                                lg: '0.8vw',
                                xl: '0.8vw',  // Manter o mesmo tamanho de lg para xl
                            },
                            fontWeight: 'bold'
                        }}>
                            Essa ação não pode ser desfeita!
                        </Typography>
                    </Container>
                    <Container sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: 3
                    }}>
                        <Button variant="outlined" onClick={excl} sx={{
                            border: '2px solid red', // muda a cor da borda na animação
                            backgroundColor: 'white',
                            color: 'red',
                            mt: 3,
                            transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
                            '&:hover': {
                                backgroundColor: 'red', // muda a cor da borda na animação
                                color: 'white',
                                boxShadow: 'inset 0px 0px 2px 1px',
                                border: '2px solid red', // muda a cor da borda na animação
                            },
                        }}>
                            <Typography sx={{
                                fontSize: 12,
                                fontWeight: 600,
                            }}>
                                Excluir Conta
                            </Typography>
                        </Button>
                    </Container>
                </Card>
            </Box>
        </>
    )
}