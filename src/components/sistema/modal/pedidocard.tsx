import { Box, Card, Container, FormControl, InputBase, InputLabel, MenuItem, Select, Typography, styled } from "@mui/material";
import React from "react";
import ModalContext from "../../../context/modalcontext";
import axios from "axios";
import { Btn } from "../../btns";
import { useNavigate } from "react-router-dom";

interface Props {
    userData: string;
    onCloseModal: () => void;
    onAlertChange: boolean;
}

function Pedido({ userData, onCloseModal, onAlertChange }: Props) {
    const [ListCards, setListCards] = React.useState([{ name: '' }]);
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default
    const [card, setCard] = React.useState('');
    const token = localStorage.getItem('token')
    const handleChange = (event: { target: { value: string } }) => {
        setCard(event.target.value);
    };
    const [active, setActive] = React.useState(false)
    const navigate = useNavigate()

    React.useEffect(() => {
        console.log(userData.user_status);

        if (userData.user_status == "ativo") {
            setActive(false)
        } else if (userData.user_status == "inativo") {
            setActive(true)
            onCloseModal()
        } else {
            setActive(true)
            onCloseModal()
            navigate("/cadastro")
        }
    }, [])

    // Função para fazer a requisição ao servidor com o CPF
    async function fetchListCards(list_CPF: string) {
        try {
            const response = await axios.post('http://localhost:3344/listcpf/search', { list_CPF: list_CPF, token: token});
            const result = response.data.objeto;
            const newListCards: { name: string }[] = [];

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
    async function VerifyCard(list_CPF: string): Promise<boolean> {
        try {
            const response = await axios.post('http://localhost:3344/card/search', { user_CPF: list_CPF, token: token })
            const result = response.data
            const hasCardOpen = result.length > 0;
            console.log(hasCardOpen);
            if (hasCardOpen) {
                console.log('Você já tem pedidos abertos');
                onAlertChange(true);
                onCloseModal();
            }
            return true;
        } catch (error) {
            console.log('Erro ao verificar pedidos:', error);
            return false;
        }
    }

    React.useEffect(() => {
        const list_CPF = userData.user_CPF;

        if (userData) {
            VerifyCard(list_CPF)
            fetchListCards(list_CPF);
        }
    }, [userData]);

       const HandlePost = async () => {
        function formatDateToYYYYMMDD(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');

            return `${year}-${month}-${day}`;
        }

        // Exemplo de uso:
        const currentDate = new Date();
        const date = formatDateToYYYYMMDD(currentDate);
        const user_CPF = userData.user_CPF;
        const cardTipo = card === "Cartão de Estudante" ? 'estudante' : card === "Vale-Transporte" && 'vale-transporte'
        const dataCard = {
            req_data: date,
            req_TipoCartao: cardTipo,
            user_user_CPF: user_CPF,
            token: token
        }
        console.log(dataCard);

        try {
            
            console.log('foi até aq');
            const response = await axios.post('http://localhost:3344/card', dataCard);
            console.log('foi até aq');
            console.log(response);
            console.log('foi mlk');
            onCloseModal();
        } catch (error) {
            console.log(error);
            
        }
    }

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
                    position: 'relative',
                    height: '70vh',
                    width: '40vw',
                    boxShadow: verify ? '1px 0px 4px 1px white' : '1px 1px 8px 1px',

                }}>
                    <Container sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: 10
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
                        mt: 3
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
                                {ListCards.length > 0 ? (
                                    ListCards.map((card) => (
                                        <MenuItem key={card.name} value={card.name}>
                                            {card.name}
                                        </MenuItem>
                                    ))
                                ) : (
                                    <MenuItem value="">
                                        <em>Nenhum cartão disponível</em>
                                    </MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </Container>
                    <Container sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: 3
                    }}>
                        <Btn name={"Confirmar"} route={''} bc={verify ? 'white' : undefined} fun={HandlePost} bch={verify ? 'white' : undefined} cl={undefined} vis={undefined} mb={undefined} />
                    </Container>
                </Card>
            </Box>
        </>
    )
}

export default Pedido