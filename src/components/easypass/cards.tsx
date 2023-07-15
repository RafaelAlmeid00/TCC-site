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
            {cards.map((card) => (
            <Card
                sx={{
                    width: '20vw',
                    mr: '20px',
                    ml: '20px',
                    mb: '20px',
                    [theme.breakpoints.down('md')]: {
                        maxHeight: '30vh',
                        flexWrap: 'wrap',
                    },
                        [theme.breakpoints.only('xs')]: {
                            maxHeight: '20vh',
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
                            [theme.breakpoints.only('xs')]: {
                                maxHeight: '10vh',
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
                                    color: verify ? 'white' : 'black',
                                        fontSize: { xs: '3vw', sm: '2vw', md: '1.5w', lg: '1vw', xl: '1.5vw' }, 
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

    return (
        <Balancer>
            <Typography gutterBottom variant="h5" component="div">
            </Typography>
            <Typography sx={{ color: 'black' }}>
            </Typography>
        </Balancer>
  );
}

function PorqueEasyPass() {

    return (
        <Balancer>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: colors.tc }}>
                Volta Redonda,
            </Typography>
            <Typography sx={{ color:'black' }}>
                É uma cidade com grande problemas mobilísticos, o transporte publico é precário, as empresas estão falidas e se insistem em continuar a funcionar por apoio da prefeitura. O sistema do SindPass é retrógrado em relação as demais cidades, sendo pouco transparente, burocrático e sem atendimento ao cidadãos. Nisso nasce a EasyPass com o objetivo de desenvolver essa área de transporte.
            </Typography>
        </Balancer>
  );
}

function AgradecimentosLuciane() {

    return (
        <Balancer>
            <Typography gutterBottom variant="h5" component="div">
            </Typography>
            <Typography sx={{ color: 'black' }}>
            </Typography>
        </Balancer>
  );
}

function Objetivo() {

    return (
        <>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}> 
        <Balancer>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', mt: '40px', color: colors.tc }}>
                Praticidade
            </Typography>
                    <Typography sx={{ color: 'black' }}>
                Criar sistemas praticos de recargas, gerenciamento e atendimento ao usuário.
            </Typography>
        </Balancer>
            <Balancer>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', mt: '40px', color:colors.tc}}>
                    Transparência
                </Typography>
                    <Typography sx={{color: 'black' }}>
                    Um gerenciamento transparente com o usuário sobre as suas informações.
                </Typography>
            </Balancer>
            <Balancer>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold', mt: '40px', color: colors.tc }}>
                    Avanços
                </Typography>
                    <Typography  sx={{ mb: '40px', color: 'black' }}>
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