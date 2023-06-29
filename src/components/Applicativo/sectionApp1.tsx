import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { Slide } from "react-awesome-reveal";
import colors from "../../assets/colors";
import theme from "../../assets/theme";
import app1 from "../../assets/app1.png";
import app2 from "../../assets/app2.png";
import app3 from "../../assets/app3.png";
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
            <BtnsApp cl="black" mt="60px" ml="100px" />
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
                height: "300px",
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
              width: "30%",
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
              }}
            >
              Faça sua recarga
            </Typography>
          </Container>

          <Divider orientation="vertical" variant="middle" flexItem></Divider>

          <Container
            sx={{
              display: "grid",
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
              }}
            >
              Veja suas rotas
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: {
                  xs: "2vh", // (7.5 / 1200) * 600
                  sm: "2.5vh", // (7.5 / 1200) * 900
                  md: "2.5vh", // (7.5 / 1200) * 1200
                  lg: "3vh",
                  xl: "3vh", // Manter o mesmo tamanho de lg para xl
                },
              }}
            >
              Em nosso aplicativo os usuários possuem todos os recursos na palma
              de sua mão, como o a verificação das rotas dos ônibus.
            </Typography>
          </Container>
          <Container
            sx={{
              m: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "30%",
            }}
          >
            <img
              src={app3}
              style={{
                height: "290px",
                width: "150px",
                marginRight: "100px",
              }}
            ></img>
          </Container>
        </Box>
      </Box>
    </>
  );
}
