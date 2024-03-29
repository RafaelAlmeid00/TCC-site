/* eslint-disable react/react-in-jsx-scope */
import { Box, Button, Container, Link, Typography } from "@mui/material";
import theme from "../assets/theme";
import AppleIcon from "@mui/icons-material/Apple";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";

interface BtnsAppProps {
  cl?: string | undefined;
  mt?: string;
  ml?: string;
  mb?: string;
}
interface BtnProps {
  name?: string;
  route?: string;
  cl?: string | undefined;
  bc?: string | undefined; // Prop 'bc' agora é opcional e pode ser do tipo string ou undefined
  bch: string | undefined;
  ml?: number | undefined;
  vis?: string | undefined;
  mb?: string | undefined;

  fun?: () => void;
}

interface BtnPerfilProps {
  name: string;
  route: string;
  cl: string | undefined;
  bc: string | undefined; // Prop 'bc' agora é opcional e pode ser do tipo string ou undefined
  bch: string | undefined;
  ml?: number | undefined;
  fun?: () => void;
}
interface BtnHomeProps {
  name: string;
  route?: string;
  cl?: string | undefined;
  bc?: string | undefined; // Prop 'bc' agora é opcional e pode ser do tipo string ou undefined
  bch: string | undefined;
  fun?: () => void;
  ml?: string;
  mr?: string;
  mb?: string | number;
}
interface BtnLProps {
  loading: boolean;
  dis: boolean;
  handleLogin: () => void; // Alterando o tipo do evento
  name: string;
  route: string;
  cl: string;
  bc?: string | undefined;
  bch: string | undefined;
  mb?: string;
}
interface BtnAppProps {
  cl?: string | undefined;
  title: string;
}


function BtnsApp({ cl, mt, ml, mb }: BtnsAppProps) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        mt: mt, //60 (exceção footer)
        ml: ml, //100 (exceção footer)
        mb: mb,
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.only('xl')]: {
          ml: "-40px",
        },
        [theme.breakpoints.down("md")]: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ml: 0,
          mt: 10,
        },
      }}
    >
      <Link
        href="/"
        sx={{
          textDecoration: "none",
        }}
      >
        <Button
          sx={{
            border: "2px solid",
            borderColor: cl,
            borderRadius: 3,
            padding: 3,
            height: "5vh",
            width: {
              xs: "40vw",
              sm: "20vw",
              md: "15vw",
              lg: "13vw",
              xl: "13vw",
            },
            color: cl,
            display: "flex",
            alignItems: "center", // Alinhar verticalmente ícone e texto
            justifyContent: "center", // Alinhar horizontalmente ícone e texto
          }}
        >
          <AppleIcon
            sx={{
              mr: 1,
            }}
          />
          <Box
            sx={{
              width: {
                xs: "30vw",
                sm: "15vw",
                md: "12vw",
                lg: "12vw",
                xl: "12vw",
              },
              overflow: "hidden", // Evitar que o texto exceda o limite do botão
              textOverflow: "ellipsis", // Adicionar reticências caso o texto seja muito longo
              whiteSpace: "nowrap", // Evitar quebra de linha
            }}
          >
            <Typography
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                mr: 1,
                fontSize: "inherit", // Herdar tamanho de fonte do componente pai (Button)
              }}
            >
              Apple Store
            </Typography>
          </Box>
        </Button>
      </Link>
      <Link href="/" sx={{ ml: 5, textDecoration: "none" }}>
        <Button
          sx={{
            border: "2px solid",
            borderColor: cl,
            borderRadius: 3,
            padding: 3,
            height: "5vh",
            width: {
              xs: "40vw",
              sm: "20vw",
              md: "15vw",
              lg: "13vw",
              xl: "13vw",
            },
            color: cl,
            display: "flex",
            alignItems: "center", // Alinhar verticalmente ícone e texto
            justifyContent: "center", // Alinhar horizontalmente ícone e texto
          }}
        >
          <PlayArrowIcon
            sx={{
              mr: 1,
            }}
          />
          <Box
            sx={{
              width: {
                xs: "20vw",
                sm: "15vw",
                md: "12vw",
                lg: "12vw",
                xl: "12vw",
              },
              overflow: "hidden", // Evitar que o texto exceda o limite do botão
              textOverflow: "ellipsis", // Adicionar reticências caso o texto seja muito longo
              whiteSpace: "nowrap", // Evitar quebra de linha
            }}
          >
            <Typography
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                mr: 1,
                fontSize: "inherit", // Herdar tamanho de fonte do componente pai (Button)
              }}
            >
              Play Store
            </Typography>
          </Box>
        </Button>
      </Link>
    </Container>
  );
}

function Btn({ name, route, cl, bc, bch, fun, ml, vis, mb }: BtnProps) {
  return (
    <Button variant="contained" href={route} onClick={fun} sx={{
      color: cl || null,
      marginRight: 1,
      backgroundColor: bc || null,
      marginLeft: ml || 0,
      marginBottom: mb || 'initial',
      visibility: vis || 'visible',
      border: '2px solid transparent',
      transition: 'border-color 0.3s ease-in-out',
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
      width: {
        xs: '15vw',
        sm: '15vw',
        md: '10vw',
        lg: '10vw',
        xl: '10vw',
      },
      fontSize: {
        xs: '2vw',
        sm: '1.5vw',
        md: '1.2vw',
        lg: '1vw',
        xl: '1vw',
      },
      '&:hover': {
        border: '2px solid #0fcd88',
        backgroundColor: bch,
      },
    }}>
      {name}
    </Button>
  );
}

