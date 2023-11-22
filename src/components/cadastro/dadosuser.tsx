import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ModalContext from "../../context/modalcontext";
import { CPFError, DataError, NomeError, NumError, CEPError, RGError, CPFExiste, ErrorCel } from "../errosvalidations";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Tipo from "./tipouser";
import colors from "../../assets/colors";
import CompleteCad2 from "./endereço";
import { Container, FormControl, Input, InputAdornment, InputLabel, Typography } from "@mui/material"
import { Btn } from "../btns";
import { Contacts } from '@mui/icons-material';
import { UserData } from "../interfaces";
import theme from '../../assets/theme';

function CompleteCad() {
    const [cpf, setCpf] = useState("");
    const [cpfR, setCpfR] = useState("");
    const [rg, setRg] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [cel, setCel] = useState("");
    const { cep } = useContext(ModalContext);
    const { UF } = useContext(ModalContext);
    const { district } = useContext(ModalContext);
    const { street } = useContext(ModalContext);
    const { num } = useContext(ModalContext);
    const { comp } = useContext(ModalContext);
    const { city } = useContext(ModalContext);
    const { verify } = React.useContext(ModalContext);
    const { email } = useContext(ModalContext);
    const { password } = useContext(ModalContext);
    const [showErrorCPF, setShowErrorCPF] = useState(false);
    const [showErrorNome, setShowErrorNome] = useState(false);
    const [showErrorData, setShowErrorData] = useState(false);
    const [showErrorCEP, setShowErrorCEP] = useState(false);
    const [showErrorNum, setShowErrorNum] = useState(false);
    const [showRG, setShowRG] = useState(false);
    const [CPFexiste, setCPFexiste] = useState(false);
    const [showTipo, setShowTipo] = useState(false);
    const [dadosU, setDados] = useState<UserData | undefined>(undefined);
    const [showErrorCel, setShowErrorCel] = useState(false);
    const [enviobtn, setEnvioBtn] = useState(false);
    const [menor, setMenor] = useState(false);

    const { breakpoints } = theme;

    const screenSize = {
        xs: window.innerWidth < breakpoints.values.sm ? 'xs' : null,
        sm: window.innerWidth >= breakpoints.values.sm && window.innerWidth < breakpoints.values.md ? 'sm' : null,
        md: window.innerWidth >= breakpoints.values.md && window.innerWidth < breakpoints.values.lg ? 'md' : null,
        lg: window.innerWidth >= breakpoints.values.lg && window.innerWidth < breakpoints.values.xl ? 'lg' : null,
        xl: window.innerWidth >= breakpoints.values.xl ? 'xl' : null,
    };

    const currentScreenSize = Object.values(screenSize).filter(size => size !== null)[0];




    async function ValidaCPF(cpf: string): Promise<boolean> {
        let Soma = 0;
        let Resto;

        if (
            [
                '00000000000',
                '11111111111',
                '22222222222',
                '33333333333',
                '44444444444',
                '55555555555',
                '66666666666',
                '77777777777',
                '88888888888',
                '99999999999',
            ].includes(cpf)
        ) {
            return false;
        }

        for (let i = 1; i <= 9; i++) {
            Soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }

        Resto = (Soma * 10) % 11;

        if (Resto === 10 || Resto === 11) {
            Resto = 0;
        }

        if (Resto !== parseInt(cpf.substring(9, 10))) {
            return false;
        }

        Soma = 0;

        for (let i = 1; i <= 10; i++) {
            Soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }

        Resto = (Soma * 10) % 11;

        if (Resto === 10 || Resto === 11) {
            Resto = 0;
        }

        if (Resto !== parseInt(cpf.substring(10, 11))) {
            return false;
        }

        return true;
    }


    async function VerifyCPF(cpf: string): Promise<boolean> {
        try {
            console.log('CPFAA, ta indoooo');

            const resCPF = await axios.post('https://easypass-iak1.onrender.com/user/cpf', { user_CPF: cpf })
            console.log('CPFAA n foooi');
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
            console.log('CPFAA CPF TA OK');
            const cpfInvalid = await ValidaCPF(cpf)
            console.log('CPFAA', cpfInvalid);

            if (cpfInvalid) {
                return false;
            } else {
                console.log('CPFAA CPF invalido cria');
                return true;
            }
        }
        return true
    }

    async function VerifyInputs(): Promise<boolean> {

        const dataIdade = await validateDate(date)
        if (dataIdade == 'Menor') {
            setMenor(true)
        }

        if (menor && (cpfR == '' || cpfR.length < 11)) {
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
        } else if (date == '' || !dataIdade) {
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
            console.log('ta aq o eror')
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

        } else if (cep === undefined || cep == '' || cep.length < 8 || city == '') {
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

        } else if (cel == '' || cel.length < 11) {
            setShowErrorCEP(false)
            setShowErrorNum(false)
            setShowErrorCPF(false)
            setShowErrorNome(false)
            setShowRG(false)
            setShowErrorData(false)
            setCPFexiste(false)
            setShowErrorCel(true)
            setTimeout(() => {
                setShowErrorCel(false)
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
            setShowErrorCel(false)
            return false;
        }
    }

    const handleclick = async () => {

        const formatdata = handleSubmitData()
        console.log(formatdata);

        const dadosUsuario: UserData = {
            user_CPF: cpf,
            user_RG: rg,
            user_nome: name,
            user_email: email,
            user_senha: password,
            user_nascimento: formatdata,
            user_endCEP: cep,
            user_endUF: UF,
            user_endbairro: district,
            user_endrua: street,
            user_endnum: num,
            user_endcomplemento: comp,
            user_endcidade: city,
            user_tipo: undefined,
            list_CPF_list_id: undefined,
            user_cel: cel,
            user_idcli: undefined,
            user_credit: undefined,
            user_FotoRec: undefined,
            user_RGTras: undefined,
            user_RGFrente: undefined,
            user_status: undefined,
            user_verifycel: undefined,
            user_verifyemail: undefined,
            user_Background: undefined,
            user_CPFR: cpfR
        };

        const inputsError = VerifyInputs(); // Chama a função diretamente aqui

        const cpfError = await VerifyCPF(cpf);
        const cpfErrorR = await VerifyCPF(cpfR);

        if (menor) {
            console.log('erro de cpf', cpfErrorR);
            if (cpfErrorR) {
                setShowTipo(false); // Há erros, não avança para a próxima etapa
                setShowErrorCPF(true)
                setTimeout(() => {
                    setShowErrorCPF(false)
                }, 2000);
                console.log('travo tudo aqq');
                console.log(dadosUsuario);
                return
            }
        }
       
        console.log('erro de cpf', cpfError);
        if (cpfError) {
            setShowTipo(false); // Há erros, não avança para a próxima etapa
            setShowErrorCPF(true)
            setTimeout(() => {
                setShowErrorCPF(false)
            }, 2000);
            console.log('travo tudo aqq');
            console.log(dadosUsuario);
            return
        }

        console.log('Erro dos input:', inputsError)
        if (await inputsError) {
            setShowTipo(false); // Há erros, não avança para a próxima etapa
            console.log('travo tudo aqq²');
            console.log(dadosUsuario);
            return
        } else {
            setShowTipo(true);
            setDados(dadosUsuario)
            console.log(dadosU);
        }
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

    const handleVerifyChange = (value: any) => {
        setEnvioBtn(value);
    };

    console.log(currentScreenSize);
    console.log(enviobtn);

    async function validateDate(dateString: string): Promise<string | boolean> {
        console.log(dateString);

        const [day, month, year] = dateString.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        const dataAtual = new Date();
        const currentYear = dataAtual.getFullYear()
        const currentDay = dataAtual.getDate();
        const currentMonth = dataAtual.getMonth() + 1
        console.debug(date, currentYear, currentMonth, currentDay)
        const minAgeYear = currentYear - 18;
        const isYearGreaterThanMinAgeYear = date.getFullYear() > minAgeYear && date.getFullYear() < currentYear;
        const isYearEqualToCurrentYear = date.getFullYear() === currentYear;
        const isCurrentYearEqualToMinAgeYear = date.getFullYear() === minAgeYear;
        const isCurrentMonthGreaterThanDateMonth = currentMonth < date.getMonth() + 1;
        const isCurrentMonthEqualToDateMonth = currentMonth === date.getMonth() + 1;
        const isCurrentDayLessThanDateDay = currentDay < date.getDate();

        if (
            isYearGreaterThanMinAgeYear ||
            isYearEqualToCurrentYear ||
            (isCurrentYearEqualToMinAgeYear && isCurrentMonthGreaterThanDateMonth) ||
            (isCurrentYearEqualToMinAgeYear && isCurrentMonthEqualToDateMonth && isCurrentDayLessThanDateDay)
        ) {
            return 'Menor';
        } else if (
            month < 1 ||
            month > 12 ||
            day < 1 ||
            day > 31 ||
            year > currentYear
        ) {
            return false
        }

        return true;
    }

    useEffect(() => {
        const a = async () => {
            const dataIdade = await validateDate(date)
            if (dataIdade == 'Menor') {
                setMenor(true)
            }
        }
        a()
    }, [date])

    return (
        <>
            {showErrorCel && <ErrorCel />}
            {showErrorCPF && <CPFError />}
            {showErrorNome && <NomeError />}
            {showErrorData && <DataError />}
            {showErrorCEP && <CEPError />}
            {showErrorNum && <NumError />}
            {showRG && <RGError />}
            {CPFexiste && <CPFExiste />}
            {showTipo ? <Tipo dados={dadosU} /> :
                <Container sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                }}>
                    {currentScreenSize === 'xs' && enviobtn === false ? (
                        <CompleteCad2 screen={currentScreenSize} onVerifyChange={handleVerifyChange} />
                    ) : (
                        <>
                            <Container sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                            }}>
                                <Typography sx={{
                                    textAlign: 'center', mb: '30px', color: verify ? 'white' : '#222222', fontSize: {
                                        xs: '2.5vw',  // (7.5 / 1200) * 600
                                        sm: '2vw',  // (7.5 / 1200) * 900
                                        md: '2vw',  // (7.5 / 1200) * 1200
                                        lg: '1vw',
                                        xl: '1vw',  // Manter o mesmo tamanho de lg para xl
                                    }, fontWeight: 'bold'
                                }}>
                                    Dados Pessoais e Endereço
                                </Typography>
                                <Typography sx={{
                                    textAlign: 'center', mb: 2, color: verify ? 'white' : '#444444', fontSize: {
                                        xs: '2vw',  // (7.5 / 1200) * 600
                                        sm: '1.5vw',  // (7.5 / 1200) * 900
                                        md: '1vw',  // (7.5 / 1200) * 1200
                                        lg: '1vw',
                                        xl: '1vw',  // Manter o mesmo tamanho de lg para xl
                                    },
                                }}>
                                    Coloque o seu CPF e CEP para obter os dados:
                                </Typography>
                                <FormControl variant="standard" sx={{ width: '80%', mb: 2 }}>
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
                                {
                                    menor && (
                                        <FormControl variant="standard" sx={{ width: '80%', mb: 2 }}>
                                            <InputLabel htmlFor="input-with-icon-adornment">
                                                CPF Responsável
                                            </InputLabel>
                                            <Input
                                                id="input-with-icon-adornment"
                                                inputProps={{ maxLength: 11 }}
                                                required
                                                value={cpfR}
                                                placeholder="Insira apenas os números do CPF do responsável"
                                                onChange={(event) => {
                                                    const { value } = event.target;
                                                    const newValue = value.replace(/\D/g, ''); // remove tudo que não é número
                                                    setCpfR(newValue);
                                                }}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <AccountCircleIcon />
                                                    </InputAdornment>
                                                }
                                                sx={{ fontSize: '14px' }}
                                            />
                                        </FormControl>
                                    )
                                }
                                <FormControl variant="standard" sx={{ width: '80%', mb: 2 }}>
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
                                <FormControl variant="standard" sx={{ width: '80%', mb: 2 }}>
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
                                <FormControl variant="standard" sx={{ width: '80%' }}>
                                    <InputLabel htmlFor="input-with-icon-adornment">
                                        Data de Nascimento
                                    </InputLabel>
                                    <Input
                                        inputProps={{ maxLength: 10 }}
                                        required
                                        id="input-with-icon-adornment"
                                        value={date}
                                        placeholder="24-08-2005"
                                        onChange={(event) => setDate(formatDateString(event.target.value))}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <CalendarMonthIcon />
                                            </InputAdornment>
                                        }
                                        sx={{ fontSize: '14px', mb: 2 }}
                                    />
                                </FormControl>
                                <FormControl variant="standard" sx={{ width: '80%', mb: 3 }}>
                                    <InputLabel htmlFor="input-with-icon-adornment">
                                        Número de Celular
                                    </InputLabel>
                                    <Input
                                        inputProps={{ maxLength: 11 }}
                                        required
                                        id="input-with-icon-adornment"
                                        value={cel}
                                        placeholder="24999123456"
                                        onChange={(event) => setCel(event.target.value.replace(/\D/g, ''))}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <Contacts />
                                            </InputAdornment>
                                        }
                                        sx={{ fontSize: '14px', mb: 2 }}
                                    />
                                </FormControl>

                                <Btn name={'Finalizar'} fun={handleclick} cl={verify ? colors.pm : 'white'} route={""} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} vis={undefined} mb={undefined} />
                            </Container>
                            {currentScreenSize !== 'xs' && <CompleteCad2 />}
                        </>
                    )}

                </Container>
            }
        </>
    )
}

export default CompleteCad
