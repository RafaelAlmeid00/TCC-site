
import {Box, Container, Link} from "@mui/material";
import Title from "../title";
import Frase from "../frase";
import Subtitle from "../subtitle";
import Img from "../img";
import Balancer from 'react-wrap-balancer'
import { Slide } from "react-awesome-reveal";


function Section1() {


    return (
    <>
    <Box sx={{
        mt: "10vh",
        height: '90vh',
        width: '100%',
        background: 'linear-gradient(to right, rgba(25, 118, 210, 1) 35%, rgba(25, 118, 210, 0.9) 40%, rgba(25, 118, 210, 0.8) 45%, rgba(25, 118, 210, 0.7) 50%, rgba(25, 118, 210, 0.6) 55%, rgba(25, 118, 210, 0.5) 60%, rgba(25, 118, 210, 0.4) 65%, rgba(25, 118, 210, 0.3) 70%, rgba(25, 118, 210, 0.2) 75%, rgba(25, 118, 210, 0.1) 80%)',
    }}>
        <Container sx={{
            width: '50%',
            height: '100%',
            float: 'left',
        }}>
            <Slide direction="left">
                <Balancer>
                    <Title title="Viaje com a gente" textSize="58px" textColor="white">
                        <Subtitle />
                    </Title>
                <Frase textColor="white" textSize='20px' frase="Com o EasyPass tenha controle da sua viajem de forma autonoma e maior conforto para sair de casa. Será você no controle da sua viagem"/>
                </Balancer>
            </Slide>
            <Slide direction="up" >
            <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            mt: '60px',
            ml: '140px',
        }}>
          <Link href="/">
            <Img image='https://www.gympass.com/mep-assets/images/commons/button_ios_store.svg' height='50' width='160px'/>
          </Link>
          <Link href="/">
            <Img image='https://www.gympass.com/mep-assets/images/commons/button_android_store.svg' height='50' width='160px' ml='40px'/>
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
