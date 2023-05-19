
import {Box, Container} from "@mui/material";
import colors from "../../assets/colors";
import Title from "../title";
import Frase from "../frase";
import Subtitle from "./../subtitle";
import Img from "../img";

function Section1() {


    return (
    <>
    <Box sx={{
        height: '500px',
        width: '100%',
    }}>
        <Container sx={{
            width: '50%',
            height: '100%',
            float: 'left',
        }}>
            <Title title="Viage com a gente" textSize="58px" textColor={colors.tc}>
                <Subtitle />
            </Title>
        <Frase textColor="black" textSize='20px' frase="Com o EasyPass tenha controle da sua viagem de forma autonoma e maior conforto para sair de casa. Será você no controle da sua viagem"/>
        </Container>
        <Container sx={{
            width: '50%',
            height: '100%',
            float: 'right',
            display: 'flex',
            alignItems: 'flex-end',
        }}>
            <Img image="https://i.imgur.com/HTeP1qs.png" height="75%" ml="230px" width="auto" mr="auto" />
        </Container>
    </Box>
    </>
    );
}

export default Section1;
