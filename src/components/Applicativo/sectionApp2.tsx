import { Box, Card, CardMedia, Container, Link, Slider } from "@mui/material";
import Cards from "../card";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import simplicidade from "../../assets/simplicidade.svg";
import pobre from "../../assets/pobre.svg";
import net from "../../assets/internet.svg";
import configs from "../../assets/configs.svg";
import { Slide } from "react-awesome-reveal";
import BtnsApp from "../buttons/app";

export default function SectionApp2() {
  const CardsApp = [
    {
      card: [
        {
          title: "Cadastro Simples",
          text: "Sistema de cadastro simples para as escolas e seus matriculados",
          mt: "120px",
          image: "https://i.imgur.com/DAZYM3U.jpg",
          hg: "170px",
          wd: "200px",
        },
        {
          title: "Pedido de cartão Online",
          text: "Peça seu cartão de forma 100% online sem nenhuma complicação",
          mt: "120px",
          ml: "50px",
          image: simplicidade,
          hg: "170px",
          wd: "200px",
        },
        {
          title: "Gerenciamento de cartão",
          text: "Gerencie facilmente seus cartões a hora que você quiser",
          ml: "50px",
          mt: "120px",
          image: configs,
          hg: "170px",
          wd: "200px",
        },
        {
          title: "Recarga 100% online",
          text: "Realize recargas a qualquer momento e de qualquer lugar",
          ml: "50px",
          mt: "120px",
          image: net,
          hg: "170px",
          wd: "200px",
        },
        {
          title: "Pedido de cartão gratuito",
          text: "Peça seu cartão sem se preucupar em gastar nada e seja feliz",
          ml: "50px",
          mr: "50px",
          mt: "120px",
          image: pobre,
          hg: "170px",
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
          height: "99.99vh",
          width: "100%",
        }}
      >
        <Container
          sx={{
            height: "80%",
            width: "100%",
            align: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "arrow",
            mb: "40px",
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
                mt={card.mt}
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
            align: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "arrow",
          }}
        >
          <Slide direction="up">
            <BtnsApp cl="black" mt={undefined} ml={undefined} mb={undefined} />
          </Slide>
        </Container>
      </Box>
    </>
  );
}
