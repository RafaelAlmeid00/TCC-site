import { Container } from "@mui/material";
import { motion } from "framer-motion";
import theme from "../assets/theme";
import colors from "../assets/colors";
import React from "react";

function Bubbles() {
  

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
            const delay = 1 + i * 0.5;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                    opacity: { delay, duration: 0.01 }
                }
            };
        }
    };
    return(
        <>
            <Container sx={{
                zIndex: 0,
                [theme.breakpoints.down('md')]: {
                    display: 'none'
                },
            }}>
                <motion.div
                    initial={{ y: 0, scale: 0.5 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "40%",
                        left: "51%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.pm,
                    }}
                />
                <motion.div
                    initial={{ scale: 0.5 }} // Defina as propriedades iniciais da animação
                    animate={{ scale: 0.8 }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "85%",
                        left: "5%",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.pm,
                    }}
                />
                <motion.div
                    initial={{ y: 0, scale: 0.3 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "60%",
                        left: "2%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.sc,
                    }}
                />
                <motion.div
                    initial={{ y: 0, rotate: -45 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    style={{
                        position: "absolute",
                        top: "72%",
                        left: "42%",
                        transform: "translate(-50%, -50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "10px solid transparent", // Defina a largura do triângulo aqui
                        borderRight: "10px solid transparent", // Defina a largura do triângulo aqui
                        borderBottom: "20px solid #30e09a", // Defina a altura e a cor do triângulo aqui
                    }}
                />
                <motion.div
                    initial={{ scale: 0.2 }} // Defina as propriedades iniciais da animação
                    animate={{ scale: 0.5 }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "80%",
                        left: "60%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.tc,
                    }}
                />
                <motion.div
                    initial={{ scale: 0.6 }} // Defina as propriedades iniciais da animação
                    animate={{ scale: 1 }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "10%",
                        left: "70%",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.tc,
                    }}
                />
                <motion.div
                    initial={{ y: 0, scale: 0.3 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "95%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.tc,
                    }}
                />
                <motion.div
                    initial={{ y: 0, rotate: -95, scale: 0.8 }} // Defina as propriedades da animação
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    style={{
                        position: "absolute",
                        top: "5%",
                        left: "90%",
                        transform: "translate(-50%, -50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "30px solid transparent", // Defina a largura do triângulo aqui
                        borderRight: "30px solid transparent", // Defina a largura do triângulo aqui
                        borderBottom: "50px solid #30e09a", // Defina a altura e a cor do triângulo aqui
                    }}
                />
            </Container>
            <Container sx={{
                display: 'none',
                [theme.breakpoints.down('md')]: {
                    display: 'block'
                },
            }}>
                <motion.div
                    initial={{ y: 0, scale: 0.5 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "30%",
                        left: "90%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.pm,
                    }}
                />
                <motion.div
                    initial={{ y: 0, scale: 0.3 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "0.5%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.tc,
                    }}
                />
                <motion.div
                    initial={{ y: 0, rotate: -45 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    style={{
                        position: "absolute",
                        top: "58%",
                        left: "85%",
                        transform: "translate(-50%, -50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "10px solid transparent", // Defina a largura do triângulo aqui
                        borderRight: "10px solid transparent", // Defina a largura do triângulo aqui
                        borderBottom: "20px solid #30e09a", // Defina a altura e a cor do triângulo aqui
                    }}
                />
                <motion.div
                    initial={{ scale: 0.2 }} // Defina as propriedades iniciais da animação
                    animate={{ scale: 0.5 }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "80%",
                        left: "65%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.tc,
                    }}
                />
                <motion.div
                    initial={{ y: 0, rotate: -110, scale: 0.4 }} // Defina as propriedades da animação
                    animate={{ scale: 0.9 }} 
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    style={{
                        position: "absolute",
                        top: "10%",
                        left: "19%",
                        transform: "translate(-50%, -50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "20px solid transparent", // Defina a largura do triângulo aqui
                        borderRight: "20px solid transparent", // Defina a largura do triângulo aqui
                        borderBottom: "40px solid #834ae1", // Defina a altura e a cor do triângulo aqui
                    }}
                />
                <motion.div
                    initial={{ y: 0, scale: 0.5 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1.4, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "20%",
                        left: "55%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.sc,
                    }}
                />
                <motion.div
                    initial={{ y: 0, scale: 0.5 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 0.9, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "80%",
                        left: "15%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.pm,
                    }}
                />
                <motion.div
                    initial={{ y: 0, rotate: -45 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    style={{
                        position: "absolute",
                        top: "5%",
                        left: "90%",
                        transform: "translate(-50%, -50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "30px solid transparent", // Defina a largura do triângulo aqui
                        borderRight: "30px solid transparent", // Defina a largura do triângulo aqui
                        borderBottom: "50px solid #30e09a", // Defina a altura e a cor do triângulo aqui
                    }}
                />
            </Container>
        </>
    )
}


function Bubbles2() {


    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
            const delay = 1 + i * 0.5;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                    opacity: { delay, duration: 0.01 }
                }
            };
        }
    };
    return (
        <>
            <Container sx={{
                zIndex: 0,
                [theme.breakpoints.down('md')]: {
                    display: 'none'
                },
            }}>
                <motion.div
                    initial={{ y: 0, scale: 0.5 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "40%",
                        left: "51%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.pm,
                    }}
                />
                <motion.div
                    initial={{ scale: 0.5 }} // Defina as propriedades iniciais da animação
                    animate={{ scale: 0.8 }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "85%",
                        left: "5%",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.pm,
                    }}
                />
                <motion.div
                    initial={{ y: 0, scale: 0.3 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "60%",
                        left: "2%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.sc,
                    }}
                />
                <motion.div
                    initial={{ y: 0, rotate: -45 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    style={{
                        position: "absolute",
                        top: "72%",
                        left: "42%",
                        transform: "translate(-50%, -50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "10px solid transparent", // Defina a largura do triângulo aqui
                        borderRight: "10px solid transparent", // Defina a largura do triângulo aqui
                        borderBottom: "20px solid #30e09a", // Defina a altura e a cor do triângulo aqui
                    }}
                />
                <motion.div
                    initial={{ scale: 0.2 }} // Defina as propriedades iniciais da animação
                    animate={{ scale: 0.5 }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "80%",
                        left: "60%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.tc,
                    }}
                />
                <motion.div
                    initial={{ scale: 0.6 }} // Defina as propriedades iniciais da animação
                    animate={{ scale: 1 }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "10%",
                        left: "70%",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.tc,
                    }}
                />
                <motion.div
                    initial={{ y: 0, scale: 0.3 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "95%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.tc,
                    }}
                />
                <motion.div
                    initial={{ y: 0, rotate: -95, scale: 0.8 }} // Defina as propriedades da animação
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    style={{
                        position: "absolute",
                        top: "5%",
                        left: "90%",
                        transform: "translate(-50%, -50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "30px solid transparent", // Defina a largura do triângulo aqui
                        borderRight: "30px solid transparent", // Defina a largura do triângulo aqui
                        borderBottom: "50px solid #30e09a", // Defina a altura e a cor do triângulo aqui
                    }}
                />
            </Container>
            <Container sx={{
                display: 'none',
                [theme.breakpoints.down('md')]: {
                    display: 'block'
                },
            }}>
                <motion.div
                    initial={{ y: 0, scale: 0.5 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "30%",
                        left: "90%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.pm,
                    }}
                />
                <motion.div
                    initial={{ y: 0, scale: 0.3 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "0.5%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.tc,
                    }}
                />
                <motion.div
                    initial={{ y: 0, rotate: -45 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    style={{
                        position: "absolute",
                        top: "58%",
                        left: "85%",
                        transform: "translate(-50%, -50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "10px solid transparent", // Defina a largura do triângulo aqui
                        borderRight: "10px solid transparent", // Defina a largura do triângulo aqui
                        borderBottom: "20px solid #30e09a", // Defina a altura e a cor do triângulo aqui
                    }}
                />
                <motion.div
                    initial={{ scale: 0.2 }} // Defina as propriedades iniciais da animação
                    animate={{ scale: 0.5 }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "80%",
                        left: "65%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.tc,
                    }}
                />
                <motion.div
                    initial={{ y: 0, rotate: -110, scale: 0.4 }} // Defina as propriedades da animação
                    animate={{ scale: 0.9 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    style={{
                        position: "absolute",
                        top: "10%",
                        left: "19%",
                        transform: "translate(-50%, -50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "20px solid transparent", // Defina a largura do triângulo aqui
                        borderRight: "20px solid transparent", // Defina a largura do triângulo aqui
                        borderBottom: "40px solid #834ae1", // Defina a altura e a cor do triângulo aqui
                    }}
                />
                <motion.div
                    initial={{ y: 0, scale: 0.5 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1.4, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "45%",
                        left: "55%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.sc,
                    }}
                />
                <motion.div
                    initial={{ y: 0, scale: 0.5 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 0.9, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "80%",
                        left: "15%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.pm,
                    }}
                />
                <motion.div
                    initial={{ y: 0, rotate: -45 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    style={{
                        position: "absolute",
                        top: "5%",
                        left: "90%",
                        transform: "translate(-50%, -50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "30px solid transparent", // Defina a largura do triângulo aqui
                        borderRight: "30px solid transparent", // Defina a largura do triângulo aqui
                        borderBottom: "50px solid #30e09a", // Defina a altura e a cor do triângulo aqui
                    }}
                />
            </Container>
        </>
    )
}



function Bubbles3() {


    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
            const delay = 1 + i * 0.5;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                    opacity: { delay, duration: 0.01 }
                }
            };
        }
    };
    return (
        <>
            <Container sx={{
                zIndex: 0,
                [theme.breakpoints.down('md')]: {
                    display: 'none'
                },
            }}>
                <motion.div
                    initial={{ y: 0, scale: 0.5 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "10%",
                        left: "11%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.pm,
                    }}
                />
                <motion.div
                    initial={{ scale: 0.5 }} // Defina as propriedades iniciais da animação
                    animate={{ scale: 0.8 }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "85%",
                        left: "5%",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.pm,
                    }}
                />
                <motion.div
                    initial={{ y: 0, scale: 0.3 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "60%",
                        left: "2%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.sc,
                    }}
                />
                <motion.div
                    initial={{ y: 0, rotate: -45 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    style={{
                        position: "absolute",
                        top: "72%",
                        left: "42%",
                        transform: "translate(-50%, -50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "10px solid transparent", // Defina a largura do triângulo aqui
                        borderRight: "10px solid transparent", // Defina a largura do triângulo aqui
                        borderBottom: "20px solid #30e09a", // Defina a altura e a cor do triângulo aqui
                    }}
                />
                <motion.div
                    initial={{ scale: 0.2 }} // Defina as propriedades iniciais da animação
                    animate={{ scale: 0.5 }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "80%",
                        left: "80%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.tc,
                    }}
                />
                <motion.div
                    initial={{ scale: 0.6 }} // Defina as propriedades iniciais da animação
                    animate={{ scale: 1 }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "5%",
                        left: "70%",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.tc,
                    }}
                />
                <motion.div
                    initial={{ y: 0, scale: 0.3 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "95%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.tc,
                    }}
                />
                <motion.div
                    initial={{ y: 0, rotate: -95, scale: 0.8 }} // Defina as propriedades da animação
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    style={{
                        position: "absolute",
                        top: "5%",
                        left: "90%",
                        transform: "translate(-50%, -50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "30px solid transparent", // Defina a largura do triângulo aqui
                        borderRight: "30px solid transparent", // Defina a largura do triângulo aqui
                        borderBottom: "50px solid #30e09a", // Defina a altura e a cor do triângulo aqui
                    }}
                />
            </Container>
            <Container sx={{
                display: 'none',
                [theme.breakpoints.down('md')]: {
                    display: 'block'
                },
            }}>
                <motion.div
                    initial={{ y: 0, scale: 0.5 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "30%",
                        left: "90%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.pm,
                    }}
                />
                <motion.div
                    initial={{ y: 0, scale: 0.3 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "0.5%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.tc,
                    }}
                />
                <motion.div
                    initial={{ y: 0, rotate: -45 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    style={{
                        position: "absolute",
                        top: "58%",
                        left: "85%",
                        transform: "translate(-50%, -50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "10px solid transparent", // Defina a largura do triângulo aqui
                        borderRight: "10px solid transparent", // Defina a largura do triângulo aqui
                        borderBottom: "20px solid #30e09a", // Defina a altura e a cor do triângulo aqui
                    }}
                />
                <motion.div
                    initial={{ scale: 0.2 }} // Defina as propriedades iniciais da animação
                    animate={{ scale: 0.5 }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "80%",
                        left: "85%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.tc,
                    }}
                />
                <motion.div
                    initial={{ y: 0, rotate: -110, scale: 0.4 }} // Defina as propriedades da animação
                    animate={{ scale: 0.9 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    style={{
                        position: "absolute",
                        top: "10%",
                        left: "19%",
                        transform: "translate(-50%, -50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "20px solid transparent", // Defina a largura do triângulo aqui
                        borderRight: "20px solid transparent", // Defina a largura do triângulo aqui
                        borderBottom: "40px solid #834ae1", // Defina a altura e a cor do triângulo aqui
                    }}
                />
                <motion.div
                    initial={{ y: 0, scale: 0.5 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 1.4, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "45%",
                        left: "55%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.sc,
                    }}
                />
                <motion.div
                    initial={{ y: 0, scale: 0.5 }} // Defina as propriedades iniciais da animação
                    animate={{ y: "-50%" }} // Defina as propriedades da animação ao entrar na tela
                    transition={{ duration: 0.9, repeat: Infinity, repeatType: "mirror" }} // Defina a duração e repetição da animação
                    style={{
                        position: "absolute",
                        top: "80%",
                        left: "15%",
                        transform: "translate(-50%, -50%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: colors.pm,
                    }}
                />
                <motion.div
                    initial={{ y: 0, rotate: -45 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    style={{
                        position: "absolute",
                        top: "5%",
                        left: "90%",
                        transform: "translate(-50%, -50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "30px solid transparent", // Defina a largura do triângulo aqui
                        borderRight: "30px solid transparent", // Defina a largura do triângulo aqui
                        borderBottom: "50px solid #30e09a", // Defina a altura e a cor do triângulo aqui
                    }}
                />
            </Container>
        </>
    )
}


export {Bubbles, Bubbles2, Bubbles3}