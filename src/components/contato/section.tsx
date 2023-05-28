import { Box, Button, Container, FormControl, FormControlLabel, FormHelperText, FormLabel, Input, InputAdornment, InputLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import PortraitIcon from '@mui/icons-material/Portrait';
import emailjs from 'emailjs-com';
import { useState, FormEvent } from "react";

export default function SectionContato() {
    const [nome, setNome] = useState('')
    const [cpf, setCPF] = useState(0)
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const [radio, setRadio] = useState('visitante')
    const [showErrorCPF, setShowErrorCPF] = useState(false);
    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const [showError, setShowError] = useState(false);

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
            } else if (cpf.length < 11 || isNaN(Number(cpf))) {
                setShowErrorCPF(true);
                setShowErrorEmail(false);
                setShowError(false);
                return; // Parar a execução da função
            } 

        setShowErrorCPF(false);
        setShowErrorEmail(false);
        setShowError(false);

        emailjs
            .send('service_jifdywp', 'template_bokzj1g', templateParams, 'kBx9_63Buee8bMrWC')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    }

   


    return (
        <>

        <Fade cascade>
            <Box sx={{
                mt: "10vh",
                height: '125vh',
                width: '100%',
                background: 'white',
            }}>
                <Container sx={{
                    width: '50%',
                    float: 'left',
                    position: 'absolute',
                    mt: '10vh',
                }}>
                    
                    <Container sx={{
                        float: "right",
                        position: 'relative',
                        width: '60%',
                    }}>
                        
                    <Typography component="h1" sx={{
                        fontSize: '30px',
                        fontWeight: '700',
                    }}>
                        Olá!
                    </Typography>
                    <Typography component="h3" sx={{
                        fontSize: '20px',
                        fontWeight: '600',
                        mt: '10px',
                        mb: '10px',
                    }}>
                        Preencha seus dados ao lado e conte-nos sobre o seu problema.
                    </Typography>
                    <Typography component="span" sx={{
                        fontSize: '12px',
                    }}>
                            Para te ajudar da melhor forma possível, o nosso atendimento do Fale Conosco precisa saber algumas informações sobre você, como nome e CPF – é só pra te localizar no sistema, ok? Não se preocupe: a segurança dos seus dados e a sua privacidade estão garantidas. Para saber mais sobre a nossa Política de Privacidade ou caso tenha alguma dúvida, clique aqui.
                    </Typography>
                    </Container>
                </Container>
                    <Container sx={{
                        width: '50%',
                        float: 'right',
                        mt: '10vh',
                    }}>
                        
                        <FormControl id="contact-form" sx={{ width: '100%', display: "flex", alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
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
                        <FormControl variant="standard" sx={{ width: '80%', mb: '20px' }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                CPF
                            </InputLabel>
                            <Input
                                value={cpf}
                                onChange={(event) => setCPF(event.target.value)}
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
                                {showErrorCPF && <CPFs/>}
                            <FormControl variant="standard" sx={{ width: '80%', mt: '20px' }}>
                                <FormLabel id="demo-row-radio-buttons-group-label" >Já é cliente da EasyPass?</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    defaultValue="visitante"
                                    onChange={(event) => setRadio(event.target.value)}
                                >
                                    <FormControlLabel value="cliente" control={<Radio />} label="Cliente" />
                                    <FormControlLabel value="visitante" control={<Radio />} label="Visitante" />
                                </RadioGroup>
                            </FormControl>
                        <FormControl variant="standard" sx={{ width: '80%', mb: '20px' }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
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
                            <Button type="submit" value="Send" variant="contained" sx={{
                                color: 'white',
                                border: '2px solid transparent', // adiciona a borda inicialmente
                                transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
                                '&:hover': {
                                    border: '2px solid #0fcd88', // muda a cor da borda na animação
                                },

                            }}>Enviar</Button>
                            </form>
                        </FormControl>
                </Container>
            </Box>
        </Fade>
        </>
    );
}
