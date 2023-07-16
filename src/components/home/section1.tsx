import { Box, Container, Typography } from "@mui/material";
import Img from "../img";
import Balancer from 'react-wrap-balancer'
import { Slide } from "react-awesome-reveal";
import theme from "../../assets/theme";
import { BtnsApp } from "../btns";
import handcell from "../../assets/handcell.png";
import colors from "../../assets/colors";
import React from "react";
import {Bubbles} from "../bubbles";
import ModalContext from "../../context/modalcontext";

function Section1() {
  const { verify } = React.useContext(ModalContext);
  const { themes } = React.useContext(ModalContext);
  const { hasEntered } = React.useContext(ModalContext);


  const fundo = themes.palette.background.default

  return (
    <>
      <Box id="section1" sx={{
        height: '88vh',
        width: '100vw',
        background: verify ? fundo : 'white',
        [theme.breakpoints.down('md')]: {
          mt: 0,
          height: '100vh',
        },
        position: "relative",
        overflow: "hidden",
      }}>

        <Container sx={{
          width: '50%',
          height: '100%',
          float: 'left',
          [theme.breakpoints.down('md')]: {
            float: 'none',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          },
        }}>
          <Slide direction="left" triggerOnce={hasEntered}>
            <Balancer>
              <Typography sx={{
                color: verify ? "white" : colors.tc,
                fontSize: {
                  xs: '8vw',  // (7.5 / 1200) * 600
                  sm: '4vw',  // (7.5 / 1200) * 900
                  md: '3.9vw',  // (7.5 / 1200) * 1200
                  lg: '3.5vw',
                  xl: '3.5vw',  // Manter o mesmo tamanho de lg para xl
                },
                mt: "50px", ml: "100px",
                fontWeight: 'bold',
                [theme.breakpoints.down('md')]: {
                  margin: '0 auto',
                  textAlign: 'center'
                },
              }}>
                Viaje com a gente
              </Typography>
              <Typography sx={{
                fontSize: {
                  xs: '6vw',  // (7.5 / 1200) * 600
                  sm: '3vw',  // (7.5 / 1200) * 900
                  md: '2.8vw',  // (7.5 / 1200) * 1200
                  lg: '2.5vw',
                  xl: '2.5vw',  // Manter o mesmo tamanho de lg para xl
                },
                display: "flex",
                flexDirection: "row",
                color: verify ? "white" : colors.tc,
                fontWeight: 'bold',
                ml: {
                  md: '115px',  // (7.5 / 1200) * 1200
                  lg: '130px',
                },
                [theme.breakpoints.down('md')]: {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  ml: 0,
                  mb: 5,
                },
              }}>Viaje com a <Typography
                component="span"
                sx={{
                  fontWeight: 'bold',
                  fontSize: {
                    xs: '6vw',  // (7.5 / 1200) * 600
                    sm: '3vw',  // (7.5 / 1200) * 900
                    md: '2.8vw',  // (7.5 / 1200) * 1200
                    lg: '2.5vw',
                    xl: '2.5vw',  // Manter o mesmo tamanho de lg para xl
                  },
                  ml: '10px',
                  background: '#0fcd88',
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                }}>EasyPass</Typography>
              </Typography>
              <Typography sx={{
                color: verify ? "white" : "black",
                fontSize: {
                  xs: '3.5vw',  // (7.5 / 1200) * 600
                  sm: '2vw',  // (7.5 / 1200) * 900
                  md: '2vw',  // (7.5 / 1200) * 1200
                  lg: '1.5vw',
                  xl: '1.4vw',  // Manter o mesmo tamanho de lg para xl
                },
                mt: "100px",
                ml: "100px",
                fontWeight: 'bold',
                [theme.breakpoints.down('md')]: {
                  margin: '0 auto',
                  textAlign: 'center',
                  fontWeight: 'bold',
                },
              }}>
                Com o EasyPass tenha controle da sua viajem de forma autonoma e maior conforto para sair de casa. Será você no controle da sua viagem
              </Typography>
            </Balancer>
          </Slide>
          <Slide direction="up" triggerOnce={hasEntered}>
            <BtnsApp cl={verify ? "white" : "black"} mt="60px" mb={undefined} />
          </Slide>
        </Container>
        <Container sx={{
          width: '50%',
          height: '100%',
          float: 'right',
          display: 'flex',
          alignItems: 'flex-end',
          [theme.breakpoints.down('md')]: {
            display: 'none'
          },
        }}>
          <Slide direction="up" triggerOnce={hasEntered}>
            <Img image={handcell} height="75%" ml="230px" width="auto" mr="auto" />
          </Slide>
        </Container>

        <Bubbles />
      </Box>
    </>
  );
}

export default Section1;
