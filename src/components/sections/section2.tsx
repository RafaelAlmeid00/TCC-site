
import {Box, Container} from "@mui/material";
import colors from "../../assets/colors";
import Title from "../title";
import Subtitlepad from "../subtitlepad";
import Menus from "../menu";
import Cards from "../card";
import { useState } from "react";
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";

function Section2() {

    const [showEscolas, setShowEscolas] = useState(true);
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
            image: "https://i.imgur.com/DAZYM3U.jpg",
            hg: "170px",
            wd: "200px",
          },
          {
            title: "Desconto de 50%",
            text: "Pague apenas meia passagem em seu cartão escolas",
            mt: "150px",
            ml: "40px",
            image: "https://www.visa.com.br/content/dam/VCOM/regional/lac/brazil/media-kits/images/mao-aproximando-cartao-de-catraca-1600x900-200kb.jpg",
            hg: "170px",
            wd: "200px",
          },
          {
            title: "Gratuidades",
            text: "Obtenha cartões com 100% de gratuidade nas passagens",
            mt: "150px",
            ml: "40px",
            image: "https://img.freepik.com/fotos-premium/compra-de-bilhetes-de-onibus-um-onibus-amarelo-de-passageiros-e-bilhetes-para-ele-em-um-fundo-azul-renderizacao-3d_407474-2984.jpg",
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
            image: "https://cdn.stability.ai/assets/org-cFNsdL6HMK3VrCO5d3Xo3LSb/00000000-0000-0000-0000-000000000000/9b1ee6cb-71fe-e04d-5d29-b49e533b85a6",
            hg: "190px",
            wd: "200px",
          },
          {
            title: "Mais Abrangência",
            text: "De mais opções de rotas e meios de transportes para eles",
            mt: "150px",
            ml: "40px",
            image: "https://thumbs.dreamstime.com/b/rotas-com-pinos-vermelhos-em-um-mapa-da-cidade-conceito-sobre-temas-de-aventura-descoberta-navega%C3%A7%C3%A3o-comunica%C3%A7%C3%A3o-log%C3%ADstica-170749199.jpg",
            hg: "170px",
            wd: "200px",
          },
          {
            title: "Praticidade e Eficência",
            text: "Recarregue em segundos o cartão de seu funcionário",
            mt: "150px",
            ml: "40px",
            image: "https://brbnovo.brb.com.br/mobilidade/wp-content/uploads/sites/8/2022/12/BRB-Exemplus-Mobilidade-18-11-20-125-scaled.jpg",
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
          width: '100%',
          backgroundColor: "#d9d9d9"
        }}>
          <Container sx={{
            width: '40%',
            height: '100%',
            float: 'left',
          }}>
            <Menus sz="16px" mt="60px" ml="-80px" onClick={toggleShowEscolas} />
            <Slide direction="left">
            <Title title={currentProps[0].title} textSize="30px" textColor={colors.tc} children={null} />
            <Subtitlepad mt="50px" text={currentProps[0].subtitle} sz="20px"/>
            </Slide>
          </Container>
          <Container sx={{
            width: '60%',
            float: 'right',
            display: "flex",
            flexDirection: "arrow"
          }}>
            {currentProps[0].cards.map((card, index) => (
            <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover" // Aplica as animações ao passar o mouse
            >
            <Cards
              image={card.image}
              mt={card.mt}
              ml={card.ml}
              image={card.image}
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