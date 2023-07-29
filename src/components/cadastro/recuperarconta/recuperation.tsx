import { Input, Typography, Box, FormControl, InputLabel, InputAdornment, Container } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Btn } from "../../btns";
import colors from "../../../assets/colors";
import ModalContext from "../../../context/modalcontext";
import { Lock } from "@mui/icons-material";
import { ContentNull, PerfilAtualizado, PerfilError, SenhaDiferente, SenhaInvalida } from "../../errosvalidations";

function EsqueciAsenha() {
    const { cpf, setCpf } = React.useContext(ModalContext);
    const [validToken, setValidToken] = React.useState(false);
    const [code, setCode] = React.useState('');
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [nulo, setNulo] = React.useState(false);
    const [vfSenha, setVfSenha] = React.useState(false);
    const [invalidsenha, setInvalidSenha] = React.useState(false)
    const [dado, setPega] = React.useState('');
    const [dadoVerify, setPegaVerify] = React.useState('');
    let parame: string
    const navigate = useNavigate()
    const { setHasEntered } = React.useContext(ModalContext);

    function validatePassword(dado: string | undefined) {
        const regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

        return regex.test(dado);
    }


    const update = async (cpf: any, updates: any) => {
        try {

            console.log(updates);

            await axios.post('http://localhost:3344/user/update', {
                user_CPF: cpf,
                updates,
            });
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 3000)
            setHasEntered(true)
            navigate("/Cadastro")
        } catch (error) {
            console.log(error);
            setOpen2(true)
            setTimeout(() => {
                setOpen2(false)
            }, 3000)
        }

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

        if (verifySenha) {
            if (dado == '') {
                console.log(parame);
                console.log('parame vazio');
                setNulo(true)

            } else {
                await update(cpf, updates);
                updates = ''
            }
        } else {
            console.log('deu foi merda');

            return null
        }

    };

        async function Verifycode() {
            try {
                const response = await axios.post('http://localhost:3344/user/validadecode', { code })
                if (response.data.valid) {
                    setValidToken(true);
                } else {
                    navigate("/Cadastro/EsqueciASenha");
                }
            } catch (error) {
                console.log(error);
            }
        }


    return (
        <>
            {nulo && <ContentNull />}
            {invalidsenha && <SenhaInvalida />}
            {vfSenha && <SenhaDiferente />}
            {open && <PerfilAtualizado />}
            {open2 && <PerfilError />}
            <Box sx={{
                background: verify ? fundo : 'white',
                height: "94vh",
                width: "100vw",
                zIndex: -1,
                mt: '-9vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {validToken ?
                
                    <Box sx={{
                        border: 1,
                        borderRadius: 3,
                        width: '40vw',
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: 'column',
                        background: verify ? fundo : 'white',
                        boxShadow: "0px 0px 10px 4px rgba(0, 0, 0, 0.4)",

                    }}>
                    <FormControl variant="standard" sx={{ width: '40%', mb: 5, mt: 10 }}>
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
                        fontSize: '0.7vw'
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
                        <Btn name={"Confirmar"} route={""} fun={ConfirmarSenha} cl={verify ? colors.pm : "white"} bc={verify ? "white" : undefined} bch={verify ? "white" : undefined} vis={undefined} mb={10} />
                    </Box>
                    
                    :  <Box sx={{
                    border: 1,
                    borderRadius: 3,
                    width: '40vw',
                    alignItems: "center",
                    justifyContent: "center",
                    background: verify ? fundo : 'white',
                    boxShadow: "0px 0px 10px 4px rgba(0, 0, 0, 0.4)",

                }}>
                    <Typography sx={{
                        margin: '10%',
                        color: verify ? 'white' : 'black'
                    }}>Insira o código que enviamos para o seu email.</Typography>
                    <Typography sx={{
                        margin: '10%',
                        color: verify ? 'white' : 'black'
                    }}>Certifique-se de que os números estejam certos: </Typography>
                    <Input
                        inputProps={{ maxLength: 6 }}
                        required
                        value={code}
                        placeholder="Insira o código"
                        onChange={(e) => setCode(e.target.value)}
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">

                            </InputAdornment>
                        }
                        sx={{ fontSize: '5vh', marginLeft: '24%', padding: '5%', width: '21vw', height: '5vh', marginBottom: '5vh' }}
                    />
                    <Container sx={{
                        width: '100%',
                        height: 'auto'
                    }}>
                        <Container sx={{
                            width: 'auto',
                            height: 'auto',
                            float: "right",
                            mb: 3,
                            mt: 3,
                            mr: -3
                        }}>
                    <Btn name={"Confirmar"} route={""} fun={Verifycode} cl={verify ? colors.pm : "white"} bc={verify ? "white" : undefined} bch={verify ? "white" : undefined} vis={undefined} mb={undefined} />
                        </Container>
                    </Container>
                </Box>}
            </Box>
        </>
    )
}
export default EsqueciAsenha