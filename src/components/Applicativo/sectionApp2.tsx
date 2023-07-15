
import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import MapIcon from '@mui/icons-material/Map'; 
import colors from "../../assets/colors";
import ModalContext from "../../context/modalcontext";
import React from "react";
import { Balancer } from "react-wrap-balancer";
import { BtnApp } from "../btns";
import Divider from "../divider";
import theme from "../../assets/theme";
import AddCardIcon from '@mui/icons-material/AddCard';

export default function SectionApp2() {
  const { verify } = React.useContext(ModalContext);
  const { themes } = React.useContext(ModalContext);
  const { hasEntered } = React.useContext(ModalContext);

  return (
    <>
      <Box
        sx={{
          height: "90vh",
          width: "100vw",
          background: verify ? '#222222' : 'white',
          mt: -5
        }}
      >
        <Container sx={{
          width: '50%',
          height: '100%',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          float: 'left'
        }}>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "20%",
              float: 'left',
              [theme.breakpoints.down('lg')]: {
                display: 'none'
              },
            }}
          >
            <AddCardIcon sx={{
              fontSize: '10vw',
              color: verify ? 'white' : 'black',
            }}/>
          </Container>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              float: 'right',
              width: '80%'
            }}
          >
            <Balancer>
              <Typography
                sx={{
                  color: verify ? colors.sc : colors.tc,
                  mt: "10px",
                  fontSize: {
                    xs: "5vw", // (7.5 / 1200) * 600
                    sm: "4vw", // (7.5 / 1200) * 900
                    md: "3vw", // (7.5 / 1200) * 1200
                    lg: "3vw",
                    xl: "3vw", // Manter o mesmo tamanho de lg para xl
                  },
                  fontWeight: "bold",
                  textAlign: 'center'
                }}
              >
                Faça sua recarga
              </Typography>
              <Typography
                sx={{
                  mt: 5,
                  fontSize: {
                    xs: "2vw", // (7.5 / 1200) * 600
                    sm: "1.5vw", // (7.5 / 1200) * 900
                    md: "1.5vw", // (7.5 / 1200) * 1200
                    lg: "1.2vw",
                    xl: "1.2vw", // Manter o mesmo tamanho de lg para xl
                  },
                  height: "190px",
                  fontWeight: "bold",
                  textAlign: 'center',
                  color: verify ? 'white' : 'black',
                }}
              >
                Otimize seu dia e realize sua recarga totalmente online pelo nosso
                site e aplicativo, seja por pix, boleto ou débito automático
              </Typography>
            </Balancer>
            <BtnApp cl={verify ? 'white' : 'black'} title='Recarregar' />
          </Container>
        </Container>

        <Divider />

        <Container sx={{
          width: '50%',
          height: '100%',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          float: 'left',
        }}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width: '80%'
            }}
          >
            <Balancer>
              <Typography
                sx={{
                  color: verify ? colors.sc : colors.tc,
                  mt: "10px",
                  fontSize: {
                    xs: "5vw", // (7.5 / 1200) * 600
                    sm: "4vw", // (7.5 / 1200) * 900
                    md: "3vw", // (7.5 / 1200) * 1200
                    lg: "3vw",
                    xl: "3vw", // Manter o mesmo tamanho de lg para xl
                  },
                  fontWeight: "bold",
                }}
              >
                Veja suas rotas
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: {
                    xs: "2vw", // (7.5 / 1200) * 600
                    sm: "1.5vw", // (7.5 / 1200) * 900
                    md: "1.5vw", // (7.5 / 1200) * 1200
                    lg: "1.2vw",
                    xl: "1.2vw", // Manter o mesmo tamanho de lg para xl
                  },
                  height: "190px",
                  fontWeight: "bold",
                  mt: 5,
                  color: verify ? 'white' : 'black',
                }}
              >
                Em nosso aplicativo os usuários possuem todos, como a verificação das rotas dos ônibus para melhor planejar suas viagens.
              </Typography>
            </Balancer>
            <BtnApp cl={verify ? 'white' : 'black'} title='Rotas' />
          </Container>
          <Container
            sx={{
              mr: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "20%",
              [theme.breakpoints.down('lg')]: {
                display: 'none'
              },
            }}
          >
            <MapIcon sx={{
              fontSize: '10vw',
              color: verify ? 'white' : 'black',
            }}/>
          </Container>
        </Container>
      </Box>
    </>
  )
}
