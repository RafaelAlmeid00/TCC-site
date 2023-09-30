/* eslint-disable react-hooks/exhaustive-deps */
import { Input, Typography, Box, FormControl, InputLabel, InputAdornment, Container } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Btn } from "../../btns";
import colors from "../../../assets/colors";
import ModalContext from "../../../context/modalcontext";
import { ContentNull, EmailEnviado, PerfilAtualizado, PerfilError, SenhaDiferente, SenhaInvalida } from "../../errosvalidations";
import { useLocation } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import CryptoJS from 'crypto-js';

function EsqueciAsenha() {
    const location = useLocation();
    const encryptedData = new URLSearchParams(location.search).get('data');
    console.log(encryptedData);

    const [email, setEmail] = React.useState(false);
    const { cpf } = React.useContext(ModalContext);
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
    const [data, setData] = React.useState('')
    
    function validatePassword(dado: string | undefined) {
        const regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

        if (dado === undefined) {
            return false; // Trate o caso de 'dado' ser undefined
        }

        return regex.test(dado);
    }


    function decryptData(encryptedData: string, secretKey: string): string {
        try {
            const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
            const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
            console.log(bytes);
            console.log(decryptedData);
            return decryptedData;
        } catch (error) {
            console.error('Erro na descriptografia:', error);
            return ''; // Retorna uma string vazia em caso de erro
        }
    }


    React.useEffect(() => {
        if (encryptedData) {
            const secretKey = '5E9CB5A3D3B1736F4017D9331E3FDDA5';

            try {
                const decryptedEmail = decryptData(encryptedData, secretKey);
                console.log('Texto criptografado:', encryptedData);
                console.log('Texto descriptografado:', decryptedEmail);
                setData(decryptedEmail)
                setEmail(true)

                setTimeout(() => {
                    setEmail(false)
                }, 5000);
            } catch (error) {
                console.error('Erro na descriptografia:');
            }

        } else {
            console.log('Não era para vc estar aq');
            navigate(`/Cadastro/EsqueciASenha`);
        }
    }, [])

    const update = async (cpf: any, updates: any) => {
        try {

            console.log(updates);

            await axios.post('https://easypass-iak1.onrender.com/user/update', {
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
                updates = {
                    ['']: ''
                }
            }
        } else {
            console.log('deu foi merda');

            return null
        }

    };

    async function Verifycode() {
        try {
            const response = await axios.post('https://easypass-iak1.onrender.com/user/validadecode', { code })
            if (response.data.valid) {
                setValidToken(true);
            } else {
                navigate(`/Cadastro/EsqueciASenha?error=${'error'}`);
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            {email && <EmailEnviado data={data} />}
            {nulo && <ContentNull />}
            {invalidsenha && <SenhaInvalida />}
            {vfSenha && <SenhaDiferente />}
            {open && <PerfilAtualizado />}
            {open2 && <PerfilError />}
            <Box sx={{
                background: verify ? fundo : 'white',
                height: "100vh",
                width: "100vw",
                zIndex: -1,
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
                                placeholder="Insira a nova senha"
                                inputProps={{ maxLength: 12 }}
                                required
                                id="input-with-icon-adornment"
                                onChange={(event) => setPega(event?.target.value)}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <LockIcon />
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
                                placeholder="Insira novamente"
                                inputProps={{ maxLength: 12 }}
                                required
                                id="input-with-icon-adornment"
                                onChange={(event) => setPegaVerify(event?.target.value)}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                }
                                sx={{ fontSize: '14px' }}
                            />
                        </FormControl>
                        <Btn name={"Confirmar"} route={""} fun={ConfirmarSenha} cl={verify ? colors.pm : "white"} bc={verify ? "white" : undefined} bch={verify ? "white" : undefined} vis={undefined} mb={'10'} />
                    </Box>

                    : <Box sx={{
                        border: 1,
                        borderRadius: 3,
                        width: '40vw',
                        alignItems: "center",
                        justifyContent: "center",
                        background: verify ? fundo : 'white',
                        boxShadow: "0px 0px 10px 4px rgba(0, 0, 0, 0.4)",
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Typography sx={{
                            fontWeight: 'bold',
                            marginTop: '10%',
                            color: verify ? 'white' : 'black'
                        }}>Insira o código que enviamos para o seu email.</Typography>
                        <Typography variant="body2" sx={{
                            mt: 2,
                            color: verify ? 'white' : 'black'
                        }}>Certifique-se de que os números estejam certos: </Typography>
                        <FormControl variant="standard" sx={{ width: '70%', mb: 5, mt: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <Input

                                inputProps={{ maxLength: 6 }}
                                required
                                value={code}
                                placeholder="Insira o código"
                                onChange={(e) => setCode(e.target.value)}
                                id="input-with-icon-adornment"
                                sx={{ fontSize: '5vh', }}
                            />
                        </FormControl>
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