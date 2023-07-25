import { Box, Button, Container, Divider, FormControl, Input, InputAdornment, InputLabel, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Deccode } from "../FrontDecoded";
import ModalContext from "../../../context/modalcontext";
import React from "react";
import colors from "../../../assets/colors";
import Excluir from "../modal/confirmar";
import { PerfilAtualizado, PerfilError, TokenAtualizado, TokenPerfilError, TokenPerfilErrorSer } from "../../errosvalidations";
import { Email, Lock } from "@mui/icons-material";

function SectionPerfil2() {
    const [modal, setModal] = React.useState(false)
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [openT, setOpenT] = React.useState(false);
    const [openT2, setOpenT2] = React.useState(false);
    const [openT0, setOpenT0] = React.useState(false);
    const [email, setEmail] = React.useState(false);
    const [senha, setSenha] = React.useState(false);
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const [dado, setPega] = React.useState('');
    let parame: string
    const fundo = themes.palette.background.default
    const token = localStorage.getItem('token');
    const userData = Deccode();
    const cpf = userData.user_CPF;
    const data = userData.user_email
    const navigate = useNavigate()

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

    const trocaEmail = () => {
        setEmail(true)
        setSenha(false)
    };

    const trocaSenha = () => {
        setSenha(true)
        setEmail(false)
    };


    const ParametroEmail = () => {
        parame = 'email'
    }


    const update = async (cpf: any, updates: any) => {
        try {

            console.log(updates);

            await axios.post('http://localhost:3344/user/update', {
                user_CPF: cpf,
                updates,
                token: token
            });
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 3000)
            setSenha(false)
        } catch (error) {
            console.log(error);
            setOpen2(true)
            setTimeout(() => {
                setOpen2(false)
            }, 3000)
        }

    };

    async function UpdateToken() {
        try {
            console.log('foi quase');
            const res = await axios.post('http://localhost:3344/user/token', {
                user_CPF: cpf,
                token: token
            });
            if (res.data.token != '') {
                localStorage.removeItem('token')
                localStorage.setItem('token', res.data.token);
                setOpenT(true)
                setTimeout(() => {
                    setOpenT(false)
                }, 3000)
            } else {
                console.log(res.data.message);
                setOpenT0(true)
                setTimeout(() => {
                    setOpenT0(false)
                }, 3000)
            }
        } catch (error) {
            console.log(error);
            setOpenT2(true)
            setTimeout(() => {
                setOpenT2(false)
            }, 3000)
        }
    }


    const ConfirmarEmail = async () => {
        await ParametroEmail()
        console.log(dado);
        const updates = {
            [parame]: dado
        }
        console.log(updates);
        console.log(parame);
        console.log(dado);
        setSenha(false)
        await update(cpf, updates);
        setEmail(false)
        await UpdateToken()

    };


    return (
        <>
            {open && <PerfilAtualizado />}
            {open2 && <PerfilError />}
            {openT && <TokenAtualizado />}
            {openT2 && <TokenPerfilError />}
            {openT0 && <TokenPerfilErrorSer />}
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
                            {senha ?
                                <>
                                    <FormControl variant="standard" sx={{ width: '40%', mb: '20px', mt: 5 }}>
                                        <InputLabel htmlFor="input-with-icon-adornment">
                                            Senha
                                        </InputLabel>
                                        <Input
                                            placeholder="Insira o nova senha"
                                            inputProps={{ maxLength: 12 }}
                                            required
                                            id="input-with-icon-adornment"
                                            onChange={(event) => setPega(event?.target.value)}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <Lock />
                                                </InputAdornment>
                                            }
                                            sx={{ fontSize: '14px' }}
                                        />
                                    </FormControl>
                                    <FormControl variant="standard" sx={{ width: '40%', mt: 5, mb: 5 }}>
                                        <InputLabel htmlFor="input-with-icon-adornment">
                                            Senha
                                        </InputLabel>
                                        <Input
                                            placeholder="Insira o nova senha"
                                            inputProps={{ maxLength: 12 }}
                                            required
                                            id="input-with-icon-adornment"
                                            onChange={(event) => setPega(event?.target.value)}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <Lock />
                                                </InputAdornment>
                                            }
                                            sx={{ fontSize: '14px' }}
                                        />
                                    </FormControl>
                                </>
                                : <Button variant="contained" sx={{
                                    color: verify ? colors.pm : 'white',
                                    background: verify ? 'white' : undefined,
                                    mt: 3,
                                    border: '2px solid transparent', // adiciona a borda inicialmente
                                    transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
                                    '&:hover': {
                                        border: '2px solid #0fcd88', // muda a cor da borda na animação,
                                        background: verify ? 'white' : undefined
                                    },
                                }}
                                    onClick={trocaSenha}
                                >
                                    <Typography sx={{
                                        fontSize: 12,
                                        fontWeight: 600,
                                    }}>
                                        Alterar Senha
                                    </Typography>
                                </Button>}
                            {email ?

                                <FormControl variant="standard" sx={{ width: '40%', mb: '20px', mt: 5 }}>
                                    <InputLabel htmlFor="input-with-icon-adornment">
                                        Email
                                    </InputLabel>
                                    <Input
                                        placeholder="Insira o novo email"
                                        inputProps={{ maxLength: 12 }}
                                        required
                                        id="input-with-icon-adornment"
                                        onChange={(event) => setPega(event?.target.value)}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <Email />
                                            </InputAdornment>
                                        }
                                        sx={{ fontSize: '14px' }}
                                    />
                                </FormControl>

                                : <Button variant="contained" sx={{
                                    color: verify ? colors.pm : 'white',
                                    background: verify ? 'white' : undefined,
                                    mt: 3,
                                    border: '2px solid transparent', // adiciona a borda inicialmente
                                    transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
                                    '&:hover': {
                                        border: '2px solid #0fcd88', // muda a cor da borda na animação
                                        background: verify ? 'white' : undefined,
                                    },
                                }}
                                    onClick={trocaEmail}
                                >
                                    <Typography sx={{
                                        fontSize: 12,
                                        fontWeight: 600,
                                    }}>
                                        Alterar E-mail
                                    </Typography>
                                </Button>}
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
