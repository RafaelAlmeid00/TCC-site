import { Card, Container, Typography, TextField, Button } from "@mui/material";
import ReactDOM from 'react-dom';
import { BuscarCliente, Deccode } from "../FrontDecoded";
import React from "react";
import ModalContext from "../../../context/modalcontext";
import colors from "../../../assets/colors";
import { Balancer } from "react-wrap-balancer";
import { BtnHome, BtnL } from "../../btns";
import axios from "axios";

function Pag({onClose}) {
    const [userData] = React.useState(Deccode())
    const { verify } = React.useContext(ModalContext);
    const birthDate = new Date(userData.user_nascimento);
    const formattedBirthDate = birthDate.toISOString().substring(0, 10);
    const [inputValue, setInputValue] = React.useState<string>('');
    const [cliente, setCliente] = React.useState(null);
    const token = localStorage.getItem('token')
    let idprod = ''
    const [int, setInt] = React.useState<string>('');

    React.useEffect(() => {
        async function fetchData() {
            const fetchedCliente = await BuscarCliente();
            if (fetchedCliente) {
                setCliente(fetchedCliente);
                console.log(cliente.id);
                
            }
        }
        fetchData();
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = event.target.value;
        const numericValue = rawValue.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos

        if (numericValue.length <= 2) {
            setInputValue(`${numericValue.padStart(2)}`);
        } else {
            const integerPart = numericValue.slice(0, -2);
            const decimalPart = numericValue.slice(-2);
            setInputValue(`${integerPart}.${decimalPart}`);
            setInt(`${integerPart}${decimalPart}`)
        }
    };
    const handleCardClick = (event) => {
        // Prevent the click event from propagating when clicked inside the card
        event.stopPropagation();
    };

    React.useEffect(() => {
        console.log(inputValue)
        console.log(produto);
        
    }, [inputValue])

    const produto = {
        name: 'Passagem EasyPass',
        active: true,
        description: 'As passagens EasyPass são de livre recarga pelo valor escolhido pelo usuáriob elas servem para todos os meios de passagens da EasyPass.',
        metadata: {
            cliente: cliente ? cliente.id : null,
            cpf: userData.user_CPF
        },
        default_price_data: {
            currency: 'brl',
            unit_amount: int
        }
    }

    const CriarCheckout = async () => {
        const clienteid = cliente.id
        const prodid = idprod
        console.log(idprod)
        console.log(prodid)

        try {
            const response = await axios.post('http://localhost:3344/checkout', { 
                token: token, 
                cliente: cliente ? clienteid : null,
                produto: prodid
            })
            console.log(response)
            console.log(response.data)

        } catch (error) {
            console.log(error.message)
        }
    }

    const CriarProduto = async () => {

        
            try {
                const response = await axios.post('http://localhost:3344/produto', { token: token, produto, cliente: cliente ? cliente.id : null })
                console.log(response);
                console.log(response.data);
                console.log(response.data.Produto);
                console.log(response.data.Produto.id);
                console.log(response.data.Produto.default_price);
                idprod = response.data.Produto.default_price
                await CriarCheckout()
                console.log('foi mlk')
            } catch (error) {
                console.log(error.message)
            }
        
    }

    return ReactDOM.createPortal(
        <Container sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 9998,
        }}
        onClick={onClose}
        >
        <Card 
        onClick={handleCardClick}
        sx={{
            width: '50%',
            height: 'auto',
            position: "fixed", // Alterado para "fixed" para que fique em uma camada superior
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Centraliza vertical e horizontalmente
            zIndex: 9999, // Para garantir que o card fique acima de outros elementos
            boxShadow: verify ? '0px 0px 5px 1px white' : '2px 0px 5px 1px rgba(0, 0, 0, 0.6)',
        }}>
            <Typography variant="h6" align="center" sx={{
                marginTop: 5, 
                color: verify ? colors.sc : colors.tc, 
                fontSize: 25,
                fontWeight: 'bold'
                }}>
                Recarga de Passagem
            </Typography>
            <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2 }}>
                    <Container sx={{ flex: 1, mb: 5 }}>
                        <Typography variant="body2" sx={{ marginTop: 5, marginBottom: 2, textAlign: 'center', fontSize: 14 }}>
                        Informações do cliente:
                    </Typography>
                    <TextField value={userData.user_CPF} label="CPF" variant="outlined" fullWidth margin="normal" InputProps={{ readOnly: true }} />
                    <TextField value={userData.user_RG} label="RG" variant="outlined" fullWidth margin="normal" InputProps={{ readOnly: true }} />
                    <TextField value={formattedBirthDate} label="Idade" variant="outlined" fullWidth margin="normal" InputProps={{ readOnly: true }} />
                    <TextField value={userData.user_email} label="Email" variant="outlined" fullWidth margin="normal" InputProps={{ readOnly: true }} />
                </Container>
                <Container sx={{ flex: 1 }}>
                    <Typography variant="h2" align="center" sx={{
                            color: verify ? 'white' : 'black',
                            fontSize: 20,
                            fontWeight: 'bold',
                            mb: 5
                        }}>
                            Passagem EasyPass
                        </Typography>
                        <Balancer>
                        <Typography variant="body2" sx={{ marginTop: 1, textAlign: 'center', fontSize: 10 }}>
                            As passagens EasyPass são de livre recarga pelo valor escolhido pelo usuáriob elas servem para todos os meios de passagens da EasyPass.
                        </Typography>
                        </Balancer>
                        <TextField
                            label="R$ - Valor da Recarga"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={inputValue}
                            onChange={handleInputChange}
                            sx={{
                                mb: 5,
                                mt: 5
                            }}
                        />
                        <Container sx={{ display: 'flex', justifyContent: 'center'}}>
                        <BtnHome fun={CriarProduto} name={"Confirmar"} cl={verify ? colors.pm : "white"} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} route={""} />
                    </Container>
                </Container>
            </Container>
            
            
        </Card>
        </Container >,
        document.getElementById('portal-root')
    );
}

export default Pag;
