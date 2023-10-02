import { Box, Container, Typography, Link, List } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { motion } from "framer-motion";
import colors from "../assets/colors";
import theme from "../assets/theme";
import { BtnsApp } from "./btns";
import PrivacyPolicy from "./cadastro/PrivacyPolicy";
import TermsAndConditions from "./cadastro/TermsAndConditions";
import CookiePolicy from "./cadastro/Cookies.Policy";

export default function Footer() {

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

  const listProd = [
    { text: 'Para Escolas', route: '#Bussines' },
    { text: 'Para Empresas', route: '#Bussines' },
    { text: 'Aplicativo', route: '/App' },
    { text: 'Serviços', route: '/Servicos' },
  ]

  const list = [
    { text: 'Quem Somos', route: '/EasyPass' },
    { text: 'Contatos', route: '/Contatos' },
    { text: 'Trabalhe Conosco', route: '/Vagas' },
  ]

  return (
    <Box sx={{
      height: '400px',
      width: '100vw',
      backgroundColor: "black",
    }}>
      <Container sx={{
        width: '50%',
        height: '100%',
        float: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
        <Typography
          component="h2"
          sx={{
            fontFamily: 'Franklin Gothic Demi Cond',
            fontWeight: '900',
            fontSize: '50px',
            ml: '60px',
            background: 'linear-gradient(to right, #0fcd88 52%, white 50%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            [theme.breakpoints.down('md')]: {
              fontSize: { xs: '6vw', sm: '4.5vw', md: '5vw', lg: '2vw', xl: '2vw' },
              ml: 3
            },
          }}>EasyPass</Typography>
        <Container sx={{
          mt: '20px',
          ml: '35px',
          display: 'flex',
          alignItems: 'center',
          [theme.breakpoints.down('md')]: {
            ml: 0
          },
        }}>
          <motion.div
            variants={cardVariants}
            whileHover="hover" // Aplica as animações ao passar o mouse
          >
            <Link href="/" sx={{
              cursor: 'pointer',
              mr: '30px',
            }}>
              <InstagramIcon sx={{
                fontSize: { xs: '5vw', sm: '3.5vw', md: '3vw', lg: '2vw', xl: '2vw' },
                color: 'white',
                '&:hover': {
                  color: colors.sc, // Cor do ícone ao passar o mouse
                }
              }} />
            </Link>
          </motion.div>
          <motion.div
            variants={cardVariants}
            whileHover="hover" // Aplica as animações ao passar o mouse
          >
            <Link href="/" sx={{
              cursor: 'pointer',
              mr: '30px',
            }}>
              <YouTubeIcon sx={{
                fontSize: { xs: '5vw', sm: '3.5vw', md: '3vw', lg: '2vw', xl: '2vw' },
                color: 'white',
                '&:hover': {
                  color: colors.sc, // Cor do ícone ao passar o mouse
                }
              }} />
            </Link>
          </motion.div>
          <motion.div
            variants={cardVariants}
            whileHover="hover" // Aplica as animações ao passar o mouse
          >
            <Link href="/" sx={{
              cursor: 'pointer',
            }}>
              <TwitterIcon sx={{
                fontSize: { xs: '5vw', sm: '3.5vw', md: '3vw', lg: '2vw', xl: '2vw' },
                color: 'white',
                '&:hover': {
                  color: colors.sc, // Cor do ícone ao passar o mouse
                }
              }} />
            </Link>
          </motion.div>
        </Container>
        <Container sx={{
          display: 'flex',
          flexDirection: 'row',
          mt: '30px',
          color: 'white',
          textDecoration: 'none',
          flexWrap: 'wrap',
          [theme.breakpoints.down('md')]: {
            ml: 0
          },
        }}>
          <Container sx={{
            ml: 1,
            mr: 1
          }}>
            <PrivacyPolicy color={'white'} />
          </Container>
          <Container sx={{
            ml: 1,
            mr: 1
          }}>
            <TermsAndConditions color={'white'} />
          </Container>
          <Container sx={{
            ml: 1,
            mr: 1
          }}>
            <CookiePolicy color={'white'} />
          </Container>
        </Container>
        <Container>
          <Typography sx={{
            fontSize: { xs: '2vw', sm: '1.2vw', md: '1.2vw', lg: '1vw', xl: '1vw' },
            mt: '30px',
            ml: '30px',
            fontWeight: 'bold',
            opacity: '0.5',
            color: 'white',
            [theme.breakpoints.down('md')]: {
              ml: 0
            },
          }}>
            © 2023, EasyPass BR, S.A
          </Typography>
        </Container>
        <Container sx={{
          display: 'flex',
          flexDirection: 'row',
          mt: '30px',
          ml: '30px',
          [theme.breakpoints.down('md')]: {
            display: 'none',
          },
        }}>
          <BtnsApp cl="white" mt='0' ml="0" />
        </Container>
      </Container>
      <Container sx={{
        width: '50%',
        height: '100%',
        float: 'right',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Container>
          <Typography component='h3' sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2.5vw', sm: '2vw', md: '2vw', lg: '1.8vw', xl: '1.8vw' },
            color: 'white',
            mb: '20px',
          }}>
            Nosso Produto
          </Typography>

          {listProd.map((listProd) => (
            <List sx={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              <Link href={listProd.route} underline="hover">
                <Typography sx={{
                  color: 'white',
                  fontSize: { xs: '2vw', sm: '1.5vw', md: '1.5vw', lg: '1.2vw', xl: '1.2vw' },
                }}>
                  {listProd.text}
                </Typography>
              </Link>
            </List>
          ))}
        </Container>
        <Container sx={{ mr: 2 }}>
          <Typography component='h3' sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2.5vw', sm: '2vw', md: '2vw', lg: '1.8vw', xl: '1.8vw' },
            color: 'white',
            mb: '20px',
          }}>
            Quem Somos
          </Typography>

          {list.map((list) => (
            <List sx={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              <Link href={list.route} underline="hover">
                <Typography sx={{
                  color: 'white',
                  fontSize: { xs: '2vw', sm: '1.5vw', md: '1.5vw', lg: '1.2vw', xl: '1.2vw' },
                }}>
                  {list.text}
                </Typography>
              </Link>
            </List>
          ))}
        </Container>
      </Container>
    </Box>
  )
}
