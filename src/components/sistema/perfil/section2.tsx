import { Box, Button, Container, Divider, FormControl, Input, InputAdornment, InputLabel, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Deccode } from "../FrontDecoded";
import ModalContext from "../../../context/modalcontext";
import React from "react";
import colors from "../../../assets/colors";
import Excluir from "../modal/confirmar";
import { ContentNull, EmailEnviado, PerfilAtualizado, PerfilError, SenhaDiferente, SenhaInvalida, TokenAtualizado, TokenPerfilError, TokenPerfilErrorSer } from "../../errosvalidations";
import { Lock } from "@mui/icons-material";
import { Btn } from "../../btns";

function SectionPerfil2() {
    const [modal, setModal] = React.useState(false)
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [openT, setOpenT] = React.useState(false);
    const [openT2, setOpenT2] = React.useState(false);
    const [openT0, setOpenT0] = React.useState(false);
    const [senha, setSenha] = React.useState(false);
    const [email, setEmail] = React.useState(false);
    const [nulo, setNulo] = React.useState(false);
    const [vfSenha, setVfSenha] = React.useState(false);
    const [invalidsenha, setInvalidSenha] = React.useState(false)
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const [dado, setPega] = React.useState('');
    const [dadoVerify, setPegaVerify] = React.useState('');
    let parame: string
    const fundo = themes.palette.background.default
    const token = localStorage.getItem('token');
    const userData = Deccode();
    const cpf = userData.user_CPF;
    const data = userData.user_email
    const navigate = useNavigate()

    console.log(localStorage);

    function validatePassword(password: string | undefined) {
        const regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

        return regex.test(password);
    }



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


    const trocaSenha = () => {
        setSenha(true)
    };

    const ParametroSenha = async (): Promise<boolean> => {
        parame = 'senha'
        const isPasswordValid = validatePassword(dado);

        if (!isPasswordValid) {
            setInvalidSenha(true)
            setTimeout(() => {
                setInvalidSenha(false)
            }, 3000);
            return false
        } else {
            if (dado == dadoVerify) {
                console.log('Senha ta igual');

                return true
            } else {
                setVfSenha(true)
                setTimeout(() => {
                    setVfSenha(false)
                }, 3000);
                return false
            }
        }

    }

    const updateEmail = async () => {
        try {

            await axios.post('http://localhost:3344/user/updateemail', {
                user_email: data,
                token: token
            })
            setSenha(false)
            setEmail(true)
            setTimeout(() => {
                setEmail(false)
            }, 3000)
        } catch (error) {
            console.log(error);
            setOpen2(true)
            setTimeout(() => {
                setOpen2(false)
            }, 3000)
        }

    };

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
        setSenha(false)
        setVfSenha(false)
        setInvalidSenha(false)

        if (data == '') {
            console.log(data);
            console.log('Email vazio');
            
        } else {
            await updateEmail();
        }
    };

    const ConfirmarSenha = async () => {
        const verifySenha = await ParametroSenha()
        console.log(dado);
        let updates = {
            [parame]: dado
        }
        console.log(parame);
        console.log('parame vazio');

        console.log(updates);
        console.log(parame);
        console.log(dado);
        setSenha(false)

        if (verifySenha) {
            if (dado == '') {
                console.log(parame);
                console.log('parame vazio');
                setNulo(true)

            } else {
                await update(cpf, updates);
                await UpdateToken()
                updates = ''
            }
        } else{
            console.log('deu foi merda');

            return null
        }

    };

    React.useEffect(() => {
        console.log(nulo, invalidsenha, vfSenha);

    }, [invalidsenha, nulo, vfSenha])
    

    return (
        <>
            {email && <EmailEnviado data={data} />}
        {nulo && <ContentNull />}
            {invalidsenha && <SenhaInvalida />}
            {vfSenha && <SenhaDiferente />}
            {open && <PerfilAtualizado />}
            {open2 && <PerfilError />}
            {openT && <TokenAtualizado />}
            {openT2 && <TokenPerfilError />}
            {openT0 && <TokenPerfilErrorSer />}
            {modal ? <Excluir onCloseModal={handleModalClose} /> :
                <Box sx={{
                    mt: -1,
                    height: '140vh',
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
                                mb: 5,
                                color: '#7d7d7d'
                            }}>Sempre verifique qual sua nova senha antes de confirmar a atualização de dados.
                                Caso perca essa senha e não tenha acesso a seu e-mail,
                                não será possivel logar sua conta pelos métodos convencionais.</Typography>
                            {senha ?
                                <>
                                    <FormControl variant="standard" sx={{ width: '40%', mb: 5 }}>
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
                                    {invalidsenha &&
                                        <Typography component='span' sx={{
                                            color: 'red',
                                            mb: 5,
                                            fontSize: '0.9vw'
                                        }}>
                                            A senha precisa ter: 1 número, 1 caractere especial e 1 letra maiúscula!
                                        </Typography>
                                    }
                                    <FormControl variant="standard" sx={{ width: '40%', mb: 5 }}>
                                        <InputLabel htmlFor="input-with-icon-adornment">
                                            Senha
                                        </InputLabel>
                                        <Input
                                            placeholder="Insira a senha novamente"
                                            inputProps={{ maxLength: 12 }}
                                            required
                                            id="input-with-icon-adornment"
                                            onChange={(event) => setPegaVerify(event?.target.value)}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <Lock />
                                                </InputAdornment>
                                            }
                                            sx={{ fontSize: '14px' }}
                                        />
                                    </FormControl>

                                    <Btn name={"Confirmar"} route={""} fun={ConfirmarSenha} cl={verify ? colors.pm : colors.sc} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} vis={undefined} mb={5} />
                                </>
                                : <Btn name={"Alterar Senha"} route={""} fun={trocaSenha} cl={verify ? colors.pm : colors.sc} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} vis={undefined} mb={5} />}
                            
                            <Btn name={"Alterar Email"} route={""} fun={ConfirmarEmail} cl={verify ? colors.pm : colors.sc} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} vis={undefined} mb={5} />}
                        </Container>

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
