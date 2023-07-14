import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import Balancer from "react-wrap-balancer";
import ModalContext from "../../context/modalcontext";
import colors from "../../assets/colors";
import theme from "../../assets/theme";
import rafael from "../../assets/rafael.jpg"
import thamyres from "../../assets/thamyres.jpg"
import jm from "../../assets/jm.png"
import maia from "../../assets/maia.jpg"
import igao from "../../assets/igao.png"


function EquipeEasyPass() {
    const { verify } = React.useContext(ModalContext);

    const cards = [
        {nome: 'Rafael', img: rafael},
        { nome: 'João Marcelo', img: jm },
        { nome: 'Thamyres', img: thamyres },
        { nome: 'Igor', img: igao },
        { nome: 'Maia', img: maia },
    ]

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                [theme.breakpoints.down('md')]: {
                    width: '80vw',
                    flexWrap: 'wrap',

                },
            }}
        >
            {cards.map((card, index) => (
            <Card
                sx={{
                    width: '20vw',
                    mr: '20px',
                    ml: '20px',
                    mb: '20px',
                    [theme.breakpoints.down('md')]: {
                        maxHeight: '30vh',
                        flexWrap: 'wrap'
                    },
                }}
            >
                    <CardActionArea sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        textAlign: 'center',
                    }}> 
                    <CardMedia component="img" height="140" image={card.img} sx={{
                            [theme.breakpoints.down('md')]: {
                                maxHeight: '15vh',
                            },
                    }} />
                    <CardContent sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            textAlign: 'center',
                            width: '100%',
                            height: '100%',
                            [theme.breakpoints.down('md')]: {
                                maxHeight: '10vh',
                            },
                    }}>
                        <Balancer>
                            <Typography
                                sx={{
                                    fontWeight: 'bold',
                                    color: verify ? colors.tc : 'white',
                                        fontSize: { xs: '3vw', sm: '2.5vw', md: '2w', lg: '1.5vw', xl: '1.5vw' }, 
                                        textAlign: 'center',
                                        width: '90%',
                                }}
                            >
                                    {card.nome}
                            </Typography>
                        </Balancer>
                    </CardContent>
                </CardActionArea>
            </Card>
            ))}
        </Box>
    );
}


function AgradecimentosAnderson() {
    const { verify } = React.useContext(ModalContext);

    return (
        <Balancer>
            <Typography gutterBottom variant="h5" component="div">
            </Typography>
            <Typography sx={{ color: verify ? 'black' : 'white' }}>
            </Typography>
        </Balancer>
  );
}

function PorqueEasyPass() {
    const { verify } = React.useContext(ModalContext);

    return (
        <Balancer>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: verify ? colors.tc : 'white' }}>
                Volta Redonda,
            </Typography>
            <Typography sx={{ color: verify ? 'black' : 'white' }}>
                É uma cidade com grande problemas mobilísticos, o transporte publico é precário, as empresas estão falidas e se insistem em continuar a funcionar por apoio da prefeitura. O sistema do SindPass é retrógrado em relação as demais cidades, sendo pouco transparente, burocrático e sem atendimento ao cidadãos. Nisso nasce a EasyPass com o objetivo de desenvolver essa área de transporte.
            </Typography>
        </Balancer>
  );
}

function AgradecimentosLuciane() {
    const { verify } = React.useContext(ModalContext);

    return (
        <Balancer>
            <Typography gutterBottom variant="h5" component="div">
            </Typography>
            <Typography sx={{ color: verify ? 'black' : 'white' }}>
            </Typography>
        </Balancer>
  );
}

function Objetivo() {
    const { verify } = React.useContext(ModalContext);

    return (
        <>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}> 
        <Balancer>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', mt: '40px', color: verify ? colors.tc : 'white' }}>
                Praticidade
            </Typography>
                    <Typography sx={{ color: verify ? 'black' : 'white' }}>
                Criar sistemas praticos de recargas, gerenciamento e atendimento ao usuário.
            </Typography>
        </Balancer>
            <Balancer>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', mt: '40px', color: verify ? colors.tc : 'white' }}>
                    Transparência
                </Typography>
                    <Typography sx={{color: verify ? 'black' : 'white' }}>
                    Um gerenciamento transparente com o usuário sobre as suas informações.
                </Typography>
            </Balancer>
            <Balancer>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold', mt: '40px', color: verify ? colors.tc : 'white' }}>
                    Avanços
                </Typography>
                    <Typography  sx={{ mb: '40px', color: verify ? 'black' : 'white' }}>
                    Trazer os avanços tecnológicos para desfruto dos nossos clientes.
                </Typography>
                </Balancer></Box>
        </>
  );
}

function AgradecimentosHenrique() {
    const { verify } = React.useContext(ModalContext);

    return (
        <Balancer>
            <Typography gutterBottom variant="h5" component="div">
            </Typography>
            <Typography   color={verify ? 'black' : 'white'}>
            </Typography>
        </Balancer>
  );
}

export {EquipeEasyPass, Objetivo, AgradecimentosAnderson, AgradecimentosLuciane, AgradecimentosHenrique, PorqueEasyPass}