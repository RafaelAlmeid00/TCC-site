import { Box, Container } from "@mui/material";
import Cards from "../card";
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";
import moleza from "../../assets/moleza.svg";
import appI from "../../assets/aplicativo.svg";
import pag from "../../assets/pagamento.svg";
import caminho from "../../assets/app3.svg";
import Balancer from "react-wrap-balancer";
import BtnsApp from "../buttons/app";

export default function SectionService1() {
  const CardsServ = [
    {
      card: [
        {
          title: "Sistema Simples",
          text: "Possuimos um sistema extremamente simples e acessível",
          ml: "50px",
          image: moleza,
          hg: "100%",
          wd: "200px",
        },
        {
          title: "Gerenciamento pelo Aplicativo",
          text: "Tenha o total controle de seus cartões na palma de sua mão!",
          ml: "50px",
          image: appI,
          hg: "100%",
          wd: "200px",
        },
        {
          title: "Pagamento Online",
          text: "Faça suas recargas de forma totalmente online e segura!",
          ml: "50px",
          image: pag,
          hg: "100%",
          wd: "200px",
        },
        {
          title: "Verifique suas Rotas",
          text: "Veja onde o ônibus está e por onde ele vai passar pelo sistema",
          ml: "50px",
          mr: "50px",
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
          mt: "11vh",
          height: "89.99vh",
          width: "100vw",
        }}
      >
        <Container
          sx={{
            height: "80%",
            width: "100vw",
            align: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "arrow",
          }}
        >
          <Slide direction="left">
            {CardsServ[0].card.map((card, index) => (
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
          <Slide direction="up">
            <BtnsApp cl="black" mt="0" ml={undefined} mb={undefined} />
          </Slide>
        </Container>
      </Box>
    </>
  );
}
