import { Input, Typography, InputAdornment, Button, Box, Container } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Btn } from "../../btns";
import ModalContext from "../../../context/modalcontext";
import React from "react";
import colors from "../../../assets/colors";


export default function EsqueciAsenha() {
    const { cpf, setCpf } = React.useContext(ModalContext);
    const [mostrar, Setmostrar] = React.useState('hidden');
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const navigate = useNavigate();
    const fundo = themes.palette.background.default
    
    async function envCpf() {

        try {
            await axios.post('http://localhost:3344/user/updatesenha', {
                user_CPF: cpf,
            })

            console.log('foi mlk');
            navigate('/cadastro/rec');
            
        } catch (error) {
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
                            setCpf(newValue);
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
