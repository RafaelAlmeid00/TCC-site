
import {Box, Card, Container} from "@mui/material";
import colors from "../../assets/colors";
import Title from "../title";

function Section3() {


    return (
    <>
     <Box sx={{
          height: '500px',
          width: '100%',
        }}>
          <Container sx={{
            width: '100%',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ml: '25px'
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
                
            </Card>
          </Container>
        </Box>
    </>
    );
}

export default Section3;
