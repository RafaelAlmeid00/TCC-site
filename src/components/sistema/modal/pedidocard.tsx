import { Box, Card, Container, FormControl, InputBase, InputLabel, MenuItem, Select, Typography, styled } from "@mui/material";
import React from "react";
import ModalContext from "../../../context/modalcontext";
import axios from "axios";

interface Props {
    userData: string
}

function Pedido({ userData }: Props) {

    const [ListCards, setListCards] = React.useState([{ name: '' }]);

    React.useEffect(() => {
        if (userData) {
            console.log(userData);
        }})
    const userCPF = userData.user_CPF;

    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const { hasEntered } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default
    const [card, setCard] = React.useState('');
    const handleChange = (event: { target: { value: string } }) => {
        setCard(event.target.value);
    };

    // Função para fazer a requisição ao servidor com o CPF
    async function fetchListCards(userCPF: string) {
        try {
            const response = await axios.post('/listcpf', { cpf: userCPF });
            const result = response.data;
            const newListCards: { name: string; }[] = [];

            result.forEach((item) => {
                const listTipo = item.list_tipo;
                let cardName = '';

                if (listTipo === 'student') {
                    cardName = 'Cartão de Estudante';
                } else if (listTipo === 'worker') {
                    cardName = 'Vale-Transporte';
                } // Adicionar mais condições conforme necessário para outros tipos

                newListCards.push({ name: cardName });
            });

            setListCards(newListCards);
        } catch (error) {
            console.error(error);
        }
    }

    React.useEffect(() => {
        fetchListCards(userCPF)
    }, [userCPF, userData])


    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
            marginTop: theme.spacing(3),
        },
        '& .MuiInputBase-input': {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #ced4da',
            fontSize: 16,
            padding: '10px 26px 10px 12px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
                borderRadius: 4,
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
    }));



    return (
        <>
            <Box sx={{
                height: '100vh',
                width: '100vw',
                postion: 'absolute',
                background: verify ? fundo : 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Card sx={{
                    position: 'realtive',
                    height: '70vh',
                    width: '40vw',
                    boxShadow: verify ? '1px 0px 4px 1px white' : '1px 1px 8px 1px',

                }}>
                    <Container sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: 5
                    }}>
                    <Typography sx={{
                        fontSize: {
                            xs: '2.5vw',  // (7.5 / 1200) * 600
                            sm: '2vw',  // (7.5 / 1200) * 900
                            md: '2vw',  // (7.5 / 1200) * 1200
                            lg: '1vw',
                            xl: '1vw',  // Manter o mesmo tamanho de lg para xl
                        },
                        fontWeight: 'bold'
                    }}>
                        Veja qual tipo de cartão está disponivel para pedir:
                    </Typography>
                    </Container>
                    <Container sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: 5
                    }}>
                        <FormControl sx={{ m: 1 }} variant="standard">
                            <InputLabel id="demo-customized-select-label">Cartão</InputLabel>
                            <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={card}
                                onChange={handleChange}
                                input={<BootstrapInput />}
                            >
                                {ListCards.map((card) => (
                                    <>
                                    <MenuItem value="">
                                    <em>Nenhum cartão disponível</em>
                                </MenuItem>
                                    <MenuItem key={card.name} value={card.name}>
                                        {card.name}
                                    </MenuItem>
                                    </>
                                ))}
                            </Select>
                        </FormControl>
                    </Container>
                </Card>
            </Box>
        </>
    )
}

export default Pedido
