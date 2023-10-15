import { Card, Container, Typography, TextField } from "@mui/material";
import ReactDOM from 'react-dom';
import React from "react";
import ModalContext from "../../../context/modalcontext";
import colors from "../../../assets/colors";
import { Balancer } from "react-wrap-balancer";
import { BtnHome } from "../../btns";
import axios from "axios";

function Pag(props: any) {
    const { userData } = React.useContext(ModalContext);
    const { verify } = React.useContext(ModalContext);
    const birthDate = new Date(userData ? userData.user_nascimento : '');
    const formattedBirthDate = birthDate.toISOString().substring(0, 10);
    const [inputValue, setInputValue] = React.useState<string>('5.00');
    const token = localStorage.getItem('token')
    const [venc, setVenc] = React.useState<string>('');
    const { onClose, load } = props;

    console.log('pagaaa', load);


    React.useEffect(() => {
        if (!load) {
            onClose()
        }
    }, [load])

    React.useEffect(() => {

        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

        const handleCliente = async () => {
            if (userData && userData.user_status == 'inativo') {
                onClose()
            }
            console.log(userData ? userData.user_idcli : '');
            try {
                const response = await axios.get('https://easypass-iak1.onrender.com/cliente/search', {
                    headers: {
                        'authorization': token
                    },
                    params: {
                        idcli: userData ? userData.user_idcli : ''
                    }
                });
                console.log(response);
                console.log(response.data);

            } catch (error: any) {
                if (error.response) {
                    console.log('Erro na resposta do servidor:', error.response.status);
                    console.log('Dados da resposta:', error.response.data);
                    onClose()
                } else if (error.request) {
                    console.log('Sem resposta do servidor:', error.request);
                    onClose()
                } else {
                    console.log('Erro ao configurar a solicitação:', error.message);
                    onClose()
                }
            }
        }
        handleCliente();
    }, [userData, token])


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = event.target.value;
        const numericValue = rawValue.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos

        if (numericValue.length <= 2) {
            setInputValue(`${numericValue.padStart(2)}`);
        } else {
            const integerPart = numericValue.slice(0, -2);
            const decimalPart = numericValue.slice(-2);
            setInputValue(`${integerPart}.${decimalPart}`);
        }
    };
    const handleCardClick = (event: any) => {
        // Prevent the click event from propagating when clicked inside the card
        event.stopPropagation();
    };

    React.useEffect(() => {
        console.log(inputValue);
        const currentDate = new Date();
        const threeDaysLater = new Date(currentDate);
        threeDaysLater.setDate(currentDate.getDate() + 3);
        const formattedDate = formatDate(threeDaysLater);
        setVenc(formattedDate);
        console.log(venc)
    }, [inputValue, venc]);

    function formatDate(date: any) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }



    const handlePay = async () => {
        console.log(userData ? userData.user_idcli : '');
        console.log(userData ? userData.user_CPF.slice(0, 6) : '');

        const pagamento = {
            customer: userData ? userData.user_idcli : '',
            billingType: 'UNDEFINED',
            value: parseFloat(inputValue),
            dueDate: venc,
            description: `Pagamento referente a R$${inputValue} de passsagem na EasyPass`,
            externalReference: userData ? userData.user_CPF.slice(0, 6) : '',
            interest: {
                value: 5
            },
            split: {
                walletId: "217fd70c-b561-43fc-989a-c2f10761277f",
                fixedValue: parseFloat(inputValue)
            },
            fine: {
                value: 20
            }
        }

        console.log(pagamento);
        try {
            const response = await axios.post('https://easypass-iak1.onrender.com/pagamento', {
                token: token,
                pagamento
            });
            console.log(response);
            console.log(response.data);
            console.log(response.data.pagamento);

            window.open(response.data.pagamento.invoiceUrl, '_blank');
        } catch (error: any) {
            if (error.response) {
                console.log('Erro na resposta do servidor:', error.response.status);
                console.log('Dados da resposta:', error.response.data);
            } else if (error.request) {
                console.log('Sem resposta do servidor:', error.request);
            } else {
                console.log('Erro ao configurar a solicitação:', error.message);
            }
        }
    }

    return ReactDOM.createPortal(
        <Container sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 3,
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
                    zIndex: 4, // Para garantir que o card fique acima de outros elementos
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
                        <TextField value={userData ? userData.user_CPF : ''} label="CPF" variant="outlined" fullWidth margin="normal" InputProps={{ readOnly: true }} />
                        <TextField value={userData ? userData.user_RG : ''} label="RG" variant="outlined" fullWidth margin="normal" InputProps={{ readOnly: true }} />
                        <TextField value={formattedBirthDate} label="Idade" variant="outlined" fullWidth margin="normal" InputProps={{ readOnly: true }} />
                        <TextField value={userData ? userData.user_email : ''} label="Email" variant="outlined" fullWidth margin="normal" InputProps={{ readOnly: true }} />
                        <TextField value={userData ? userData.user_cel : ''} label="Celular" variant="outlined" fullWidth margin="normal" InputProps={{ readOnly: true }} />
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
                            label="R$ - Valor"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={inputValue}
                            onChange={handleInputChange}
                            sx={{
                                mt: 5,
                                mb: 5
                            }}
                        />

                        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                            <BtnHome fun={handlePay} name={"Continuar"} cl={verify ? colors.pm : "white"} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} route={""} />
                        </Container>
                    </Container>
                </Container>


            </Card>
        </Container >,
        document.getElementById('portal-root') as Element
    );
}

export default Pag;
