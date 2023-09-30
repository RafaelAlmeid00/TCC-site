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

                const response = await axios.post('https://easypass-iak1.onrender.com/routes/all', {
                    token: token
                });
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
        if (routes.length > 0) {
            console.log('já foi pego');

        } else {
            SearchRT()
        }
    }, [token])

    console.log(routes);
    

    return (
        <>
            <Box
                id="section1"
                sx={{
                    mt: '9vh',
                    width: '80vw',
                    float: "right",
                    background: verify ? fundo : 'white',
                    position: "relative",
                    overflow: "hidden",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: 'auto',
                }}
            >
                <Container sx={{
                    mt: 5,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                {loading ? (
                    Array.from({ length: 4 }).map((_, index) => (
                        <Skeleton key={index} variant="rounded" width={'80%'} height={'20%'} />
                    ))
                ) : (
                        routes.map((card) => (
                            <>
                            <Card
                                key={card.rote_id} // É importante definir uma chave única para cada elemento do map
                                sx={{
                                    width: "80%",
                                    height: '15vh',
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "row",
                                    boxShadow: verify ? '0px 0px 4px 0px white' : '0px 0px 8px 1px rgba(0, 0, 0, 0.6)',
                                    cursor: 'pointer',
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
                                        <Typography >{card.route_num}</Typography>
                                    </Container>
                                    <Container>
                                        <Typography >{card.route_nome}</Typography>
                                    </Container>
                                </Container>
                            </Card>
                            <br/>
                            </>
                        )))}
                </Container>
            </Box>

        </>
    )
}