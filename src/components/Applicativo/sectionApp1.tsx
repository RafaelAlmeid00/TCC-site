import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import { Slide } from "react-awesome-reveal";
import colors from "../../assets/colors";
import theme from "../../assets/theme";
import app1 from "../../assets/app1.svg";
import app2 from "../../assets/app2.png";
import app3 from "../../assets/app3.svg";
import BtnsApp from "../buttons/app";

export default function SectionApp1() {
  return (
    <>
      <Box
        sx={{
          mt: "11vh",
          height: "89.99vh",
          width: "100vw",
        }}
      >
        <Box
          sx={{
            height: "50%",
            display: "flex",
          }}
        >
          <Container
            sx={{
              width: "50%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",  
            }}
          >
            <Slide direction="left">
              <Typography
                sx={{
                  color: colors.tc,
                  fontSize: {
                    xs: "2.5vh", // (7.5 / 1200) * 600
                    sm: "3vh", // (7.5 / 1200) * 900
                    md: "4vh", // (7.5 / 1200) * 1200
                    lg: "5vh",
                    xl: "5vh", // Manter o mesmo tamanho de lg para xl
                  },
                  mr: "100px",
                }}
              >
                Baixe o App
              </Typography>
              <Container
                sx={{
                  textAlign: "justify",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "2vh", // (7.5 / 1200) * 600
                      sm: "2.5vh", // (7.5 / 1200) * 900
                      md: "2.5vh", // (7.5 / 1200) * 1200
                      lg: "3vh",
                      xl: "3vh", // Manter o mesmo tamanho de lg para xl
                    },
                  }}
                >
                  Traga mais praticidade para sua vida!
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "2vh", // (7.5 / 1200) * 600
                      sm: "2.5vh", // (7.5 / 1200) * 900
                      md: "2.5vh", // (7.5 / 1200) * 1200
                      lg: "3vh",
                      xl: "3vh", // Manter o mesmo tamanho de lg para xl
                    },
                  }}
                >
                  Recarregue seu cartão online
                </Typography>
              </Container>
            </Slide>
            <BtnsApp cl="black" mt="60px" ml="100px" mb={undefined} />
          </Container>
          <Container
            sx={{
              m: "0",
              width: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={app2}
              style={{
                width: "300px",
                height: "280px",
              }}
            ></img>
          </Container>
        </Box>

        <Box
          sx={{
            height: "50%",
            background: "#E9E9E9",
            display: "flex",
          }}
        >
          <Container
            sx={{
              m: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "16%",
            }}
          >
            <img
              src={app1}
              style={{
                width: "150px",
                height: "290px",
                marginLeft: "100px",
              }}
            ></img>
          </Container>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",  
            }}
          >
            <Typography
              sx={{
                color: colors.tc,
                mt: "10px",
                fontSize: {
                  xs: "2.5vh",
                  sm: "3vh",
                  md: "4vh",
                  lg: "4vh",
                  xl: "4vh",
                },
                fontWeight: "bold",
              }}
            >
              Faça sua recarga
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: {
                  xs: "1.5vh", // (7.5 / 1200) * 600
                  sm: "2vh", // (7.5 / 1200) * 900
                  md: "2vh", // (7.5 / 1200) * 1200
                  lg: "2.5vh",
                  xl: "3vh", // Manter o mesmo tamanho de lg para xl
                },
                height: "190px",
                fontWeight: "bold",
              }}
            >
              Otimize seu dia e realize sua recarga totalmente online pelo nosso
              site e aplicativo
            </Typography>
            <Link
              href="/"
              sx={{
                textDecoration: "none",
              }}
            >
              <Button
                sx={{
                  border: "2px solid",
                  borderColor: "black",
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
                  color: "black",
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
                      fontSize: "inherit", // Herdar tamanho de fonte do componente pai (Button)
                      fontWeight: "bold",
                    }}
                  >
                    Recarregar
                  </Typography>
                </Box>
              </Button>
            </Link>
          </Container>

          <Divider orientation="vertical" variant="middle" flexItem></Divider>

          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: colors.tc,
                mt: "10px",
                fontSize: {
                  xs: "2.5vh",
                  sm: "3vh",
                  md: "4vh",
                  lg: "4vh",
                  xl: "4vh",
                },
                fontWeight: "bold",
              }}
            >
              Veja suas rotas
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: {
                  xs: "1.5vh", // (7.5 / 1200) * 600
                  sm: "2vh", // (7.5 / 1200) * 900
                  md: "2vh", // (7.5 / 1200) * 1200
                  lg: "2.5vh",
                  xl: "3vh", // Manter o mesmo tamanho de lg para xl
                },
                height: "190px",
                fontWeight: "bold",
              }}
            >
              Em nosso aplicativo os usuários possuem todos os recursos na palma
              de sua mão, como o a verificação das rotas dos ônibus.
            </Typography>
            <Link
              href="/opcoes"
              sx={{
                textDecoration: "none",
              }}
            >
              <Button
                sx={{
                  border: "2px solid",
                  borderColor: "black",
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
                  color: "black",
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
                      fontSize: "inherit", // Herdar tamanho de fonte do componente pai (Button)
                    }}
                  >
                    Rotas
                  </Typography>
                </Box>
              </Button>
            </Link>
          </Container>
          <Container
            sx={{
              m: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "15%",
            }}
          >
            <img
              src={app3}
              style={{
                height: "290px",
                width: "150px",
                marginRight: "100px",
              }}
            />
          </Container>
        </Box>
      </Box>
    </>
  );
}
