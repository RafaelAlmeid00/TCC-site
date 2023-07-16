/* eslint-disable react-hooks/rules-of-hooks */
import { Card, CardMedia, Container, IconButton, Input, InputAdornment, InputLabel, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import { Visibility, VisibilityOff } from "@mui/icons-material";
import FormControl from '@mui/material/FormControl';
import React, { useContext, useEffect, useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import ModalContext from "../../context/modalcontext";
import { EmailIncorrect, EmailPasswordNull, ErrorLogin } from "../errosvalidations";
import axios from "axios";
import theme from "../../assets/theme";
import { Btn, BtnL } from "../btns";
import colors from "../../assets/colors";

function ContainerCad() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showComponent, setShowComponent] = React.useState(false);
    const { email, setEmail } = useContext(ModalContext);
    const { password, setPassword } = useContext(ModalContext);
    const [cpf2, setCpf2] = React.useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);
    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const { loginbool } = useContext(ModalContext);
    const [loading, setLoading] = useState(false)
    const [disable, setDisable] = useState(false)
    const [showErrorlog, setShowErrorlog] = useState(false);

    const { verify } = React.useContext(ModalContext);

    function Verifylog() {
        if (email == '' || password == '') {
            setTimeout(() => {
                setShowError(true);
            }, 5000);
            setShowErrorEmail(false);
            setShowErrorlog(false)
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setShowErrorEmail(true);
            setShowError(false)
            setShowErrorlog(false)
        } else {
            setShowErrorEmail(false)
            setShowErrorEmail(false)
            setShowErrorlog(false)
            navigate('/cadastro/complemento');
        }
    }

    useEffect(() => {
        if (loginbool) {
            setShowComponent(true);
        }
    }, [loginbool]);

    const handleLogin = async () => {
        setLoading(true)
        setDisable(true)
        try {
            const res = await axios.post('http://localhost:3344/user/login', {
                user_CPF: cpf2,
                user_senha: password,
            });

            console.log(res.data);
            console.log('test', res.data.token);
            console.log(res);
            console.log(res.data.user);

            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                console.log(localStorage);

                navigate('/Sistema');
                console.log('viado');

            } else {
                console.log(res.data.message);
            }
        } catch (err) {
            console.log(err);
            setLoading(false)
            setDisable(false)
            setTimeout(() => {
                setShowErrorlog(true)
            }, 5000)
        }
    };

    return (
        <>
            {showError && <EmailPasswordNull />}
            {showErrorEmail && <EmailIncorrect />}
            {showErrorlog && <ErrorLogin />}

            <Box sx={{
                background: verify ? '#121212' : '#F0F0FF',
                height: "85vh",
                width: "100vw",
            }}>
                <Card sx={{
                    background: verify ? '#121212' : '#F0F0FF',
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
                        background: verify ? '#121212' : '#F0F0FF',
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
                            [theme.breakpoints.down('md')]: {
                                display: 'none'
                            }
                        }}>
                            <CardMedia sx={{
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
                                fontSize: {
                                    xs: "3.5vw", // (7.5 / 1200) * 600
                                    sm: "2.5vw", // (7.5 / 1200) * 900
                                    md: "2vw", // (7.5 / 1200) * 1200
                                    lg: "2vw",
                                    xl: "2vw", // Manter o mesmo tamanho de lg para xl
                                },
                                fontWeight: 'bold',
                                textAlign: 'center',
                                mb: '10px',
                                color: verify ? 'white' : '#222222'
                            }}>Cadastre-se</Typography>

                            <Typography sx={{
                                textAlign: 'center', mb: '40px', color: verify ? 'white' : '#666666', fontSize: {
                                    xs: "2.5vw", // (7.5 / 1200) * 600
                                    sm: "1.5vw", // (7.5 / 1200) * 900
                                    md: "1.2vw", // (7.5 / 1200) * 1200
                                    lg: "1vw",
                                    xl: "1vw", // Manter o mesmo tamanho de lg para xl
                                },
                            }}>
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
                                    sx={{
                                        fontSize: '14px', outline: 0 }}
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
                            <Btn fun={Verifylog} name="Cadastrar" cl={verify ? colors.pm : "white"} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} route={""} />
                            <Typography sx={{
                                textAlign: 'center', mt: '20px', color: '#666666', fontSize: {
                                    xs: "2.5vw", // (7.5 / 1200) * 600
                                    sm: "1.5vw", // (7.5 / 1200) * 900
                                    md: "1.2vw", // (7.5 / 1200) * 1200
                                    lg: "1vw",
                                    xl: "1vw", // Manter o mesmo tamanho de lg para xl
                                },
                            }}>
                                Já possui um login? Clique <Link
                                    sx={{
                                        fontSize: {
                                            xs: "2.5vw", // (7.5 / 1200) * 600
                                            sm: "1.5vw", // (7.5 / 1200) * 900
                                            md: "1.2vw", // (7.5 / 1200) * 1200
                                            lg: "1vw",
                                            xl: "1vw", // Manter o mesmo tamanho de lg para xl
                                        },
                                    }}
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
                        background: verify ? '#121212' : '#F0F0FF',
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
                                fontSize: {
                                    xs: "3.5vw", // (7.5 / 1200) * 600
                                    sm: "2.5vw", // (7.5 / 1200) * 900
                                    md: "2vw", // (7.5 / 1200) * 1200
                                    lg: "2vw",
                                    xl: "2vw", // Manter o mesmo tamanho de lg para xl
                                },
                                fontWeight: 'bold',
                                textAlign: 'center',
                                mb: '10px',
                                color: verify ? 'white' : '#222222'
                            }}>Entre</Typography>

                            <Typography sx={{
                                textAlign: 'center', mb: '40px', color: verify ? 'white' : '#666666', fontSize: {
                                    xs: "2.5vw", // (7.5 / 1200) * 600
                                    sm: "1.5vw", // (7.5 / 1200) * 900
                                    md: "1.2vw", // (7.5 / 1200) * 1200
                                    lg: "1vw",
                                    xl: "1vw", // Manter o mesmo tamanho de lg para xl
                                },
                            }}>
                                Entre com seu CPF e sua senha:
                            </Typography>
                            <form style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
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
                            </form>
                            <BtnL name="Enviar" loading={loading} dis={disable} handleLogin={handleLogin} cl={verify ? colors.pm : "white"} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} route={""} />
                            <Typography sx={{
                                textAlign: 'center', mt: '20px', color: '#666666', fontSize: {
                                    xs: "2.5vw", // (7.5 / 1200) * 600
                                    sm: "1.5vw", // (7.5 / 1200) * 900
                                    md: "1.2vw", // (7.5 / 1200) * 1200
                                    lg: "1vw",
                                    xl: "1vw", // Manter o mesmo tamanho de lg para xl
                                },
                            }}>
                                Não possui um login? Clique <Link
                                    sx={{
                                        fontSize: {
                                            xs: "2.5vw", // (7.5 / 1200) * 600
                                            sm: "1.5vw", // (7.5 / 1200) * 900
                                            md: "1.2vw", // (7.5 / 1200) * 1200
                                            lg: "1vw",
                                            xl: "1vw", // Manter o mesmo tamanho de lg para xl
                                        },
                                    }}
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
                            [theme.breakpoints.down('md')]: {
                                display: 'none'
                            }
                        }}>
                            <CardMedia sx={{
                                width: "115%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                                component="img"
                                image="https://images8.alphacoders.com/435/435772.jpg"
                            />
                        </Container>
                    </Container>}
                </Card>
            </Box>
        </>
    )
}

export default ContainerCad;
