import { Box, Container, IconButton, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";
import Balancer from "react-wrap-balancer";
import theme from "../../assets/theme";
import ModalContext from "../../context/modalcontext";
import React from "react";
import colors from "../../assets/colors";
import { AgradecimentosAnderson, AgradecimentosHenrique, AgradecimentosLuciane, EquipeEasyPass, Objetivo, PorqueEasyPass } from "./cards";
import CloseIcon from '@mui/icons-material/Close';

export default function Section1EasyPass() {
  const { verify } = React.useContext(ModalContext);
  const { themes } = React.useContext(ModalContext);
  const { hasEntered } = React.useContext(ModalContext);

  const fundo = themes.palette.background.default

  const [selectedId, setSelectedId] = React.useState(null);

  const items = [
    { id: '1', title: 'Equipe EasyPass', subtitle: 'Quem trabalha conosco' },
    { id: '5', title: '', subtitle: ' ' },
    { id: '3', title: 'Porquê a EasyPass', subtitle: 'Nossos Motivos' },
    { id: '4', title: '', subtitle: '' },
    { id: '2', title: 'Objetivo', subtitle: 'Nossas Metas' },
    { id: '6', title: '', subtitle: ' ' },
  ];

  const renderComponentById = (id: any) => {
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
            mt: 0,
            height: '100vh',
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
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            },
          }}>
            <Slide direction="left">
              <Balancer>
                <Typography sx={{
                  color: verify ? 'white' : colors.tc,
                  fontSize: { xs: '2vw', sm: '4vw', md: '3vw', lg: '3.5vw', xl: '3.5vw' },
                  mt: "50px", ml: "100px",
                  fontWeight: 'bold',
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
                  fontSize: { xs: '2vw', sm: '2.5vw', md: '1.5w', lg: '1.7vw', xl: '1.7vw' }, 
                  display: "flex",
                  flexDirection: "row",
                  ml: '100px',
                  color: verify ? 'white' : colors.tc,
                  fontWeight: 'bold',
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
                  fontSize: { xs: '2vw', sm: '2.5vw', md: '2w', lg: '1.5vw', xl: '1.5vw' }, 
                mt: "100px", ml: "100px", fontWeight: '600',
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
                ml: '140px',
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
              display: 'none'
            },
          }}>
            <AnimatePresence>
              {selectedId && (
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
                      maxWidth: 950,
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
                          fontSize: '1.5rem',
                        }}
                      />
                    </IconButton>
                    {renderComponentById(selectedId)}
                  </motion.div>
                </motion.div>
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
                  }}
                >
                  <motion.h5
                    style={{ color: colors.tc, fontWeight: '900', fontSize: '15px' }}
                  >
                    {item.subtitle}
                  </motion.h5>
                  <motion.h2>{item.title}</motion.h2>
                </motion.div>
              ))}
            </Box>
          </Container>
        </Box>
      </Fade>
    </>
  );
}
