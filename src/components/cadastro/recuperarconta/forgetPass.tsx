import { Input, Typography, InputAdornment, Box, Container } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Btn } from "../../btns";
import ModalContext from "../../../context/modalcontext";
import React from "react";
import colors from "../../../assets/colors";
import { EmailNaoEnviado, ErrorCodigo } from "../../errosvalidations";
import { useLocation } from 'react-router-dom';
import CryptoJS from 'crypto-js';

export default function EsqueciAsenha() {
    const { cpf, setCpf } = React.useContext(ModalContext);
    const [mostrar, Setmostrar] = React.useState('hidden');
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const navigate = useNavigate();
    const fundo = themes.palette.background.default
    const [nemail, setNEmail] = React.useState(false);
    let data = ''
    const location = useLocation();
    const error = new URLSearchParams(location.search).get('error');
    const [isError, setisError] = React.useState(false);

    React.useEffect(() => {
        if (error == null) {
            setisError(false) // Usar "=" para atribuir o valor true
        } else {
            setisError(true); // Usar "=" para atribuir o valor false
        }
    }, [error]);

    console.log(isError);
    console.log(error == null);
    console.log(error);


    function encryptData(data: string, secretKey: string): string {
        const encryptedData = CryptoJS.AES.encrypt(data, secretKey).toString();
        return encryptedData;
    }

    async function PegaEmail() {
        try {
            const res = await axios.post('https://easypass-iak1.onrender.com/user/cpf', {
                user_CPF: cpf,
            });

            if (!res) {
                console.log('Sem usuários pego');
            } else {
                const datam = res.data.user_email;
                console.log('Texto criptografado:', datam); // Verifique o valor criptografado

                const secretKey = '5E9CB5A3D3B1736F4017D9331E3FDDA5';
                const decryptedData = encryptData(datam, secretKey);
                if (datam) {
                    console.log('Valor criptografado:', decryptedData);
                    data = decryptedData
                } else {
                    console.log('erro aq hein');
                }
            }
        } catch (error) {
            console.error(error);
        }
    }



    async function envCpf() {

        try {
            await PegaEmail()

            await axios.post('https://easypass-iak1.onrender.com/user/updatesenha', {
                user_CPF: cpf,
            })

            console.log('foi mlk');
            setNEmail(false)
            navigate(`/cadastro/rec?data=${data}`)
        } catch (error) {
            setNEmail(true)

            setTimeout(() => {
                setNEmail(false)
            }, 5000);
            console.log(error);
        }
    }

    React.useEffect(() => {
        console.log(cpf.length);

        if (cpf.length == 11) {
            Setmostrar('visible');
        } else {
            Setmostrar('hidden');
        }
    }, [cpf]);


    return (
        <>
            {isError && <ErrorCodigo />}
            {nemail && <EmailNaoEnviado data={data} />}
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
                <Box sx={{
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
                    }}>Mandaremos um código de verificação para o seu Email, para isso insira seu CPF no campo abaixo.</Typography>
                    <Typography sx={{
                        margin: '10%',
                        color: verify ? 'white' : 'black'
                    }}>Certifique-se de que os números estejam certos: </Typography>
                    <Input
                        inputProps={{ maxLength: 11 }}
                        required
                        value={cpf}
                        placeholder="Insira seu CPF"
                        onChange={(event) => {
                            const { value } = event.target;
                            const newValue = value.replace(/\D/g, '');
                            if (setCpf) {
                                setCpf(newValue);
                            }
                        }}
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
                            <Btn fun={envCpf} vis={mostrar} name="Continue >>" route={""} cl={verify ? colors.pm : "white"} bc={verify ? "white" : undefined} bch={verify ? "white" : undefined} mb={undefined} />
                        </Container>
                    </Container>
                </Box>
            </Box>
        </>
    )
}
