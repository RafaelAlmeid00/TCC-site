import { Box, Container, Typography } from "@mui/material";
import Cards from "../card";
import { motion } from "framer-motion";

export default function SectionService1() {
  const CardsServ = [
    {
      card: [
        {
          title: "Cadastro Simples",
          text: "Sistema de cadastro simples para as escolas e seus matriculados",
          mt: '120px',
          ml: "50px",
          image: "",
          src: "./rafael.jpg",
          hg: "170px",
          wd: "200px",
        },
        {
            title: "Cadastro Simples",
            text: "Sistema de cadastro simples para as escolas e seus matriculados",
            ml: "50px",
            mt: '120px',
            image: "",
            src: "./rafael.jpg",
            hg: "170px",
            wd: "200px",
          },
          {
            title: "Cadastro Simples",
            text: "Sistema de cadastro simples para as escolas e seus matriculados",
            ml: "50px",
            mt: '120px',
            image: "",
            src: "./rafael.jpg",
            hg: "170px",
            wd: "200px",
          },{
            title: "Cadastro Simples",
            text: "Sistema de cadastro simples para as escolas e seus matriculados",
            ml: "50px",
            mr: '50px',
            mt: '120px',
            image: "",
            src: "./rafael.jpg",
            hg: "170px",
            wd: "200px",
          }
      ]
    }
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
          mt: "11vh",
          height: "80vh",
        }}
      >
        <Container
          sx={{
            height: "100%",
            width: "100%",
            align: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "arrow",
          }}
        >
            {CardsServ[0].card.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover" // Aplica as animações ao passar o mouse
            >
              <Cards
                image={card.image}
                src={card.src}
                mt={card.mt}
                ml={card.ml}
                hg={card.hg}
                wd={card.wd}
                title={card.title}
                text={card.text}/>
            </motion.div>
          ))}
        </Container>
      </Box>
    </>
  );
}
