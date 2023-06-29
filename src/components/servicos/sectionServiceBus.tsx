import { Box, Button, CardMedia, Container } from "@mui/material";
import colors from "../../assets/colors";
import Img from "../img";
import Card from "../card";
import { motion } from "framer-motion";
import Cards from "../card";

export default function sectionBus() {
  const CardsServ = [
    {
      card: [
        {
          title: "Cadastro Simples",
          text: "Sistema de cadastro simples para as escolas e seus matriculados",
          image: "https://i.imgur.com/DAZYM3U.jpg",
          hg: "20px",
          ml: "10px",
          wd: "150px",
        },
        {
          title: "Cadastro Simples",
          text: "Sistema de cadastro simples para as escolas e seus matriculados",
          image: "https://i.imgur.com/DAZYM3U.jpg",
          hg: "20px",
          ml: "10px",
          wd: "150px",
        },
        {
          title: "Cadastro Simples",
          text: "Sistema de cadastro simples para as escolas e seus matriculados",
          image: "https://i.imgur.com/DAZYM3U.jpg",
          hg: "20px",
          ml: "10px",
          wd: "150px",
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
          height: "50vh",
          background: colors.pm,
          borderRadius: "500px 0px 0px 0px",
        }}
      >
        <Container
          sx={{
            float: "left",
            background: colors.sc,
            height: "100%",
            width: "25%",
            borderRadius: "500px 0px 0px 0px",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: "200px",
              marginLeft: "40px",
              width: "250px",
              mt: "80px",
            }}
            image="https://i.imgur.com/SLEkUq9.png"
          />
        </Container>
        {/*<Container sx={{ 
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "top",
          justifyContent: "center",
        }}>
        {CardsServ[0].card.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover" // Aplica as animações ao passar o mouse
          >
            <Cards
              image={card.image}
              mt={null}
              ml={card.ml}
              hg={card.hg}
              wd={card.wd}
              title={card.title}
              text={card.text}
            />
          </motion.div>
        ))}
        </Container>
        */}
        <Button
          variant="contained"
          href="/opcoes"
          sx={{
            color: "white",
            marginRight: 1,
            border: "2px solid transparent", 
            transition: "border-color 0.3s ease-in-out", 
            "&:hover": {
              border: "2px solid #0fcd88", 
            },
            mt:"20%"
          }}
        >
          Cadastrar
        </Button>
      </Box>
    </>
  );
}
