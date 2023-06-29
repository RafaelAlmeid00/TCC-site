import { Box, Button, Card, Container, Typography } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import colors from "../../assets/colors";
import { motion } from "framer-motion";

function Homesistema() {

    const userJson = localStorage.getItem('user');
    const userData = userJson ? JSON.parse(userJson) : null;

    return (
        <>
            <Box sx={{
                mt: '10vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '100vw',
            }}>
                <Container sx={{
                    width: '70%',
                    backgound: 'red',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    float: 'left',
                    mt: 3
                }}>
                    <TuneIcon sx={{
                        mr: 2
                    }} />
                    <Typography sx={{
                        color: colors.tc,
                        fontSize: '25px',
                        fontWeight: 700
                    }}>
                        Controle de Cartão - {userData.user_nome}
                    </Typography>
                </Container>
                <Container sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 5
                }}>
                    <Button variant="contained" sx={{
                        color: 'white',
                        borderRadius: 20,
                        marginRight: 1,
                        border: '2px solid transparent', // adiciona a borda inicialmente
                        transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
                        '&:hover': {
                            border: '2px solid #0fcd88', // muda a cor da borda na animação
                        },
                    }}>
                        <Typography sx={{
                            textTransform: 'none',
                        }}>
                            Histórico Cartão
                        </Typography>
                    </Button>
                    <Button variant="contained" sx={{
                        color: 'white',
                        borderRadius: 20,
                        marginRight: 1,
                        border: '2px solid transparent', // adiciona a borda inicialmente
                        transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
                        '&:hover': {
                            border: '2px solid #0fcd88', // muda a cor da borda na animação
                        },
                        ml: 5,
                    }}>
                        <Typography sx={{
                            textTransform: 'none',
                        }}>
                            Recarregar Cartão
                        </Typography>
                    </Button>
                    <Button variant="contained" sx={{
                        color: 'white',
                        borderRadius: 20,
                        marginRight: 1,
                        border: '2px solid transparent', // adiciona a borda inicialmente
                        transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
                        '&:hover': {
                            border: '2px solid #0fcd88', // muda a cor da borda na animação
                        },
                        ml: 5
                    }}>
                        <Typography sx={{
                            textTransform: 'none',
                        }}>
                            Cancelar Cartão
                        </Typography>
                    </Button>
                </Container>
                <Container sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'row',
                    mt: 6
                }}>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        style={{ x: 100 }}
                        >

                    <Card sx={{
                        width: '7vw',
                        height: '20vh',
                        boxShadow: '1px 1px 8px 1px',
                        cursor: 'pointer',
                        ml: 25
                    }}>
                        <Typography variant="h3" sx={{
                            color: 'black',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            '&:hover': {
                                color: '#0fcd88', // muda a cor da borda na animação
                            },
                        }}>
                            +
                        </Typography>
                    </Card>
                    </motion.div>
                </Container>
            </Box>
        </>
    )
}

export default Homesistema
