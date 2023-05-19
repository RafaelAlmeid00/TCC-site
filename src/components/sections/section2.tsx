
import {Box, Container} from "@mui/material";
import colors from "../../assets/colors";
import Title from "../title";
import Subtitlepad from "../subtitlepad";
import Menus from "../menu";
import Cards from "../card";
import { useState } from "react";

function Section2() {

    const [showEscolas, setShowEscolas] = useState(true);
    const toggleShowEscolas = () => setShowEscolas(!showEscolas);
  
    const escolasProps = [
      {
        title: "Para Escolas",
        subtitle: "EasyPass possui beneficios próprios para alunos com escolas cadastradas, descontos e até gratuidades",
        cards: [
          {
            title: "Cadastro Simples",
            text: "Sistema de cadastro simples para as escolas e seus matriculados",
            mt: "120px",
            ml: "20px",
            image: "#",
            hg: "100px",
            wd: "200px",
          },
          {
            title: "Desconto de 50%",
            text: "Pague apenas meia passagem em seu cartão escolas",
            mt: "120px",
            ml: "40px",
            image: "#",
            hg: "100px",
            wd: "200px",
          },
          {
            title: "Gratuidades",
            text: "Obtenha cartões com 100% de gratuidade nas passagens",
            mt: "120px",
            ml: "40px",
            image: "#",
            hg: "100px",
            wd: "200px",
          },
        ],
      },
    ];
  
    const empresasProps = [
      {
        title: "Para Empresas",
        subtitle: "EasyPass oferece diversas soluções para empresas que oferecem vale transporte para seus funcionários, trazendo segurança e excelência",
        cards: [
          {
            title: "Cartões Exclusivos",
            text: "Ofereça exclusividade para seus funcionários",
            mt: "120px",
            ml: "20px",
            image: "#",
            hg: "100px",
            wd: "200px",
          },
          {
            title: "Mais Abrangência",
            text: "De mais opções de rotas e meios de transportes para eles",
            mt: "120px",
            ml: "40px",
            image: "#",
            hg: "100px",
            wd: "200px",
          },
          {
            title: "Praticidade e Eficência",
            text: "Recarregue em segundos o cartão de seu funcionário",
            mt: "120px",
            ml: "40px",
            image: "#",
            hg: "100px",
            wd: "200px",
          },
        ],
      },
    ];
  
    const currentProps = showEscolas ? escolasProps : empresasProps;
    return (
      <>
        <Box sx={{
          height: '500px',
          width: '100%',
          backgroundColor: "#d9d9d9"
        }}>
          <Container sx={{
            width: '40%',
            height: '100%',
            float: 'left',
          }}>
            <Menus sz="16px" mt="60px" ml="-80px" onClick={toggleShowEscolas} />
            <Title title={currentProps[0].title} textSize="30px" textColor={colors.tc} children={null} />
            <Subtitlepad mt="50px" text={currentProps[0].subtitle} sz="20px"/>
          </Container>
          <Container sx={{
            width: '60%',
            float: 'right',
            display: "flex",
            flexDirection: "arrow"
          }}>
            {currentProps[0].cards.map((card, index) => (
              <Cards key={index} mt={card.mt} ml={card.ml} image={card.image} hg={card.hg} wd={card.wd} title={card.title} text={card.text} />
            ))}
          </Container>
        </Box>
      </>
    );
  }
export default Section2;