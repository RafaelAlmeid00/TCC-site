import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import PortraitIcon from '@mui/icons-material/Portrait';
import emailjs from 'emailjs-com';
import theme from "../../assets/theme";
import ModalContext from "../../context/modalcontext";
import colors from "../../assets/colors";
import { BtnL } from "../btns";
import { Box, Container, FormControl, FormControlLabel, FormLabel, Input, InputAdornment, InputLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { Fade, Slide } from "react-awesome-reveal";
import React, { FormEvent } from "react";

export default function SectionContato() {
    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [text, setText] = React.useState('')
    const [radio, setRadio] = React.useState('visitante')
    const [showErrorCPF, setShowErrorCPF] = React.useState(false);
    const [showErrorEmail, setShowErrorEmail] = React.useState(false);
    const [showError, setShowError] = React.useState(false);
    const [loading, setLoading] = React.useState(false)
    const [disable, setDisable] = React.useState(false)
    const [sucess, setSucess] = React.useState(false)
    const [cpf, setCPF] = React.useState<string | null>(null);
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const { hasEntered } = React.useContext(ModalContext);
    const [showErrorNome, setShowErrorNome] = React.useState(false);


    const fundo = themes.palette.background.default
    const Nulls = () => {
        return (
            <><Typography sx={{
                color: 'red',
                fontSize: '11px',
                mb: '10px'
            }}>O campo não pode estar vazio</Typography></>
        )
    }

    const Emails = () => {
        return (
            <><Typography sx={{
                color: 'red',
                fontSize: '11px',
                mb: '10px'
            }}>O email deve ser valido</Typography></>
        )
    }

    const Nomes = () => {
        return (
            <><Typography sx={{
                color: 'red',
                fontSize: '11px',
                mb: '10px'
            }}>O nome deve ser valido</Typography></>
        )
    }

    const Sucess = () => {
        return (
            <><Typography sx={{
                color: 'green',
                fontSize: '14px',
                mb: '10px',
                mt: '20px'
            }}>Email enviado com sucesso! Aguarde o nosso retorno.</Typography></>
        )
    }

    const CPFs = () => {
        return (
            <><Typography sx={{
                color: 'red',
                fontSize: '11px',
                mb: '10px'
            }}>O CPF deve ser valido</Typography></>
        )
    }

    const templateParams = {
        nome: nome,
        cpf: cpf,
        email: email,
        radio: radio,
        message: text,
        from_name: 'EasyPass'
    };

    function sendEmail(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setShowErrorCPF(false);
        setShowErrorEmail(false);
        setShowError(false);
        setShowErrorNome(false);

        if (cpf == null || cpf == '') {
            setShowErrorCPF(true)
            return
        }

        if (nome == null || nome == '') {
            setShowErrorNome(true)
            return
        }

        const cpfString = cpf as string;

        if (text === '') {
            setShowError(true);
            setShowErrorCPF(false);
            setShowErrorEmail(false);
            return; // Parar a execução da função
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setShowErrorEmail(true);
            setShowErrorCPF(false);
            setShowError(false);
            return; // Parar a execução da função
        } else if (cpfString.length < 11 || isNaN(Number(cpfString))) {
            setShowErrorCPF(true);
            setShowErrorEmail(false);
            setShowError(false);
            return; // Parar a execução da função
        }




        setShowErrorCPF(false);
        setShowErrorEmail(false);
        setShowError(false);
        setShowErrorNome(false);
        setLoading(true)
        setDisable(true)

        emailjs
            .send('service_jifdywp', 'template_bokzj1g', templateParams, 'kBx9_63Buee8bMrWC')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                setSucess(true)
                setLoading(false);
                setDisable(false);
                setNome('');
                setCPF('');
                setEmail('');
                setText('');
                setRadio('visitante');
                setTimeout(() => {
                    setSucess(false)
                }, 5000);
            }, function (error) {
                console.log('FAILED...', error);
            });
    }

    return (
        <>
            <Box sx={{
                height: '120vh',
                width: '100vw',
                background: verify ? fundo : 'white',
                [theme.breakpoints.down('sm')]: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    height: 'auto',
                },
            }}>
            <Fade cascade triggerOnce={hasEntered}>
                        <Container sx={{
                            width: '50%',
                            float: 'left',
                            mt: '10vh',
                            [theme.breakpoints.down('sm')]: {
                                float: 'none',
                                width: '100vw',
                                height: '100%',
                                position: 'relative',
                            },
                        }}>
                        <Slide direction="left" triggerOnce={hasEntered}>
                            <Container sx={{
                                position: 'relative',
                                width: '60%',
                                [theme.breakpoints.down('sm')]: {
                                    float: 'none',
                                    width: '80vw',
                                },
                            }}>
                                <Typography component="h1" sx={{
                                    fontSize: {
                                        xs: "3.5vw", // (7.5 / 1200) * 600
                                        sm: "2.5vw", // (7.5 / 1200) * 900
                                        md: "2vw", // (7.5 / 1200) * 1200
                                        lg: "2.5vw",
                                        xl: "3vw", // Manter o mesmo tamanho de lg para xl
                                    },
                                    fontWeight: '700',
                                    color: verify ? 'white' : 'black' 
                                }}>
                                    Olá!
                                </Typography>
                                <Typography component="h3" sx={{
                                    fontSize: {
                                        xs: "3vw", // (7.5 / 1200) * 600
                                        sm: "2.5vw", // (7.5 / 1200) * 900
                                        md: "2vw", // (7.5 / 1200) * 1200
                                        lg: "1.5vw",
                                        xl: "2vw", // Manter o mesmo tamanho de lg para xl
                                    },
                                    fontWeight: '600',
                                    mt: '10px',
                                    mb: '10px',
                                    color: verify ? 'white' : 'black' 
                                }}>
                                    Preencha seus dados ao lado e entre em contato conosco.
                                </Typography>
                                <Typography component="span" sx={{
                                    fontSize: {
                                        xs: "2.2vw", // (7.5 / 1200) * 600
                                        sm: "1.5vw", // (7.5 / 1200) * 900
                                        md: "1.2vw", // (7.5 / 1200) * 1200
                                        lg: "1vw",
                                        xl: "1vw", // Manter o mesmo tamanho de lg para xl
                                    },
                                    color: verify ? 'white' : 'black' 
                                }}>
                                    Para te ajudar da melhor forma possível, o nosso atendimento do Fale Conosco precisa saber algumas informações sobre você, como nome e CPF – é só pra te localizar no sistema, ok? Não se preocupe: a segurança dos seus dados e a sua privacidade estão garantidas. Para saber mais sobre a nossa Política de Privacidade ou caso tenha alguma dúvida, clique aqui.
                                </Typography>
                            </Container>
                        </Slide>
                        </Container>
                    
                    <Container sx={{
                        width: '50%',
                        float: 'right',
                        mt: '10vh',
                        [theme.breakpoints.down('sm')]: {
                            float: 'none',
                            width: '100vw',
                        },
                    }}>

                        <FormControl id="contact-form" sx={{ width: '100%', display: "flex", alignItems: 'center', justifyContent: 'center', flexDirection: 'column', mb: 10 }}>
                            <form onSubmit={sendEmail} style={{ width: '100%', display: "flex", alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                <FormControl variant="standard" sx={{ width: '80%', mb: '20px' }}>
                                    <InputLabel htmlFor="input-with-icon-adornment">
                                        Nome
                                    </InputLabel>
                                    <Input
                                        value={nome}
                                        onChange={(event) => setNome(event.target.value)}
                                        inputProps={{ maxLength: 45 }}
                                        required
                                        id="input-with-icon-adornment"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <PersonIcon />
                                            </InputAdornment>
                                        }
                                        sx={{ fontSize: '14px' }}
                                    />
                                </FormControl>
                                {showErrorNome && <Nomes />}
                                <FormControl variant="standard" sx={{ width: '80%', mb: '20px' }}>
                                    <InputLabel htmlFor="input-with-icon-adornment">
                                        CPF
                                    </InputLabel>
                                    <Input
                                        value={cpf === null ? '' : cpf.toString()} // Converte para string se cpf não for nulo
                                        onChange={(event) => {
                                            const value = event.target.value;
                                            if (!isNaN(Number(value))) {
                                                setCPF(value); // Define o cpf como string ou null
                                            }
                                        }}
                                        inputProps={{ maxLength: 11 }}
                                        required
                                        id="input-with-icon-adornment"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <PortraitIcon />
                                            </InputAdornment>
                                        }
                                        sx={{ fontSize: '14px' }}
                                    />
                                </FormControl>
                                {showErrorCPF && <CPFs />}
                                <FormControl variant="standard" sx={{ width: '80%', mt: '20px' }}>
                                    <FormLabel id="demo-row-radio-buttons-group-label" >Já é cliente da EasyPass?</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        defaultValue="visitante"
                                        onChange={(event) => setRadio(event.target.value)}
                                    >
                                        <FormControlLabel value="cliente" control={<Radio />} label="Cliente" sx={{ color: verify ? 'white' : 'black' }} />
                                        <FormControlLabel value="visitante" control={<Radio />} label="Visitante" sx={{ color: verify ? 'white' : 'black' }} />
                                    </RadioGroup>
                                </FormControl>
                                <FormControl variant="standard" sx={{ width: '80%', mb: '20px' }}>
                                    <InputLabel htmlFor="input-with-icon-adornment" >
                                        Email
                                    </InputLabel>
                                    <Input
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        inputProps={{ maxLength: 45 }}
                                        required
                                        id="input-with-icon-adornment"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <EmailIcon />
                                            </InputAdornment>
                                        }
                                        sx={{ fontSize: '14px' }}
                                    />
                                </FormControl>
                                {showErrorEmail && <Emails />}
                                <FormControl variant="standard" sx={{ width: '80%', mb: '20px' }}>

                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Mensagem"
                                        multiline
                                        rows={12}
                                        variant="outlined"
                                        inputProps={{ fontSize: '10px' }}
                                        value={text}
                                        onChange={(event) => setText(event.target.value)}
                                    />
                                </FormControl>
                                {showError && <Nulls />}
                                <BtnL name="Enviar" loading={loading} dis={disable} handleLogin={sendEmail} cl={verify ? colors.pm : "white"} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} route={""} />
                                {sucess && <Sucess />}
                            </form>
                        </FormControl>
                    </Container>
            </Fade>
            </Box>
        </>
    );
}
