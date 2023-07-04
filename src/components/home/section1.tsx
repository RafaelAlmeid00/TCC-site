import { Box, Container, Typography } from "@mui/material";
import Img from "../img";
import Balancer from "react-wrap-balancer";
import { Slide } from "react-awesome-reveal";
import theme from "../../assets/theme";
import BtnsApp from "../buttons/app";

function Section1() {
  return (
    <>
      <Box
        sx={{
          mt:    "10vh",
          height: "90vh",
          width: "100vw",
          background:
            "linear-gradient(to right, rgba(25, 118, 210, 1) 35%, rgba(25, 118, 210, 0.9) 40%, rgba(25, 118, 210, 0.8) 45%, rgba(25, 118, 210, 0.7) 50%, rgba(25, 118, 210, 0.6) 55%, rgba(25, 118, 210, 0.5) 60%, rgba(25, 118, 210, 0.4) 65%, rgba(25, 118, 210, 0.3) 70%, rgba(25, 118, 210, 0.2) 75%, rgba(25, 118, 210, 0.1) 80%)",
          [theme.breakpoints.down("md")]: {
            mt: 0,
            background: "rgba(25, 118, 210, 1)",
            height: "100vh",
          },
        }}
      >
        <Container
          sx={{
            width: "50%",
            height: "100%",
            float: "left",
            [theme.breakpoints.down("md")]: {
              float: "none",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            },
          }}
        >
          <Slide direction="left">
            <Balancer>
              <Typography
                sx={{
                  color: "white",
                  fontSize: {
                    xs: "4vh", // (7.5 / 1200) * 600
                    sm: "4vh", // (7.5 / 1200) * 900
                    md: "6vh", // (7.5 / 1200) * 1200
                    lg: "7.5vh",
                    xl: "7.5vh", // Manter o mesmo tamanho de lg para xl
                  },
                  mt: "50px",
                  ml: "100px",
                  fontWeight: "bold",
                  [theme.breakpoints.down("md")]: {
                    margin: "0 auto",
                    textAlign: "center",
                  },
                }}
              >
                Viaje com a gente
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "2.5vh", // (7.5 / 1200) * 600
                    sm: "3vh", // (7.5 / 1200) * 900
                    md: "4vh", // (7.5 / 1200) * 1200
                    lg: "5vh",
                    xl: "5vh", // Manter o mesmo tamanho de lg para xl
                  },
                  display: "flex",
                  flexDirection: "row",
                  color: "white",
                  fontWeight: "bold",
                  ml: "130px",
                  [theme.breakpoints.down("md")]: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    ml: 0,
                    mb: 5,
                  },
                }}
              >
                Viaje com a{" "}
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      xs: "2.5vh", // (7.5 / 1200) * 600
                      sm: "3vh", // (7.5 / 1200) * 900
                      md: "4vh", // (7.5 / 1200) * 1200
                      lg: "5vh",
                      xl: "5vh", // Manter o mesmo tamanho de lg para xl
                    },
                    ml: "10px",
                    background:
                      "linear-gradient(to right, #0fcd88 50%, white 50%)",
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                  }}
                >
                  EasyPass
                </Typography>
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: {
                    xs: "2vh", // (7.5 / 1200) * 600
                    sm: "2.5vh", // (7.5 / 1200) * 900
                    md: "2.5vh", // (7.5 / 1200) * 1200
                    lg: "3vh",
                    xl: "3vh", // Manter o mesmo tamanho de lg para xl
                  },
                  mt: "100px",
                  ml: "100px",
                  fontWeight: "600",
                  [theme.breakpoints.down("md")]: {
                    margin: "0 auto",
                    textAlign: "center",
                    fontWeight: "100",
                  },
                }}
              >
                Com o EasyPass tenha controle da sua viajem de forma autonoma e
                maior conforto para sair de casa. Será você no controle da sua
                viagem
              </Typography>
            </Balancer>
          </Slide>
          <Slide direction="up">
            <BtnsApp cl="white" mt="60px" ml="100px" mb={undefined} />
          </Slide>
        </Container>
        <Container
          sx={{
            width: "50%",
            height: "100%",
            float: "right",
            display: "flex",
            alignItems: "flex-end",
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}
        >
          <Slide direction="up">
            <Img
              image="https://i.imgur.com/HTeP1qs.png"
              height="75%"
              ml="230px"
              width="auto"
              mr="auto"
            />
          </Slide>
        </Container>
      </Box>
    </>
  );
}

export default Section1;
