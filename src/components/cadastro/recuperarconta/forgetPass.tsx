import { Input, Typography, InputAdornment, Button, Box} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Btn } from "../../btns";


export default function EsqueciAsenha() {
    const [cpf, Setcpf] = useState('');
    const [mostrar, Setmostrar] = useState('hidden');
    const [route, Setroute] = useState('');
    const navi = useNavigate();

   /* function nav() {
        try {
            navi('/rec')
        } catch (error) {
            console.log(error);
        }
        
    } */
    async function envCpf() {
        console.log('env');
       
        const teste = await axios.post('http://localhost:3344/user/login/PassRec', {
            cpf: cpf
        })
        if (teste != undefined) {
            Setroute('/rec')
        }
    }

    useEffect(() =>{
        console.log(cpf.length);
        
        if (cpf.length == 11) {
            Setmostrar('visible');
        }else {
            Setmostrar('hidden');
        }
    }, [cpf])

    return (
        <>
        
            <Box sx={{
                marginLeft: '30vw',
                marginTop: '6vh',
                border: 1,
                borderRadius: 3,
                width: '40vw',
                alignItems: "center",
                justifyContent: "center",
            }}>
            <Typography sx={{
                margin: '10%', 
            }}>Mandaremos um código de verificação para o seu Email, para isso insira seu CPF no campo abaixo.</Typography>
            <Typography sx={{
                margin: '10%',
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
                sx={{ fontSize: '5vh', marginLeft: '24%', padding: '5%', width: '21vw', height: '5vh', marginBottom: '5vh'}}
            />
            <Btn ml={'74%'} route={route} fun={envCpf} vis={mostrar} mb="1%" name="Continue >>"></Btn>
            
            </Box>
        </>
    )
}
