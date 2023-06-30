import { Box, Container } from "@mui/material";
import Cards from "../card";
import { motion } from "framer-motion";
import moleza from "../../assets/moleza.svg";
import appI from "../../assets/aplicativo.svg";
import pag from "../../assets/pagamento.svg";
import caminho from "../../assets/app3.svg";

export default function SectionService1() {
  const CardsServ = [
    {
      card: [
        {
          title: "Sistema Simples",
          text: "Possuimos um sistema extremamente simples e acessível",
          mt: "120px",
          ml: "50px",
          image: moleza,
          hg: "100%",
          wd: "200px",
        },
        {
          title: "Gerenciamento pelo Aplicativo",
          text: "Tenha o total controle de seus cartões na palma de sua mão!",
          ml: "50px",
          mt: "120px",
          image: appI,
          hg: "100%",
          wd: "200px",
        },
        {
          title: "Pagamento Online",
          text: "Faça suas recargas de forma totalmente online e segura!",
          ml: "50px",
          mt: "120px",
          image: pag,
          hg: "100%",
          wd: "200px",
        },
        {
          title: "Verifique suas Rotas",
          text: "Veja onde o ônibus está e por onde ele vai passar pelo sistema",
          ml: "50px",
          mr: "50px",
          mt: "120px",
          image: caminho,
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
          mt:"11vh",
          height: "89.99vh",
          width:"100vw"
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
      </Box>
    </>
  );
}
