import React from "react";
import axios from "axios";
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import GroupsIcon from '@mui/icons-material/Groups';
import SignpostIcon from '@mui/icons-material/Signpost';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import HomeIcon from '@mui/icons-material/Home';
import DomainIcon from '@mui/icons-material/Domain';
import ModalContext from "../../context/modalcontext";
import { Container, FormControl, Input, InputAdornment, InputLabel } from "@mui/material"
import { Btn } from "../btns";
import colors from "../../assets/colors";

function CompleteCad2(screen: any, _onVerifyChange: (arg0: any) => void){
    const {cep, setCep} = React.useContext(ModalContext);
    const {UF, setUF} = React.useContext(ModalContext);
    const {district, setDistrict} = React.useContext(ModalContext);
    const {street, setStreet} = React.useContext(ModalContext);
    const {num, setNum} = React.useContext(ModalContext);
    const {comp, setComp} = React.useContext(ModalContext);
    const {city, setCity} = React.useContext(ModalContext);
    const [isLoading, setIsLoading] = React.useState(false);
    const { verify } = React.useContext(ModalContext);

    const handleChangeCep = (event: { target: { value: string; }; }) => {
        let cepValue = event.target.value.replace(/\D/g, ''); // Remove qualquer caractere que não seja número
        cepValue = cepValue.slice(0, 5) + '-' + cepValue.slice(5, 8); // Adiciona o traço na posição correta
        setCep?.(cepValue);
    }
    
    const handleApiCEP = async () => {
        const url = `https://cdn.apicep.com/file/apicep/${cep}.json`; 
        try {
            const response = await axios.get(url);
            setUF?.(response.data.state);
            setCity?.(response.data.city);
            setDistrict?.(response.data.district);
            setStreet?.(response.data.address);
            setIsLoading(true);
            
        } catch (error) {
        console.error(error);
        }
    };

    console.log(screen.screen);
    

return (
    <>
        <Container sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
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
        onChange={(event) => setComp?.(event.target.value)}
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
        onChange={(event) => setNum?.(event.target.value)}
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
        {screen.screen == 'xs' && <Btn name={'Confirmar'} fun={() => screen.onVerifyChange(true)} cl={verify ? colors.pm : 'white'} route={""} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} vis={undefined} mb={undefined} />}
        </Container>
    </>
)
}

export default CompleteCad2