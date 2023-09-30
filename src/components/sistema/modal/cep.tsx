import { Box, Container, FormControl, IconButton, Input, InputAdornment, InputLabel, Typography } from "@mui/material"
import React from "react";
import axios from "axios";
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import GroupsIcon from '@mui/icons-material/Groups';
import SignpostIcon from '@mui/icons-material/Signpost';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import HomeIcon from '@mui/icons-material/Home';
import DomainIcon from '@mui/icons-material/Domain';
import ModalContext from "../../../context/modalcontext";
import { Btn } from "../../btns";
import colors from "../../../assets/colors";
import { CEPPErfil } from "../../errosvalidations";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

function CEP({ onConfirmarCEP, onFechaCEP }: any) {
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const fundo = themes.palette.background.default
    const [cep, setCep] = React.useState('');
    const [UF, setUF] = React.useState('');
    const [district, setDistrict] = React.useState('');
    const [street, setStreet] = React.useState('');
    const [num, setNum] = React.useState('');
    const [comp, setComp] = React.useState('');
    const [city, setCity] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [err, setErr] = React.useState(false);

    const handleChangeCep = (event: { target: { value: string; }; }) => {
        let cepValue = event.target.value.replace(/\D/g, ''); // Remove qualquer caractere que não seja número
        cepValue = cepValue.slice(0, 5) + '-' + cepValue.slice(5, 8); // Adiciona o traço na posição correta
        setCep(cepValue);
    }

    const handleApiCEP = async () => {
        const url = `https://cdn.apicep.com/file/apicep/${cep}.json`;
        try {
            const response = await axios.get(url);
            setUF(response.data.state);
            setCity(response.data.city);
            setDistrict(response.data.district);
            setStreet(response.data.address);
            setIsLoading(true);

        } catch (error) {
            console.error(error);
        }
    };

    const ConfirmarCEP = async () => {
        try {
            if (cep == '' || cep.length < 9 || num == '') {
                setErr(true)
                setTimeout(() => {
                    setErr(false)
                }, 3000)
            } else {
            const updates = {
                cep: cep,
                num: num,
                uf: UF,
                bairro: district,
                rua: street,
                complemento: comp,
                cidade: city,
            };
            onConfirmarCEP(updates);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {err && <CEPPErfil />}
            <Box id="section1" sx={{
                mt: '9.5vh',
                height: '105vh',
                width: '80vw',
                float: "right",
                background: verify ? fundo : 'white',
                position: "relative",
                overflow: "hidden",
                }}>
                <Box sx={{
                    height: '15vh',
                    ml: 10,
                    mb: -10,
                    mt: 2,
                    background: verify ? fundo : 'white',
                }}>
                    <IconButton
                        title="Voltar"
                        sx={{
                            ml: '10px',
                            mt: '10px',
                        }}
                        onClick={onFechaCEP}
                    >
                        <KeyboardDoubleArrowLeftIcon
                            sx={{
                                color: verify ? 'white' : 'black',
                                fontSize: '35px',
                            }}
                        /><Typography sx={{
                            fontSize: '20px',
                        }}>Voltar</Typography>
                    </IconButton>
                </Box>
                <Container sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: '40%'
                }}>
                    <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                        <InputLabel htmlFor="input-with-icon-adornment">
                            CEP
                        </InputLabel>
                        <Input
                            placeholder="Insira o CEP"
                            inputProps={{ maxLength: 12 }}
                            required
                            id="input-with-icon-adornment"
                            value={cep}
                            onChange={handleChangeCep}
                            onBlur={handleApiCEP}
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
                            required
                            id="input-with-icon-adornment"
                            value={city}
                            readOnly
                            disabled={isLoading}
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
                            required
                            id="input-with-icon-adornment"
                            value={district}
                            readOnly
                            disabled={isLoading}
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
                            required
                            id="input-with-icon-adornment"
                            value={street}
                            readOnly
                            disabled={isLoading}
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
                            placeholder="Exemplo: Casa de baixo"
                            required
                            id="input-with-icon-adornment"
                            value={comp}
                            onChange={(event) => setComp(event.target.value)}
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
                            required
                            id="input-with-icon-adornment"
                            value={num}
                            onChange={(event) => setNum(event.target.value)}
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
                            required
                            id="input-with-icon-adornment"
                            value={UF}
                            readOnly
                            disabled={isLoading}
                            startAdornment={
                                <InputAdornment position="start">
                                    <DomainIcon />
                                </InputAdornment>
                            }
                            sx={{ fontSize: '14px' }}
                        />
                    </FormControl>
                    <Btn name={"Confirmar"} fun={ConfirmarCEP} bch={verify ? 'white' : undefined} bc={verify ? 'white' : undefined} cl={verify ? colors.pm : undefined} route={""} vis={undefined} mb={undefined} />
                </Container>
            </Box>
        </>
    )
}

export default CEP