import { Box, Container } from "@mui/material";
import Cards from "../card";
import { motion } from "framer-motion";
import simplicidade from "../../assets/simplicidade.svg";
import cad from "../../assets/cadastro.svg";
import pobre from "../../assets/pobre.svg";
import net from "../../assets/internet.svg";
import configs from "../../assets/configs.svg";
import { Slide } from "react-awesome-reveal";
import {BtnsApp} from "../btns";

export default function SectionApp2() {
  const CardsApp = [
    {
      card: [
        {
          title: "Cadastro Empresarial",
          text: "Sistema de cadastro simples para as escolas e seus matriculados",
          image: cad,
          hg: "100%",
          wd: "200px",
        },
        {
          title: "Pedido de cartão Online",
          text: "Peça seu cartão de forma 100% online sem nenhuma complicação",
          ml: "50px",
          image: simplicidade,
          hg: "100%",
          wd: "200px",
        },
        {
          title: "Gerenciamento de cartão",
          text: "Gerencie facilmente seus cartões a hora que você quiser",
          ml: "50px",
          image: configs,
          hg: "100%",
          wd: "200px",
        },
        {
          title: "Recarga 100% online",
          text: "Realize recargas a qualquer momento e de qualquer lugar",
          ml: "50px",
          image: net,
          hg: "100%",
          wd: "200px",
        },
        {
          title: "Pedido de cartão gratuito",
          text: "Peça seu cartão sem se preucupar em gastar nada e seja feliz",
          ml: "50px",
          mr: "50px",
          image: pobre,
          hg: "100%",
          wd: "200px",
        },
      ],
    },
  ];

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
  return (
    <>
      <Box
        sx={{
          height: "89.9vh",
          width: "100vw",
          // backgroundColor: "green",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container
          sx={{
            height: "80%",
            width: "100vw",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            // backgroundColor: "blue",
          }}
        >
          {CardsApp[0].card.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover" // Aplica as animações ao passar o mouse
            >
              <Cards
                image={card.image}
                mt={undefined}
                ml={card.ml}
                hg={card.hg}
                wd={card.wd}
                title={card.title}
                text={card.text}
              />
            </motion.div>
          ))}
        </Container>
        <Container
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "arrow",
            // backgroundColor: "red",
            height: "20%",
            width: "100vw",
          }}
        >
          <Slide direction="up">
            <BtnsApp cl="black" mt="0" ml={undefined} mb={undefined} />

          </Slide>
        </Container>
      </Box>
    </>
  );
}
