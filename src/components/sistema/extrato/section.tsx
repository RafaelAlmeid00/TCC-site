import { Box, Container, Divider, FormControl, Icon, IconButton, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import ModalContext from "../../../context/modalcontext";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import TuneIcon from "@mui/icons-material/Tune";
import colors from "../../../assets/colors";
import axios from "axios";
import { CreditCardOff, Paid } from "@mui/icons-material";
import React, { useState, useContext, useEffect } from 'react';
import { Link, To } from "react-router-dom";
import Loading from "../../loading";

const daysNames = [
    '1', '2', '3', '4', '5', '6',
    '7', '8', '9', '10', '11', '12',
    '13', '14', '15', '16', '17', '18',
    '19', '20', '21', '21', '22', '23',
    '24', '25', '26', '27', '28', '29',
    '30', '31'
];

const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

function organizePaymentsByMonthAndDay(payments: any[]) {
    // Define the type for organizedPayments
    const organizedPayments: {
        [year: number]: {
            [month: number]: {
                [day: number]: any[]; // Replace 'any' with the actual type of payment
            };
        };
    } = {};

    payments.forEach((payment: { dateCreated: string | number | Date; }) => {
        const paymentDate = new Date(payment.dateCreated);
        const year = paymentDate.getFullYear();
        const month = paymentDate.getMonth() + 1;
        const day = paymentDate.getDate() + 1;

        console.log(paymentDate);
        console.log(year);
        console.log(month);
        console.log(day);


        if (!organizedPayments[year]) {
            organizedPayments[year] = {};
        }
        if (!organizedPayments[year][month]) {
            organizedPayments[year][month] = {};
        }
        if (!organizedPayments[year][month][day]) {
            organizedPayments[year][month][day] = [];
        }

        organizedPayments[year][month][day].push(payment);
        console.log(organizedPayments[year][month][day]);

    });

    return organizedPayments;
}

export default function Ext() {
    const { verify, themes } = useContext(ModalContext);
    const fundo = themes.palette.background.default;
    const { userData } = useContext(ModalContext);
    const [menu, setMenu] = useState(0);
    const token = localStorage.getItem('token');
    const [pays, setPays] = useState(Object);
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const [year, setAge] = useState(anoAtual); // Estado para armazenar o valor selecionado
    const [hasReceived, setHasReceived] = useState(Boolean);
    const [hasPending, setHasPending] = useState(Boolean);
    const [hasOverdue, setHasOverdue] = useState(Boolean);

    const handleChange = (event: any) => {
        const selectedAge = event.target.value; // Obtém o valor selecionado no Select
        setAge(selectedAge); // Atualiza o estado com o valor selecionado
    }
    useEffect(() => {
        if (menu == 0) {
            const query = 'todos'
            handleCobranças(query);
        }
    }, [menu]);

    const handleCobranças = async (query: any) => {
        console.log(query);

        try {
            const response = await axios.post('https://easypass-iak1.onrender.com/pagamento/search', {
                params: {
                    idcli: userData && userData.user_idcli,
                    tipo: query
                }
            }, {
                headers: {
                    'authorization': token,
                },
            });

            const organizedPayments = organizePaymentsByMonthAndDay(response.data.Pagamentos.data);
            setPays(organizedPayments as unknown as null);
            console.log(organizedPayments);
            console.log(organizedPayments);
            console.log(organizedPayments);

            console.log(pays);

            const checkPayments = (payments: any) => {
                for (const pagamento of payments) {
                    if (pagamento.status === "RECEIVED") {
                        setHasReceived(true);
                    } else if (pagamento.status === "PENDING") {
                        setHasPending(true);
                    } else if (pagamento.status === "OVERDUE") {
                        setHasOverdue(true);
                    }
                }
            };

            const traverseObject = (obj: { [x: string]: any; }) => {
                for (const key in obj) {
                    if (Array.isArray(obj[key])) {
                        checkPayments(obj[key]);
                    } else if (typeof obj[key] === 'object') {
                        traverseObject(obj[key]);
                    }
                }
            };

            traverseObject(organizedPayments);

            console.log("Received: " + hasReceived);
            console.log("Pending: " + hasPending);
            console.log("Overdue: " + hasOverdue);

        } catch (error) {
            console.error(error);
        }
    }

    const handleMenu1 = () => {
        if (menu === 1) {
            setMenu(0);
        } else {
            setMenu(1);
            const query = 'RECEIVED'
            handleCobranças(query)
        }
    }

    const handleMenu2 = () => {
        if (menu === 2) {
            setMenu(0);
        } else {
            const query = 'PENDING'
            handleCobranças(query)
            setMenu(2);
        }
    }

    const handleMenu3 = () => {
        if (menu === 3) {
            setMenu(0);
        } else {
            const query = 'OVERDUE'
            handleCobranças(query)
            setMenu(3);
        }
    }

    return (
        <Box
            id="section1"
            sx={{
                minHeight: '100vh',
                maxHeight: '100%',
                width: "80vw",
                float: "right",
                background: verify ? fundo : "white",
                position: "relative",
            }}
        >
            <Container
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                    float: "left",
                    mt: 3,
                    mb: 5,
                }}
            >
                <TuneIcon
                    sx={{
                        mr: 2,
                        color: verify ? "white" : "black",
                    }}
                />
                <Typography
                    sx={{
                        color: verify ? colors.sc : colors.tc,
                        fontSize: "25px",
                        fontWeight: 700,
                    }}
                >
                    Extrato de Pagamento - {userData ? userData.user_nome : ''}
                </Typography>
            </Container>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    msFlexDirection: 'row',
                    width: "80%",
                    mt: 10,
                    gap: 5
                }}
            >
                {hasOverdue || hasPending || hasReceived
                    ?
                    (
                        <>
                            {hasReceived &&
                                (
                                    <>
                                        <IconButton onClick={handleMenu1}>
                                            <CreditScoreIcon />
                                        </IconButton>
                                        <Typography variant="body2" sx={{
                                            display: menu === 0 || menu === 2 || menu === 3 ? "none" : "flex",
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: verify ? "white" : "black",
                                            textAlign: "center",
                                            margin: 'auto 0',
                                            ml: -4
                                        }}>
                                            Pagamentos feitos
                                        </Typography>
                                    </>
                                )}
                            {hasPending &&
                                (
                                    <>
                                        <IconButton onClick={handleMenu2}>
                                            <AccessTimeFilledIcon />
                                        </IconButton>
                                        <Typography variant="body2" sx={{
                                            display: menu === 0 || menu === 1 || menu === 3 ? "none" : "flex",
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: verify ? "white" : "black",
                                            margin: 'auto 0',
                                            ml: -4
                                        }}>
                                            Pagamentos pendentes
                                        </Typography>
                                    </>
                                )}
                            {hasOverdue &&
                                (
                                    <>
                                        <IconButton onClick={handleMenu3}>
                                            <CreditCardOff />
                                        </IconButton>
                                        <Typography variant="body2" sx={{
                                            display: menu === 0 || menu === 1 || menu === 2 ? "none" : "flex",
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: verify ? "white" : "black",
                                            margin: 'auto 0',
                                            ml: -4
                                        }}>
                                            Pagamentos vencidos
                                        </Typography>
                                    </>
                                )}
                        </>
                    )
                    : (
                        <Typography sx={{
                            color: verify ? 'white' : 'black'
                        }}> Não há pagamentos</Typography>
                    )}
            </Container>

            <Container sx={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 'auto'
            }}>
                <Divider orientation="horizontal" variant="middle" flexItem sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: '100%',
                    ml: 5,
                    mr: 5,
                    mt: 2,
                    mb: 2
                }} />
            </Container>

            {
                pays[year] ? (
                    <>
                        <Container key={year} sx={{ width: '100%', mt: 2 }}>
                            <Container sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "90%",
                                mt: 2,
                            }}>
                                <FormControl variant="standard" sx={{ mt: 5, minWidth: 120 }}>
                                    <InputLabel id={`year-select-label-${year}`}>Ano</InputLabel>
                                    <Select
                                        labelId={`year-select-label-${year}`}
                                        id={`year-select-${year}`}
                                        value={year}
                                        onChange={handleChange}
                                        label="Ano"
                                    >
                                        {year ? (
                                            Object.keys(pays).map((year) => (
                                                <MenuItem key={year} value={year}>
                                                    {year}
                                                </MenuItem>
                                            ))
                                        ) : (
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                            </Container>
                        </Container>


                        {Object.keys(pays[year]).reverse().map((month) => (
                            <Container key={month} sx={{ width: '100%', mt: 2 }}>
                                <Container sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "94%",
                                    mt: 4,
                                    mb: 2,
                                }}>
                                    <Typography variant="body1" sx={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        width: "100%",
                                        fontWeight: 'bold',
                                        color: verify ? "white" : "black",
                                        fontSize: 20
                                    }}>
                                        {monthNames[parseInt(month, 10) - 1]}
                                    </Typography>
                                </Container>

                                {Object.keys(pays[year][month]).reverse().map((day) => (
                                    <Container key={day} sx={{ width: '100%', mt: 2 }}>
                                        <Container sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: "100%",
                                            mt: 2,
                                            mb: 2,
                                        }}>
                                            <Typography variant="body2" sx={{
                                                display: "flex",
                                                justifyContent: "flex-start",
                                                alignItems: "center",
                                                width: "100%",
                                                color: verify ? "white" : "black",
                                                fontSize: 12
                                            }}>
                                                {daysNames[parseInt(day, 10)]} {monthNames[parseInt(month, 11)]} {year}
                                            </Typography>
                                        </Container>
                                        <Container sx={{ width: '100%' }}>
                                            <Divider orientation="horizontal" variant="middle" flexItem sx={{ ml: 5, mr: 5, mt: 2, mb: 2 }} />
                                        </Container>
                                        <Container
                                            sx={{
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}>
                                            {pays[year] && pays[year][month] && pays[year][month][day] ? (
                                                pays[year][month][day].map((payment: {
                                                    id: React.Key | null | undefined;
                                                    status: string;
                                                    dateCreated: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
                                                    dueDate: any;
                                                    invoiceUrl: To;
                                                    value: any;
                                                }) =>
                                                    <Container key={payment.id} sx={{
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        width: "100%",
                                                        flexDirection: 'row',
                                                        mt: 2,
                                                        mb: 2,
                                                    }}>
                                                        <Container sx={{
                                                            display: 'flex',
                                                            justifyContent: 'flex-start',
                                                            alignItems: 'center',
                                                            width: '30%',
                                                            padding: 3,
                                                            flexDirection: 'column',
                                                            marginLeft: 5,
                                                            marginRight: 5,
                                                        }}>
                                                            <Icon sx={{
                                                                borderRadius: '50%',
                                                                border: '1px solid transparent',
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                padding: 3,
                                                            }}>
                                                                <Paid style={{
                                                                    fontSize: 40,
                                                                    color:
                                                                        payment.status === "OVERDUE"
                                                                            ? 'red'
                                                                            : payment.status === "PENDING"
                                                                                ? "yellow"
                                                                                : payment.status === "RECEIVED"
                                                                                    ? "green"
                                                                                    : payment.status === "CONFIRMED"
                                                                                        ? "green"
                                                                                        : undefined, // Add this line to handle other cases
                                                                }} />
                                                            </Icon>
                                                            <Container sx={{
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                width: '100%',
                                                            }}>
                                                            </Container>
                                                        </Container>

                                                        <Divider orientation="vertical" variant="middle" flexItem sx={{ ml: 5, mr: 5 }} />

                                                        <Container sx={{
                                                            width: '70%',
                                                            display: "flex",
                                                            justifyContent: "flex-start",
                                                            alignItems: "flex-start",
                                                            flexDirection: 'column',
                                                            padding: 5,
                                                            marginLeft: 5,
                                                            marginRight: 5,
                                                            gap: 2,
                                                        }}>
                                                            <Container sx={{
                                                                display: "flex",
                                                                flexDirection: 'row',
                                                                alignItems: "center",
                                                            }}>
                                                                <Typography variant="body1" sx={{
                                                                    fontSize: 15,
                                                                    fontWeight: 'bold',
                                                                    textAlign: 'left',
                                                                    color: verify ? 'white' : 'black',
                                                                }}>
                                                                    Data:
                                                                </Typography>
                                                                <Typography variant="body2" sx={{
                                                                    fontSize: 12,
                                                                    textAlign: 'left',
                                                                    ml: 1,
                                                                    color: verify ? 'white' : 'black',
                                                                }}>
                                                                    {payment.dateCreated}
                                                                </Typography>
                                                            </Container>
                                                            <Divider variant="middle" sx={{ width: '75%' }} />

                                                            <Container sx={{
                                                                display: "flex",
                                                                flexDirection: 'row',
                                                                alignItems: "center",
                                                            }}>
                                                                <Typography variant="body1" sx={{
                                                                    fontSize: 15,
                                                                    fontWeight: 'bold',
                                                                    textAlign: 'left',
                                                                    color: verify ? 'white' : 'black',
                                                                }}>
                                                                    Status:
                                                                </Typography>
                                                                <Typography variant="body2" sx={{
                                                                    fontSize: 12,
                                                                    textAlign: 'left',
                                                                    ml: 1,
                                                                    color: verify ? 'white' : 'black',
                                                                    display: "flex",
                                                                    flexDirection: 'column',
                                                                    textDecoration: 'none'
                                                                }}>
                                                                    {payment.status == "OVERDUE" ? `Vencido dia: ${payment.dueDate}` : (payment.status == "PENDING" ? "Pagamento pendente" : (payment.status == "RECEIVED" ? "Pagamento Realizado" : (payment.status == "CONFIRMED" && "Pagamento Confirmado")))}
                                                                    {payment.status == "PENDING" && <Link to={payment.invoiceUrl} style={{ marginTop: 2, color: verify ? 'white' : 'black', }}>Clique aqui para pagar!</Link>}
                                                                </Typography>
                                                            </Container>
                                                            <Divider variant="middle" sx={{ width: '75%' }} />

                                                            <Container sx={{
                                                                display: "flex",
                                                                flexDirection: 'row',
                                                                alignItems: "center",
                                                            }}>
                                                                <Typography variant="body1" sx={{
                                                                    fontSize: 15,
                                                                    fontWeight: 'bold',
                                                                    textAlign: 'left',
                                                                    color: verify ? 'white' : 'black',
                                                                }}>
                                                                    Recarga:
                                                                </Typography>
                                                                <Typography variant="body2" sx={{
                                                                    fontSize: 12,
                                                                    textAlign: 'left',
                                                                    ml: 1,
                                                                    color: verify ? 'white' : 'black',
                                                                }}>
                                                                    {`${payment.value}.00`}
                                                                </Typography>
                                                            </Container>
                                                        </Container>
                                                    </Container>
                                                ))
                                                : (
                                                    <p>a</p>
                                                )}
                                        </Container>
                                    </Container>
                                ))}
                            </Container>
                        ))}
                    </>
                ) : <Loading />
            }
        </Box >
    );
}
