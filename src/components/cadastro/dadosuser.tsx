/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Container, FormControl, Input, InputAdornment, InputLabel, Typography } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import React, { useContext, useState } from "react";
import axios from "axios";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ModalContext from "../../context/modalcontext";
import { CPFError, DataError, NomeError, NumError, CEPError, Sucess, RGError, CPFExiste } from "../errosvalidations";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useNavigate } from "react-router-dom";
import Tipo from "./tipouser";

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
    const [tipo, setTipo] = useState("");
    const [showRG, setShowRG] = useState(false);
    const [CPFexiste, setCPFexiste] = useState(false);
    const [showTipo, setShowTipo] = useState(false);
    const [dadosU, setDados] = useState({});


    async function VerifyCPF(cpf: string): Promise<boolean> {
        try {
            console.log('ta indoooo');
            
            const resCPF = await axios.post('http://localhost:3344/user/cpf', { user_CPF: cpf })
            console.log('n foooi');
            console.log(cpf)
            console.log(resCPF.data)
            if (resCPF.data) {
                setCPFexiste(true)
                setShowErrorNum(false)
                setShowErrorCEP(false)
                setShowErrorCPF(false)
                setShowErrorNome(false)
                setShowRG(false)
                setShowErrorData(false)
                console.log(resCPF.data)
                setTimeout(() => {
                    setCPFexiste(false)
                }, 2000);
                return true;
            }
        } catch (error) {
            console.log('CPF TA OK');
            return false;
        }
    }

    function VerifyInputs(cpf: string, name: string, date: string, cep: string, num: string, rg: string): boolean {
        if (date == '' || /^\d{4}-\d{2}-\d{2}$/.test(date) || date.length < 10) {
            setShowErrorData(true)
            setShowErrorNum(false)
            setShowErrorCEP(false)
            setShowErrorCPF(false)
            setShowErrorNome(false)
            setShowRG(false)
            setCPFexiste(false)
            setTimeout(() => {
                setShowErrorData(false)
            }, 2000);
            return true;
        } else if (cpf == '' || cpf.length < 11) {
            setShowErrorCPF(true)
            setShowErrorNum(false)
            setShowErrorCEP(false)
            setShowErrorNome(false)
            setShowRG(false)
            setShowErrorData(false)
            setCPFexiste(false)
            setTimeout(() => {
                setShowErrorCPF(false)
            }, 2000);
            return true;

        } else if (name == '') {
            // Mostra o alerta de erro do nome
            setShowErrorNome(true);
            setShowErrorNum(false);
            setShowErrorCEP(false);
            setShowErrorCPF(false);
            setShowErrorData(false);
            setCPFexiste(false);
            setShowRG(false); // Esconde o alerta de erro do RG (não é necessário)

            setTimeout(() => {
                setShowErrorNome(false); // Esconde o alerta de erro do nome após 2 segundos
            }, 2000);

            return true;
        } else if (rg == '' || rg.length < 8) {
            console.log(rg);

            setShowErrorNum(false);
            setShowErrorCEP(false);
            setShowErrorCPF(false);
            setShowErrorNome(false);
            setShowErrorData(false);
            setCPFexiste(false);
            setShowRG(true);

            setTimeout(() => {
                setShowRG(false); // Esconde o alerta de erro do RG após 2 segundos
            }, 2000);

            return true;

        } else if (num == '') {
            setShowErrorNum(true)
            setShowErrorCEP(false)
            setShowErrorCPF(false)
            setShowErrorNome(false)
            setShowRG(false)
            setShowErrorData(false)
            setCPFexiste(false)
            setTimeout(() => {
                setShowErrorNum(false)
            }, 2000);
            return true;

        } else if (cep == '' || cep.length < 8) {
            setShowErrorCEP(true)
            setShowErrorNum(false)
            setShowErrorCPF(false)
            setShowErrorNome(false)
            setShowRG(false)
            setShowErrorData(false)
            setCPFexiste(false)
            setTimeout(() => {
                setShowErrorCEP(false)
            }, 2000);
            return true;

        } else {
            setShowErrorNum(false)
            setShowErrorCEP(false)
            setShowErrorCPF(false)
            setShowErrorNome(false)
            setShowRG(false)
            setShowErrorData(false)
            setCPFexiste(false)
            return false;
        } 
    }

    const handleclick = async () => {

        interface UserData {
            user_CPF: string;
            user_RG: string;
            user_nome: string;
            user_email: string;
            user_senha: string;
            user_nascimento: string;
            user_endCEP: string;
            user_endUF: string;
            user_endbairro: string;
            user_endrua: string;
            user_endnum: string;
            user_endcomplemento: string;
            user_endcidade: string;
            user_tipo?: string;
            list_CPF_list_id?: string; // O '?' indica que a propriedade é opcional
        }

        const dadosUsuario: UserData = {
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
        };

        const cpfError = await VerifyCPF(cpf);

        if (cpfError) {
            setShowTipo(false); // Há erros, não avança para a próxima etapa
            console.log('travo tudo aqq');
            console.log(dadosUsuario);

            return;
        }

        const inputsError = await VerifyInputs(cpf, name, date, cep, num, rg); // Chama a função diretamente aqui

        if (inputsError) {
            setShowTipo(false); // Há erros, não avança para a próxima etapa
            console.log('travo tudo aqq²');
            console.log(dadosUsuario);

            return ;
        }

        setShowTipo(true);
        setDados(dadosUsuario)
        console.log(dadosU);
        
    }

    React.useEffect(() => {
        // Este efeito será executado sempre que 'dadosU' for atualizado
        console.log(dadosU);
    }, [dadosU]);

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
    {showRG && <RGError />}
    {CPFexiste && <CPFExiste/>}
        {showTipo ? <Tipo dados={dadosU} /> : 
            <Container sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}>
                <Typography sx={{ textAlign: 'center', mb: '30px', color: '#222222', fontSize: '18px', fontWeight: 'bold' }}>
                    Dados Pessoais e Endereço
                </Typography>
                <Typography sx={{ textAlign: 'center', mb: '40px', color: '#444444', fontSize: '15px' }}>
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
                            const {value} = event.target;
                            const newValue2 = value.replace(/\D/g, ''); // remove tudo que não é número
                            setRg(newValue2);}}
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
    }
        </>
)
}

export default CompleteCad