function BtnPerfil({ name, route, cl, bc, bch, fun, ml }: BtnPerfilProps) {
  return (
    <>
      <Button variant="contained" href={route} onClick={fun} sx={{
        color: cl,
        marginRight: 1,
        background: bc,
        ml: ml,
        border: '2px solid transparent', // adiciona a borda inicialmente
        transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
        fontWeight: 'bold',
        width: {
          xs: '10vw',
          sm: '10vw',
          md: '8vw',
          lg: '7vw',
          xl: '7vw',
        },
        fontSize: {
          xs: '2vw',  // (7.5 / 1200) * 600
          sm: '1.5vw',  // (7.5 / 1200) * 900
          md: '1.2vw',  // (7.5 / 1200) * 1200
          lg: '1vw',
          xl: '1vw',  // Manter o mesmo tamanho de lg para xl
        },
        '&:hover': {
          border: '2px solid #0fcd88', // muda a cor da borda na animação
          background: bch
        },
      }}>
        {name}
      </Button>
    </>
  )
}


function BtnHome({ name, route, cl, bc, bch, fun, ml, mr, mb }: BtnHomeProps) {
  const navigate = useNavigate()

  if (!fun) {
    fun = () => {
      console.log('aaaaaaaaa');
    }
  }

  return (
    <>
      <Button variant="contained" onClick={() => {
        if (!fun) {
          fun = () => {
            console.log('aaaaaaaaa');
          }
        } else {
          fun()
        }
        if (route) {
          navigate(route)
        }
      }}
        sx={{
          color: cl,
          ml: ml,
          mr: mr,
          mb: mb,
          marginRight: 1,
          background: bc,
          border: '2px solid transparent', // adiciona a borda inicialmente
          transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
          fontWeight: 'bold',
          width: {
            xs: '20vw',
            sm: '18vw',
            md: '15vw',
            lg: '12vw',
            xl: '12vw',
          },
          fontSize: {
            xs: '2vw',  // (7.5 / 1200) * 600
            sm: '1.5vw',  // (7.5 / 1200) * 900
            md: '1.5vw',  // (7.5 / 1200) * 1200
            lg: '0.8vw',
            xl: '0.8vw',  // Manter o mesmo tamanho de lg para xl
          },
          height: {
            xs: '6vh',  // (7.5 / 1200) * 600
            sm: '5vh',  // (7.5 / 1200) * 900
            md: '5vh',  // (7.5 / 1200) * 1200
            lg: '5.5vh',
            xl: '5.5vh',  // Manter o mesmo tamanho de lg para xl
          },
          '&:hover': {
            border: '2px solid #0fcd88', // muda a cor da borda na animação
            background: bch
          },
          whiteSpace: 'nowrap',
        }}>
        {name}
      </Button>
    </>
  )
}


function BtnL({ loading, dis, handleLogin, name, cl, bc, bch, mb }: BtnLProps) {
  return (
    <>
      <LoadingButton
        loading={loading}
        variant="contained"
        disabled={dis}
        onClick={handleLogin} sx={{
          color: cl,
          marginRight: 1,
          background: bc,
          border: '2px solid transparent', // adiciona a borda inicialmente
          transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
          fontWeight: 'bold',
          width: {
            xs: '15vw',
            sm: '15vw',
            md: '10vw',
            lg: '10vw',
            xl: '10vw',
          },
          fontSize: {
            xs: '2vw',  // (7.5 / 1200) * 600
            sm: '1.5vw',  // (7.5 / 1200) * 900
            md: '1.2vw',  // (7.5 / 1200) * 1200
            lg: '1vw',
            xl: '1vw',  // Manter o mesmo tamanho de lg para xl
          },
          '&:hover': {
            border: '2px solid #0fcd88', // muda a cor da borda na animação
            background: bch,
            mb: mb
          },
        }}>
        {name}
      </LoadingButton>
    </>
  )
}


function BtnApp({ cl, title }: BtnAppProps) {
  return (
    <Link
      href="/"
      sx={{
        textDecoration: "none",
      }}
    >
      <Button
        sx={{
          border: "2px solid",
          borderColor: cl,
          borderRadius: 3,
          padding: 3,
          height: "2vh",
          width: {
            xs: "30vw",
            sm: "20vw",
            md: "15vw",
            lg: "13vw",
            xl: "13vw",
          },
          color: cl,
          display: "flex",
          alignItems: "center", // Alinhar verticalmente ícone e texto
          justifyContent: "center", // Alinhar horizontalmente ícone e texto
          mb: "50px",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "30vw",
              sm: "15vw",
              md: "12vw",
              lg: "12vw",
              xl: "12vw",
            },
            overflow: "hidden", // Evitar que o texto exceda o limite do botão
            textOverflow: "ellipsis", // Adicionar reticências caso o texto seja muito longo
            whiteSpace: "nowrap", // Evitar quebra de linha
          }}
        >
          <Typography
            sx={{
              textTransform: "none",
              mr: 1,
              fontWeight: "bold",
              color: cl,
              fontSize: { xs: '3vw', sm: '2vw', md: '1.5vw', lg: '1vw', xl: '1vw' }
            }}
          >
            {title}
          </Typography>
        </Box>
      </Button>
    </Link>
  );
}


export { BtnsApp, Btn, BtnApp, BtnL, BtnHome, BtnPerfil };