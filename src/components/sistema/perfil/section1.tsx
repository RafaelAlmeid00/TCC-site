/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Box, Container, IconButton, Input, InputLabel, Typography } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import { Deccode } from "../FrontDecoded";
import ModalContext from "../../../context/modalcontext";
import React from "react";
import { BtnPerfil } from "../../btns";
import { PerfilAtualizado, PerfilError, TokenAtualizado, TokenPerfilError, TokenPerfilErrorSer } from "../../errosvalidations";
import CEP from "../modal/cep";
import colors from "../../../assets/colors";

function SectionPerfil1() {
    const [dado, setPega] = React.useState('');
    const [nome, setNome] = React.useState(false);
    const [cep, setCep] = React.useState(false);
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [openT, setOpenT] = React.useState(false);
    const [openT2, setOpenT2] = React.useState(false);
    const [openT0, setOpenT0] = React.useState(false);
    const userData = Deccode();
    const cpf = userData.user_CPF;
    const birthDate = new Date(userData.user_nascimento);
    const formattedBirthDate = birthDate.toISOString().substring(0, 10);
    const token = localStorage.getItem('token');
    let parame: string
    const [img, setImg] = React.useState('');
    const [perfil, setPerfil] = React.useState('');
    const fileInputRef = React.useRef(null)
    const fileInputRefAvatar = React.useRef(null)
    let switchImage = 0

    const trocaNome = () => {
        setNome(true)
        setCep(false)
    };

    const trocaCEP = () => {
        setCep(true)
        setNome(false)
    };

    const ParametroNome = () => {
        parame = 'nome'
    }


   const update = async (cpf: any, updates: any) => {
        try {

            console.log(updates);

            await axios.post('http://localhost:3344/user/update', {
                user_CPF: cpf,
                updates,
                token: token
            });
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 3000)
            setCep(false)
        } catch (error) {
            console.log(error);
            setOpen2(true)
            setTimeout(() => {
                setOpen2(false)
            }, 3000)
        }

    };

    async function UpdateToken() {
        try {
            console.log('foi quase');
            const res = await axios.post('http://localhost:3344/user/token', {
                user_CPF: cpf,
                token: token
            });
            if (res.data.token != '') {
                localStorage.removeItem('token')
                localStorage.setItem('token', res.data.token);
                setOpenT(true)
                setTimeout(() => {
                    setOpenT(false)
                }, 3000)
            } else {
                console.log(res.data.message);
                setOpenT0(true)
                setTimeout(() => {
                    setOpenT0(false)
                }, 3000)
            }
        } catch (error) {
            console.log(error);
            setOpenT2(true)
            setTimeout(() => {
                setOpenT2(false)
            }, 3000)
        }
    }


    const ConfirmarNome = async () => {
        ParametroNome()
        console.log(dado);
        const updates = {
            [parame]: dado
        }
        console.log(updates);
        console.log(parame);
        console.log(dado);
        setCep(false)
        await update(cpf, updates);
        setNome(false)
        await UpdateToken()

    };

    const ConfirmarCEP = async (updates: any) => {
        setNome(false)
        console.log(parame);
        console.log(dado);
        await update(cpf, updates);
        setNome(false)
        await UpdateToken()

    };

    const handleActive = (event: any) => {
        switchImage = 1
        handleImageChange(event)
    }

    const handleActivePerfil = (event: any) => {
        switchImage = 2
        handleImageChange(event)
    }

    const handleImageChange = async (event: { target: { files: any[]; }; }) => {
        let file = event.target.files[0];
        console.log(file);

        if (file) {

            switch (switchImage) {
                case 1:

                    try {
                        const data = new FormData();
                        data.append('selectedImage', file);

                        const response = await axios.post(
                            'http://localhost:3344/user/fundoupload', data,
                            {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                    'authorization': token,
                                    user_CPF: cpf,
                                },
                            }
                        );
                        file = ''
                        console.log(response.data); // Handle the response as needed
                        await UpdateToken()
                    } catch (error) {
                        console.error('Error uploading image:', error);
                        file = ''
                    }

                    break;

                case 2:

                    try {
                        const data = new FormData();
                        data.append('selectedImage', file);

                        const response = await axios.post(
                            'http://localhost:3344/user/perfilupload', data,
                            {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                    'authorization': token,
                                    user_CPF: cpf,
                                },
                            }
                        );
                        
                        file = ''
                        console.log(response.data); // Handle the response as needed
                        await UpdateToken()
                    } catch (error) {
                        console.error('Error uploading image:', error);
                        file = ''
                    }

                    break;
            }
        } else {
            console.log('file vazio');
            
        }
    }



    React.useEffect(() => {
        const returnImage = async () => {
            console.log('foi');
            try {
                const fundoimage = userData.user_Background;
                console.log(fundoimage);

                const response = await axios.post(
                    'http://localhost:3344/user/returnfundo',
                    {
                        filename: fundoimage,
                    },
                    {
                        responseType: 'arraybuffer',
                    }
                );

                const arrayBufferView = new Uint8Array(response.data);
                const blob = new Blob([arrayBufferView], { type: 'image/jpeg' });

                // Converter Blob para Base64
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    setImg(reader.result) // A URL Base64 será armazenada em imageUrlWithPrefix
                    console.log(response.data);
                    console.log(img);
                };
                console.log('foi');
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        };
        returnImage();
    }, [token]);

    React.useEffect(() => {
        const returnImagePerfil = async () => {
            console.log('foi');
            try {
                const perfilimage = userData.user_FotoPerfil
                console.log(perfilimage);

                const response = await axios.post(
                    'http://localhost:3344/user/returnperfil',
                    {
                        filename: perfilimage,
                    },
                    {
                        responseType: 'arraybuffer',
                    }
                );

                const arrayBufferView = new Uint8Array(response.data);
                const blob = new Blob([arrayBufferView], { type: 'image/jpeg' });

                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    setPerfil(reader.result) // A URL Base64 será armazenada em imageUrlWithPrefix
                    console.log(response.data);
                    console.log(perfil);
                };
                console.log('foi');
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        };
        returnImagePerfil();
    }, [token]); 
  


        return (
            <>
                {open && <PerfilAtualizado />}
                {open2 && <PerfilError />}
                {openT && <TokenAtualizado />}
                {openT2 && <TokenPerfilError />}
                {openT0 && <TokenPerfilErrorSer />}
                {cep ? <CEP onConfirmarCEP={ConfirmarCEP} />
                    :
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
                            <Container
                                sx={{
                                    width: '106.8%',
                                    height: '25%',
                                    ml: -3,
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    backgroundImage: `url(${img})`, // Definindo a imagem de fundo com a string Base64
                                    backgroundSize: 'cover', // Ajustar o tamanho da imagem para cobrir o container
                                    backgroundPosition: 'center', // Centralizar a imagem no container
                                }}
                            >
                                <label htmlFor="file-input">
                                    <IconButton
                                        sx={{
                                            zIndex: 2,
                                            float: 'right',
                                            backgroundColor: '#7d7d7d',
                                            mt: 2,
                                            '&:hover': {
                                                backgroundColor: '#9d9d9d',
                                                boxShadow: '0px 0px 2px 1px',
                                            },
                                        }}
                                        onClick={() => fileInputRef.current.click()}
                                    >
                                        <input
                                            type="file"
                                            accept="image/*"
                                            id="file-input"
                                            onChange={handleImageChange}
                                            style={{ display: 'none' }}
                                            ref={fileInputRef}
                                            onClick={handleActive}
                                        />
                                        <EditIcon sx={{ color: 'black' }} />
                                    </IconButton>
                                </label>

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
                                <label htmlFor="file-input">
                                    <IconButton
                                        sx={{
                                            width: 'auto',
                                            height: 'auto',
                                            '&:hover': {
                                                boxShadow: '0 0 2px 1px rgba(0, 0, 0, 0.2)',
                                            },
                                        }}
                                        onClick={() => fileInputRefAvatar.current.click()}
                                    >
                                        <input
                                            type="file"
                                            accept="image/*"
                                            id="file-input"
                                            onChange={handleImageChange}
                                            style={{ display: 'none' }}
                                            ref={fileInputRefAvatar}
                                            onClick={handleActivePerfil}
                                        />
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={perfil}
                                            sx={{ width: 70, height: 70,  }}
                                        />
                                    </IconButton>
                                </label>
                                <Typography component='h1' sx={{
                                    ml: 3,
                                    fontSize: 20,
                                    fontWeight: 600,
                                    color: 'white',
                                    width: '50%',
                                }}>
                                    {userData.user_nome}
                                </Typography>
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
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}>
                                    <Container sx={{
                                        height: '100%',
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'start',
                                        alignItems: 'start',
                                        flexDirection: 'column'
                                    }}>
                                        <InputLabel>
                                            <Typography sx={{ fontSize: 11, mt: 1, color: '#C2C2C2' }}>Nome de Usuário</Typography>
                                        </InputLabel>
                                        {nome ?
                                            <Input
                                                id="outlined-password-input"
                                                label="Nome"
                                                type="text"
                                                value={dado} // Define o valor do TextField como o valor do estado "parame"
                                                onChange={(event) => setPega(event.target.value)}
                                                sx={{
                                                    ml: 5,
                                                    color: 'white',
                                                    '& .MuiInputLabel-root': {
                                                        color: 'white', // Define a cor do texto do label
                                                    },
                                                }}
                                            />
                                            :
                                            <Typography sx={{
                                                color: 'white', fontSize: {
                                                    xs: '2vw',  // (7.5 / 1200) * 600
                                                    sm: '1.5vw',  // (7.5 / 1200) * 900
                                                    md: '1.2vw',  // (7.5 / 1200) * 1200
                                                    lg: '1.2vw',
                                                    xl: '1.2vw',  // Manter o mesmo tamanho de lg para xl
                                                },
                                            }}>{userData.user_nome}</Typography>}
                                    </Container>
                                    <Container sx={{
                                        mt: 2,
                                        display: 'flex',
                                        justifyContent: 'end',
                                        alignItems: 'end'

                                    }}>
                                        {nome ? <BtnPerfil name={"Confirmar"} fun={ConfirmarNome} bch={verify ? 'white' : undefined} bc={verify ? 'white' : undefined} cl={verify ? colors.pm : undefined} route={""} />
                                            : <BtnPerfil name={"Editar"} fun={trocaNome} bch={verify ? 'white' : undefined} bc={verify ? 'white' : undefined} cl={verify ? colors.pm : undefined} route={""} />}
                                    </Container>
                                </Container>
                                <Container sx={{
                                    width: '100%',
                                    height: '25%',
                                    borderRadius: 5,
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}>
                                    <Container sx={{
                                        height: '100%',
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'start',
                                        alignItems: 'start',
                                        flexDirection: 'column'
                                    }}>

                                        <InputLabel>
                                            <Typography sx={{ fontSize: 11, mt: 1, color: '#C2C2C2' }}>CEP</Typography>
                                        </InputLabel>
                                        {cep ?
                                            <Input
                                                id="outlined-password-input"
                                                label="Nome"
                                                type="text"
                                                value={dado} // Define o valor do TextField como o valor do estado "parame"
                                                onChange={(event) => setPega(event.target.value)}
                                                sx={{
                                                    ml: 5,
                                                    color: 'white',
                                                    '& .MuiInputLabel-root': {
                                                        color: 'white', // Define a cor do texto do label
                                                    },
                                                }}
                                            />
                                            :
                                            <Typography sx={{ color: 'white' }}>{userData.user_endCEP}</Typography>
                                        }
                                    </Container>
                                    <Container sx={{
                                        mt: 2,
                                        display: 'flex',
                                        justifyContent: 'end',
                                        alignItems: 'end'

                                    }}>
                                        <BtnPerfil name={"Editar"} fun={trocaCEP} bch={verify ? 'white' : undefined} bc={verify ? 'white' : undefined} cl={verify ? colors.pm : undefined} />
                                    </Container>
                                </Container>
                                <Container sx={{
                                    width: '100%',
                                    height: '25%',
                                    borderRadius: 5,
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}>
                                    <Container sx={{
                                        height: '100%',
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'start',
                                        alignItems: 'start',
                                        flexDirection: 'column'
                                    }}>
                                        <InputLabel>
                                            <Typography sx={{ fontSize: 11, mt: 1, color: '#C2C2C2' }}>Data de Nascimento</Typography>
                                        </InputLabel>
                                        <Typography sx={{ color: 'white' }}>{formattedBirthDate}</Typography>
                                    </Container>
                                </Container>
                                <Container sx={{
                                    width: '100%',
                                    height: '25%',
                                    borderRadius: 5,
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}>
                                    <Container sx={{
                                        height: '100%',
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'start',
                                        alignItems: 'start',
                                        flexDirection: 'column'
                                    }}>
                                        <InputLabel>
                                            <Typography sx={{ fontSize: 11, mt: 1, color: '#C2C2C2' }}>Tipo de Usuário</Typography>
                                        </InputLabel>
                                        <Typography sx={{ color: 'white' }}>{userData.user_tipo}</Typography>
                                    </Container>
                                </Container>
                            </Container>
                        </Container>
                    </Box>}
            </>
        )
    }

    export default SectionPerfil1
