import Balancer from "react-wrap-balancer";
import theme from "../../assets/theme";
import ModalContext from "../../context/modalcontext";
import React from "react";
import colors from "../../assets/colors";
import CloseIcon from '@mui/icons-material/Close';
import { Bubbles2 } from "../bubbles";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";
import { AgradecimentosAnderson, AgradecimentosHenrique, AgradecimentosLuciane, EquipeEasyPass, Objetivo, PorqueEasyPass } from "./cards";

export default function Section1EasyPass() {
  const { verify } = React.useContext(ModalContext);
  const { themes } = React.useContext(ModalContext);
  const { hasEntered } = React.useContext(ModalContext);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const fundo = themes.palette.background.default

  const items = [
    { id: '1', title: 'Equipe EasyPass', subtitle: 'Quem trabalha conosco' },
    { id: '5', title: '', subtitle: ' ' },
    { id: '3', title: 'Porquê a EasyPass', subtitle: 'Nossos Motivos' },
    { id: '4', title: '', subtitle: '' },
    { id: '2', title: 'Objetivo', subtitle: 'Nossas Metas' },
    { id: '6', title: '', subtitle: ' ' },
  ];

  const renderComponentById = (id: string) => {
    switch (id) {
      case '1':
        return <EquipeEasyPass />;
      case '5':
        return <AgradecimentosAnderson />;
      case '3':
        return <PorqueEasyPass />;
      case '4':
        return <AgradecimentosLuciane />;
      case '2':
        return <Objetivo />;
      case '6':
        return <AgradecimentosHenrique />;
      default:
        return null;
    }
  };

  const handleClose = () => {
    setSelectedId(null);
  };


  return (
    <>
      <Fade cascade triggerOnce={hasEntered}>
        <Box id="section1" sx={{
          height: '100vh',
          width: '100vw',
          background: verify ? fundo : 'white',
          [theme.breakpoints.down('md')]: {
            height: 'auto',
          },
          position: "relative",
          overflow: "hidden",
        }}>
          <Container sx={{
            width: '50%',
            height: '100%',
            float: 'left',
            [theme.breakpoints.down('md')]: {
              float: 'none',
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            },
          }}>
            <Slide direction="left" triggerOnce={hasEntered}>
              <Balancer>
                <Typography sx={{
                  color: verify ? colors.sc : colors.tc,
                  fontSize: { xs: '6vw', sm: '4vw', md: '3vw', lg: '3.5vw', xl: '3.5vw' },
                  fontWeight: 'bold',
                  margin: '0 auto',
                  width: '60%',
                  mt: 10,
                  [theme.breakpoints.down('md')]: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    textAlign: 'center',
                    mt: 20,
                  },
                }}>
                  A EasyPass:
                </Typography>
                <Typography sx={{
                  fontSize: { xs: '3.5vw', sm: '2.5vw', md: '1.5w', lg: '1.7vw', xl: '1.5vw' }, 
                  display: "flex",
                  flexDirection: "row",
                  color: verify ? colors.sc : colors.tc,
                  fontWeight: 'bold',
                  margin: '0 auto',
                  width: '60%',
                  mt: 2,
                  [theme.breakpoints.down('md')]: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    textAlign: 'center',
                    mt: 2
                  },
                }}>TCC - FAETEC Amaury César Vieira, Volta Redonda
                </Typography>
                <Typography sx={{ color: verify ? 'white' : 'black',
                  fontSize: { xs: '4vw', sm: '2vw', md: '2w', lg: '1.5vw', xl: '1.5vw' }, 
                  fontWeight: '600',
                  margin: '0 auto',
                  width: '60%',
                  mt: 10,
                  [theme.breakpoints.down('md')]: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    textAlign: 'center',
                    mt: 5
                  },
              }}>
                  Essa empresa é um projeto de TCC do curso Informática para Internet da FAETEC Volta Redonda
                </Typography>
              </Balancer>
            </Slide>
            <Slide direction="up" >
              <Container sx={{
                display: 'flex',
                flexDirection: 'row',
                mt: '60px',
              }}>
              </Container>
            </Slide>
          </Container>
          <Container sx={{
            width: '50%',
            height: '100%',
            float: 'right',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            [theme.breakpoints.down('md')]: {
              float: 'none',
              width: '100vw',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            },
          }}>
            <AnimatePresence>
              {selectedId && (
                <Container sx={{
                  [theme.breakpoints.only('xs')]: {
                    top: 30
                  },
                }}>
                <motion.div
                  key={selectedId}
                  layoutId={selectedId}
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                    overflow: "hidden",
                    overflowY: "scroll",
                  }}
                  onClick={handleClose}
                >
                  <motion.div
                    whileHover={{ boxShadow: '0px 0px 0px 3px #30e09a' }}
                    layoutId={`card-${selectedId}`}
                    style={{
                      backgroundColor: 'white',
                      padding: '2rem',
                      borderRadius: '0.5rem',
                      maxWidth: '70vw',
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <IconButton
                      sx={{
                        float: 'right',
                      }}
                    >
                      <CloseIcon
                        onClick={handleClose}
                        sx={{
                          color: 'black',
                          fontSize: '1.5rem',
                        }}
                      />
                    </IconButton>
                    {renderComponentById(selectedId)}
                  </motion.div>
                </motion.div>
                </Container>
              )}
            </AnimatePresence>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                '@media (max-width: 768px)': {
                  gridTemplateColumns: '1fr', // Alteração feita aqui para dispositivos móveis
                },
              }}
            >
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layoutId={`card-${item.id}`}
                  onClick={() => setSelectedId(item.id)}
                  whileHover={{ boxShadow: '0px 0px 0px 3px #30e09a' }}
                  style={{
                    backgroundColor: 'lightgray',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    zIndex: 1,

                  }}
                >
                  <motion.h5
                    style={{ color: colors.tc, fontWeight: '900' }}
                  >
                    {item.subtitle}
                  </motion.h5>
                  <motion.h2>{item.title}</motion.h2>
                </motion.div>
              ))}
            </Box>
          </Container>
          <Box sx={{
            zIndex: -1
          }}>
          <Bubbles2 />
          </Box>
        </Box>
      </Fade>
    </>
  );
}
