import Img from "../img";
import bus from "../../assets/bus.svg"
import ModalContext from "../../context/modalcontext";
import React from "react";
import theme from "../../assets/theme";
import { Slide } from "react-awesome-reveal";
import { Box, Container } from "@mui/material";

function SectionBus() {
  const { verify } = React.useContext(ModalContext);
  const { themes } = React.useContext(ModalContext);
  const { hasEntered } = React.useContext(ModalContext);
  const fundo = themes.palette.background.default

  return (
    <>
      <Box
        sx={{
          mt: -1,
          height: "60vh",
          width: '100vw',
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'end',
          background: verify ? fundo : 'white',
          [theme.breakpoints.down('md')]: {
            height: "20vh",
          },
        }}
      >
        <Container sx={{
          ml: '10vw'
        }}>
          <Slide direction="right" triggerOnce={hasEntered}>
        <Img image={bus} height='70%' width='100vw' ml={undefined} mr={undefined}/>
          </Slide>
        </Container>
      </Box>
    </>
  );
}

export default SectionBus;
