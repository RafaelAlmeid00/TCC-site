import { Box, Button, Container, Divider, FormControl, Input, InputAdornment, InputLabel, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ModalContext from "../../../context/modalcontext";
import React from "react";
import colors from "../../../assets/colors";
import Excluir from "../modal/confirmar";
import { ContentNull, EmailEnviado, EmailNaoEnviado, PerfilAtualizado, PerfilError, SenhaDiferente, SenhaInvalida, TokenAtualizado, TokenPerfilError, TokenPerfilErrorSer } from "../../errosvalidations";
import { Lock } from "@mui/icons-material";
import { BtnHome } from "../../btns";

function SectionPerfil2() {
    const [modal, setModal] = React.useState(false)
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [openT, setOpenT] = React.useState(false);
    const [openT2, setOpenT2] = React.useState(false);
    const [openT0, setOpenT0] = React.useState(false);
    const [senha, setSenha] = React.useState(false);
    const [email, setEmail] = React.useState(false);
    const [nemail, setNEmail] = React.useState(false);
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
    const { userData } = React.useContext(ModalContext);
    const cpf = userData ? userData.user_CPF : '';
    const data = userData ? userData.user_email : ''
    const nome = userData ? userData.user_nome : ''
    const navigate = useNavigate()

    console.log(localStorage);

    function validatePassword(password: string | undefined) {
        const regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if (password) {
            return regex.test(password);
        }
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

            await axios.post('https://easypass-iak1.onrender.com/user/updateemail', {
                user_email: data,
                user_CPF: cpf,
                user_nome: nome,
                token: token
            })
            setSenha(false)
            setEmail(true)
            setTimeout(() => {
                setEmail(false)
            }, 8000)
        } catch (error) {
            console.log(error);
            setNEmail(true)
            setTimeout(() => {
                setNEmail(false)
            }, 5000)
        }

    };

    const update = async (cpf: any, updates: any) => {
        try {

            console.log(updates);

            await axios.post('https://easypass-iak1.onrender.com/user/update', {
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
            const res = await axios.post('https://easypass-iak1.onrender.com/user/token', {
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
                updates = {
                    ['']: ''
                }
            }
        } else {
            console.log('deu foi merda');

            return null
        }

    };

    React.useEffect(() => {
        console.log(nulo, invalidsenha, vfSenha);

    }, [invalidsenha, nulo, vfSenha])


    return (
        <>
            {nemail && <EmailNaoEnviado data={data} />}
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
                        mt: -15
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
                                            fontSize: '0.8vw'
                                        }}>
                                            A senha precisa ter: Mais de 8 caracteres, 1 número, 1 caractere especial e 1 letra maiúscula!
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

                                    <BtnHome name={"Confirmar"} route={""} fun={ConfirmarSenha} cl={verify ? colors.pm : "white"} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} mb={5} />
                                </>
                                : <BtnHome name={"Alterar Senha"} route={""} fun={trocaSenha} cl={verify ? colors.pm : "white"} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} mb={5} />}

                            <BtnHome name={"Alterar Email"} route={""} fun={ConfirmarEmail} cl={verify ? colors.pm : "white"} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} mb={5} />
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
                                width: {
                                    xs: '20vw',
                                    sm: '18vw',
                                    md: '15vw',
                                    lg: '12vw',
                                    xl: '12vw',
                                },
                                fontSize: {
                                    xs: '2vw',  // (7.5 / 1200) * 600
                                    sm: '1.5vw',  // (7.5 / 1200) * 900
                                    md: '1.5vw',  // (7.5 / 1200) * 1200
                                    lg: '0.8vw',
                                    xl: '0.8vw',  // Manter o mesmo tamanho de lg para xl
                                },
                                height: {
                                    xs: '6vh',  // (7.5 / 1200) * 600
                                    sm: '5vh',  // (7.5 / 1200) * 900
                                    md: '5vh',  // (7.5 / 1200) * 1200
                                    lg: '5.5vh',
                                    xl: '5.5vh',  // Manter o mesmo tamanho de lg para xl
                                },
                                fontWeight: 600,
                            }}>
                                Sair da Conta
                            </Button>
                            <Button variant="outlined" onClick={excl} sx={{
                                border: '2px solid red', // muda a cor da borda na animação
                                backgroundColor: 'white',
                                color: 'red',
                                mt: 3,
                                width: {
                                    xs: '20vw',
                                    sm: '18vw',
                                    md: '15vw',
                                    lg: '12vw',
                                    xl: '12vw',
                                },
                                fontSize: {
                                    xs: '2vw',  // (7.5 / 1200) * 600
                                    sm: '1.5vw',  // (7.5 / 1200) * 900
                                    md: '1.5vw',  // (7.5 / 1200) * 1200
                                    lg: '0.8vw',
                                    xl: '0.8vw',  // Manter o mesmo tamanho de lg para xl
                                },
                                height: {
                                    xs: '6vh',  // (7.5 / 1200) * 600
                                    sm: '5vh',  // (7.5 / 1200) * 900
                                    md: '5vh',  // (7.5 / 1200) * 1200
                                    lg: '5.5vh',
                                    xl: '5.5vh',  // Manter o mesmo tamanho de lg para xl
                                },
                                transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
                                '&:hover': {
                                    backgroundColor: 'red', // muda a cor da borda na animação
                                    color: 'white',
                                    boxShadow: 'inset 0px 0px 2px 1px',
                                    border: '2px solid red', // muda a cor da borda na animação
                                },
                                fontWeight: 600,
                            }}>
                                Excluir Conta
                            </Button>
                        </Container>
                    </Container>
                </Box>}
        </>
    )
}

export default SectionPerfil2