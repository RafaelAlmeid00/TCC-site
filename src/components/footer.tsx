import { Box, Container, Typography, Link, List } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { motion } from "framer-motion";
import colors from "../assets/colors";
import Img from "./img";
import theme from "../assets/theme";

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
    { text: 'Para Escolas', route: '/Escolas' },
    { text: 'Para Empresas', route: '/Empresas' },
    { text: 'Aplicativo', route: '/Aplicativo' },
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
      backgroundColor: "black"
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
            [theme.breakpoints.down('sm')]: {
              fontSize: { xs: '4vh', sm: '4.5vh', md: '5vh', lg: '5vh', xl: '4vh' },
              ml: 3
            },
          }}>EasyPass</Typography>
        <Container sx={{
          mt: '20px',
          ml: '35px',
          display: 'flex',
          alignItems: 'center',
          [theme.breakpoints.down('sm')]: {
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
                fontSize: { xs: '3vh', sm: '3.5vh', md: '4vh', lg: '5vh', xl: '5vh' },
                color: 'white',
                '&:hover': {
                  color: colors.pm, // Cor do ícone ao passar o mouse
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
                fontSize: { xs: '3vh', sm: '3.5vh', md: '4vh', lg: '5vh', xl: '5vh' },
                color: 'white',
                '&:hover': {
                  color: colors.pm, // Cor do ícone ao passar o mouse
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
                fontSize: { xs: '3vh', sm: '3.5vh', md: '4vh', lg: '5vh', xl: '5vh' },
                color: 'white',
                '&:hover': {
                  color: colors.pm, // Cor do ícone ao passar o mouse
                }
              }} />
            </Link>
          </motion.div>
        </Container>
        <Container sx={{
          display: 'flex',
          flexDirection: 'row',
          ml: '30px',
          mt: '30px',
          color: 'white',
          textDecoration: 'none',
          [theme.breakpoints.down('sm')]: {
            ml: 0
          },
        }}>
          <Link href="/" underline="hover">
            <Typography sx={{
              fontSize: { xs: '1.3vh', sm: '2vh', md: '2vh', lg: '2vh', xl: '3vh' },
              fontWeight: 'bold',
              color: 'white',
            }}>
              Privacidade
            </Typography>
          </Link>
          <Link href="/" underline="hover">
            <Typography sx={{
              fontSize: { xs: '1.3vh', sm: '2vh', md: '2vh', lg: '2vh', xl: '3vh' },
              ml: '30px',
              fontWeight: 'bold',
              color: 'white',
            }}>
              Termos
            </Typography>
          </Link>
          <Link href="/" underline="hover">
            <Typography sx={{
              fontSize: { xs: '1.3vh', sm: '2vh', md: '2vh', lg: '2vh', xl: '3vh' },
              ml: '30px',
              fontWeight: 'bold',
              color: 'white',
              [theme.breakpoints.down('sm')]: {
                display: 'none',
              },
            }}>
              Preferências de Cookies
            </Typography>
          </Link>
        </Container>
        <Container>
          <Typography sx={{
            fontSize: { xs: '1.3vh', sm: '2vh', md: '2vh', lg: '2vh', xl: '3vh' },
            mt: '30px',
            ml: '30px',
            fontWeight: 'bold',
            opacity: '0.5',
            color: 'white',
            [theme.breakpoints.down('sm')]: {
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
          [theme.breakpoints.down('sm')]: {
            display: 'none',
          },
        }}>
          <Link href="/">
            <Img image='https://www.gympass.com/mep-assets/images/commons/button_ios_store.svg' height='50' width='160px' ml={undefined} mr={undefined} />
          </Link>
          <Link href="/">
            <Img image='https://www.gympass.com/mep-assets/images/commons/button_android_store.svg' height='50' width='160px' ml='30px' mr={undefined} />
          </Link>
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
            fontSize: { xs: '2.5vh', sm: '3vh', md: '3.5vh', lg: '4vh', xl: '4vh' },
            color: 'white',
            mb: '20px',
          }}>
            Nosso Produto
          </Typography>

          {listProd.map((listProd, index) => (
            <List sx={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              <Link href={listProd.route} underline="hover">
                <Typography sx={{
                  color: 'white',
                  fontSize: { xs: '1.3vh', sm: '2vh', md: '2.5vh', lg: '2.5vh', xl: '3vh' },
                }}>
                  {listProd.text}
                </Typography>
              </Link>
            </List>
          ))}
        </Container>
        <Container>
          <Typography component='h3' sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2.5vh', sm: '3vh', md: '3.5vh', lg: '4vh', xl: '4vh' },
            color: 'white',
            mb: '20px',
          }}>
            Quem Somos
          </Typography>

          {list.map((list, index) => (
            <List sx={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              <Link href={list.route} underline="hover">
                <Typography sx={{
                  color: 'white',
                  fontSize: { xs: '1.3vh', sm: '2vh', md: '2.5vh', lg: '2.5vh', xl: '3vh' },
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
