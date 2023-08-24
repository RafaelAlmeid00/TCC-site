import { Input, Typography, InputAdornment, Button, Box } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Btn } from "../../btns";
import ModalContext from "../../../context/modalcontext";
import React from "react";


export default function EsqueciAsenha() {
    const [cpf, Setcpf] = React.useState('');
    const [mostrar, Setmostrar] = React.useState('hidden');
    var [route, Setroute] = React.useState('');
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const [teste, Setteste] = React.useState(undefined);
    const navi = useNavigate();
    const fundo = themes.palette.background.default

    var qualquer = ''
    /* function nav() {
         try {
             navi('/rec')
         } catch (error) {
             console.log(error);
         }
         
     } */
    async function envCpf() {
        console.log('env');

        Setteste(await axios.post('http://localhost:3344/user/login/PassRec', {
            cpf: cpf
        }))
        console.log('this is teste: ', teste?.data?.RecToken);


    }

    React.useEffect(() => {
        console.log(cpf.length);

        if (cpf.length == 11) {
            Setmostrar('visible');
        } else {
            Setmostrar('hidden');
        }
    }, [cpf]);
    React.useEffect(() => {
        localStorage.setItem('item', String(teste?.data.RecToken))
        console.log('this is teste: ', teste);

        if (teste != undefined) {
            console.log('confirm !');
            navi('/cadastro/rec');

        }
    }, [teste])


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
                            Setcpf(newValue);
                        }}
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">

                            </InputAdornment>
                        }
                        sx={{ fontSize: '5vh', marginLeft: '24%', padding: '5%', width: '21vw', height: '5vh', marginBottom: '5vh' }}
                    />
                    <Btn ml={'74%'} fun={envCpf} vis={mostrar} mb="1%" name="Continue >>"></Btn>

                </Box>
            </Box>
        </>
    )
}
