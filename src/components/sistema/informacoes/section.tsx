import { Box, Container, FormControl, Input, InputAdornment, InputLabel, Typography } from "@mui/material"
import React from "react";
import ModalContext from "../../../context/modalcontext";
import { CheckCircle, Contacts, CreditCard, AccountCircle, HowToReg, Email } from "@mui/icons-material";
import TuneIcon from "@mui/icons-material/Tune";
import colors from "../../../assets/colors";
import { BtnHome } from "../../btns";
import { EmailEnviado, EmailNaoEnviado } from "../../errosvalidations";
import axios from "axios";

function Info() {
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default
    const { userData } = React.useContext(ModalContext);
    console.log(userData);
    const [email, setEmail] = React.useState(false);
    const [nemail, setNEmail] = React.useState(false);
    let data = userData ? userData.user_email : ''
    const token = localStorage.getItem('token')

    const sendEmail = async () => {
        try {

            await axios.post('https://easypass-iak1.onrender.com/user/emailverify', {
                user_email: userData ? userData.user_email : '',
                user_CPF: userData ? userData.user_CPF : '',
                user_nome: userData ? userData.user_nome : '',
                token: token
            })
            setEmail(true)
            setTimeout(() => {
                setEmail(false)
            }, 8000)
        } catch (error) {
            console.log(error);
            setNEmail(true)
            setTimeout(() => {
                setNEmail(false)
            }, 5000)
        }

    };

    return (
        <>
            {email && typeof data === 'string' && <EmailEnviado data={data} />}
            {nemail && typeof data === 'string' && <EmailNaoEnviado data={data} />}
            <Box
                id="section1"
                sx={{
                    height: "100vh",
                    width: "80vw",
                    float: "right",
                    background: verify ? fundo : "white",
                    position: "relative",
                }}
            >
                <Container
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "start",
                        alignItems: "center",
                        float: "left",
                        mt: 3,
                        mb: 5
                    }}
                >
                    <TuneIcon
                        sx={{
                            mr: 2,
                            color: verify ? "white" : "black",
                        }}
                    />
                    <Typography
                        sx={{
                            color: verify ? colors.sc : colors.tc,
                            fontSize: "25px",
                            fontWeight: 700,
                        }}
                    >
                        Informações da Conta - {userData ? userData.user_nome : ''}
                    </Typography>
                </Container>
                <Container
                    sx={{
                        width: "40%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 8,
                    }}
                >
                    <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                        <InputLabel htmlFor="input-with-icon-adornment">
                            CPF
                        </InputLabel>
                        <Input
                            readOnly
                            inputProps={{ maxLength: 12 }}
                            id="input-with-icon-adornment"
                            value={userData ? userData.user_CPF : ''}
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                            sx={{ fontSize: '14px' }}
                        />
                    </FormControl>
                    <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                        <InputLabel htmlFor="input-with-icon-adornment">
                            RG
                        </InputLabel>
                        <Input
                            inputProps={{ maxLength: 25 }}
                            id="input-with-icon-adornment"
                            value={userData ? userData.user_RG : ''}
                            readOnly
                            startAdornment={
                                <InputAdornment position="start">
                                    <HowToReg />
                                </InputAdornment>
                            }
                            sx={{ fontSize: '14px' }}
                        />
                    </FormControl>
                    <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Email
                        </InputLabel>
                        {userData && userData.user_verifyemail == '1'
                            ?
                            <Input
                                inputProps={{ maxLength: 45 }}
                                id="input-with-icon-adornment"
                                value={userData.user_email}
                                readOnly
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Email />
                                    </InputAdornment>
                                }
                                sx={{ fontSize: '14px' }}
                            />
                            :
                            <Input
                                inputProps={{ maxLength: 45 }}
                                id="input-with-icon-adornment"
                                value={userData ? userData.user_email : ''}
                                readOnly
                                endAdornment={
                                    <BtnHome name={"Confirmar"} fun={sendEmail} cl={verify ? colors.pm : "white"} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} />
                                }
                                sx={{ fontSize: '14px' }}
                            />
                        }
                    </FormControl>
                    <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Celular
                        </InputLabel>
                            <Input
                                inputProps={{ maxLength: 45 }}
                                id="input-with-icon-adornment"
                                value={userData && userData.user_cel}
                                readOnly
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Contacts />
                                    </InputAdornment>
                                }
                                sx={{ fontSize: '14px' }}
                            />
                    </FormControl>
                    <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Crédito na conta
                        </InputLabel>
                        <Input
                            inputProps={{ maxLength: 45 }}
                            id="input-with-icon-adornment"
                            value={userData ? userData.user_credit : ''}
                            readOnly
                            startAdornment={
                                <InputAdornment position="start">
                                    <CreditCard />
                                </InputAdornment>
                            }
                            sx={{ fontSize: '14px' }}
                        />
                    </FormControl>
                    <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Status da Conta
                        </InputLabel>
                        <Input
                            inputProps={{ maxLength: 50 }}
                            id="input-with-icon-adornment"
                            value={userData ? userData.user_status : ''}
                            readOnly
                            startAdornment={
                                <InputAdornment position="start">
                                    <CheckCircle />
                                </InputAdornment>
                            }
                            sx={{ fontSize: '14px' }}
                        />
                    </FormControl>
                </Container>
            </Box>
        </>
    )
}

export default Info