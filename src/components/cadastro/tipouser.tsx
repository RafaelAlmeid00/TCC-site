import { Box, Card, Container, FormControl, InputBase, InputLabel, MenuItem, Select, Typography, styled } from "@mui/material";
import React from "react";
import ModalContext from "../../context/modalcontext";
import axios from "axios";
import { Btn } from "../btns";
import themes from "../../assets/theme";
import { Sucess } from "../errosvalidations";
import { useNavigate } from "react-router-dom";
import { Balancer } from "react-wrap-balancer";

interface Props {
    dados: object;
}

function Tipo({ dados }: Props) {
    const [ListCards, setListCards] = React.useState([{ name: '' }]);
    const { verify } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default
    const [card, setCard] = React.useState('');
    const [listid, setListId] = React.useState('');
    const { setLog } = React.useContext(ModalContext);
    const [showSucess, setShowSucess] = React.useState(false);

    const handleChange = (event: { target: { value: string } }) => {
        setCard(event.target.value);
    };

    React.useEffect(() => {
        const cpf = dados.user_CPF        
        handleGetListCpf(cpf)
    }, [dados])
    // Função para fazer a requisição ao servidor com o CPF
    const handleGetListCpf = async (cpf: string) => {
        const list_CPF = cpf
        const responsecpf = await axios.post('http://localhost:3344/listcpf/search', { list_CPF: list_CPF })
        const result = responsecpf.data.objeto
        const newListCards: { name: string }[] = [];

        if (responsecpf) {
            result.forEach((item) => {
                const type = item.list_tipo
                const cpf_list = item.list_CPF
                const idlist = item.list_id
                console.log(type, cpf_list, idlist);
                let cardName = '';

                if (cpf_list == cpf) {
                    if (type === 'student') {
                        cardName = 'student';
                    } else if (type === 'worker') {
                        cardName = 'worker';
                    }
                    newListCards.push({ name: cardName });
                }})
            setListCards(newListCards);
        } else {
            console.log('error');
        }
    };

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

    const navigate = useNavigate()

    async function cadastrarUsuario(dados: object) {

        if (listid) {
            dados.user_tipo = card;
            dados.list_CPF_list_id = listid;
        } else {
            dados.user_tipo = "default"
        }

        console.log(dados);

        try {
            await axios.post('http://localhost:3344/user', dados);
            setShowSucess(true)
            console.log('foi mlk');
            setLog(true)
            setTimeout(() => {
                setShowSucess(false)
            }, 2000);
            navigate('/cadastro')
        } catch (error) {
            if (error instanceof Error) {
                console.error('Erro na requisição POST:', error.message);
            } else if (axios.isAxiosError(error)) {
                // Verificar se o erro é do Axios (opcional)
                if (error.response) {
                    console.error('Erro na requisição POST:', error.response.status);
                } else if (error.request) {
                    console.error('Erro na requisição POST:', error.request);
                } else {
                    console.error('Erro desconhecido na requisição POST');
                }
            } else {
                console.error('Erro desconhecido na requisição POST');
            }
        }
    }

    const handleclick = async () => {
        await cadastrarUsuario(dados)
        console.log('testando');

    }



    return (
        <>
            {showSucess && <Sucess />}

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
                            Escolha seu tipo de usuário disponivel:
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
                                        <MenuItem value="Usuário Padrão">
                                        <em>Usuário Padrão</em>
                                    </MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </Container>

                    <Container sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: 10
                    }}>
                        <Balancer>
                        <Typography component='span' variant='span' sx={{
                            fontSize: {
                                xs: '2.5vw',  // (7.5 / 1200) * 600
                                sm: '2vw',  // (7.5 / 1200) * 900
                                md: '2vw',  // (7.5 / 1200) * 1200
                                lg: '1vw',
                                xl: '1vw',  // Manter o mesmo tamanho de lg para xl
                            },
                            textAlign: 'center'
                        }}>
                            Seu tipo de usuário definirá qual cartão poderá usar e a qual instituição estará atrelado, lembrando que a troca de tipo só ocorrerá no pedido do cartão e após isso será definitivo até o cancelamento do mesmo.
                        </Typography>
                        </Balancer>
                    </Container>
                    <Container sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: 3
                    }}>
                        <Btn name={"Confirmar"} route={''} bc={verify ? 'white' : undefined} fun={handleclick} bch={verify ? 'white' : undefined} />
                    </Container>
                </Card>
            </Box>
        </>
    )
}

export default Tipo
