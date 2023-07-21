import { Box, Button, Container, Divider, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Deccode } from "../FrontDecoded";
import ModalContext from "../../../context/modalcontext";
import React from "react";
import colors from "../../../assets/colors";
import Excluir from "../modal/confirmar";

function SectionPerfil2() {
    const [modal, setModal] = React.useState(false)
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default
    const token = localStorage.getItem('token');
    const userData = Deccode();
    const navigate = useNavigate()
    const data = userData.user_email
    console.log('THIS IS DATA: ', data);
    console.log(localStorage);

    const excl = () => {
        setModal(true)        
    }
    async function exit() {
        try {
            console.log('ta indo');
            localStorage.removeItem('token');
            navigate('/cadastro');
        } catch (err) {
            console.log(err);
        }
    }
    const handleModalClose = () => {
        setModal(false);
    };
    

    return (
        <>
            {modal ? <Excluir onCloseModal={handleModalClose} /> :
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
                <Container sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    width: '80%',
                }}>

                    <Divider variant="fullWidth" component="ul" sx={{
                        width: '100%',
                        borderBottom: '2px solid #ccc',
                    }} />
                    <Container sx={{
                        display: 'flex',
                        alignItems: 'start',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}>
                        <Typography sx={{
                            fontSize: 22,
                            fontWeight: 600,
                            mt: 5,
                            color: verify ? 'white' : 'black',
                        }}>Senha e E-mail</Typography>
                        <Typography component="span" sx={{
                            fontSize: 12,
                            width: '40%',
                            mt: 2,
                            color: '#7d7d7d'
                        }}>Sempre verifique qual sua nova senha antes de confirmar a atualização de dados.
                            Caso perca essa senha e não tenha acesso a seu e-mail,
                            não será possivel logar sua conta pelos métodos convencionais.</Typography>
                        <Button variant="contained" sx={{
                            color: verify ? colors.pm : 'white',
                            background: verify ? 'white' : undefined,
                            mt: 3,
                            border: '2px solid transparent', // adiciona a borda inicialmente
                            transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
                            '&:hover': {
                                border: '2px solid #0fcd88', // muda a cor da borda na animação,
                                background: verify ? 'white' : undefined
                            },
                        }}>
                            <Typography sx={{
                                fontSize: 12,
                                fontWeight: 600,
                            }}>
                                Alterar Senha
                            </Typography>
                        </Button>
                        <Button variant="contained" sx={{
                            color: verify ? colors.pm : 'white',
                            background: verify ? 'white' : undefined,
                            mt: 3,
                            border: '2px solid transparent', // adiciona a borda inicialmente
                            transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
                            '&:hover': {
                                border: '2px solid #0fcd88', // muda a cor da borda na animação
                                background: verify ? 'white' : undefined,
                            },
                        }}>
                            <Typography sx={{
                                fontSize: 12,
                                fontWeight: 600,
                            }}>
                                Alterar E-mail
                            </Typography>
                        </Button>
                    </Container>

                    <Divider variant="fullWidth" component="ul" sx={{
                        width: '100%',
                        mt: 6,
                        borderBottom: '2px solid #ccc',
                    }} />
                    <Container sx={{
                        display: 'flex',
                        alignItems: 'start',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}>
                        <Typography sx={{
                            color: verify ? 'white' : 'black',
                            fontSize: 22,
                            fontWeight: 600,
                            mt: 5
                        }}>Saída e Exclusão de Conta</Typography>
                        <Typography component="span" sx={{
                            fontSize: 12,
                            width: '40%',
                            mt: 2,
                            color: '#7d7d7d'
                        }}>Sempre verifique seu email antes de confirmar a atualização de dados.
                            Caso perca esse email e não tenha acesso a ele também,
                            não será possivel logar sua conta pelos métodos convencionais.</Typography>
                        <Button variant="contained" onClick={exit} sx={{
                            backgroundColor: 'red',
                            color: 'white',
                            mt: 3,
                            border: '2px solid transparent', // adiciona a borda inicialmente
                            transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
                            '&:hover': {
                                border: '2px solid red', // muda a cor da borda na animação
                                color: 'white',
                                backgroundColor: 'red',
                                boxShadow: 'inset 0px 0px 2px 1px',
                            },
                        }}>
                            <Typography sx={{
                                fontSize: 12,
                                fontWeight: 600,
                            }}>
                                Sair da Conta
                            </Typography>
                        </Button>
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
                </Container>
            </Box>}
        </>
    )
}

export default SectionPerfil2
