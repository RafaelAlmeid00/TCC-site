import { Avatar, Box, Button, Container, IconButton, InputLabel, TextField, Typography } from "@mui/material"
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import { verify } from "../FrontDecoded";

function SectionPerfil1() {
    const [dado, setPega] = useState('');
    const userJson = localStorage.getItem('user');
    const userData = userJson ? JSON.parse(userJson) : null;
    const data = userData.user_email;

    console.log('this is the verify: ', verify());
    //console.log('token removed: ', removeToken());
    
    
    const update = async () => {
        await axios.post('http://localhost:3344/user/update', {
                user_email: data,
                info: dado,
        });
    
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPega(event.target.value);
        update(); // Atualiza diretamente após o usuário digitar algo
    };


        const birthDate = new Date(userData.user_nascimento);
    const formattedBirthDate = birthDate.toISOString().substring(0, 10);

    return (
        <>
            <Box sx={{
                mt: '10vh',
                height: '89.99vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80vw',
                float: 'right'
            }}>
                <Container sx={{
                    borderRadius: 6,
                    height: '80%',
                    width: '70%',
                    backgroundColor: '#141414'
                }}>
                    <Container sx={{
                        width: '106.8%',
                        height: '25%',
                        ml: -3,
                        backgroundColor: '#D3D3D3',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20
                    }}> 

                    <IconButton sx={{
                        float: 'right',
                        backgroundColor: '#7d7d7d',
                        mt: 2,
                        '&:hover':{
                            backgroundColor: '#9d9d9d',
                            boxShadow: '0px 0px 2px 1px',
                        }
                    }}>                
                    <EditIcon sx={{
                        color: 'black',
                    }} />
                    </IconButton>   
                    </Container>
                    <Container sx={{
                        width: '106.25%',
                        height: '20%',
                        ml: -3,
                        backgroundColor: '#141414',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Avatar
                            alt="Remy Sharp"
                            src=""
                            sx={{ width: 70, height: 70 }}
                        />
                        <Typography component='h1' sx={{
                            ml: 3,
                            fontSize: 20,
                            fontWeight: 600,
                            color: 'white',
                            width: '50%',
                        }}>
                            {userData.user_nome}
                        </Typography>
                        <Button variant="contained" href="/Perfil" sx={{
                            color: 'white',
                            ml: 30,
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
                                Editar Informações
                            </Typography>
                        </Button>
                    </Container>
                    <Container sx={{
                        width: '100%',
                        height: '51%',
                        backgroundColor: '#696969',
                        borderRadius: 5,
                    }}>
                        <Container sx={{
                            width: '100%',
                            height: '25%',
                            borderRadius: 5,
                        }}>
                            <InputLabel >
                                <TextField
                                    label="Nome de Usuário"
                                    variant="outlined"
                                    size="small"
                                    sx={{ fontSize: 11, mt: 1, color: '#C2C2C2' }}
                                    value={dado}
                                    onChange={handleChange}
                                />                            </InputLabel>
                            <Typography sx={{ color: 'white' }}>{userData.user_nome}</Typography>
                            <Button variant="contained" href="/Perfil" sx={{
                                color: 'white',
                                float: 'right', 
                                mt: -5,                               
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
                                    Editar
                                </Typography>
                            </Button>
                        </Container>
                        <Container sx={{
                            width: '100%',
                            height: '25%',
                            borderRadius: 5,
                        }}>
                            <InputLabel>
                                <Typography sx={{ fontSize: 11, mt: 1, color: '#C2C2C2' }}>CEP</Typography>
                            </InputLabel>
                            <Typography sx={{color: 'white'}}>{userData.user_endCEP}</Typography>
                            <Button variant="contained" href="/Perfil" sx={{
                                color: 'white',
                                float: 'right',
                                mt: -5,
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
                                    Editar
                                </Typography>
                            </Button>
                        </Container>
                        <Container sx={{
                            width: '100%',
                            height: '25%',
                            borderRadius: 5,
                        }}>
                            <InputLabel>
                                <Typography sx={{ fontSize: 11, mt: 1, color: '#C2C2C2' }}>Data de Nascimento</Typography>
                            </InputLabel>
                            <Typography sx={{ color: 'white' }}>{formattedBirthDate}</Typography>
                            <Button variant="contained" href="/Perfil" onClick={update} sx={{
                                color: 'white',
                                float: 'right',
                                mt: -5,
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
                                    Editar
                                </Typography>
                            </Button>
                        </Container>
                        <Container sx={{
                            width: '100%',
                            height: '25%',
                            borderRadius: 5,
                        }}>
                            <InputLabel>
                                <Typography sx={{ fontSize: 11, mt: 1, color: '#C2C2C2' }}>Tipo de Usuário</Typography>
                            </InputLabel>
                            <Typography sx={{ color: 'white' }}>{userData.user_tipo}</Typography>
                            <Button variant="contained" href="/Perfil" sx={{
                                color: 'white',
                                float: 'right',
                                mt: -2,
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
                                    Editar
                                </Typography>
                            </Button>
                        </Container>
                    </Container>
                </Container>
            </Box>
        </>
    )
}

export default SectionPerfil1
