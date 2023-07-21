import { Box, Card, Typography, Container, Skeleton } from "@mui/material";
import ModalContext from "../../../context/modalcontext";
import React from "react";
import axios from "axios";

export default function Buss() {
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const [routes, setRoutes] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const token = localStorage.getItem('token')
    const fundo = themes.palette.background.default

    React.useEffect(() => {
        async function SearchRT() {
            try {
                console.log('ta indo');
                console.log(token);

                const response = await axios.get('http://localhost:3344/routes')
                console.log(response);
                console.log('ta indo');
                console.log(response);

                if (response.data) {
                    const Cards = response.data
                    setRoutes(Cards)
                    console.log(response)
                    console.log(Cards);
                    setLoading(false)
                } else {
                    console.log('deu merda rapeize')
                }
            } catch (error) {
                console.log(error);

            }
        }
        SearchRT()
    }, [token])

    return (
        <>
            <Box id="section1" sx={{
                mt: '9.5vh',
                height: '90.5vh',
                width: '80vw',
                float: "right",
                background: verify ? fundo : 'white',
                position: "relative",
                overflow: "hidden",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                overflowY: 'scroll'
            }}>

                <Container sx={{
                    width: '80%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: 2,
                    mt: loading ? 0 : '55vh',
                }}>
                    {loading ? (
                        // Renderizar o Skeleton 10 vezes quando o loading for verdadeiro
                        Array.from({ length: 4 }).map((_, index) => (
                            <Skeleton key={index} variant="rounded" width={'80%'} height={'20%'} />
                        ))
                    ) : (
                        // Renderizar os cards das rotas quando o loading for falso
                        routes.map((card) => (
                            <Container
                                key={card.rote_id} // É importante definir uma chave única para cada elemento do map
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <Card
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "row",
                                        mt: 2,
                                        mb: 2,
                                        boxShadow: verify ? '1px 0px 3px white' : '2px 0px 5px 1px rgba(0, 0, 0, 0.6)',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Container
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "row",
                                        }}
                                    >
                                        <Container>
                                            <Typography sx={{ mt: 2, mb: 1 }}>{card.route_num}</Typography>
                                        </Container>
                                        <Container>
                                            <Typography sx={{ mt: 2, mb: 1 }}>{card.route_nome}</Typography>
                                        </Container>
                                    </Container>
                                </Card>
                            </Container>
                        ))
                    )}

                </Container>
            </Box>
        </>
    )
}