


import React from "react";
import ModalContext from "../../context/modalcontext";
import axios from "axios";
import { Sucess } from "../errosvalidations";
import { useNavigate } from "react-router-dom";
import { Balancer } from "react-wrap-balancer";
import { Box, Container, FormControl, InputBase, InputLabel, MenuItem, Select, Typography, styled } from "@mui/material";
import { Btn } from "../btns";
import PrivacyPolicy from "./PrivacyPolicy";
import CookiePolicy from "./Cookies.Policy";
import TermsAndConditions from "./TermsAndConditions";
import theme from "../../assets/theme";
import PortalAsaas from "./errorAssas";

interface Props {
    dados: {
        user_CPF: string;
        user_RG: string;
        user_nome: string;
        user_email?: string;
        user_senha?: string;
        user_nascimento: string;
        user_endCEP?: string;
        user_endUF?: string;
        user_endbairro?: string;
        user_endrua?: string;
        user_endnum?: string;
        user_endcomplemento?: string;
        user_endcidade?: string;
        user_tipo?: string;
        list_CPF_list_id?: string; // O '?' indica que a propriedade é opcional
        user_cel: string;
        user_idcli?: string;
    } | undefined
}

function Tipo({ dados }: Props) {
    const [ListCards, setListCards] = React.useState([{ name: '' }]);
    const { verify } = React.useContext(ModalContext);
    const [card, setCard] = React.useState('');
    const [listid, setLiistId] = React.useState({});
    const { setLog } = React.useContext(ModalContext);
    const [showSucess, setShowSucess] = React.useState(false);
    const [idcli, setId] = React.useState('');
    const [error, setError] = React.useState(false);

    const CriarCliente = async (card: any) => {

        if (dados) {
            const cliente = {
                name: dados.user_nome,
                cpfCnpj: dados.user_CPF,
                email: dados.user_email,
                address: `${dados.user_endcidade}, ${dados.user_endrua}`,
                addressNumber: dados.user_endnum,
                province: dados.user_endbairro,
                postalCode: dados.user_endCEP,
                externalReference: dados.user_CPF.slice(0, 6),
                groupName: card,
                mobilePhone: dados.user_cel
            }
            console.log(cliente)
            try {
                const response = await axios.post('https://easypass-iak1.onrender.com/cliente', { cliente })
                console.log(response.data.id);
                console.log(response);
                setId(response.data.id)
                console.log(response.data);
                console.log(idcli);
                
            } catch (error: any) {
                console.log(error.message)
                throw new Error("Erro ao criar cliente");
            }
        }
    }
    const handleChange = (event: { target: { value: string } }) => {
        setCard(event.target.value);
        console.log(card);

    };

    React.useEffect(() => {
        if (dados) {
            if ('user_CPF' in dados) {
                const cpf = String(dados.user_CPF)
                if (cpf) {
                    handleGetListCpf(cpf)
                }
            }
        }
    }, [dados])
    // Função para fazer a requisição ao servidor com o CPF
    const handleGetListCpf = async (cpf: string) => {
        const list_CPF = cpf
        const responsecpf = await axios.post('https://easypass-iak1.onrender.com/listcpf/search', { list_CPF: list_CPF })
        const result = responsecpf.data.objeto
        console.log(responsecpf);
        for (const objeto of result) {
            if ('list_id' in objeto && 'list_tipo' in objeto) {
                const listId = objeto.list_id;
                const listTipo = objeto.list_tipo;

                // Atualizar o estado idcli com listId e card com listTipo
                setLiistId(prevIdCli => ({
                    ...prevIdCli,
                    [listId]: listTipo
                }));
            }
        }
        const newListCards: { name: string }[] = [];

        if (responsecpf) {
            result.forEach((item: { list_tipo: string; list_CPF: string; list_id: string; }) => {
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
                }
            })
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
            if ('user_tipo' in dados) {
                dados.user_tipo = card;
            }
            if ('list_CPF_list_id' in dados) {
                if (card) {
                    const index = Object.values(listid).indexOf(card);
                    console.log(Object.values(listid).indexOf(card));
                    console.log(index);
                    
                    if (index !== -1) {
                      dados.list_CPF_list_id = Object.keys(listid)[index];
                      console.log(Object.keys(listid)[index]);
                      console.log(dados.list_CPF_list_id);
                      
                      
                    }
                  }
            }
        } else {
            if ('user_tipo' in dados) {
                dados.user_tipo = "default";
            }
        }

        if (idcli) {
            if ('user_idcli' in dados) {
                dados.user_idcli = idcli;
                console.log(idcli);
                
            }
        }

        console.log(dados);

        try {
            await CriarCliente(card);
            await axios.post('https://easypass-iak1.onrender.com/user', dados);
            setShowSucess(true)
            console.log('foi mlk');
            setLog?.(true)
            setTimeout(() => {
                setShowSucess(false)
                navigate('/Cadastro')
            }, 2000);
            console.log(dados);

        } catch (error) {
            if (error instanceof Error) {
                console.error('Erro na requisição POST:', error.message);
                if (error.message == 'Erro ao criar cliente') {
                    setError(true)
                }
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
        if (dados) {
            await cadastrarUsuario(dados)
            console.log('testando');
        }
    }


    console.log(idcli);
    console.log(card);
    return (
        <>
            {showSucess && <Sucess />}
            {error ? <PortalAsaas /> :
                <Box sx={{
                    background: verify ? '#121212' : '#F0F0FF',
                    height: "80vh",
                    width: "75vw",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: 5,
                    boxShadow: "0px 0px 10px 4px rgba(0, 0, 0, 0.4)",
                    display: "flex",
                    flexDirection: "column",
                    [theme.breakpoints.down('md')]: {
                        height: "60vh",
                    }
                }}>
                    <Container sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: 10
                    }}>
                        <Typography sx={{
                            fontSize: {
                                xs: '3vw',  // (7.5 / 1200) * 600
                                sm: '2.5vw',  // (7.5 / 1200) * 900
                                md: '2vw',  // (7.5 / 1200) * 1200
                                lg: '1vw',
                                xl: '1vw',  // Manter o mesmo tamanho de lg para xl
                            },
                            fontWeight: 'bold',
                            color: verify ? 'white' : 'black'
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
                                        <MenuItem key={card.name} value={card.name} >
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
                            <Typography component='span' sx={{
                                fontSize: {
                                    xs: '2.5vw',  // (7.5 / 1200) * 600
                                    sm: '2vw',  // (7.5 / 1200) * 900
                                    md: '2vw',  // (7.5 / 1200) * 1200
                                    lg: '1vw',
                                    xl: '1vw',  // Manter o mesmo tamanho de lg para xl
                                },
                                textAlign: 'center',
                                color: verify ? 'white' : 'black',
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
                        <Btn name={"Confirmar"} route={''} bc={verify ? 'white' : undefined} fun={handleclick} bch={verify ? 'white' : undefined} cl={undefined} vis={undefined} mb={undefined} />
                    </Container>

                    <Container sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        mt: 3,
                        mb: 5
                    }}>
                        <Typography sx={{
                            textAlign: 'center', mb: 1, mt: 2, color: '#666666', fontSize: {
                                xs: "2vw", // (7.5 / 1200) * 600
                                sm: "1.5vw", // (7.5 / 1200) * 900
                                md: "1.2vw", // (7.5 / 1200) * 1200
                                lg: "1vw",
                                xl: "1vw", // Manter o mesmo tamanho de lg para xl
                            },
                        }}>
                            Ao confirmar seu cadastro você aceita os seguintes termos:
                        </Typography>
                        <PrivacyPolicy color={'black'} />
                        <TermsAndConditions color={'black'} />
                        <CookiePolicy color={'black'} />
                    </Container>

                </Box>
            }
        </>
    )
}

export default Tipo
