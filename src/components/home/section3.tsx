
import { Box, Card, Container, Link, Typography } from "@mui/material";
import colors from "../../assets/colors";
import Img from "../img";
import { Balancer } from "react-wrap-balancer";
import theme from "../../assets/theme";
import { createTheme } from '@mui/material/styles';
import React from "react";
import ModalContext from "../../context/modalcontext";

function Section3() {
  const { verify } = React.useContext(ModalContext);
  const { themes } = React.useContext(ModalContext);

  const fundo = themes.palette.background.default

  return (
    <>
      <Box sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        background: verify ? fundo : 'white',
      }}>
        <Balancer> 

        <Container sx={{
          width: '100vw',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 5,
          [theme.breakpoints.down('md')]: {
            mt: 0,
          },
        }}>
            <Typography sx={{ color: verify ? colors.sc : colors.tc, 
            fontSize: { xs: '4vw', sm: '4vw', md: '4vw', lg: '3vw', xl: '3vw' }, 
            fontWeight: 'bold', 
            textAlign: 'center',
            [theme.breakpoints.down('md')]: {
              textAlign: 'center',
              width: '100vw',
            },
        }}>
            Ache polos do EasyPass perto de você
          </Typography>
        </Container>
        </Balancer>

        <Container sx={{
          width: '100%',
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: '20px',
          [theme.breakpoints.down('md')]: {
            mt: 0
          },
        }}>
          <Card sx={{
            backgroundColor: "#9d9d9d",
            width: '70%',
            height: '100%',
            border: '1px solid',
            borderColor: colors.sc,
            borderRadius: '20px'
          }}>
            <Link href="https://www.google.com/maps/place/FAETEC+Volta+Redonda/@-22.487799,-44.0725387,17z/data=!4m14!1m7!3m6!1s0x9ebd1700000001:0xe7458888a0206e3b!2sFAETEC+Volta+Redonda!8m2!3d-22.487799!4d-44.07035!16s%2Fg%2F1tt0sbws!3m5!1s0x9ebd1700000001:0xe7458888a0206e3b!8m2!3d-22.487799!4d-44.07035!16s%2Fg%2F1tt0sbws" underline="none">
              <Img image="https://i.imgur.com/g2wSiUC.png" height="100%" width="100%" ml={undefined} mr={undefined} />
            </Link>
          </Card>
        </Container>
        <Balancer>
          <Typography sx={{
            fontSize: '10px',
            mt: '60px',
            fontWeight: 'bold',
            opacity: '0.5',
            color: verify ? "white" : 'black',
            width: '100%',
            textAlign: 'center',
            mb: 10,
            [theme.breakpoints.down('sm')]: {
              witdth: '100%'
            },
          }}>
            *EasyPass é um benefício individual, com os preços variando de acordo com cada tipo de usuário. Os envios dos cartões são referentes a localização cadastrada no seu perfil. Para alunos e trabalhadores, os usuários devem averiguar dúvidas e pedidos de registro com as instituições. Faça seu cadastro no nosso site ou em nosso app para ver nossos serviços.
          </Typography>
        </Balancer>
      </Box>
    </>
  );
}

export default Section3;
