import { Box, Button, Container, Link, Typography } from "@mui/material";
import theme from "../../assets/theme";
import AppleIcon from "@mui/icons-material/Apple";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function BtnsApp({ cl, mt, ml, mb }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        mt: mt, //60 (exceção footer)
        ml: ml, //100 (exceção footer)
        mb: mb, 
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
