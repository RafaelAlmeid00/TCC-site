import { Box, Container, FormControl, IconButton, Input, InputAdornment, InputLabel, Typography } from "@mui/material"
import React from "react";
import ModalContext from "../../../context/modalcontext";
import { Deccode } from "../../../routes";
import { CheckCircle, Contacts, CreditCard, AccountCircle, HowToReg, Email } from "@mui/icons-material";

function Info() {
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default
    const [userData] = React.useState(Deccode());
    console.log(userData);

    return (
        <>
            <Box
                id="section1"
                sx={{
                    mt: "9.5vh",
                    height: "90.5vh",
                    width: "80vw",
                    float: "right",
                    background: verify ? fundo : "white",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
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
                            value={userData.user_CPF}
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
                            value={userData.user_RG}
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
                    </FormControl>
                    <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Celular
                        </InputLabel>
                        <Input
                            inputProps={{ maxLength: 45 }}
                            id="input-with-icon-adornment"
                            value={userData.user_cel}
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
                            value={userData.user_credit}
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
                            value={userData.user_status}
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