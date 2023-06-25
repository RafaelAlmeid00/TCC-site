import { Box, Button, Container, Divider, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function SectionPerfil2() { 
    const userJson = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    const userData = userJson ? JSON.parse(userJson) : null;
    const data = userData.user_email
    console.log('THIS IS DATA: ', data);
    const navigate = useNavigate()
    console.log(localStorage);

    async function excl (){
        console.log(localStorage);

        try {
            await axios.post('http://localhost:3344/user/delete', {
                user_email: data,
                token: token
            })
            console.log('ta indo');
            
            localStorage.removeItem('token')
            console.log(localStorage);
            
            navigate('/')
        } catch (err) {
            console.log(err);
        }
    }
    console.log(localStorage);

    return (
        <>
            <Box sx={{
                height: '100vh',
            }}>
                <Divider variant="fullWidth" component="ul" sx={{
                    width: '58%',
                    ml: 45,
                    borderBottom: '2px solid #ccc',
                }} />
                <Container sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}>
                    <Typography sx={{
                        color: 'black',
                        fontSize: 22,
                        fontWeight: 600,
                        mr: 50,
                        mt: 5
                    }}>Senha e E-mail</Typography>
                    <Typography component="span" sx={{
                        fontSize: 12,
                        width: '40%',
                        ml: -20,
                        mt: 2,
                        color: '#7d7d7d'
                    }}>Sempre verifique qual sua nova senha antes de confirmar a atualização de dados. 
                    Caso perca essa senha e não tenha acesso a seu e-mail, 
                    não será possivel logar sua conta pelos métodos convencionais.</Typography>
                    <Button variant="contained" href="/Perfil" sx={{
                        color: 'white',
                        ml: -50,
                        mt: 3,
                        border: '2px solid transparent', // adiciona a borda inicialmente
                        transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
                        '&:hover': {
                            border: '2px solid #0fcd88', // muda a cor da borda na animação
                        },
                    }}>
                        <Typography sx={{
                            fontSize: 12,
                            fontWeight: 600,
                        }}>
                            Alterar Senha
                        </Typography>
                        </Button>
                    <Button variant="contained" href="/Perfil" sx={{
                        color: 'white',
                        ml: -50,
                        mt: 3,
                        border: '2px solid transparent', // adiciona a borda inicialmente
                        transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
                        '&:hover': {
                            border: '2px solid #0fcd88', // muda a cor da borda na animação
                        },
                    }}>
                        <Typography sx={{
                            fontSize: 12,
                            fontWeight: 600,
                        }}>
                            Alterar E-mail
                        </Typography>
                    </Button>
                </Container>
                <Divider variant="fullWidth" component="ul" sx={{
                    width: '58%',
                    ml: 45,
                    mt: 6,
                    borderBottom: '2px solid #ccc',
                }} />
                <Container sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}>
                    <Typography sx={{
                        color: 'black',
                        fontSize: 22,
                        fontWeight: 600,
                        mr: 45,
                        mt: 5
                    }}>Saída e Exclusão de Conta</Typography>
                    <Typography component="span" sx={{
                        fontSize: 12,
                        width: '40%',
                        ml: -20,
                        mt: 2,
                        color: '#7d7d7d'
                    }}>Sempre verifique seu email antes de confirmar a atualização de dados.
                        Caso perca esse email e não tenha acesso a ele também,
                        não será possivel logar sua conta pelos métodos convencionais.</Typography>
                    <Button variant="contained" href="/Perfil"  sx={{
                        backgroundColor: 'red',
                        color: 'white',
                        ml: -50,
                        mt: 3,
                        border: '2px solid transparent', // adiciona a borda inicialmente
                        transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
                        '&:hover': {
                            border: '2px solid red', // muda a cor da borda na animação
                            color: 'white',
                            backgroundColor: 'red',
                            boxShadow: 'inset 0px 0px 2px 1px',
                        },
                    }}>
                        <Typography sx={{
                            fontSize: 12,
                            fontWeight: 600,
                        }}>
                            Sair da Conta
                        </Typography>
                    </Button>
                    <Button variant="outlined" href="/Perfil" onClick={excl} sx={{
                        border: '2px solid red', // muda a cor da borda na animação
                        backgroundColor: 'white',
                        color: 'red',
                        ml: -50,
                        mt: 3,
                        transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
                        '&:hover': {
                            backgroundColor: 'red', // muda a cor da borda na animação
                            color: 'white',
                            boxShadow: 'inset 0px 0px 2px 1px',
                            border: '2px solid red', // muda a cor da borda na animação
                        },
                    }}>
                        <Typography sx={{
                            fontSize: 12,
                            fontWeight: 600,
                        }}>
                            Excluir Conta
                        </Typography>
                    </Button>
                </Container>
            </Box>
        </>
    )
}

export default SectionPerfil2
