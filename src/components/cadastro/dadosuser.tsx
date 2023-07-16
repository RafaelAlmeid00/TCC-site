/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Container, FormControl, Input, InputAdornment, InputLabel, Typography } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import { useContext, useState } from "react";
import axios from "axios";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ModalContext from "../../context/modalcontext";
import { CPFError, DataError, NomeError, NumError, CEPError, Sucess } from "../errosvalidations";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useNavigate } from "react-router-dom";

function CompleteCad(){
    const {email} = useContext(ModalContext);
    const {password} = useContext(ModalContext);
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const {cep} = useContext(ModalContext);
    const {UF} = useContext(ModalContext);
    const {district} = useContext(ModalContext);
    const {street} = useContext(ModalContext);
    const {num} = useContext(ModalContext);
    const {comp} = useContext(ModalContext);
    const {city} = useContext(ModalContext);
    const [showErrorCPF, setShowErrorCPF] = useState(false);
    const [showErrorNome, setShowErrorNome] = useState(false);
    const [showErrorData, setShowErrorData] = useState(false);
    const [showErrorCEP, setShowErrorCEP] = useState(false);
    const [showErrorNum, setShowErrorNum] = useState(false);
    const [showSucess, setShowSucess] = useState(false);
    const [tipo, setTipo] = useState("");
    const [listid, setListId] = useState('');
    const { loginbool, setLog } = useContext(ModalContext);

    const navigate = useNavigate()

    async function cadastrarUsuario(
        email: string, 
        password: string, 
        cpf: string, 
        name: string, 
        date: string, 
        cep: string, 
        UF: string, 
        district: string,
        street: string,
        num: string,
        comp: string,
        city: string,
        rg: string
        ){ 

        date = handleSubmitData()
        
        //Verificação
        console.log('aq ta indo');
        
        if (cpf == '') {
            setShowErrorCPF(true)
            setShowErrorData(false)
            setShowErrorNome(false)
            setShowErrorCEP(false)
        } else if (cpf.length < 11) {
            setShowErrorCPF(true)
            setShowErrorData(false)
            setShowErrorNome(false)
            setShowErrorCEP(false)
        }else if (name == '') {
            setShowErrorNome(true)
            setShowErrorCPF(false)
            setShowErrorData(false)
            setShowErrorCEP(false)
        } else if (date == '') {
            setShowErrorData(true)
            setShowErrorCPF(false)
            setShowErrorNome(false)
            setShowErrorCEP(false)
        } else if (/^\d{4}-\d{2}-\d{2}$/.test(date)){
            setShowErrorData(true)
            setShowErrorCPF(false)
            setShowErrorNome(false)
            setShowErrorCEP(false)
        } else if (cep == '') {
            setShowErrorCEP(true)
            setShowErrorData(false)
            setShowErrorCPF(false)
            setShowErrorNome(false)
        } else if (city == '') {
            setShowErrorCEP(true)
            setShowErrorData(false)
            setShowErrorCPF(false)
            setShowErrorNome(false)
        } else if (num == '') {
            setShowErrorNum(true)
            setShowErrorCEP(false)
            setShowErrorData(false)
            setShowErrorCPF(false)
            setShowErrorNome(false)
        } else{
            setShowErrorNum(false)
            setShowErrorCEP(false)
            setShowErrorData(false)
            setShowErrorCPF(false)
            setShowErrorNome(false)
        } 
        console.log('aq ta indo tbm');
        handleGetListCpf()
        console.log('aq ta indo tbm²');
        
        
        const dadosUsuario = {
        user_CPF: cpf,
        user_RG: rg,
        user_nome: name,
        user_email: email,
        user_senha: password,
        user_nascimento: date,
        user_endCEP: cep,
        user_endUF: UF,
        user_endbairro: district,
        user_endrua: street,
        user_endnum: num,
        user_endcomplemento: comp,
        user_endcidade: city,
        user_tipo: tipo,
        };
        if (listid) {
            dadosUsuario.list_CPF_list_id = listid;
        }
        console.log(dadosUsuario);
        
        try {
            const response = await axios.post('http://localhost:3344/user', dadosUsuario);
            setShowSucess(true)
            console.log('foi mlk');
            setLog(true)
            navigate('/cadastro')
        } catch (error) {
            if (error.response) {
                // O servidor retornou um status diferente de 2xx
                console.error('Erro na requisição POST:', error.response.status);
            } else if (error.request) {
                // A requisição foi feita, mas não recebeu uma resposta
                console.error('Erro na requisição POST:', error.request);
            } else {
                // Algo aconteceu durante a configuração da requisição
                console.error('Erro na requisição POST:', error.message);
            }
        }
    }

    const handleGetListCpf = async () => {
        const responsecpf = await axios.get('http://localhost:3344/listCpf')
        if (responsecpf) {
            const type = responsecpf.data.list_tipo
            const cpf_list = responsecpf.data.list_CPF
            const idlist = responsecpf.data.list_id
            console.log('aq ta indo tbm³');
            if (cpf_list == cpf) {
                setTipo(type)
                setListId(idlist)
                console.log('aq ta indo tbm4');
            } else if (idlist == ''){
                setTipo('default')
            }
        } else {
            console.log('error');
        }
    };


    const handleclick = async () => {
        await cadastrarUsuario(email, password, cpf, name, date, cep, UF, district, street, num, comp, city, rg)
        console.log('testando');
        
    }

    function formatDateString(date: string): string {
        let formattedString = date.replace(/\D/g, ''); // remove todos os caracteres não numéricos
        if (formattedString.length > 2) {
            formattedString = formattedString.slice(0, 2) + '-' + formattedString.slice(2);
        }
        if (formattedString.length > 5) {
            formattedString = formattedString.slice(0, 5) + '-' + formattedString.slice(5);
        }
        console.log(formattedString);
        
        return formattedString;
    }

    function handleSubmitData() {
        const formattedDate = formatDateString(date);
        const parts = formattedDate.split('-');
        const yyyy = parts[2];
        const mm = parts[1];
        const dd = parts[0];
        const formattedDateForDatabase = `${yyyy}-${mm}-${dd}`;
        console.log(formattedDateForDatabase);
        
        return formattedDateForDatabase;
        // Submeta a data no formato yyyy-mm-dd para o banco de dados
    }
    
return (
    <>
    {showErrorCPF && <CPFError />}
    {showErrorNome && <NomeError />}
    {showErrorData && <DataError />}
    {showErrorCEP && <CEPError />}
    {showErrorNum && <NumError />}
    {showSucess && <Sucess />}

        <Container sx={{
            marginLeft: "-22px",
            width: "110%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
        }}>
            <Typography sx={{textAlign: 'center', mb: '30px', color: '#222222', fontSize: '18px', fontWeight: 'bold'}}>
                Dados Pessoais e Endereço
            </Typography>
            <Typography sx={{textAlign: 'center', mb: '40px', color: '#444444', fontSize: '15px'}}>
                Coloque o seu CPF e CEP para obter os dados:
            </Typography>
        <FormControl variant="standard" sx={{ width: '80%', mb: '20px' }}>
        <InputLabel htmlFor="input-with-icon-adornment">
        CPF
        </InputLabel>
        <Input
        id="input-with-icon-adornment"
        inputProps={{ maxLength: 11 }}
        required
        value={cpf}
        placeholder="Insira apenas os números do CPF"
        onChange={(event) => {
            const { value } = event.target;
            const newValue = value.replace(/\D/g, ''); // remove tudo que não é número
            setCpf(newValue);
        }}
        startAdornment={
            <InputAdornment position="start">
            <AccountCircleIcon />
            </InputAdornment>
        }
        sx={{ fontSize: '14px' }}
        />
        </FormControl>
        <FormControl variant="standard" sx={{ width: '80%', mb: '20px' }}>
        <InputLabel htmlFor="input-with-icon-adornment">
        RG
        </InputLabel>
        <Input
        id="input-with-icon-adornment"
        inputProps={{ maxLength: 9 }}
        required
        value={rg}
        placeholder="Insira apenas os números do RG"
        onChange={(event) => {
            const { value } = event.target;
            const newValue2 = value.replace(/\D/g, ''); // remove tudo que não é número
            setRg(newValue2);
        }}
        startAdornment={
            <InputAdornment position="start">
            <HowToRegIcon />
            </InputAdornment>
        }
        sx={{ fontSize: '14px' }}
        />
        </FormControl>
        <FormControl variant="standard" sx={{ width: '80%', mb: '20px' }}>
        <InputLabel htmlFor="input-with-icon-adornment">
        Nome Completo
        </InputLabel>
        <Input
        inputProps={{ maxLength: 45 }}
        placeholder="Fulano da Silva Oliveira"
        required
        id="input-with-icon-adornment"
        value={name}
        onChange={(event) => setName(event.target.value)}
        startAdornment={
            <InputAdornment position="start">
            <BadgeIcon />
            </InputAdornment>
        }
        sx={{ fontSize: '14px' }}
        />
        </FormControl>
        <FormControl variant="standard" sx={{ width: '80%', mb: '20px' }}>
        <InputLabel htmlFor="input-with-icon-adornment">
        Data de Nascimento
        </InputLabel>
        <Input
        inputProps={{ maxLength: 10 }}
        required
        id="input-with-icon-adornment"
        value={date}
        placeholder="Use o formato: yyyy-MM-dd"
        onChange={(event) => setDate(formatDateString(event.target.value))}
        startAdornment={
            <InputAdornment position="start">
            <CalendarMonthIcon />
            </InputAdornment>
        }
        sx={{ fontSize: '14px' }}
        />
        </FormControl>
        <Button variant="contained" 
        onClick={handleclick}
        sx={{
            mt: '40px',
        }} >
            Finalizar</Button>
        </Container>
        </>
)
}

export default CompleteCad
