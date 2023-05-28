
import {Box, Card, Container, Link, Typography} from "@mui/material";
import colors from "../../assets/colors";
import Title from "../title";
import Img from "../img";
import { Balancer } from "react-wrap-balancer";

function Section3() {


    return (
    <>
    <Box sx={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
          <Container sx={{
            width: '100%',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ml: '25px',
            mt: '-60px'
          }}>
            <Title title="Ache polos do EasyPass perto de você" textSize="30px" textColor={colors.tc} children={null} />
          </Container>
          <Container sx={{
            width: '100%',
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: '40px',

          }}>
            <Card sx={{
                backgroundColor: "#9d9d9d",
                width: '70%',
                height: '100%',
                border: '1px solid',
                borderColor: colors.sc,
                borderRadius: '20px'
            }}>
              <Link href="https://www.google.com/maps/place/FAETEC+Volta+Redonda/@-22.487799,-44.0725387,17z/data=!4m14!1m7!3m6!1s0x9ebd1700000001:0xe7458888a0206e3b!2sFAETEC+Volta+Redonda!8m2!3d-22.487799!4d-44.07035!16s%2Fg%2F1tt0sbws!3m5!1s0x9ebd1700000001:0xe7458888a0206e3b!8m2!3d-22.487799!4d-44.07035!16s%2Fg%2F1tt0sbws" underline="none"> 
                <Img image="https://i.imgur.com/g2wSiUC.png" height="100%" width="100%" ml={undefined} mr={undefined} />
                </Link>
            </Card>
          </Container>
          <Balancer>
          <Typography sx={{
                fontSize: '12px',
                mt: '60px',
                fontWeight: 'bold',
                opacity: '0.5',
                color: 'black',
                width: '1100px',
                textAlign: 'center'
            }}>
            *EasyPass é um benefício individual, com os preços variando de acordo com cada tipo de usuário. Os envios dos cartões são referentes a localização cadastrada no seu perfil. Para alunos e trabalhadores, os usuários devem averiguar dúvidas e pedidos de registro com as instituições. Faça seu cadastro no nosso site ou em nosso app para ver nossos serviços.
            </Typography>
            </Balancer>
        </Box>
    </>
    );
}

export default Section3;
