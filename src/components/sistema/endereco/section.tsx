import { Box, Container, FormControl, IconButton, Input, InputAdornment, InputLabel, Typography } from "@mui/material"
import React from "react";
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import GroupsIcon from '@mui/icons-material/Groups';
import SignpostIcon from '@mui/icons-material/Signpost';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import HomeIcon from '@mui/icons-material/Home';
import DomainIcon from '@mui/icons-material/Domain';
import ModalContext from "../../../context/modalcontext";
import { Deccode } from "../FrontDecoded";

function End() {
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default
    const [userData] = React.useState(Deccode());



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
                            CEP
                        </InputLabel>
                        <Input
                            readOnly
                            placeholder="Insira o CEP"
                            inputProps={{ maxLength: 12 }}
                            id="input-with-icon-adornment"
                            value={userData.user_endCEP}
                            startAdornment={
                                <InputAdornment position="start">
                                    <ApartmentIcon />
                                </InputAdornment>
                            }
                            sx={{ fontSize: '14px' }}
                        />
                    </FormControl>
                    <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Cidade
                        </InputLabel>
                        <Input
                            inputProps={{ maxLength: 25 }}
                            id="input-with-icon-adornment"
                            value={userData.user_endcidade}
                            readOnly
                            startAdornment={
                                <InputAdornment position="start">
                                    <LocationCityIcon />
                                </InputAdornment>
                            }
                            sx={{ fontSize: '14px' }}
                        />
                    </FormControl>
                    <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Bairro
                        </InputLabel>
                        <Input
                            inputProps={{ maxLength: 45 }}
                            id="input-with-icon-adornment"
                            value={userData.user_endbairro}
                            readOnly
                            startAdornment={
                                <InputAdornment position="start">
                                    <GroupsIcon />
                                </InputAdornment>
                            }
                            sx={{ fontSize: '14px' }}
                        />
                    </FormControl>
                    <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Rua
                        </InputLabel>
                        <Input
                            inputProps={{ maxLength: 45 }}
                            id="input-with-icon-adornment"
                            value={userData.user_endrua}
                            readOnly
                            startAdornment={
                                <InputAdornment position="start">
                                    <SignpostIcon />
                                </InputAdornment>
                            }
                            sx={{ fontSize: '14px' }}
                        />
                    </FormControl>
                    <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Complemento
                        </InputLabel>
                        <Input
                            inputProps={{ maxLength: 50 }}
                            id="input-with-icon-adornment"
                            value={userData.user_endcomplemento}
                            readOnly
                            startAdornment={
                                <InputAdornment position="start">
                                    <PlaylistAddIcon />
                                </InputAdornment>
                            }
                            sx={{ fontSize: '14px' }}
                        />
                    </FormControl>
                    <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Número
                        </InputLabel>
                        <Input
                            inputProps={{ maxLength: 10 }}
                            id="input-with-icon-adornment"
                            value={userData.user_endnum}
                            readOnly
                            startAdornment={
                                <InputAdornment position="start">
                                    <HomeIcon />
                                </InputAdornment>
                            }
                            sx={{ fontSize: '14px' }}
                        />
                    </FormControl>
                    <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                        <InputLabel htmlFor="input-with-icon-adornment">
                            UF
                        </InputLabel>
                        <Input
                            inputProps={{ maxLength: 2 }}
                            id="input-with-icon-adornment"
                            value={userData.user_endUF}
                            readOnly
                            startAdornment={
                                <InputAdornment position="start">
                                    <DomainIcon />
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

export default End
