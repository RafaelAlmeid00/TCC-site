import { Box, Container, Typography } from "@mui/material";
import Balancer from "react-wrap-balancer";
import { Slide } from "react-awesome-reveal";
import Title from "../frases/title";
import colors from "../../assets/colors";
import Subtitlepad from "../frases/subtitlepad";
import Img from "../img";

export default function SectionApp1() {
  return (
    <>
      <Box
        sx={{
          mt: "11vh",
          height: "89.99vh",
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
              <Title
                textColor={colors.tc}
                textSize="36px"
                title="Baixe o App"
                children={null}
              />
              <Subtitlepad
                sz="20px"
                text="Traga mais praticidade para sua vida! recarregue seu cartão online"
                mt="50px"
              />
            </Slide>
          </Container>
          <Container
            sx={{
              m: "0",
              width: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <Img
              height="300px"
              image="https://i.imgur.com/hsKeJpX.png"
              ml={undefined}
              mr={undefined}
              width="300px"
            />
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
            <Img
              height="290px"
              image="https://i.imgur.com/rsZWA70.png"
              ml={undefined}
              mr={undefined}
              width="150px"
            />
          </Container>
          <Container>
            <Title
              textColor={colors.tc}
              textSize="25px"
              title="Faça sua recarga"
              children={null}
            />
          </Container>
          <Box sx={{
            background: "#black",
            height: "50%",
            width: "50%",
          }}></Box>
          <Container
            sx={{
              m: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Title
              textColor={colors.tc}
              textSize="25px"
              title="Veja a rota do seu Ônibus"
              children={null}
            />
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
            <Img
              height="290px"
              image="https://i.imgur.com/Obaha94.png"
              ml={undefined}
              mr={undefined}
              width="150px"
            />
          </Container>
        </Box>
      </Box>
    </>
  );
}
