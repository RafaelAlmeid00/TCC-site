import colors from "../../assets/colors";
import Menus from "../menu/menu";
import Cards from "../card";
import theme from "../../assets/theme";
import React from "react";
import ModalContext from "../../context/modalcontext";
import cad from "../../assets/cad.jpeg"
import descount from "../../assets/disccount.jpeg"
import free from "../../assets/free.jpeg"
import exclusivo from "../../assets/exclusivo.png"
import rotas from "../../assets/routes.png"
import pratice from "../../assets/patice.jpeg"
import { Box, Container, Typography } from "@mui/material";
import { Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";

function Section2() {
  const { verify } = React.useContext(ModalContext);
  const { hasEntered } = React.useContext(ModalContext);
  const [showEscolas, setShowEscolas] = React.useState(true);
  const toggleShowEscolas = () => setShowEscolas(!showEscolas);

  const escolasProps = [
    {
      title: "Para Escolas",
      subtitle: "EasyPass possui beneficios próprios para alunos com escolas cadastradas, descontos e até gratuidades.",
      cards: [
        {
          title: "Cadastro Simples",
          text: "Sistema de cadastro simples para as escolas e seus matriculados",
          mt: "150px",
          ml: "20px",
          image: cad,
          hg: "170px",
          wd: "200px",
        },
        {
          title: "Desconto de 50%",
          text: "Pague apenas meia passagem em seu cartão escolas",
          mt: "150px",
          ml: "40px",
          image: descount,
          hg: "170px",
          wd: "200px",
        },
        {
          title: "Gratuidades",
          text: "Obtenha cartões com 100% de gratuidade nas passagens",
          mt: "150px",
          ml: "40px",
          image: free,
          hg: "200px",
          wd: "200px",
        },
      ],
    },
  ];

  const empresasProps = [
    {
      title: "Para Empresas",
      subtitle: "EasyPass oferece diversas soluções para empresas que oferecem vale transporte para seus funcionários, trazendo segurança e excelência.",
      cards: [
        {
          title: "Cartões Exclusivos",
          text: "Ofereça exclusividade para seus funcionários",
          mt: "150px",
          ml: "20px",
          image: exclusivo,
          hg: "190px",
          wd: "200px",
        },
        {
          title: "Mais Abrangência",
          text: "De mais opções de rotas e meios de transportes para eles",
          mt: "150px",
          ml: "40px",
          image: rotas,
          hg: "170px",
          wd: "200px",
        },
        {
          title: "Praticidade e Eficência",
          text: "Recarregue em segundos o cartão de seu funcionário",
          mt: "150px",
          ml: "40px",
          image: pratice,
          hg: "170px",
          wd: "200px",
        },
      ],
    },
  ];

  const currentProps = showEscolas ? escolasProps : empresasProps;

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
      <Box sx={{
        height: '100vh',
        width: '100vw',
        background: verify ? '#222222' : 'white',
        [theme.breakpoints.down('md')]: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100%',
        },
      }}>
        <Container sx={{
          width: '40%',
          height: '100%',
          float: 'left',
          [theme.breakpoints.down('md')]: {
            float: 'none',
            width: '100%',
            height: '30%'
          },
        }}>
          <Container sx={{
            width: '100%',
            maxHeight: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Menus mt="60px" onClick={toggleShowEscolas} ml={""} />
          </Container>
          <Slide direction="left" triggerOnce={hasEntered}>
            <Container sx={{
              display: 'block',
              [theme.breakpoints.down('md')]: {
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            }}>
            <Typography sx={{
              color: verify ? colors.sc : colors.tc,
              fontSize: { xs: '5vw', sm: '5vw', md: '2.5vw', lg: '3vw', xl: '2.5vw' },
              mt: "50px",
                width: '100%',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              fontWeight: 'bold',
              [theme.breakpoints.down('md')]: {
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              },
            }}>
              {currentProps[0].title}
            </Typography>
            </Container>
              <Container sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              [theme.breakpoints.down('md')]: {
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
              }}>
              <Typography sx={{
                fontSize: { xs: '3.5vw', sm: '2vw', md: '2.5vwh', lg: '1.5vw', xl: '1.5vw' },
                mt: '20px',
                fontWeight: 'bold',
                width: '100%',
                textAlign: 'center',
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center',
                color: verify ? "white" : "black",
                [theme.breakpoints.down('md')]: {
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '60%',
                },
                [theme.breakpoints.only('xl')]: {
                  width: '85%',
                },
              }}>
                {currentProps[0].subtitle}
              </Typography>
              </Container>
          </Slide>
        </Container>
        <Container sx={{
          width: '60%',
          float: 'right',
          display: "flex",
          flexDirection: "arrow",
          [theme.breakpoints.down('md')]: {
            float: 'none',
            display: 'flex', 
            flexDirection: 'row',
            width: '100%'
          },
        }}>
          {currentProps[0].cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover" // Aplica as animações ao passar o mouse
              style={{
                height: '100%',
                width: '100%',
                justifyContent: "center"
              }}
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
export default Section2;