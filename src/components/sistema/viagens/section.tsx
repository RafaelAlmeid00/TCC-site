import React, { useContext, useState, useEffect } from "react";
import {
    Autocomplete,
    Box,
    Card,
    Container,
    Divider,
    FormControl,
    Icon,
    IconButton,
    Skeleton,
    TextField,
    Typography,
} from "@mui/material";
import ModalContext from "../../../context/modalcontext";
import { AccessTimeFilled, CreditCard, DirectionsBus } from "@mui/icons-material";
import { Balancer } from "react-wrap-balancer";
import colors from "../../../assets/colors";
import TuneIcon from "@mui/icons-material/Tune";
import axios from "axios";

export default function Viagens() {
    const { verify, themes } = useContext(ModalContext);
    const fundo = themes.palette.background.default;
    const { userData } = React.useContext(ModalContext);
    const [usos, setUsos] = React.useState([])
    const token = localStorage.getItem('token');
    const [menu, setMenu] = useState(0);
    const [menuitem, setMenuItem] = useState<object>([{}]);
    const [filteredData, setFilteredData] = useState<object>([{}]);
    const [selectedValue, setSelectedValue] = useState<any>(null);
    const [loadskeleton, setSkeleton] = useState<Boolean>(true);

    React.useEffect(() => {

        if (selectedValue) {
            if (menu == 1) {

                const filtered = usos.filter((item) => (
                    item.route_num === selectedValue.route_num
                ));
                setFilteredData(filtered);
                console.log(filteredData);
                console.log('ta aq');


            } else if (menu == 2) {
                const filtered = usos.filter((item) => (
                    item.val_data === selectedValue.data
                ));
                setFilteredData(filtered);
                console.log(filteredData);
                console.log('ta aq2');

            } else if (menu == 3) {
                const filtered = usos.filter((item) => (
                    item.card_card_id === selectedValue.card
                ));
                setFilteredData(filtered);
                console.log(filteredData);
                console.log('ta aq3');

            } else {
                console.log('menu nao selecionado');

            }
        } else {
            console.log('filtro nao escolhido');

        }

        console.log(filteredData);

    }, [menu, selectedValue])

    const handleMenu1 = () => {
        if (menu === 1) {
            setMenu(0);
        } else {
            setMenu(1);
            const uniqueRouteData = new Set();
            const tempArray: any = [];

            usos.forEach((item) => {
                const routeCombination = `${item.route_num}-${item.route_nome}`;
                if (!uniqueRouteData.has(routeCombination)) {
                    uniqueRouteData.add(routeCombination);
                    tempArray.push({
                        route_num: item.route_num,
                        route_nome: item.route_nome,
                    });
                }
            });
            setMenuItem(tempArray);
        }
    }


    const handleMenu2 = () => {
        if (menu === 2) {
            setMenu(0);
        } else {
            setMenu(2);
            const uniqueData = new Set();
            const tempArray: any = [];

            usos.forEach((item) => {
                const data = item.val_data;
                if (!uniqueData.has(data)) {
                    uniqueData.add(data);
                    tempArray.push({
                        data: item.val_data,
                    });
                }
            });
            setMenuItem(tempArray);

        }
    }

    const handleMenu3 = () => {
        if (menu === 3) {
            setMenu(0);
        } else {
            setMenu(3);
            const uniqueCard = new Set();
            const tempArray: any = [];

            usos.forEach((item) => {
                const card = item.card_card_id;
                if (!uniqueCard.has(card)) {
                    uniqueCard.add(card);
                    tempArray.push({
                        card: item.card_card_id,
                    });
                }
            });
            setMenuItem(tempArray);
        }
    }

    React.useEffect(() => {
        const handleUsos = async () => {
            setSkeleton(false)
            try {
                const response = await axios.post('https://easypass-iak1.onrender.com/usos', {
                    user_CPF: userData.user_CPF,
                }, {
                    headers: {
                        'authorization': token
                    }
                })
                console.log(response);
                setUsos(response.data)
                console.log(usos);
                setSkeleton(false)

                if (usos.length == 0) {
                    setSkeleton(true)
                }

            } catch (error) {
                console.log(error);
                setSkeleton(true)
            }
        }
        handleUsos()
    }, [])

    function traduzirMes(prefixoIngles: string): string | null {
        const mesesTraduzidos: { [key: string]: string } = {
            Jan: 'Janeiro',
            Feb: 'Fevereiro',
            Mar: 'Março',
            Apr: 'Abril',
            May: 'Maio',
            Jun: 'Junho',
            Jul: 'Julho',
            Aug: 'Agosto',
            Sep: 'Setembro',
            Oct: 'Outubro',
            Nov: 'Novembro',
            Dec: 'Dezembro',
        };

        const mesTraduzido = mesesTraduzidos[prefixoIngles];

        return mesTraduzido || null;
    }

    function traduzirDiaDaSemana(diaSemanaIngles: string): string | null {
        const diasSemanaTraduzidos: { [key: string]: string } = {
            Sun: 'Domingo',
            Mon: 'Segunda-feira',
            Tue: 'Terça-feira',
            Wed: 'Quarta-feira',
            Thu: 'Quinta-feira',
            Fri: 'Sexta-feira',
            Sat: 'Sábado',
        };

        const diaTraduzido = diasSemanaTraduzidos[diaSemanaIngles];

        return diaTraduzido || null;
    }

    function obterDataEHoraAtual(): string {
        const dataAtual = new Date();
        const diaSemana = dataAtual.toLocaleDateString('en-US', { weekday: 'short' });
        const mes = dataAtual.toLocaleDateString('en-US', { month: 'short' });
        const dia = dataAtual.getDate();
        const ano = dataAtual.getFullYear();
        const hora = String(dataAtual.getHours()).padStart(2, '0');
        const minutos = String(dataAtual.getMinutes()).padStart(2, '0');
        const segundos = String(dataAtual.getSeconds()).padStart(2, '0');

        const mêsBR = traduzirMes(mes)
        const semanaBR = traduzirDiaDaSemana(diaSemana)

        const dataEHoraAtual = {
            Data: `${semanaBR} - ${dia}, ${mêsBR}, ${ano}`,
            Hora: `${hora}:${minutos}:${segundos}`,
        }

        return dataEHoraAtual;
    }

    console.log(usos);

    console.log(filteredData);

    console.log(filteredData.length);

    console.log(selectedValue);

    return (
        <Box
            id="section1"
            sx={{
                mt: "9.5vh",
                height: "90.5vh",
                width: "80vw",
                float: "right",
                background: verify ? fundo : "white",
                position: "relative",
                overflow: "hidden",
                overflowY: "scroll",
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
                    mb: 5
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
                    Histórico de Viagens - {userData.user_nome}
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
                {usos && usos.length > 0
                    ?
                    (
                        <>
                            <IconButton onClick={handleMenu1}>
                                <DirectionsBus />
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
                                Ônibus da viagem
                            </Typography>

                            <IconButton onClick={handleMenu2}>
                                <AccessTimeFilled />
                            </IconButton>
                            <Typography variant="body2" sx={{
                                display: menu === 0 || menu === 1 || menu === 3 ? "none" : "flex",
                                fontSize: 14,
                                fontWeight: 600,
                                color: verify ? "white" : "black",
                                margin: 'auto 0',
                                ml: -4
                            }}>
                                Data da viagem
                            </Typography>
                            <IconButton onClick={handleMenu3}>
                                <CreditCard />
                            </IconButton>
                            <Typography variant="body2" sx={{
                                display: menu === 0 || menu === 1 || menu === 2 ? "none" : "flex",
                                fontSize: 14,
                                fontWeight: 600,
                                color: verify ? "white" : "black",
                                margin: 'auto 0',
                                ml: -4
                            }}>
                                Cartão usado
                            </Typography>
                        </>
                    ) : <Typography>Sem viagens feitas</Typography>}
            </Container >

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
            <Container sx={{ width: '100%', mt: 2 }}>
                <Container sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "90%",
                    mt: 2,
                }}>
                    <FormControl variant="standard" sx={{ mb: 5, mt: 5, minWidth: 120, display: menu == 0 ? 'none' : 'block' }}>
                        <Autocomplete
                            disablePortal
                            id="menu-item"
                            options={menuitem || []} // Certifique-se de que menuitem seja um array válido
                            getOptionLabel={(option: any) => {
                                if (menu === 1) {
                                    const route_num = option.route_num || ''; // Verifica se route_num está definido
                                    const route_nome = option.route_nome || ''; // Verifica se route_nome está definido
                                    return `${route_num} - ${route_nome}`;
                                } else if (menu === 2) {
                                    return option.data || ''; // Verifica se data está definido
                                } else if (menu === 3) {
                                    return option.card || ''; // Verifica se data está definido
                                }
                            }}
                            isOptionEqualToValue={(option, value) => {
                                if (menu === 1) {
                                    return (option.route_num === (value.route_num || '')) && (option[0]?.route_nome === (value[0]?.route_nome || ''));
                                } else if (menu === 2) {
                                    return option.data === (value.data || ''); // Verifica se data está definido
                                } else if (menu === 3) {
                                    return option.card === (value.card || ''); // Verifica se data está definido
                                }
                            }}
                            value={selectedValue}
                            onChange={(_, newValue) => {
                                setSelectedValue(newValue);
                            }}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Filtro" />}
                        />
                    </FormControl>
                </Container>
            </Container>

            <Container
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    float: "left",
                    mt: 3,
                    gap: 10
                }}
            >
                {usos && usos.length > 0 ?
                    (
                        <Card sx={{
                            width: "80%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            boxShadow: verify ? '0px 0px 4px 0px white' : '0px 0px 8px 1px rgba(0, 0, 0, 0.6)',
                        }}>
                            <Container sx={{
                                width: '30%',
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: 5,
                                flexDirection: 'column',
                                marginLeft: 5,
                                marginRight: 5,
                            }}>
                                <Icon sx={{
                                    borderRadius: '50%',
                                    border: '1px solid transparent',
                                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.6)',
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 10,
                                }}>
                                    <DirectionsBus sx={{
                                        fontSize: 100,
                                        color: verify ? colors.sc : colors.pm

                                    }} />
                                </Icon>
                                <Container sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: '100%'
                                }}>
                                    <Balancer>
                                        <Typography variant="body1" sx={{ fontSize: 18, textAlign: 'center', mt: 3 }}>
                                            {menu == 0 ? usos[0].route_num : (filteredData.length > 0 ? filteredData[0].route_num : '')}
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontSize: 12, textAlign: 'center', mt: 1 }}>
                                            {menu == 0 ? usos[0].route_nome : (filteredData.length > 0 ? filteredData[0].route_nome : '')}
                                        </Typography>
                                    </Balancer>
                                </Container>
                            </Container>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <Container sx={{
                                width: '70%',
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                                flexDirection: 'column',
                                padding: 5,
                                marginLeft: 5,
                                marginRight: 5,
                                gap: 2
                            }}>
                                <Container sx={{
                                    display: "flex",
                                    flexDirection: 'row',
                                    alignItems: "center",
                                }}>
                                    <Typography variant="body1" sx={{ fontSize: 18, textAlign: 'left' }}>
                                        Data:
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: 14, textAlign: 'left', ml: 1 }}>
                                        {menu == 0 ? usos[0].val_data : (filteredData.length > 0 ? filteredData[0].val_data : '')}
                                    </Typography>
                                </Container>
                                <Divider variant="middle" sx={{
                                    width: '75%'
                                }} />
                                <Container sx={{
                                    display: "flex",
                                    flexDirection: 'row',
                                    alignItems: "center",
                                }}>
                                    <Typography variant="body1" sx={{ fontSize: 18, textAlign: 'left' }}>
                                        Horário:
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: 14, textAlign: 'left', ml: 1 }}>
                                        {menu == 0 ? usos[0].val_horario : (filteredData.length > 0 ? filteredData[0].val_horario : '')}
                                    </Typography>
                                </Container>
                                <Divider variant="middle" sx={{
                                    width: '75%'
                                }} />
                                <Container sx={{
                                    display: "flex",
                                    flexDirection: 'row',
                                    alignItems: "center",
                                }}>
                                    <Typography variant="body1" sx={{ fontSize: 18, textAlign: 'left' }}>
                                        Passagem:
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: 14, textAlign: 'left', ml: 1 }}>
                                        {menu == 0 ? usos[0].val_gasto : (filteredData.length > 0 ? filteredData[0].val_gasto : '')}
                                    </Typography>
                                </Container>
                                <Divider variant="middle" sx={{
                                    width: '75%'
                                }} />
                                <Container sx={{
                                    display: "flex",
                                    flexDirection: 'row',
                                    alignItems: "center",
                                }}>
                                    <Typography variant="body1" sx={{ fontSize: 18, textAlign: 'left' }}>
                                        Cartão:
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: 14, textAlign: 'left', ml: 1 }}>
                                        {menu == 0 ? usos[0].card_card_id : (filteredData.length > 0 ? filteredData[0].card_card_id : '')}
                                    </Typography>
                                </Container>
                            </Container>
                        </Card>
                    ) : (
                        loadskeleton ? (
                            <Typography></Typography>
                        ) : (
                            <Skeleton variant="rounded" width={'80%'} height={350} sx={{ mb: 10 }} />
                        )
                    )}
                {usos && usos.length > 0 ? (
                    <Card
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            boxShadow: verify ? '0px 0px 4px 0px white' : '0px 0px 8px 1px rgba(0, 0, 0, 0.6)',
                            width: '80%',
                            height: 'auto',
                            gap: 1,
                            mb: 10
                        }}
                    >
                        {!selectedValue ? (
                            usos.slice(1, 100).map((viagem, index) => (
                                <Container
                                    key={index}
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Container
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            width: '50%',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <Icon
                                            sx={{
                                                borderRadius: '50%',
                                                border: '1px solid transparent',
                                                boxShadow: '0 0 5px rgba(0, 0, 0, 0.6)',
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                padding: 3,
                                            }}
                                        >
                                            <DirectionsBus
                                                sx={{
                                                    fontSize: 30,
                                                    color: verify ? colors.sc : colors.pm
                                                }}
                                            />
                                        </Icon>
                                        <Container
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                width: '100%',
                                                flexDirection: 'column'
                                            }}
                                        >
                                            <Balancer style={{ width: '100%' }}>
                                                <Typography variant="body1" sx={{ fontSize: 13, fontWeight: 'bold', width: '100%', textAlign: 'center', mt: 2, color: verify ? 'white' : 'black' }}>
                                                    {viagem.route_num}
                                                </Typography>
                                            </Balancer>
                                            <Balancer style={{ width: '100%' }}>
                                                <Typography component="span" sx={{ fontSize: 11, width: '100%', textAlign: 'center', mt: 2, color: verify ? 'white' : 'black' }}>
                                                    {viagem.route_nome}
                                                </Typography>
                                            </Balancer>
                                        </Container>
                                    </Container>
                                    <Divider orientation="vertical" variant="middle" flexItem sx={{
                                        ml: 5,
                                        mr: 5
                                    }} />
                                    <Container
                                        sx={{
                                            width: '70%',
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start",
                                            flexDirection: 'column',
                                            padding: 5,
                                            marginLeft: 5,
                                            marginRight: 5,
                                            gap: 2
                                        }}
                                    >
                                        <Container
                                            sx={{
                                                display: "flex",
                                                flexDirection: 'row',
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography variant="body1" sx={{ fontSize: 15, fontWeight: 'bold', textAlign: 'left', color: verify ? 'white' : 'black' }}>
                                                Data:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontSize: 12, textAlign: 'left', ml: 1, color: verify ? 'white' : 'black' }}>
                                                {viagem.val_data}
                                            </Typography>
                                        </Container>
                                        <Divider variant="middle" sx={{
                                            width: '75%'
                                        }} />
                                        <Container
                                            sx={{
                                                display: "flex",
                                                flexDirection: 'row',
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography variant="body1" sx={{ fontSize: 15, fontWeight: 'bold', textAlign: 'left', color: verify ? 'white' : 'black' }}>
                                                Horário:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontSize: 12, textAlign: 'left', ml: 1, color: verify ? 'white' : 'black' }}>
                                                {viagem.val_horario}
                                            </Typography>
                                        </Container>
                                        <Divider variant="middle" sx={{
                                            width: '75%'
                                        }} />
                                        <Container
                                            sx={{
                                                display: "flex",
                                                flexDirection: 'row',
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography variant="body1" sx={{ fontSize: 15, fontWeight: 'bold', textAlign: 'left', color: verify ? 'white' : 'black' }}>
                                                Passagem:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontSize: 12, textAlign: 'left', ml: 1, color: verify ? 'white' : 'black' }}>
                                                {viagem.val_gasto}
                                            </Typography>
                                        </Container>
                                    </Container>
                                </Container>
                            ))
                        ) : (
                            filteredData.slice(1, 100).map((viagem, index) => (
                                <Container
                                    key={index}
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Container
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            width: '50%',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <Icon
                                            sx={{
                                                borderRadius: '50%',
                                                border: '1px solid transparent',
                                                boxShadow: '0 0 5px rgba(0, 0, 0, 0.6)',
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                padding: 3,
                                            }}
                                        >
                                            <DirectionsBus
                                                sx={{
                                                    fontSize: 30,
                                                    color: verify ? colors.sc : colors.pm
                                                }}
                                            />
                                        </Icon>
                                        <Container
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                width: '100%',
                                                flexDirection: 'column'
                                            }}
                                        >
                                            <Balancer style={{ width: '100%' }}>
                                                <Typography variant="body1" sx={{ fontSize: 13, fontWeight: 'bold', width: '100%', textAlign: 'center', mt: 2, color: verify ? 'white' : 'black' }}>
                                                    {viagem.route_num ? viagem.route_num : ''}
                                                </Typography>
                                            </Balancer>
                                            <Balancer style={{ width: '100%' }}>
                                                <Typography component="span" sx={{ fontSize: 11, width: '100%', textAlign: 'center', mt: 2, color: verify ? 'white' : 'black' }}>
                                                    {viagem.route_nome ? viagem.route_nome : ''}
                                                </Typography>
                                            </Balancer>
                                        </Container>
                                    </Container>
                                    <Divider orientation="vertical" variant="middle" flexItem sx={{
                                        ml: 5,
                                        mr: 5
                                    }} />
                                    <Container
                                        sx={{
                                            width: '70%',
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start",
                                            flexDirection: 'column',
                                            padding: 5,
                                            marginLeft: 5,
                                            marginRight: 5,
                                            gap: 2
                                        }}
                                    >
                                        <Container
                                            sx={{
                                                display: "flex",
                                                flexDirection: 'row',
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography variant="body1" sx={{ fontSize: 15, fontWeight: 'bold', textAlign: 'left', color: verify ? 'white' : 'black' }}>
                                                Data:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontSize: 12, textAlign: 'left', ml: 1, color: verify ? 'white' : 'black' }}>
                                                {viagem.val_data ? viagem.val_data : ''}
                                            </Typography>
                                        </Container>
                                        <Divider variant="middle" sx={{
                                            width: '75%'
                                        }} />
                                        <Container
                                            sx={{
                                                display: "flex",
                                                flexDirection: 'row',
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography variant="body1" sx={{ fontSize: 15, fontWeight: 'bold', textAlign: 'left', color: verify ? 'white' : 'black' }}>
                                                Horário:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontSize: 12, textAlign: 'left', ml: 1, color: verify ? 'white' : 'black' }}>
                                                {viagem.val_horario ? viagem.val_horario : ''}
                                            </Typography>
                                        </Container>
                                        <Divider variant="middle" sx={{
                                            width: '75%'
                                        }} />
                                        <Container
                                            sx={{
                                                display: "flex",
                                                flexDirection: 'row',
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography variant="body1" sx={{ fontSize: 15, fontWeight: 'bold', textAlign: 'left', color: verify ? 'white' : 'black' }}>
                                                Passagem:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontSize: 12, textAlign: 'left', ml: 1, color: verify ? 'white' : 'black' }}>
                                                {viagem.val_gasto ? viagem.val_gasto : ''}
                                            </Typography>
                                        </Container>
                                    </Container>
                                </Container>
                            ))
                        )}
                    </Card>
                ) : (
                    loadskeleton ? (
                        <Typography></Typography>
                    ) : (
                        Array.from({ length: 5 }).map((_, index) => (
                            <Skeleton key={index} variant="rounded" width={'80%'} height={'30vh'} sx={{
                                mt: -4, mb: -4
                            }} />
                        ))
                    ))}

            </Container>
        </Box>
    );
}