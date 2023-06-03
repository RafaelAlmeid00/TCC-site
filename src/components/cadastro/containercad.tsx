/* eslint-disable react-hooks/rules-of-hooks */
import { Button, CardMedia, Container, IconButton, Input, InputAdornment, InputLabel, Tooltip, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import {Visibility, VisibilityOff } from "@mui/icons-material";
import FormControl from '@mui/material/FormControl';
import React, { useContext, useEffect, useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import ModalContext from "../../context/modalcontext";
import { EmailIncorrect, EmailPasswordNull } from "../errosvalidations";
import axios from "axios";

function ContainerCad(){
    const [showPassword, setShowPassword] = React.useState(false);
    const [showComponent, setShowComponent] = React.useState(false);
    const {email, setEmail} = useContext(ModalContext);
    const {password, setPassword} = useContext(ModalContext);
    const [cpf2, setCpf2] = React.useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
};
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);
    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const [open, setOpen] = useState(false);
    const [Loginstatus, setLoginstatus] = useState("");
    const [state, setState] = useState(false);
    

    function verify() {
        if (email == '' || password == '') {
            setShowError(true);
            setShowErrorEmail(false);
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setShowErrorEmail(true);
            setShowError(false)
        } else {
            setShowErrorEmail(false)
            setShowErrorEmail(false)
            navigate('/cadastro/complemento');
        }
    }

    
    
    const handleLogin = async () => {
        try {
        const res = await axios.post('http://localhost:3344/user/login', {
            user_CPF: cpf2,
            user_senha: password,
        });
        console.log(res.data);
        console.log('test', res.data.token);
        console.log(res);
        
        if (res.data.token) {
            localStorage.setItem('token', res.data.token);
            handleGetUserData()
            navigate('/Sistema');
            console.log('viado');
            
        } else {
            console.log(res.data.message);
        }
        } catch (err) {
        console.error(err);
        }
    };

    const handleGetUserData = async () => {
        const token = localStorage.getItem('token');
        console.log(token);
            
        if (token) {
            try {
                const res = await axios.get('http://localhost:3344/user/login');
                console.log(res.data);
                    
                if (res.data.auth) {
                    const userData = res.data.user;
                    console.log(userData);
                } else {
                    console.log(res.data.message);
                }
            } catch (err) {
                console.error(err);
            }
        }
    };

return (
    <>
    {showError && <EmailPasswordNull />}
    {showErrorEmail && <EmailIncorrect />}
    <Box sx={{
        backgroundColor: "#F0F0FF",
        height: "80vh",
        width: "65vw",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: 5,
        boxShadow: "0px 0px 10px 4px rgba(0, 0, 0, 0.4)",
        display: "flex",
        flexDirection: "row",
    }}>
    <Container id="cont1" sx={{
        backgroundColor: "#F0F0FF",
        height: "80vh",
        width: "65vw",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: 5,
        boxShadow: "0px 0px 10px 4px rgba(0, 0, 0, 0.4)",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden" // adiciona um overflow para esconder conteúdo que sai dos limites da caixa
    }}>
        <Container sx={{
            marginLeft: "-22px",
            width: "110%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
        }}>
        <CardMedia   sx={{
        width: "115%",
        height: "100%",
        objectFit: "cover",
        }}
        component="img"
        image="https://images4.alphacoders.com/117/1175759.jpg"
        />
        </Container>
        <Container sx={{
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
}}>
    <Typography sx={{
        fontSize: "30px",
        fontWeight: 'bold',
        textAlign: 'center',
        mb: '10px',
        color: '#222222'
    }}>Cadastre-se</Typography>

    <Typography sx={{textAlign: 'center', mb: '40px', color: '#666666', fontSize: '15px'}}>
        Cadastre-se com um email e uma senha:
    </Typography>
    <FormControl variant="standard" sx={{ width: '80%', mb: '20px' }}>
        <InputLabel htmlFor="input-with-icon-adornment">
        Email
        </InputLabel>
        <Input
        inputProps={{ maxLength: 45 }}
        required
        id="input-with-icon-adornment"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        startAdornment={
            <InputAdornment position="start">
            <EmailIcon />
            </InputAdornment>
        }
        sx={{ fontSize: '14px' }}
        />
        </FormControl>
    <FormControl variant="standard" sx={{ width: '80%', mb: '40px' }}>
        <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
        <Input
            inputProps={{ maxLength: 20 }}
            required
            id="standard-adornment-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            }
            sx={{ fontSize: '14px' }}
        />
    </FormControl>
    <Button variant="contained" sx={{
    color: 'white',
    marginRight: 1,
    border: '2px solid transparent', // adiciona a borda inicialmente
    transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
    '&:hover': {
      border: '2px solid #0fcd88', // muda a cor da borda na animação
    },
    }} onClick={verify}>Cadastrar</Button>
    <Typography sx={{textAlign: 'center', mt: '20px', color: '#666666', fontSize: '15px'}}>
        Já possui um login? Clique <Link
    component="button"
    variant="body2"
    onClick={() => setShowComponent(true)}
    >
    aqui
    </Link>
    .
    </Typography>
    </Container>
    </Container> 
    {/* Segundo Container */}
    {showComponent && <Container id="cont1" sx={{
        backgroundColor: "#F0F0FF",
        height: "80vh",
        width: "65vw",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: 5,
        boxShadow: "0px 0px 10px 4px rgba(0, 0, 0, 0.4)",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden", // adiciona um overflow para esconder conteúdo que sai dos limites da caixa
    }}>
        <Container sx={{
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
}}>
    <Typography sx={{
        fontSize: "30px",
        fontWeight: 'bold',
        textAlign: 'center',
        mb: '10px',
        color: '#222222'
    }}>Entre</Typography>

    <Typography sx={{textAlign: 'center', mb: '40px', color: '#666666', fontSize: '15px'}}>
        Entre com seu CPF e sua senha:
    </Typography>
    <FormControl variant="standard" sx={{ width: '80%', mb: '20px' }}>
        <InputLabel htmlFor="input-with-icon-adornment">
        CPF
        </InputLabel>
        <Input
        inputProps={{ maxLength: 11 }}
        required
        value={cpf2}
        placeholder="Insira seu CPF"
        onChange={(event) => {
            const { value } = event.target;
            const newValue = value.replace(/\D/g, ''); // remove tudo que não é número
            setCpf2(newValue);
        }}
        id="input-with-icon-adornment"
        startAdornment={
            <InputAdornment position="start">
            <AccountCircleIcon />
            </InputAdornment>
        }
        sx={{ fontSize: '14px' }}
        />
        </FormControl>
    <FormControl variant="standard" sx={{ width: '80%', mb: '40px' }}>
        <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
        <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={(event) => {
                const { value } = event.target;
                setPassword(value);
            }}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            }
            sx={{ fontSize: '14px' }}
        />
    </FormControl>
    <Button 
    onClick={handleLogin}
    variant="contained" sx={{
    color: 'white',
    marginRight: 1,
    border: '2px solid transparent', // adiciona a borda inicialmente
    transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
    '&:hover': {
      border: '2px solid #0fcd88', // muda a cor da borda na animação
    },
    }}>Entrar</Button>
    <Typography sx={{textAlign: 'center', mt: '20px', color: '#666666', fontSize: '15px'}}>
        Não possui um login? Clique <Link
    component="button"
    variant="body2"
    onClick={() => setShowComponent(false)}
    >
    aqui
    </Link>
    .
    </Typography>
    </Container>
        <Container sx={{
            marginRight: "-22px",
            width: "110%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
        }}>
        <CardMedia   sx={{
        width: "115%",
        height: "100%",
        objectFit: "cover",
        }}
        component="img"
        image="https://images8.alphacoders.com/435/435772.jpg"
        />
        </Container>
    </Container>}
    </Box>
    </>
)
}

export default ContainerCad;
