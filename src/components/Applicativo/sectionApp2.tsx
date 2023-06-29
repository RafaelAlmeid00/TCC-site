import { Box, Container, Link, Slider } from "@mui/material";
import Cards from "../card";
import { motion } from "framer-motion";
import Img from "../img";
import Balancer from "react-wrap-balancer";
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
          title: "Cadastro Simples",
          text: "Sistema de cadastro simples para as escolas e seus matriculados",
          mt: "120px",
          ml: "50px",
          image: "https://i.imgur.com/DAZYM3U.jpg",
          hg: "170px",
          wd: "200px",
        },
        {
          title: "Cadastro Simples",
          text: "Sistema de cadastro simples para as escolas e seus matriculados",
          ml: "50px",
          mt: "120px",
          image: "https://i.imgur.com/DAZYM3U.jpg",
          hg: "170px",
          wd: "200px",
        },
        {
          title: "Cadastro Simples",
          text: "Sistema de cadastro simples para as escolas e seus matriculados",
          ml: "50px",
          mt: "120px",
          image: "https://i.imgur.com/DAZYM3U.jpg",
          hg: "170px",
          wd: "200px",
        },
        {
          title: "Cadastro Simples",
          text: "Sistema de cadastro simples para as escolas e seus matriculados",
          ml: "50px",
          mr: "50px",
          mt: "120px",
          image: "https://i.imgur.com/DAZYM3U.jpg",
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
          height: "89.99vh",
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
            <BtnsApp clr="black"/>
          </Slide>
        </Container>
      </Box>
    </>
  );
}
