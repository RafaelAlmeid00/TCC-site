import { Box, Container, useMediaQuery, Theme } from "@mui/material";
import Cards from "../card";
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";
import history from "../../assets/history.png";
import rota from "../../assets/map.jpg";
import pag from "../../assets/pay.png";
import order from "../../assets/order.png";
import {BtnsApp} from "../btns";
import ModalContext from "../../context/modalcontext";
import React from "react";
import { Bubbles3 } from "../bubbles";

export default function SectionService1() {
  const isMdOrBelow = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const cards = [
    {
      card: [
        {
          title: 'Histórico',
          text: 'Veja suas viagens feitas',
          image: history,
          wd: '200px',
        },
        {
          title: 'SAC',
          text: 'Resolva qualquer problema',
          ml: '50px',
          image: order,
          wd: '200px',
        },
        {
          title: 'Pagamento',
          text: 'Faça suas recargas online',
          ml: '50px',
          image: pag,
          wd: '200px',
        },
        {
          title: 'Rotas',
          text: 'Veja onde o ônibus vai passar',
          ml: '50px',
          image: rota,
          hg: '180px',
          wd: '200px',
        },
      ],
    },
  ];

  const cardsToRender = isMdOrBelow ? cards[0].card : cards[0].card.slice(0, -1);

  const cardVariants = {
    hover: {
      scale: 1.1, // Aumenta o tamanho em 10%
      y: [0, -10, 0], // Movimento de flutuação para cima e para baixo
      transition: {
        y: {
          repeat: Infinity, // Repete a animação infinitamente
          duration: 1,
        },
      },
    },
  };
  const { verify } = React.useContext(ModalContext);
  const { themes } = React.useContext(ModalContext);
  const { hasEntered } = React.useContext(ModalContext);


  const fundo = themes.palette.background.default
  return (
    <>
      <Box
        sx={{
          height: "88vh",
          width: "100vw",
          background: verify ? fundo : 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container
          sx={{
            height: {xs: '40%', sm: '40%', md: '60%', lg: "60%", xl: '60%'},
            width: "100vw",
            align: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "arrow",
            flexWrap: 'wrap',
            mt: {xs: 10, sm: 10, md: 10}
          }}
        >
          <Slide direction="left" triggerOnce={hasEntered}>
            {cardsToRender.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover" // Aplica as animações ao passar o mouse
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: "center",
                }}
              >
                <Cards
                  image={card.image}
                  ml={card.ml}
                  wd={card.wd}
                  title={card.title}
                  hg={card.hg}
                  text={card.text} 
                  mt={''}
                  />
              </motion.div>
            ))}
          </Slide>
        </Container>
        <Container
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "arrow",
            height: "20%",
            width: "100vw",
          }}
        >
          <Slide direction="up" triggerOnce={hasEntered}>
            <BtnsApp cl={verify ? 'white' : 'black'} mt="0" ml={undefined} mb={undefined} />
          </Slide>
        </Container>
        <Bubbles3 />
      </Box>
    </>
  );
}
