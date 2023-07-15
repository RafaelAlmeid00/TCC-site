import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import { Slide } from "react-awesome-reveal";
import colors from "../../assets/colors";
import app2 from "../../assets/app2.png";
import {BtnsApp} from "../btns";
import {Img} from "../img";
import { Bubbles } from "../bubbles";
import theme from "../../assets/theme";
import { Balancer } from "react-wrap-balancer";
import ModalContext from "../../context/modalcontext";
import React from "react";

export default function SectionApp1() {

  const { verify } = React.useContext(ModalContext);
  const { themes } = React.useContext(ModalContext);
  const { hasEntered } = React.useContext(ModalContext);


  const fundo = themes.palette.background.default
  return (
    <>
      <Box sx={{
        height: '92vh',
        width: '100vw',
        background: verify ? fundo : 'white',
        [theme.breakpoints.down('md')]: {
          height: '100vh',
        },
        position: "relative",
        overflow: "hidden",
      }}>
          <Container
            sx={{
              width: "50%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              float: 'left',
            [theme.breakpoints.down('md')]: {
              width: "100%",
            },
            }}
          >
          <Slide direction="left" triggerOnce={hasEntered}>
              <Balancer>
              <Typography
                sx={{
                  color: verify ? colors.sc : colors.tc,
                  fontSize: {
                    xs: "8vw", // (7.5 / 1200) * 600
                    sm: "4vw", // (7.5 / 1200) * 900
                    md: "3vw", // (7.5 / 1200) * 1200
                    lg: "3vw",
                    xl: "3vw", // Manter o mesmo tamanho de lg para xl
                  },
                  fontWeight: 'bold',
                  textAlign: "center",

                }}
              >
                Baixe o App
              </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "3vw", // (7.5 / 1200) * 600
                      sm: "2.5vw", // (7.5 / 1200) * 900
                      md: "2vw", // (7.5 / 1200) * 1200
                      lg: "1.5vw",
                      xl: "2vw", // Manter o mesmo tamanho de lg para xl
                    },
                    fontWeight: 'bold',
                    mt: 3,
                    mb: 0.5,
                  color: verify ? 'white' : 'black',

                  }}
                >
                  Traga mais praticidade para sua vida!
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "2.5vw", // (7.5 / 1200) * 600
                      sm: "2vw", // (7.5 / 1200) * 900
                      md: "1.5vw", // (7.5 / 1200) * 1200
                      lg: "1.2vw",
                      xl: "2vw", // Manter o mesmo tamanho de lg para xl
                    },
                fontWeight: 'bold',
                  color: verify ? 'white' : 'black',

                  }}
                >
                  Recarregue seu cartão online, gerencie suas passagens, suas viagens e seja livre para ir onde quiser.
                </Typography>
            </Balancer>
            </Slide>
          <BtnsApp cl={verify ? 'white' : 'black'} mt="60px"mb={undefined} />
          </Container>
          <Container
            sx={{
              width: "50%",
              height: "100%",
              display: "flex",
              justifyContent: 'center',
              alignItems: 'end',
              float: 'right',
            [theme.breakpoints.down('md')]: {
              display: 'none'
            },
            }}
          >
          <Slide direction="up" triggerOnce={hasEntered}>
            <Img image={app2} height='300px' ml={undefined} mr={undefined} width='300px'/>
          </Slide>
          </Container>
          <Bubbles />
        </Box>
      
    </>
  );
}
