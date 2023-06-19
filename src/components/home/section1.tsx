
import { Box, CardMedia, Container, Link, Typography, createTheme } from "@mui/material";
import Img from "../img";
import Balancer from 'react-wrap-balancer'
import { Slide } from "react-awesome-reveal";
import theme from "../../assets/theme";

function Section1() {


    return (
        <>
            <Box sx={{
                mt: "10vh",
                height: '90vh',
                width: '100%',
                background: 'linear-gradient(to right, rgba(25, 118, 210, 1) 35%, rgba(25, 118, 210, 0.9) 40%, rgba(25, 118, 210, 0.8) 45%, rgba(25, 118, 210, 0.7) 50%, rgba(25, 118, 210, 0.6) 55%, rgba(25, 118, 210, 0.5) 60%, rgba(25, 118, 210, 0.4) 65%, rgba(25, 118, 210, 0.3) 70%, rgba(25, 118, 210, 0.2) 75%, rgba(25, 118, 210, 0.1) 80%)',
                [theme.breakpoints.down('sm')]: {
                    mt: 0,
                    background: 'rgba(25, 118, 210, 1)',
                    height: '100vh',
                },
            }}>
                <Container sx={{
                    width: '50%',
                    height: '100%',
                    float: 'left',
                    [theme.breakpoints.down('sm')]: {
                        float: 'none',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    },
                }}>
                    <Slide direction="left">
                        <Balancer>
                            <Typography sx={{ color: 'white', 
                                fontSize: { xs: '2.0em', sm: '3.7em', md: '5em', lg: '3em', xl: '8em' }, 
                            mt: "50px", ml: "100px", 
                            fontWeight: 'bold', 
                                [theme.breakpoints.down('sm')]: {
                                    margin: '0 auto',
                                    textAlign: 'center'
                                },
                            }}>
                                Viaje com a gente
                            </Typography>
                            <Typography sx={{
                                fontSize: { xs: '1em', sm: '2em', md: '2em', lg: '1.5em', xl: '6em' }, 
                                display: "flex",
                                flexDirection: "row",
                                color: "white",
                                fontWeight: 'bold',
                                ml: 22,
                                [theme.breakpoints.down('sm')]: {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    ml: 0,
                                    mb: 5
                                },
                            }}>Viaje com a <Typography
                                component="span"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1em', sm: '2em', md: '2em', lg: '1em', xl: '6em' }, 
                                    ml: '10px',
                                    background: 'linear-gradient(to right, #0fcd88 50%, white 50%)',
                                    '-webkit-background-clip': 'text',
                                    '-webkit-text-fill-color': 'transparent',
                                }}>EasyPass</Typography>
                            </Typography>
                            <Typography sx={{ color: 'white',
                                fontSize: { xs: '1em', sm: '2em', md: '2em', lg: '1em', xl: '6em' }, 
                                mt: "100px", 
                                ml: "100px", 
                                fontWeight: '600', 
                                [theme.breakpoints.down('sm')]: {
                                    margin: '0 auto',
                                    textAlign: 'center'
                                },
                                }}>
                                Com o EasyPass tenha controle da sua viajem de forma autonoma e maior conforto para sair de casa. Será você no controle da sua viagem 
                            </Typography>
                        </Balancer>
                    </Slide>
                    <Slide direction="up" >
                        <Container sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            mt: '60px',
                            ml: '115px',
                            [theme.breakpoints.down('sm')]: {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    ml: 0,
                                    mt: 10
                                },
                        }}>
                            <Link href="/">
                                <CardMedia component="img" 
                                    image='https://www.gympass.com/mep-assets/images/commons/button_ios_store.svg'
                                    sx={{
                                        height: { xs: '4vh', sm: '3.7vh', md: '5vh', lg: '7.6vh', xl: '8vh' },
                                        width: { xs: '30vw', sm: '8.5vw', md: '10vw', lg: '11.76vw', xl: '8vh' },
                                    }}
                                />
                            </Link>
                            <Link href="/">
                                <CardMedia component="img" 
                                    image='https://www.gympass.com/mep-assets/images/commons/button_android_store.svg'
                                    sx={{
                                        height: { xs: '4vh', sm: '3.7vh', md: '5vh', lg: '7.6vh', xl: '8vh' },
                                        width: { xs: '30vw', sm: '8.5vw', md: '10vw', lg: '11.76vw', xl: '8vh' },
                                        ml: '40px',
                                    }}
                                />
                            </Link>
                        </Container>

                    </Slide>
                </Container>
                <Container sx={{
                    width: '50%',
                    height: '100%',
                    float: 'right',
                    display: 'flex',
                    alignItems: 'flex-end',
                    [theme.breakpoints.down('sm')]: {
                        display: 'none'
                    },
                }}>
                    <Slide direction="up">
                        <Img image="https://i.imgur.com/HTeP1qs.png" height="75%" ml="230px" width="auto" mr="auto" />
                    </Slide>
                </Container>
            </Box>
        </>
    );
}

export default Section1;
