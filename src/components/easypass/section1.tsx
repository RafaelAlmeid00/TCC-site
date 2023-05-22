import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";
import Balancer from "react-wrap-balancer";
import Title from "../title";
import Subtitle from "../subtitle";
import Frase from "../frase";
import Subtitlepad from "../subtitlepad";
import Img from "../img";

export default function Section1EasyPass() {
  return (
    <>
    <Fade cascade>
        <Box sx={{
          mt: "10vh",
          height: '90vh',
          width: '100%',
          background: 'linear-gradient(to right, rgba(25, 118, 210, 1) 35%, rgba(25, 118, 210, 0.9) 40%, rgba(25, 118, 210, 0.8) 45%, rgba(25, 118, 210, 0.7) 50%, rgba(25, 118, 210, 0.6) 55%, rgba(25, 118, 210, 0.5) 60%, rgba(25, 118, 210, 0.4) 65%, rgba(25, 118, 210, 0.3) 70%, rgba(25, 118, 210, 0.2) 75%, rgba(25, 118, 210, 0.1) 80%)',
        }}>
        <Container sx={{
            display: 'flex',
            alignItems: 'flex-start',
            ml: 0,
            }}>
            <Slide direction="left">
                <Balancer>
                    <Title title="A EasyPass:" textSize="50px" textColor="white">
                  <Typography sx={{
                    fontSize: '20px',
                    display: "flex",
                    flexDirection: "row",
                    ml: '100px',
                    color: "white",
                    fontWeight: 'bold',
                  }}>TCC - FAETEC Amaury César Vieira, Volta Redonda
                  </Typography>
                    </Title>
                <Frase textColor="white" textSize='20px' frase="Essa empresa é um projeto de TCC do curso Informática para Internet da FAETEC Volta Redonda"/>
                </Balancer>
            </Slide>
            <Slide direction="up" >
            <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            mt: '60px',
            ml: '140px',
        }}>
        </Container>
            </Slide>
        </Container>

          <motion.img
  src="https://i.imgur.com/W09pzCi.png"
  style={{
    width: '100%',
    height: 'auto',
    display: "flex",
    alignItems: "flex-end",
    position: 'absolute',
    bottom: 0,
    left: 0,
    objectFit: 'cover',
  }}
  animate={{
    y: [10, -10, 10], // Define os valores de deslocamento vertical (flutuação)
  }}
  transition={{
    duration: 2, // Duração da animação em segundos
    repeat: Infinity, // Repete a animação infinitamente
    ease: 'easeInOut', // Define a curva de animação
  }}
/>

          <motion.img
  src="https://i.imgur.com/sB5h9it.png"
  style={{
    width: '100%',
    height: 'auto',
    display: "flex",
    alignItems: "flex-end",
    position: 'absolute',
    bottom: 0,
    left: 0,
    objectFit: 'cover',
  }}
  animate={{
    y: [0, 10, 0], // Define os valores de deslocamento vertical (flutuação)
  }}
  transition={{
    duration: 2, // Duração da animação em segundos
    repeat: Infinity, // Repete a animação infinitamente
    ease: 'easeInOut', // Define a curva de animação
    delay: 2
  }}
/>

      </Box>
      </Fade>
    </>
  );
}
