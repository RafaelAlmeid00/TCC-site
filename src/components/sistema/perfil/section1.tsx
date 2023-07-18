import { Avatar, Box, Button, Container, IconButton, InputLabel, TextField, Typography } from "@mui/material"
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import { Deccode } from "../FrontDecoded";
import ModalContext from "../../../context/modalcontext";
import React from "react";
import { Btn } from "../../btns";

function SectionPerfil1() {
    const [dado, setPega] = useState('');
    const [nome, setNome] = useState(false);
    const [cep, setCep] = useState(false);
    const [date, setDate] = useState(false);
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default
    const [parame, setPar] = useState('');

    const userData = Deccode();
    const cpf = userData.user_CPF;

    console.log('this is the verify: ', Deccode());
    //console.log('token removed: ', removeToken());
    console.log(userData, cpf);

    const trocaNome = () => {
        setNome(true)
    };

    const ConfirmarNome = async () => {
        setPar('nome')
        console.log(parame);
        console.log(dado);
        await update(cpf, dado, parame)
        setNome(false)
    };
    
    const update = async (cpf: any, dado: any, parame: any) => {

        try {
            await axios.post('http://localhost:3344/user/update', {
                user_CPF: cpf,
                info: dado,
                parame: parame
            });
        } catch (error) {
            console.log(error);
            
        }
       
    
    };

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        // Atualiza o estado "parame" com o valor digitado no TextField
        setPega(event.target.value);
    };


        const birthDate = new Date(userData.user_nascimento);
    const formattedBirthDate = birthDate.toISOString().substring(0, 10);

    return (
        <>
            <Box sx={{
                mt: '9vh',
                height: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80vw',
                float: 'right',
                background: verify ? fundo : 'white',
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
                        {nome ? 
                            <TextField
                                id="outlined-password-input"
                                label="Nome"
                                type="text"
                                value={dado} // Define o valor do TextField como o valor do estado "parame"
                                onChange={handleChange} 
                                sx={{
                                    ml: 5,
                                    '& .MuiInputBase-root': {
                                        color: 'white', // Define a cor do texto do input
                                        '& fieldset': {
                                            borderColor: 'white', // Define a cor da borda do input
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'white', // Define a cor da borda ao passar o mouse sobre o input
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white', // Define a cor da borda quando o input está focado
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white', // Define a cor do texto do label
                                    },
                                }}
                            />
                        : <Typography component='h1' sx={{
                            ml: 3,
                            fontSize: 20,
                            fontWeight: 600,
                            color: 'white',
                            width: '50%',
                        }}>
                            {userData.user_nome}
                        </Typography>}
                        {nome ? <Btn name={"Confirmar"} route={""} ml={20} fun={ConfirmarNome} bch={verify ? 'white' : undefined} bc={verify ? 'white' : undefined} cl={verify ? 'white' : undefined} />
                        : <Btn name={"Editar"} route={""} ml={20} fun={trocaNome} bch={verify ? 'white' : undefined} bc={verify ? 'white' : undefined} cl={verify ? 'white' : undefined} />}
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
                            <InputLabel>
                                <Typography sx={{ fontSize: 11, mt: 1, color: '#C2C2C2' }}>Nome de Usuário</Typography>
                            </InputLabel>
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
                        </Container>
                    </Container>
                </Container>
            </Box>
        </>
    )
}

export default SectionPerfil1
